"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * ThemeToggle — switches the `dark` class on <html> and persists
 * the choice to localStorage. The inline script in app/layout.js
 * applies the saved theme before first paint, so there's no flash.
 */
export default function ThemeToggle() {
  // `mounted` avoids a hydration mismatch: the server doesn't know
  // the user's theme, so we render a neutral placeholder until the
  // component mounts on the client.
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      /* private browsing — ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full p-3 text-cocoa transition-colors hover:bg-sand hover:text-terracotta dark:text-latte dark:hover:bg-espresso dark:hover:text-honey"
    >
      {mounted && isDark ? (
        <Sun size={20} aria-hidden="true" />
      ) : (
        <Moon size={20} aria-hidden="true" />
      )}
    </button>
  );
}
