import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import Expandable from "@/components/Expandable";
import SectionHeading from "@/components/SectionHeading";
import { timeline, journeyStory, learningCluster } from "@/data/content";

const types = {
  work: { icon: Briefcase, label: "Work" },
  education: { icon: GraduationCap, label: "Education" },
};

/** A photo in a soft frame with a caption. */
function Photo({ photo, sizes, className = "" }) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden rounded-2xl border border-linen bg-sand shadow-soft dark:border-bark dark:bg-espresso">
        {photo.banner ? (
          // Very wide on a desktop; on a phone it is cropped to 4:3 so the
          // faces stay big enough to see.
          <div className="relative aspect-[4/3] md:aspect-[1800/815]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </div>
        ) : (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={sizes}
            className="h-auto w-full"
          />
        )}
      </div>
      <figcaption className="mt-2.5 text-sm text-cocoa dark:text-latte">
        {photo.caption}
      </figcaption>
    </figure>
  );
}

/**
 * Journey — a three-step story strip, a short timeline where each entry
 * leads with one outcome line, and a compact cluster for courses and
 * degrees. Entries may carry photos (see `timeline` in data/content.js).
 */
export default function Experience() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience and education"
          description="How I got from managing portfolios to building AI systems."
        />

        {/* Story strip */}
        <Reveal as="ol" className="mb-14 grid gap-px overflow-hidden rounded-2xl border border-linen bg-linen md:grid-cols-3 dark:border-bark dark:bg-bark">
          {journeyStory.map((step, i) => (
            <li key={step.label} className="bg-cream p-5 dark:bg-night">
              <p className="tabular text-xs font-semibold uppercase tracking-wider text-terracotta-dark dark:text-ember">
                {i + 1}. {step.when}
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold">{step.label}</p>
              <p className="mt-0.5 text-sm text-cocoa dark:text-latte">{step.note}</p>
            </li>
          ))}
        </Reveal>

        <ol className="border-b border-linen dark:border-bark">
          {timeline.map((entry, i) => {
            const type = types[entry.type] ?? types.work;
            const Icon = type.icon;
            const side = entry.photos?.filter((p) => !p.banner) ?? [];
            const banners = entry.photos?.filter((p) => p.banner) ?? [];
            return (
              <Reveal
                as="li"
                key={`${entry.title}-${entry.period}`}
                delay={0.04 * i}
                className="grid gap-3 border-t border-linen py-8 md:grid-cols-[15rem_1fr] md:gap-x-8 dark:border-bark"
              >
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1.5">
                  <p className="tabular text-sm font-semibold text-charcoal dark:text-parchment">
                    {entry.period}
                  </p>
                  <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-cocoa dark:text-latte">
                    <Icon size={13} aria-hidden="true" />
                    {type.label}
                  </p>
                </div>

                <div className="max-w-[65ch]">
                  <h3 className="font-display text-xl font-semibold">{entry.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-terracotta-dark dark:text-ember">
                    {entry.org} · {entry.location}
                  </p>
                  {entry.highlight && (
                    <p className="mt-3 font-medium leading-snug text-charcoal dark:text-parchment">
                      {entry.highlight}
                    </p>
                  )}
                  <Expandable
                    lines={3}
                    className="mt-2 leading-relaxed text-cocoa dark:text-latte"
                  >
                    {entry.description}
                  </Expandable>
                  {side.map((photo) => (
                    <Photo
                      key={photo.src}
                      photo={photo}
                      sizes="(min-width: 768px) 440px, 100vw"
                      className="mt-6 max-w-md"
                    />
                  ))}
                </div>

                {banners.map((photo) => (
                  <Photo
                    key={photo.src}
                    photo={photo}
                    sizes="(min-width: 1152px) 1088px, 100vw"
                    className="mt-4 md:col-span-2"
                  />
                ))}
              </Reveal>
            );
          })}
        </ol>

        {/* Courses and degrees, compact */}
        <Reveal className="mt-12">
          <h3 className="font-display text-2xl font-semibold">{learningCluster.title}</h3>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {learningCluster.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-linen bg-sand/50 p-5 dark:border-bark dark:bg-espresso/40"
              >
                <p className="tabular text-xs font-semibold uppercase tracking-wider text-cocoa dark:text-latte">
                  {item.period}
                </p>
                <p className="mt-1.5 font-display text-lg font-semibold leading-snug">
                  {item.title}
                </p>
                <p className="mt-0.5 text-sm font-medium text-terracotta-dark dark:text-ember">
                  {item.org}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cocoa dark:text-latte">
                  {item.note}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
