"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase, ChevronDown, Download, MapPin } from "lucide-react";
import { profile } from "@/data/content";

/**
 * Typing effect for the rotating tagline. Types a role, holds,
 * deletes it, then moves to the next. If the user prefers reduced
 * motion, it simply shows the first role without animating.
 */
function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const word = words[wordIndex % words.length];
    let delay;

    if (!deleting && text === word) {
      delay = 2000; // hold the full word
    } else if (deleting && text === "") {
      delay = 400; // pause before the next word
    } else {
      delay = deleting ? 38 : 75;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, reduced]);

  return reduced ? words[0] : text;
}

/** Hero — availability badge, name, typing tagline, intro, and CTAs. */
export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const reduced = useReducedMotion();

  // Staggered entrance. Deliberately CSS-only and transform-only: the hero
  // is fully visible in the server HTML, so it paints before any JavaScript
  // loads. (A JS opacity fade left it blank until hydration finished.)
  const rise = (delay) => ({
    className: "hero-rise",
    style: { animationDelay: `${delay}s` },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-16 sm:px-8"
    >
      {/* Soft warm glows in the background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-amber/20 blur-3xl dark:bg-honey/10" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-terracotta/15 blur-3xl dark:bg-ember/10" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl py-24">
        {/* Availability badge + location */}
        <div
          style={rise(0).style}
          className={`${rise(0).className} mb-6 flex flex-wrap items-center gap-x-5 gap-y-3`}
        >
          {profile.availability && (
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/25 bg-terracotta/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta dark:border-ember/30 dark:bg-ember/10 dark:text-ember">
              {/* Pulsing status dot */}
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-70 dark:bg-ember" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta dark:bg-ember" />
              </span>
              {profile.availability}
            </span>
          )}

          <span className="flex items-center gap-2 text-sm font-medium text-cocoa dark:text-latte">
            <MapPin size={16} className="text-terracotta dark:text-ember" aria-hidden="true" />
            {profile.location}
          </span>

          {/* Which cities you'd work in — recruiters filter on this early */}
          {profile.openToCities?.length > 0 && (
            <span className="flex items-center gap-2 text-sm font-medium text-cocoa dark:text-latte">
              <Briefcase
                size={16}
                className="text-terracotta dark:text-ember"
                aria-hidden="true"
              />
              Open to {profile.openToCities.join(" · ")}
            </span>
          )}
        </div>

        <h1
          style={rise(0.1).style}
          className={`${rise(0.1).className} font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl`}
        >
          {profile.name}
        </h1>

        {/* Rotating / typing tagline */}
        <p
          style={rise(0.2).style}
          className={`${rise(0.2).className} mt-5 min-h-[2.5rem] text-2xl font-medium text-terracotta sm:text-3xl dark:text-ember`}
          aria-label={`Roles: ${profile.roles.join(", ")}`}
        >
          <span aria-hidden="true">
            {typed}
            <span className="animate-pulse font-light text-amber dark:text-honey">|</span>
          </span>
        </p>

        <p
          style={rise(0.3).style}
          className={`${rise(0.3).className} mt-6 max-w-xl text-lg leading-relaxed text-cocoa dark:text-latte`}
        >
          {profile.intro}
        </p>

        {/* CTAs */}
        <div
          style={rise(0.4).style}
          className={`${rise(0.4).className} mt-10 flex flex-wrap items-center gap-4`}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-medium text-cream shadow-soft transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark hover:shadow-lift"
          >
            View My Work
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-linen bg-sand/60 px-7 py-3.5 font-medium transition-all hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta dark:border-bark dark:bg-espresso/60 dark:hover:border-ember dark:hover:text-ember"
          >
            Contact Me
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-cocoa underline-offset-4 transition-colors hover:text-terracotta hover:underline dark:text-latte dark:hover:text-ember"
            >
              <Download size={16} aria-hidden="true" />
              Résumé
            </a>
          )}
        </div>
      </div>

      {/* Scroll cue — gently bobs to hint there's more below */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-cocoa transition-colors hover:text-terracotta sm:block dark:text-latte dark:hover:text-ember"
      >
        <motion.span
          animate={reduced ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown size={26} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
