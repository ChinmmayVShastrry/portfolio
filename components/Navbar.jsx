"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Navbar — sticky and minimal. Gains a soft blur once the page is
 * scrolled, highlights the section you're reading, and collapses to a
 * menu on phones. All motion is CSS, so it costs nothing to load.
 *
 * `base` prefixes the links, so the same navbar works on sub-pages
 * (e.g. base="/" turns "#projects" into "/#projects").
 */
export default function Navbar({ base = "" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Scroll position drives both the navbar background and the
  // "which section am I in?" highlight (a lightweight scroll-spy).
  useEffect(() => {
    const ids = navLinks.map((link) => link.href.replace("#", ""));
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 16);
      if (base) return; // sub-pages have no sections to track

      // The section whose top has most recently passed the navbar wins.
      const marker = window.scrollY + 140;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      // Near the very bottom, force-select the last link; a short final
      // section can otherwise never become "active".
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;
      setActiveId(atBottom ? ids[ids.length - 1] : current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [base]);

  // Close the mobile menu on Escape, and lock background scrolling
  // while it's open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || menuOpen
          ? "bg-cream/85 shadow-soft backdrop-blur-md dark:bg-night/85"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        {/* Name, back to the top */}
        <a
          href={base ? "/" : "#top"}
          translate="no"
          className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-terracotta-dark dark:hover:text-ember"
        >
          {profile.name}
          <span className="text-terracotta dark:text-ember">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={`${base}${link.href}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-terracotta-dark dark:text-ember"
                    : "text-cocoa hover:text-charcoal dark:text-latte dark:hover:text-parchment"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-terracotta-dark transition-transform duration-300 ease-out dark:bg-ember ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Phones: theme toggle + menu button */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2.5 text-cocoa transition-[color,transform] duration-150 active:scale-95 dark:text-latte"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu. Animates its height with a grid-rows transition and
          is `inert` while closed, so hidden links can't be tabbed to. */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 border-t border-linen px-5 py-4 dark:border-bark">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={`${base}${link.href}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-terracotta/10 text-terracotta-dark dark:bg-ember/10 dark:text-ember"
                      : "text-cocoa hover:bg-sand hover:text-charcoal dark:text-latte dark:hover:bg-espresso dark:hover:text-parchment"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
