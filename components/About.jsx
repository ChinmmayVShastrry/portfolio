import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/CountUp";
import { about } from "@/data/content";

/** About — two paragraphs of story and a row of quick facts. */
export default function About() {
  return (
    <section
      id="about"
      className="bg-sand/50 px-5 py-20 sm:px-8 md:py-28 dark:bg-espresso/40"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <SectionHeading eyebrow="About" title={about.title} className="md:sticky md:top-28" />
        </div>

        <div className="md:col-span-8">
          {about.bio.map((paragraph, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p className="mb-6 max-w-[65ch] text-lg leading-relaxed text-cocoa dark:text-latte">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <dl className="mt-10 grid grid-cols-2 border-t border-linen sm:grid-cols-4 dark:border-bark">
              {about.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col pr-4 pt-5">
                  <dt className="order-2 mt-1 text-sm leading-snug text-cocoa dark:text-latte">
                    {stat.label}
                  </dt>
                  <dd className="tabular font-display text-4xl font-semibold text-terracotta dark:text-ember">
                    <CountUp value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
