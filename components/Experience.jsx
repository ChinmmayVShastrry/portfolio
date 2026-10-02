import Image from "next/image";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/data/content";

const types = {
  work: { icon: Briefcase, label: "Work" },
  education: { icon: GraduationCap, label: "Education" },
  certification: { icon: Award, label: "Certification" },
};

/**
 * Experience — a plain timeline: dates down the left, the entry on the
 * right, a hairline between each. The icon comes from each entry's
 * `type` field in data/content.js.
 */
export default function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience and education"
          description="How I got from managing portfolios to building AI systems."
        />

        <ol className="border-b border-linen dark:border-bark">
          {timeline.map((entry, i) => {
            const type = types[entry.type] ?? types.work;
            const Icon = type.icon;
            return (
              <Reveal
                as="li"
                key={`${entry.title}-${entry.period}`}
                delay={0.04 * i}
                className="grid gap-3 border-t border-linen py-7 md:grid-cols-[15rem_1fr] md:gap-8 dark:border-bark"
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
                  <p className="mt-3 leading-relaxed text-cocoa dark:text-latte">
                    {entry.description}
                  </p>
                  {entry.photo && (
                    <Image
                      src={entry.photo}
                      alt={entry.photoAlt ?? ""}
                      width={640}
                      height={427}
                      sizes="(min-width: 768px) 420px, 100vw"
                      className="mt-5 h-auto w-full max-w-md rounded-2xl shadow-soft"
                    />
                  )}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
