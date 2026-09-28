import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Hammer } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, contact, githubActivity } from "@/data/content";

const githubProfile = contact.socials.find((s) => s.label === "GitHub")?.href;
const githubUser = githubProfile?.split("github.com/")[1]?.replace(/\/$/, "");

/**
 * Most recently pushed public repos, fetched when the page is built and
 * refreshed at most once a day. Any failure (rate limit, network) just
 * hides the strip; it never breaks the page.
 */
async function getRecentRepos() {
  if (!githubActivity?.show || !githubUser) return [];
  try {
    const res = await fetch(
      `https://api.github.com/users/${githubUser}/repos?sort=pushed&per_page=12`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return [];
    const repos = await res.json();
    return repos
      .filter((r) => !r.fork && !githubActivity.exclude?.includes(r.name))
      .slice(0, githubActivity.count ?? 3)
      .map((r) => ({ name: r.name, url: r.html_url, pushed: r.pushed_at }));
  } catch {
    return [];
  }
}

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" });

/** Live / Source / Case study links, shared by both layouts. */
function ProjectLinks({ project, className = "" }) {
  if (!project.liveUrl && !project.sourceUrl) {
    return (
      <p className={`text-sm text-cocoa dark:text-latte ${className}`}>
        Code and write-up to follow once it&apos;s stable.
      </p>
    );
  }
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm ${className}`}>
      {project.caseStudy && (
        <a href={`/projects/${project.caseStudy}`} className="text-link group">
          Read the case study
          <ArrowRight
            size={15}
            className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title}: open the live demo (new tab)`}
          className="text-link"
        >
          <ExternalLink size={15} aria-hidden="true" />
          Live demo
        </a>
      )}
      {project.sourceUrl && (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title}: view the source on GitHub (new tab)`}
          className="inline-flex items-center gap-1.5 font-medium text-cocoa transition-colors hover:text-charcoal dark:text-latte dark:hover:text-parchment"
        >
          <Github size={15} aria-hidden="true" />
          Source
        </a>
      )}
    </div>
  );
}

function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

/** A large row: screenshot in a browser frame on one side, story on the other. */
function FeaturedProject({ project, index }) {
  const flip = index % 2 === 1;
  const host = project.liveUrl ? new URL(project.liveUrl).host : "";

  return (
    <Reveal as="article" className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <a
        href={project.liveUrl || project.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className={`group block lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
      >
        <figure className="overflow-hidden rounded-2xl border border-linen bg-sand shadow-soft transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lift dark:border-bark dark:bg-espresso">
          {/* Browser chrome, so a screenshot reads as a real, running app */}
          <div className="flex items-center gap-3 border-b border-linen px-4 py-2.5 dark:border-bark">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-linen dark:bg-bark" />
              <span className="h-2.5 w-2.5 rounded-full bg-linen dark:bg-bark" />
              <span className="h-2.5 w-2.5 rounded-full bg-linen dark:bg-bark" />
            </span>
            <span className="truncate text-xs text-cocoa dark:text-latte">{host}</span>
          </div>
          <div className="relative aspect-[12/7] overflow-hidden">
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </figure>
      </a>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="tabular font-display text-sm font-semibold text-terracotta-dark dark:text-ember">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="mt-1 text-base font-medium text-cocoa dark:text-latte">
            {project.subtitle}
          </p>
        )}
        {/* The screenshot's description lives here, next to the text it
            illustrates, since the image link itself is hidden from
            screen readers (it duplicates the Live demo link). */}
        <p className="sr-only">Screenshot: {project.alt}</p>
        <p className="mt-4 leading-relaxed text-cocoa dark:text-latte">
          {project.description}
        </p>
        <div className="mt-5">
          <Tags tags={project.tags} />
        </div>
        <ProjectLinks project={project} className="mt-6" />
      </div>
    </Reveal>
  );
}

/** A compact card for the rest of the work. */
function CompactProject({ project, delay }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="flex h-full flex-col rounded-2xl border border-linen bg-cream p-6 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-amber/60 hover:shadow-soft dark:border-bark dark:bg-night dark:hover:border-honey/40"
    >
      {project.status && (
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-amber/20 px-2 py-0.5 text-xs font-semibold text-charcoal dark:bg-honey/15 dark:text-honey">
          <Hammer size={12} aria-hidden="true" />
          {project.status}
        </span>
      )}
      <h3 className="font-display text-xl font-semibold leading-snug">
        {project.title}
      </h3>
      {project.subtitle && (
        <p className="mt-0.5 text-sm font-medium text-cocoa dark:text-latte">
          {project.subtitle}
        </p>
      )}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-cocoa dark:text-latte">
        {project.description}
      </p>
      <div className="mt-4">
        <Tags tags={project.tags} />
      </div>
      <ProjectLinks
        project={project}
        className="mt-5 border-t border-linen pt-4 dark:border-bark"
      />
    </Reveal>
  );
}

/**
 * Projects — the three strongest pieces as large rows with real
 * screenshots, then everything else in a compact grid. Comes straight
 * after the hero, so a visitor on a phone reaches the work quickly.
 */
export default async function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const liveCount = projects.filter((p) => p.liveUrl).length;
  const recent = await getRecentRepos();

  return (
    <section id="projects" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          description={`GenAI and RAG systems, deep learning, and the fundamentals underneath. ${liveCount} have live demos you can try.`}
          className="mb-14 md:mb-20"
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {featured.map((project, i) => (
            <FeaturedProject key={project.title} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mb-8 mt-24 md:mt-32">
          <h3 className="font-display text-2xl font-semibold">More projects</h3>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <CompactProject key={project.title} project={project} delay={0.05 * (i % 3)} />
          ))}
        </div>

        {/* Recent GitHub activity + link out to the full profile */}
        {githubProfile && (
          <Reveal className="mt-12 flex flex-col gap-4 border-t border-linen pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-bark">
            {recent.length > 0 ? (
              <p className="text-sm text-cocoa dark:text-latte">
                <span className="font-semibold text-charcoal dark:text-parchment">
                  Recently pushed:
                </span>{" "}
                {recent.map((repo, i) => (
                  <span key={repo.name}>
                    {i > 0 && <span aria-hidden="true"> · </span>}
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-linen underline-offset-4 transition-colors hover:text-terracotta-dark hover:decoration-terracotta-dark dark:decoration-bark dark:hover:text-ember dark:hover:decoration-ember"
                    >
                      {repo.name}
                    </a>{" "}
                    <span className="tabular">({formatDate(repo.pushed)})</span>
                  </span>
                ))}
              </p>
            ) : (
              <span />
            )}
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 self-start text-sm sm:self-auto"
            >
              <Github size={17} aria-hidden="true" />
              Everything on GitHub
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
