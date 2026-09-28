"use client";

import { useEffect, useRef, useState } from "react";

/**
 * LoopVideo — a short, silent screen recording that plays like a GIF
 * (a fraction of the file size). Visitors who prefer reduced motion get
 * it paused on the first frame with normal controls instead.
 */
export default function LoopVideo({ src, poster, width, height, label }) {
  const ref = useRef(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      ref.current?.pause();
    }
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      aria-label={label}
      autoPlay={!reduced}
      controls={reduced}
      muted
      loop
      playsInline
      preload="metadata"
      className="h-auto w-full"
    />
  );
}
