import Image from "next/image";
import { ArrowRight, Briefcase, Download, MapPin } from "lucide-react";
import { profile } from "@/data/content";

// Staggered entrance. CSS-only and transform-only: the hero is fully
// visible in the server HTML, so it paints before any JavaScript loads.
const rise = (delay) => ({ animationDelay: `${delay}s` });

/** Availability badge, location and the cities (plus remote) you'd work in. */
function Facts({ className = "" }) {
  const places = [
    ...(profile.openToCities ?? []),
    ...(profile.openToRemote ? ["Remote"] : []),
  ];
  return (
    <div className={className}>
      {profile.availability && (
        <span className="inline-flex items-center gap-2 rounded-2xl border border-terracotta-dark/25 bg-terracotta/10 px-3.5 py-1.5 text-xs font-semibold uppercase leading-snug tracking-wider text-terracotta-dark sm:rounded-full dark:border-ember/30 dark:bg-ember/10 dark:text-ember">
          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 rounded-full bg-terracotta-dark shadow-[0_0_0_3px_rgba(169,78,51,0.18)] dark:bg-ember dark:shadow-[0_0_0_3px_rgba(217,119,87,0.2)]"
          />
          {profile.availability}
        </span>
      )}
      <span className="flex items-center gap-2 text-sm font-medium text-cocoa dark:text-latte">
        <MapPin size={16} className="shrink-0 text-terracotta-dark dark:text-ember" aria-hidden="true" />
        {profile.location}
      </span>
      {places.length > 0 && (
        <span className="flex items-start gap-2 text-sm font-medium text-cocoa dark:text-latte">
          <Briefcase size={16} className="mt-0.5 shrink-0 text-terracotta-dark dark:text-ember" aria-hidden="true" />
          Open to {places.join(" · ")}
        </span>
      )}
    </div>
  );
}

/**
 * Hero — name, role line, intro, a dated "Now" line and the calls to
 * action, with the portrait alongside. Server-rendered with no client
 * JavaScript at all, which keeps the first paint fast on phones.
 *
 * On a phone the portrait sits large beside the key facts, and the
 * buttons are meant to land on the first screen.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-14 pt-24 sm:px-8 sm:pb-20 md:pt-36 lg:flex lg:min-h-[100dvh] lg:items-center lg:pb-24"
    >
      {/* Warm glows. Radial gradients rather than blurred circles: they
          look the same and cost almost nothing to paint. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_30rem_at_85%_-5%,rgba(217,154,78,0.20),transparent_70%),radial-gradient(36rem_30rem_at_-10%_105%,rgba(194,94,64,0.13),transparent_70%)] dark:bg-[radial-gradient(40rem_30rem_at_85%_-5%,rgba(228,178,105,0.09),transparent_70%),radial-gradient(36rem_30rem_at_-10%_105%,rgba(217,119,87,0.09),transparent_70%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          {/* Phones and tablets: a large portrait beside the key facts */}
          <div
            style={rise(0)}
            className="hero-rise mb-7 flex items-start gap-4 sm:gap-6 lg:hidden"
          >
            <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-2xl shadow-lift sm:w-52">
              <Image
                src={profile.photo}
                alt={profile.photoAlt}
                fill
                priority
                sizes="(min-width: 640px) 208px, 160px"
                className="object-cover object-top"
              />
            </div>
            <Facts className="flex min-w-0 flex-col items-start gap-3 pt-1" />
          </div>

          {/* Desktop: the facts as a row above the name */}
          <Facts className="hero-rise mb-6 hidden flex-wrap items-center gap-x-5 gap-y-3 lg:flex" />

          <h1
            translate="no"
            style={rise(0.08)}
            className="hero-rise font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl"
          >
            {profile.name}
          </h1>

          <p
            style={rise(0.16)}
            className="hero-rise mt-4 text-lg font-medium text-terracotta-dark sm:mt-5 sm:text-xl dark:text-ember"
          >
            {profile.roles.join(" · ")}
          </p>

          {/* A shorter intro on phones keeps the buttons on the first screen */}
          <p
            style={rise(0.24)}
            className="hero-rise mt-4 max-w-xl text-lg leading-relaxed text-cocoa sm:hidden dark:text-latte"
          >
            {profile.introShort ?? profile.intro}
          </p>
          <p
            style={rise(0.24)}
            className="hero-rise mt-5 hidden max-w-xl text-lg leading-relaxed text-cocoa sm:block dark:text-latte"
          >
            {profile.intro}
          </p>

          {profile.now && (
            <p
              style={rise(0.3)}
              className="hero-rise mt-6 hidden max-w-xl border-l-2 border-amber pl-4 text-sm leading-relaxed text-cocoa sm:block dark:border-honey dark:text-latte"
            >
              <span className="font-semibold text-charcoal dark:text-parchment">Now</span>{" "}
              ({profile.now.date}): {profile.now.text}
            </p>
          )}

          <div
            style={rise(0.36)}
            className="hero-rise mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
          >
            <a href="#projects" className="btn-primary group">
              See my work
              <ArrowRight
                size={18}
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-cocoa underline-offset-4 transition-colors hover:text-terracotta-dark hover:underline dark:text-latte dark:hover:text-ember"
              >
                <Download size={16} aria-hidden="true" />
                Résumé (PDF)
              </a>
            )}
          </div>
        </div>

        {/* Large portrait, desktop only */}
        <div className="hero-rise relative hidden lg:block" style={rise(0.12)}>
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-2 rounded-[2rem] bg-amber/25 dark:bg-honey/15"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-lift">
            <Image
              src={profile.photo}
              alt={profile.photoAlt}
              fill
              loading="lazy"
              sizes="420px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
