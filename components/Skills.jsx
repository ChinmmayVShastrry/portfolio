import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups, learning } from "@/data/content";

/** Items as a plain dotted list: easier to scan than a wall of chips. */
function DotList({ items }) {
  return (
    <ul className="flex flex-wrap gap-y-1.5 text-[0.95rem] leading-relaxed text-charcoal dark:text-parchment">
      {items.map((item, i) => (
        <li key={item} className="whitespace-nowrap">
          {item}
          {i < items.length - 1 && (
            <span aria-hidden="true" className="px-2 text-linen dark:text-bark">
              /
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Toolkit — one row per category, then a single line for what's being
 * learned right now. Both lists live in data/content.js
 * (`skillGroups`, `learning`).
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-sand/50 px-5 py-20 sm:px-8 md:py-28 dark:bg-espresso/40"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I work with"
          description="Applied AI and data work, with five years of financial-markets experience behind it."
        />

        <dl className="border-b border-linen dark:border-bark">
          {skillGroups.map((group) => (
            <Reveal
              key={group.title}
              className="grid gap-2 border-t border-linen py-5 md:grid-cols-[15rem_1fr] md:gap-8 dark:border-bark"
            >
              <dt className="text-sm font-semibold text-cocoa dark:text-latte">
                {group.title}
              </dt>
              <dd>
                <DotList items={group.items} />
                {group.note && (
                  <p className="mt-2 text-sm text-cocoa dark:text-latte">{group.note}</p>
                )}
              </dd>
            </Reveal>
          ))}
        </dl>

        {learning?.items?.length > 0 && (
          <Reveal className="mt-8 grid gap-2 md:grid-cols-[15rem_1fr] md:gap-8">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta-dark dark:text-honey">
              <Sparkles size={15} aria-hidden="true" />
              {learning.title}
            </p>
            <div>
              <p className="text-[0.95rem] leading-relaxed text-charcoal dark:text-parchment">
                {learning.items.join(", ")}
              </p>
              {learning.note && (
                <p className="mt-1 text-sm text-cocoa dark:text-latte">{learning.note}</p>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
