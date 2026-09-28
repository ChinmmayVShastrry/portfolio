import { ArrowUp } from "lucide-react";
import { profile, contact } from "@/data/content";

/** Footer — copyright, compact social links, and a back-to-top button. */
export default function Footer({ home = "#top" }) {
  return (
    <footer className="border-t border-linen px-5 py-10 sm:px-8 dark:border-bark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-cocoa dark:text-latte">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-5">
          {/* Compact social row */}
          <ul className="flex items-center gap-4">
            {contact.socials.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-cocoa transition-colors hover:text-terracotta-dark dark:text-latte dark:hover:text-ember"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Back to top */}
          {/* A plain link rather than a scripted button: works with no
              JavaScript, and smooth scrolling comes from the CSS. */}
          <a
            href={home}
            aria-label="Back to top"
            className="rounded-full border border-linen bg-sand/60 p-2.5 text-cocoa transition-[transform,border-color,color] duration-200 ease-out hover:-translate-y-1 hover:border-terracotta-dark hover:text-terracotta-dark active:scale-95 dark:border-bark dark:bg-espresso/60 dark:text-latte dark:hover:border-ember dark:hover:text-ember"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
