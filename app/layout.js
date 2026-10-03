import { Figtree, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteMeta, profile, contact, projects } from "@/data/content";
import ScrollProgress from "@/components/ScrollProgress";
import MobileBar from "@/components/MobileBar";

/* Typography:
   - Figtree  → clean, friendly sans-serif for body text
   - Fraunces → warm, characterful serif for headings */
const fontBody = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/* SEO — values come from data/content.js (edit them there) */
export const metadata = {
  metadataBase: new URL(siteMeta.url),
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.title,
    locale: "en_US",
    type: "website",
    // Dimensions matter: without them some platforms fall back to a
    // small thumbnail instead of the full-width card.
    ...(siteMeta.ogImage
      ? {
          images: [
            {
              url: siteMeta.ogImage,
              width: 1200,
              height: 630,
              alt: `${profile.name} — ${profile.roles[0]}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    ...(siteMeta.ogImage ? { images: [siteMeta.ogImage] } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  // Matches the page background so mobile browser chrome blends in
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF5EE" },
    { media: "(prefers-color-scheme: dark)", color: "#211A14" },
  ],
};

/* Runs before paint: applies the saved (or system-preferred) theme
   so the page never flashes the wrong colors on load. */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
  // Enables the scroll-reveal animation. Sections are visible by default;
  // this class is what allows them to start hidden. If this script never
  // runs, the page simply renders with everything already showing.
  document.documentElement.classList.add("js-ready");
})();
`;

/* Structured data — helps Google show you as a person, not just a page.
   Built automatically from your content config. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.roles[0],
  description: siteMeta.description,
  email: `mailto:${profile.email}`,
  url: siteMeta.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: contact.socials
    .filter((social) => !social.href.startsWith("mailto:"))
    .map((social) => social.href),
};

/* The projects, as structured data, so search engines can connect each
   repo and live demo back to you. Built from the same content config. */
const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Projects by ${profile.name}`,
  itemListElement: projects.map((project, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareSourceCode",
      name: project.subtitle ? `${project.title}: ${project.subtitle}` : project.title,
      description: project.description,
      keywords: project.tags.join(", "),
      author: { "@type": "Person", name: profile.name, url: siteMeta.url },
      ...(project.sourceUrl ? { codeRepository: project.sourceUrl } : {}),
      ...(project.liveUrl ? { url: project.liveUrl } : {}),
    },
  })),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontDisplay.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </head>
      <body className="font-sans">
        {/* Keyboard users can jump straight past the nav.
            Invisible until focused with Tab. */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        {children}
        <MobileBar resumeUrl={profile.resumeUrl} email={profile.email} />
        {/* Free, cookie-less visitor counts. Collects nothing until Web
            Analytics is switched on for this project in the Vercel
            dashboard (Project → Analytics → Enable). Only included in
            Vercel builds, where its script actually exists. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
