"use client";

import { useEffect, useState } from "react";
import { Download, Mail, Send } from "lucide-react";

/**
 * MobileBar — a slim action bar pinned to the bottom of the screen on
 * phones, so the résumé, email and contact form are always one tap away.
 * It stays hidden through the hero (which already has the same buttons)
 * and again once the contact section is on screen.
 */
export default function MobileBar({ resumeUrl, email }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const contact = document.getElementById("contact");
      const nearContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.75
        : false;
      setShow(window.scrollY > window.innerHeight * 0.7 && !nearContact);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const item =
    "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full text-sm font-medium transition-transform duration-150 active:scale-[0.97]";

  return (
    <div
      inert={!show}
      aria-label="Quick actions"
      role="region"
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-linen bg-cream/90 px-4 pt-3 backdrop-blur-md transition-transform duration-300 ease-out md:hidden dark:border-bark dark:bg-night/90 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2">
        {resumeUrl && (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener"
            className={`${item} border border-linen bg-sand/70 text-charcoal dark:border-bark dark:bg-espresso dark:text-parchment`}
          >
            <Download size={16} aria-hidden="true" />
            Résumé
          </a>
        )}
        <a
          href={`mailto:${email}`}
          className={`${item} border border-linen bg-sand/70 text-charcoal dark:border-bark dark:bg-espresso dark:text-parchment`}
        >
          <Mail size={16} aria-hidden="true" />
          Email
        </a>
        <a
          href="/#contact"
          className={`${item} bg-terracotta-dark text-cream dark:bg-ember dark:text-night`}
        >
          <Send size={16} aria-hidden="true" />
          Message
        </a>
      </div>
    </div>
  );
}
