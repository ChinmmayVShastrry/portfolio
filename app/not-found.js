import { ArrowLeft } from "lucide-react";

/** Custom 404 page, styled to match the rest of the site. */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-7xl font-semibold text-terracotta dark:text-ember">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold">
        This page wandered off
      </h1>
      <p className="mt-3 max-w-md text-cocoa dark:text-latte">
        The link you followed doesn&apos;t exist. There&apos;s plenty to see
        back on the main page.
      </p>
      <a
        href="/"
        className="btn-primary group mt-8"
      >
        <ArrowLeft
          size={18}
          className="transition-transform duration-200 ease-out group-hover:-translate-x-1"
          aria-hidden="true"
        />
        Back home
      </a>
    </main>
  );
}
