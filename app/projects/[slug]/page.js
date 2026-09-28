import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LoopVideo from "@/components/LoopVideo";
import { caseStudies, profile, siteMeta } from "@/data/content";

/* One static page per entry in `caseStudies` (data/content.js).
   Any other slug is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  const title = `${study.title}: case study · ${profile.name}`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: `/projects/${study.slug}` },
    openGraph: {
      title,
      description: study.summary,
      url: `${siteMeta.url}/projects/${study.slug}`,
      type: "article",
    },
    twitter: { title, description: study.summary },
  };
}

function Section({ heading, children }) {
  return (
    <Reveal as="section" className="mt-16 md:mt-20">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {heading}
      </h2>
      {children}
    </Reveal>
  );
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.title}: ${study.subtitle}`,
    description: study.summary,
    author: { "@type": "Person", name: profile.name, url: siteMeta.url },
    url: `${siteMeta.url}/projects/${study.slug}`,
    about: {
      "@type": "SoftwareSourceCode",
      name: study.title,
      codeRepository: study.sourceUrl,
      url: study.liveUrl,
    },
  };

  return (
    <>
      <Navbar base="/" />
      <main id="main" className="px-5 pb-24 pt-28 sm:px-8 md:pt-36">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <article className="mx-auto max-w-3xl">
          <a
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-cocoa transition-colors hover:text-terracotta-dark dark:text-latte dark:hover:text-ember"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            All work
          </a>

          <header className="mt-8">
            <p className="eyebrow">Case study</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-4 text-xl font-medium text-terracotta-dark dark:text-ember">
              {study.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={17} aria-hidden="true" />
                Try it live
              </a>
              <a href={study.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github size={17} aria-hidden="true" />
                Source on GitHub
              </a>
            </div>
          </header>

          <div className="mt-12">
            {study.intro.map((paragraph, i) => (
              <p key={i} className="mb-5 text-lg leading-relaxed text-cocoa dark:text-latte">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick facts */}
          <dl className="mt-8 grid grid-cols-2 border-y border-linen sm:grid-cols-4 dark:border-bark">
            {study.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col py-5 pr-4">
                <dt className="order-2 mt-1 text-sm leading-snug text-cocoa dark:text-latte">
                  {fact.label}
                </dt>
                <dd className="tabular font-display text-3xl font-semibold text-terracotta dark:text-ember">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <Section heading={study.architectures.heading}>
            <p className="mt-4 leading-relaxed text-cocoa dark:text-latte">
              {study.architectures.note}
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-linen text-cocoa dark:border-bark dark:text-latte">
                    <th scope="col" className="py-3 pr-4 font-semibold">Architecture</th>
                    <th scope="col" className="py-3 pr-4 font-semibold">The retrieval middle</th>
                    <th scope="col" className="py-3 font-semibold">What it&apos;s for</th>
                  </tr>
                </thead>
                <tbody>
                  {study.architectures.rows.map((row) => (
                    <tr key={row.name} className="border-b border-linen align-top dark:border-bark">
                      <th scope="row" className="py-3 pr-4 font-display text-base font-semibold">
                        {row.name}
                      </th>
                      <td className="py-3 pr-4 font-mono text-[0.8rem] text-cocoa dark:text-latte">
                        {row.middle}
                      </td>
                      <td className="py-3 text-cocoa dark:text-latte">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {study.sections.map((section) => (
            <Section key={section.heading} heading={section.heading}>
              <figure className="mt-6 overflow-hidden rounded-2xl border border-linen bg-sand shadow-soft dark:border-bark dark:bg-espresso">
                {section.video ? (
                  <LoopVideo
                    src={section.video}
                    poster={section.image}
                    width={section.width}
                    height={section.height}
                    label={section.alt}
                  />
                ) : (
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width={section.width}
                    height={section.height}
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="h-auto w-full"
                  />
                )}
              </figure>
              {section.body.map((paragraph, i) => (
                <p key={i} className="mt-5 leading-relaxed text-cocoa dark:text-latte">
                  {paragraph}
                </p>
              ))}
            </Section>
          ))}

          <Section heading={study.details.heading}>
            <ul className="mt-6 space-y-4">
              {study.details.items.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-cocoa dark:text-latte">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta dark:bg-ember" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section heading={study.tryIt.heading}>
            <ol className="mt-6 space-y-4">
              {study.tryIt.items.map((item, i) => (
                <li key={item} className="grid grid-cols-[2rem_1fr] leading-relaxed text-cocoa dark:text-latte">
                  <span aria-hidden="true" className="tabular font-display font-semibold text-terracotta-dark dark:text-ember">
                    {i + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-linen pt-8 dark:border-bark">
              <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={17} aria-hidden="true" />
                Open {study.title}
              </a>
              <a href="/#contact" className="btn-secondary">
                Talk to me about it
              </a>
            </div>
          </Section>
        </article>
      </main>
      <Footer home="#main" />
    </>
  );
}
