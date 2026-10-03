"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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
 * SkillRow — one toolkit category (a <dt>/<dd> pair; the parent supplies the grid). On desktop every row is always open.
 * On a phone the title becomes a button that folds the row away, with the
 * first couple open, so the toolkit doesn't run to several screens.
 *
 * Fails visible: it renders open from the server and only folds once
 * JavaScript has mounted and confirmed the screen is narrow.
 */
export default function SkillRow({ group, openOnPhone = false }) {
  const [phone, setPhone] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setPhone(query.matches);
      if (query.matches) setOpen(openOnPhone);
      else setOpen(true);
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [openOnPhone]);

  return (
    <>
      <dt className="text-sm font-semibold text-cocoa dark:text-latte">
        {phone ? (
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-my-2 flex min-h-11 w-full items-center justify-between gap-3 text-left"
          >
            {group.title}
            <ChevronDown
              size={18}
              aria-hidden="true"
              className={`shrink-0 transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
            />
          </button>
        ) : (
          group.title
        )}
      </dt>
      <dd className={open ? "" : "hidden"}>
        <DotList items={group.items} />
        {group.note && (
          <p className="mt-2 text-sm text-cocoa dark:text-latte">{group.note}</p>
        )}
      </dd>
    </>
  );
}
