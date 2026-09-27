"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/CountUp";
import { about, profile } from "@/data/content";

/** About — photo, bio paragraphs, and a quick-facts stat grid. */
export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          // Non-breaking spaces keep the name on one line, so the heading
          // wraps as "A little about / Chinmmay V Shastrry" and never
          // splits the name itself.
          title={`A little about ${profile.name.replace(/ /g, " ")}`}
        />

        <div className="grid items-center gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
          {/* Photo with a warm offset frame behind it */}
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-2 rounded-[2rem] bg-amber/25 dark:bg-honey/15"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src={about.photo}
                alt={about.photoAlt}
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          {/* Bio + stats */}
          <div>
            {about.bio.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p className="mb-5 text-lg leading-relaxed text-cocoa dark:text-latte">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col rounded-2xl border border-linen bg-sand/60 p-4 text-center transition-transform hover:-translate-y-1 dark:border-bark dark:bg-espresso/60"
                  >
                    <dt className="order-2 mt-1 block text-xs leading-snug text-cocoa dark:text-latte">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-3xl font-semibold text-terracotta dark:text-ember">
                      <CountUp value={stat.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
