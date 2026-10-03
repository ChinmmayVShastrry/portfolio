import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SkillRow from "@/components/SkillRow";
import { skillGroups, learning } from "@/data/content";

/**
 * Toolkit — one row per category, then a single line for what's being
 * learned right now. Both lists live in data/content.js
 * (`skillGroups`, `learning`). On phones the rows fold away (see SkillRow).
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-sand/50 px-5 py-16 sm:px-8 md:py-28 dark:bg-espresso/40"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I work with"
          description="Applied AI and data work, with five years of financial-markets experience behind it."
        />

        <dl className="border-b border-linen dark:border-bark">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              className="grid gap-2 border-t border-linen py-5 md:grid-cols-[15rem_1fr] md:gap-8 dark:border-bark"
            >
              <SkillRow group={group} openOnPhone={i < 2} />
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
