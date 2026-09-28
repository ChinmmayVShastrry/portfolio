/**
 * ────────────────────────────────────────────────────────────────
 *  WARM PALETTE — exact hex codes used across the site
 * ────────────────────────────────────────────────────────────────
 *  LIGHT MODE
 *    cream        #FAF5EE   page background (warm off-white)
 *    sand         #F3EBDF   card / surface background
 *    linen        #E7DCCB   borders & dividers
 *    charcoal     #38312A   primary text (deep warm charcoal — not pure black)
 *    cocoa        #6E6257   secondary / muted text
 *
 *  ACCENTS (shared)
 *    terracotta   #C25E40   primary accent — buttons, links, highlights
 *    terracotta-dark #A94E33  button hover state
 *    amber        #D99A4E   secondary accent — tags, small highlights
 *    brown        #8A6F5C   soft brown — icons, subtle details
 *
 *  DARK MODE (warm dark — no pure black)
 *    night        #211A14   page background (deep warm brown)
 *    espresso     #2B221B   card / surface background
 *    bark         #3E332A   borders & dividers
 *    parchment    #EFE6DA   primary text (warm off-white)
 *    latte        #B5A798   secondary / muted text
 *    ember        #D97757   terracotta re-tuned for dark backgrounds
 *    honey        #E4B269   amber re-tuned for dark backgrounds
 * ────────────────────────────────────────────────────────────────
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  // Dark mode is toggled by adding/removing the `dark` class on <html>
  // (see components/ThemeToggle.jsx and the inline script in app/layout.js)
  darkMode: "class",
  // Hover styles only apply on devices that can actually hover, so a tap
  // on a phone doesn't leave a card stuck in its lifted state.
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        cream: "#FAF5EE",
        sand: "#F3EBDF",
        linen: "#E7DCCB",
        charcoal: "#38312A",
        cocoa: "#6E6257",
        terracotta: {
          DEFAULT: "#C25E40",
          dark: "#A94E33",
        },
        amber: {
          DEFAULT: "#D99A4E",
        },
        brown: "#8A6F5C",
        night: "#211A14",
        espresso: "#2B221B",
        bark: "#3E332A",
        parchment: "#EFE6DA",
        latte: "#B5A798",
        ember: "#D97757",
        honey: "#E4B269",
      },
      fontFamily: {
        // Wired to next/font in app/layout.js
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 16px rgba(56, 49, 42, 0.07)",
        lift: "0 14px 34px rgba(56, 49, 42, 0.14)",
      },
      transitionTimingFunction: {
        // Strong ease-out: responds instantly, settles gently
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [],
};
