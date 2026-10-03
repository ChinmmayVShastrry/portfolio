"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — shared scroll-triggered entrance animation.
 *
 * Built on CSS rather than a JS animation library, because the failure
 * mode matters: if a JS animation never runs, the content stays invisible
 * forever. Here the visible state is the default and hiding is opt-in,
 * so content can only ever fail *visible*.
 *
 *   • No JavaScript at all → the `.js-ready` class is never added,
 *     so nothing is ever hidden.
 *   • JavaScript running → elements start hidden and are revealed by
 *     one IntersectionObserver shared by every Reveal on the page.
 *   • Observer misses an element → a throttled scroll check, a timer,
 *     and visibility/pageshow events re-check position and reveal it.
 *
 * One observer and one set of listeners for the whole page (rather than
 * one per element) keeps scrolling cheap on phones.
 *
 * The actual styles live in app/globals.css under `[data-reveal]`.
 */

const pending = new Map(); // element -> reveal callback
let observer = null;
let timer = 0;
let lastCheck = 0;

function checkPositions() {
  lastCheck = performance.now();
  const viewport = window.innerHeight;
  for (const [el, reveal] of pending) {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewport * 1.1 && rect.bottom > 0) reveal();
  }
}

function onScroll() {
  // The observer handles the normal case; this is only a safety net.
  if (performance.now() - lastCheck > 250) checkPositions();
}

function startListening() {
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("pageshow", checkPositions);
  document.addEventListener("visibilitychange", checkPositions);
  timer = window.setTimeout(checkPositions, 600);
}

function stopListening() {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("pageshow", checkPositions);
  document.removeEventListener("visibilitychange", checkPositions);
  window.clearTimeout(timer);
}

function register(el, reveal) {
  if (pending.size === 0) startListening();
  pending.set(el, reveal);
  if (typeof IntersectionObserver !== "undefined") {
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) pending.get(entry.target)?.();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
  }
}

function unregister(el) {
  if (!pending.delete(el)) return;
  observer?.unobserve(el);
  if (pending.size === 0) stopListening();
}

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
    register(el, () => {
      setShown(true);
      unregister(el);
    });
    return () => unregister(el);
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
