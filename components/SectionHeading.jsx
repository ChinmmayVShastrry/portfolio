import Reveal from "@/components/Reveal";

/**
 * SectionHeading — the heading block at the top of each section: a small
 * eyebrow label, a large serif title, and an optional description.
 * Left-aligned by default, which reads more like an editorial page than
 * a stack of centred blocks.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "mb-12",
}) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-cocoa sm:text-lg dark:text-latte">
          {description}
        </p>
      )}
    </Reveal>
  );
}
