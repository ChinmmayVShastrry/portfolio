"use client";

import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services, skillGroups, learning } from "@/data/content";

/** A single chip. `muted` styles the "currently learning" variant. */
function Chip({ label, muted = false }) {
  return (
    <li
      className={
        muted
          ? "rounded-full border border-dashed border-brown/40 bg-transparent px-3.5 py-1.5 text-sm font-medium text-cocoa transition-colors hover:border-amber hover:text-charcoal dark:border-latte/30 dark:text-latte dark:hover:border-honey dark:hover:text-parchment"
          : "rounded-full border border-linen bg-cream px-3.5 py-1.5 text-sm font-medium text-cocoa transition-colors hover:border-amber hover:text-charcoal dark:border-bark dark:bg-night dark:text-latte dark:hover:border-honey dark:hover:text-parchment"
      }
    >
      {label}
    </li>
  );
}

/**
 * Skills / "What I Do" — service cards describing the work, followed
 * by the toolkit grouped by category, and a clearly-separated
 * "currently growing into" group.
 *
 * All three lists live in data/content.js (`services`, `skillGroups`,
 * `learning`).
 */
export default function Skills() {
  return (
    <section id="skills" className="bg-sand/50 px-5 py-24 sm:px-8 dark:bg-espresso/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Where finance meets AI"
          description="Applied AI and data work, with five years of financial-markets experience behind it."
        />

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={0.08 * (i % 3)}>
                <div className="group h-full rounded-3xl border border-linen bg-cream p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift dark:border-bark dark:bg-night">
                  <div className="mb-5 inline-flex rounded-2xl bg-terracotta/10 p-3.5 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-cream dark:bg-ember/15 dark:text-ember dark:group-hover:bg-ember dark:group-hover:text-night">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cocoa dark:text-latte">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Toolkit, grouped by category */}
        <Reveal delay={0.1} className="mt-16">
          <h3 className="mb-8 text-center font-display text-2xl font-semibold">
            The toolkit
          </h3>
        </Reveal>

        {/* Masonry columns rather than a grid: groups vary a lot in size
            (5 tags vs 16), and a grid stretched the small ones into
            mostly-empty boxes to match their row. */}
        <div className="gap-6 md:columns-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={0.06 * (i % 2)}
              className="mb-6 break-inside-avoid"
            >
              <div className="rounded-3xl border border-linen bg-cream/70 p-6 dark:border-bark dark:bg-night/50">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-terracotta dark:text-ember">
                  {group.title}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item} label={item} />
                  ))}
                </ul>
                {group.note && (
                  <p className="mt-4 text-xs leading-relaxed text-cocoa/80 dark:text-latte/80">
                    {group.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Currently learning — deliberately styled apart from the above */}
        {learning?.items?.length > 0 && (
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-dashed border-amber/50 bg-amber/5 p-6 dark:border-honey/40 dark:bg-honey/5">
              <h4 className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-brown dark:text-honey">
                <Sparkles size={15} aria-hidden="true" />
                {learning.title}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {learning.items.map((item) => (
                  <Chip key={item} label={item} muted />
                ))}
              </ul>
              {learning.note && (
                <p className="mt-4 text-xs leading-relaxed text-cocoa/80 dark:text-latte/80">
                  {learning.note}
                </p>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
