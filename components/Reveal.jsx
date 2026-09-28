"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — shared scroll-triggered entrance animation.
 *
 * Deliberately built on CSS rather than a JS animation library, because
 * the failure mode matters: if a JS animation never runs, the content
 * stays invisible forever. Here the visible state is the default and
 * hiding is opt-in, so content can only ever fail *visible*.
 *
 *   • No JavaScript at all → the `.js-ready` class is never added,
 *     so nothing is ever hidden.
 *   • JavaScript running → elements start hidden and are revealed by
 *     an IntersectionObserver.
 *   • Observer misses the element → a scroll listener and a 600ms
 *     timer both re-check position and reveal it.
 *
 * The actual styles live in app/globals.css under `[data-reveal]`.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    let observer;

    const reveal = () => {
      setShown(true);
      cleanup();
    };

    // Reveal anything on screen, or just below the fold
    const checkPosition = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.1 && rect.bottom > 0) reveal();
    };

    function cleanup() {
      observer?.disconnect();
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("pageshow", checkPosition);
      document.removeEventListener("visibilitychange", checkPosition);
      clearTimeout(timer);
    }

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) reveal();
        },
        { threshold: 0.08 }
      );
      observer.observe(el);
    }

    window.addEventListener("scroll", checkPosition, { passive: true });
    // Background tabs throttle timers and observers, so re-check whenever
    // the page becomes visible again or is restored from the back/forward cache
    document.addEventListener("visibilitychange", checkPosition);
    window.addEventListener("pageshow", checkPosition);
    const timer = setTimeout(checkPosition, 600);

    return cleanup;
  }, [shown]);

  // `as` lets a list item reveal itself (<Reveal as="li">), so lists stay
  // valid HTML instead of having a <div> between the <ol> and its items.
  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-shown={shown ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px` }}
      className={className}
    >
      {children}
    </Tag>
  );
}
