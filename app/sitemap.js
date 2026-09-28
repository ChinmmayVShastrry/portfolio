import { siteMeta, caseStudies } from "@/data/content";

/** Generates /sitemap.xml automatically at build time. */
export default function sitemap() {
  return [
    {
      url: siteMeta.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((study) => ({
      url: `${siteMeta.url}/projects/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    })),
  ];
}
