import Reveal from "@/components/Reveal";
import Expandable from "@/components/Expandable";
import SectionHeading from "@/components/SectionHeading";
import { whyHireMe } from "@/data/content";

/**
 * WhyHireMe — the straight pitch, as a numbered list rather than a grid
 * of cards. Content lives in `whyHireMe` in data/content.js.
 */
export default function WhyHireMe() {
  if (!whyHireMe?.reasons?.length) return null;

  return (
    <section id="why" className="px-5 py-16 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={whyHireMe.eyebrow}
          title={whyHireMe.title}
          description={whyHireMe.blurb}
        />

        <ol className="grid gap-x-14 md:grid-cols-2">
          {whyHireMe.reasons.map((reason, i) => (
            <Reveal
              as="li"
              key={reason.title}
              delay={0.06 * (i % 2)}
              className="grid grid-cols-[2.75rem_1fr] border-t border-linen py-7 dark:border-bark"
            >
              <span
                aria-hidden="true"
                className="tabular pt-1 font-display text-lg font-semibold text-terracotta dark:text-ember"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold leading-snug">
                  {reason.title}
                </h3>
                <Expandable lines={3} className="mt-2.5 leading-relaxed text-cocoa dark:text-latte">
                  {reason.body}
                </Expandable>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
