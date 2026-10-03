import { Music4 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { beyondWork } from "@/data/content";

/**
 * BeyondWork — the music section. Deliberately short and placed late,
 * after the technical case has been made.
 *
 * Stats are plain values rather than CountUp, because the age range
 * ("4–65") isn't a single number to animate.
 *
 * Hidden entirely when `beyondWork` is null in data/content.js.
 */
export default function BeyondWork() {
  if (!beyondWork?.paragraphs?.length) return null;

  return (
    <section
      id="beyond"
      className="bg-sand/50 px-5 py-16 sm:px-8 md:py-28 dark:bg-espresso/40"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <span
              aria-hidden="true"
              className="mb-5 inline-flex rounded-xl bg-terracotta/10 p-3 text-terracotta-dark dark:bg-ember/15 dark:text-ember"
            >
              <Music4 size={22} />
            </span>
          </Reveal>
          <SectionHeading eyebrow={beyondWork.eyebrow} title={beyondWork.title} className="" />
        </div>

        <div className="md:col-span-8">
          {beyondWork.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p className="mb-6 max-w-[65ch] text-lg leading-relaxed text-cocoa dark:text-latte">
                {paragraph}
              </p>
            </Reveal>
          ))}

          {beyondWork.stats?.length > 0 && (
            <Reveal delay={0.16}>
              <dl className="mt-4 grid grid-cols-3 border-t border-linen dark:border-bark">
                {beyondWork.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col pr-4 pt-5">
                    <dt className="order-2 mt-1 text-sm leading-snug text-cocoa dark:text-latte">
                      {stat.label}
                    </dt>
                    <dd className="tabular font-display text-3xl font-semibold text-terracotta sm:text-4xl dark:text-ember">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
