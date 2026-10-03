"use client";

import { useEffect, useRef, useState } from "react";

// Tailwind needs complete class names, so the line counts are spelled out.
const clamps = {
  2: "line-clamp-2 md:line-clamp-none",
  3: "line-clamp-3 md:line-clamp-none",
  4: "line-clamp-4 md:line-clamp-none",
  5: "line-clamp-5 md:line-clamp-none",
};

/**
 * Expandable — on phones, long text is cut to a few lines with a
 * "Read more" button; from the md breakpoint up it always shows in full.
 *
 * Fails visible: the text renders in full from the server, and is only
 * clamped once JavaScript has mounted and can offer the button. The button
 * appears only when the text actually overflows.
 */
export default function Expandable({ children, lines = 4, className = "" }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [canToggle, setCanToggle] = useState(false);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    const el = ref.current;
    if (!ready || !el) return;
    const check = () => {
      // Measure only while collapsed, otherwise there is nothing to compare.
      if (!open) setCanToggle(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [ready, open]);

  const clamped = ready && !open;

  return (
    <div>
      <p ref={ref} className={`${className} ${clamped ? clamps[lines] : ""}`}>
        {children}
      </p>
      {ready && canToggle && (
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-link -ml-1 mt-1 min-h-11 px-1 text-sm md:hidden"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
