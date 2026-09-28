import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/content";

/**
 * Testimonials — simple three-up quote grid.
 * (A grid was chosen over a carousel: it's lighter, needs no JS
 * controls, and every quote is visible without interaction.)
 *
 * Set `testimonials = []` in data/content.js to hide this
 * section entirely.
 */
export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Kind words"
          title="What people say"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.quote} delay={0.08 * i} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-linen bg-sand/60 p-7 transition-transform hover:-translate-y-1 dark:border-bark dark:bg-espresso/60">
                <Quote
                  size={28}
                  className="mb-4 text-brown dark:text-honey"
                  aria-hidden="true"
                />
                <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-cocoa dark:text-latte">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-linen pt-4 dark:border-bark">
                  <p className="font-display font-semibold">{item.name}</p>
                  <p className="text-xs text-cocoa dark:text-latte">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
