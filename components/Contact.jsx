"use client";

import { useState } from "react";
import { Send, LoaderCircle, CheckCircle2, AlertCircle, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { contact, profile } from "@/data/content";

const inputClasses =
  "w-full rounded-2xl border border-linen bg-cream px-4 py-3 text-base text-charcoal placeholder:text-cocoa/70 transition-[border-color,box-shadow] duration-200 focus:border-terracotta-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-terracotta-dark/15 sm:text-sm dark:border-bark dark:bg-night dark:text-parchment dark:placeholder:text-latte/50 dark:focus:border-ember dark:focus-visible:ring-ember/20";

/**
 * Contact — Formspree-powered static form + social links.
 *
 * The form needs a (free) Formspree form ID to work — set
 * `contact.formspreeId` in data/content.js. Until then, submitting
 * shows a friendly reminder instead of failing silently.
 */
export default function Contact() {
  // idle | sending | success | error | unconfigured
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!contact.formspreeId) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(
        `https://formspree.io/f/${contact.formspreeId}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(event.target),
        }
      );
      if (response.ok) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title={contact.headline}
          description={contact.blurb}
        />

        <div className="grid gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
          {/* Left: direct email + socials */}
          <Reveal>
            <h3 className="font-display text-xl font-semibold">
              Reach out directly
            </h3>
            <a
              href={`mailto:${profile.email}`}
              className="text-link mt-2 text-lg"
            >
              {profile.email}
            </a>

            {/* Repeated from the hero on purpose — location is often the
                first thing a recruiter checks, and not everyone scrolls. */}
            {profile.openToCities?.length > 0 && (
              <>
                <h3 className="mt-10 font-display text-xl font-semibold">
                  Where I can work
                </h3>
                <p className="mt-2 inline-flex items-center gap-2 text-cocoa dark:text-latte">
                  <MapPin
                    size={17}
                    className="shrink-0 text-terracotta-dark dark:text-ember"
                    aria-hidden="true"
                  />
                  Open to roles in{" "}
                  {profile.openToCities.length > 1
                    ? `${profile.openToCities
                        .slice(0, -1)
                        .join(", ")} and ${profile.openToCities.at(-1)}`
                    : profile.openToCities[0]}
                  {profile.openToRemote ? ", and remote" : ""}.
                </p>
              </>
            )}

            <h3 className="mt-10 font-display text-xl font-semibold">
              Elsewhere on the internet
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {contact.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-cocoa transition-colors hover:text-terracotta-dark dark:text-latte dark:hover:text-ember"
                    >
                      <span className="rounded-xl border border-linen bg-sand/60 p-2.5 transition-[transform,border-color] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:border-terracotta-dark dark:border-bark dark:bg-espresso dark:group-hover:border-ember">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Right: the form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-linen bg-sand/60 p-6 shadow-soft sm:p-9 dark:border-bark dark:bg-espresso"
              aria-label="Contact form"
            >
              {/* Formspree reads this to set the subject of the email it
                  sends you, so messages don't all arrive titled the same. */}
              <input
                type="hidden"
                name="_subject"
                value="New message from your portfolio"
              />
              {/* Formspree honeypot: bots fill in every field they find,
                  people never see this one. Anything submitted with it
                  filled is discarded silently. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    spellCheck={false}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="The role, the team, or the problem you're working on…"
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-6 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    Send message
                  </>
                )}
              </button>

              {/* Submission feedback — polite live region for screen readers */}
              <div aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm">
                {status === "success" && (
                  <p className="inline-flex items-center gap-2 font-medium text-terracotta-dark dark:text-ember">
                    <CheckCircle2 size={16} aria-hidden="true" />
                    Thanks. Your message is on its way.
                  </p>
                )}
                {status === "error" && (
                  <p className="inline-flex items-center gap-2 font-medium text-terracotta-dark dark:text-honey">
                    <AlertCircle size={16} aria-hidden="true" />
                    That didn't send. Please try again, or email me directly.
                  </p>
                )}
                {status === "unconfigured" && (
                  <p className="inline-flex items-center gap-2 font-medium text-terracotta-dark dark:text-honey">
                    <AlertCircle size={16} aria-hidden="true" />
                    Form not configured yet. Add your Formspree ID in
                    data/content.js.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
