"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates a stat upward the first time it scrolls into view.
 *
 * Accepts values that carry a prefix or suffix ("5+", "~10", "50%")
 * and animates only the numeric part. The server renders the final
 * value, so it's correct before JavaScript and for screen readers; the
 * count only starts from zero once the stat is about to come on screen.
 * Reduced-motion visitors always see the final value.
 */
export default function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null);

  // Split "50+" → prefix "", number "50", suffix "+"
  const parts = String(value).match(/^(\D*?)(\d[\d,.]*)(.*)$/);
  const prefix = parts ? parts[1] : "";
  const target = parts ? parseFloat(parts[2].replace(/,/g, "")) : null;
  const suffix = parts ? parts[3] : "";

  const [display, setDisplay] = useState(String(value));

  useEffect(() => {
    const el = ref.current;
    if (target === null || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    // Already on screen at load: leave the final value alone.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    let frame;
    setDisplay(`${prefix}0${suffix}`);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
          setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, prefix, suffix, duration]);

  // Screen readers get the real value once, not every animation frame.
  return (
    <span ref={ref}>
      <span className="sr-only">{String(value)}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
