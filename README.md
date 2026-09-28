# Chinmmay V Shastrry — Personal Portfolio

A warm, single-page portfolio built with **Next.js (App Router)**, **Tailwind CSS** and **Lucide icons**, plus one case-study page. No backend, no database, and no animation library: all motion is CSS. Deploys to Vercel or Netlify with zero configuration.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes hot-reload as you save.

## ✏️ Editing your content (the important part)

**Everything visible on the site lives in one file: [`data/content.js`](data/content.js).**
Name, bio, roles, skills, projects, timeline, testimonials, social links, and SEO tags are all plain JavaScript objects with comments. Search that file for `TODO` to find the spots that still need your attention:

| What | Where in `data/content.js` |
| --- | --- |
| Name, roles, intro, photo | `profile` |
| Hero availability badge | `profile.availability` (set `""` to hide) |
| Dated "Now" line in the hero | `profile.now` (update the date when you change it) |
| SEO title / description / URL | `siteMeta` |
| About paragraphs and stats | `about` |
| "Why should you hire me?" | `whyHireMe` |
| Toolkit rows, grouped by category | `skillGroups` |
| "Currently growing into" line | `learning` |
| Projects (links, tags, screenshots) | `projects`: `featured: true` makes a large row with a screenshot |
| "Recently pushed" GitHub line | `githubActivity` |
| Case-study pages | `caseStudies` |
| Work / education timeline | `timeline` |
| Music section | `beyondWork` |
| Testimonial quotes | `testimonials` |
| Email, socials, **Formspree ID** | `contact` |

### Making the contact form work (2 minutes)

1. Create a free account at [formspree.io](https://formspree.io)
2. Click **New form**, name it anything, and copy the form ID (an 8-character code like `xkgwabcd`)
3. In `data/content.js`, set:
   ```js
   formspreeId: "xkgwabcd",
   ```
That's it — submissions will arrive in your email inbox.

### Images

- **Your photo** → `public/images/profile.jpg` (4:5 portrait, used in the hero). Overwrite it to swap.
- **Project screenshots** → `public/images/shots/`. Featured projects show one in a browser frame; capture the live app at 1440×840 and point the project's `image` at it.
- **Case-study images** → `public/images/case-study/`.
- **Social share image** → `public/images/og.png` (1200×630).
- **Résumé** → replace `public/Chinmmay_V_Shastrry_Resume.pdf` (same filename, or update `profile.resumeUrl`).

### Case studies

Each entry in `caseStudies` becomes a page at `/projects/<slug>`, and a project with a matching `caseStudy: "<slug>"` gets a "Read the case study" link. Keep the figures in step with the project's own README.

### Analytics

`<Analytics />` in `app/layout.js` is Vercel Web Analytics: free and cookie-less. It records nothing until you switch it on in the Vercel dashboard: **Project → Analytics → Enable**.

### Changing colors or fonts

- Colors: all hex codes are documented at the top of [`tailwind.config.js`](tailwind.config.js)
- Fonts: swap `Figtree` / `Fraunces` in [`app/layout.js`](app/layout.js) for any [Google Font](https://fonts.google.com)

## 🚀 Deploying to Vercel (recommended)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ChinmmayVShastrry/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in **with your GitHub account**
3. Click **Add New → Project**, pick your `portfolio` repository, and click **Import**
4. Leave every setting at its default (Vercel auto-detects Next.js) and click **Deploy**
5. ~1 minute later your site is live at `https://<project-name>.vercel.app`

Every future `git push` to `main` redeploys automatically. To use a custom domain: Project → **Settings → Domains**.

> After the first deploy, paste your live URL into `siteMeta.url` in `data/content.js` so SEO tags point at the right address.

## 🌐 Deploying to Netlify (alternative)

1. Push the repo to GitHub (same as step 1 above)
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Choose GitHub and select your repository
4. Netlify auto-detects Next.js (build command `next build`) — click **Deploy site**

For a plain static export instead, add `output: "export"` and `images: { unoptimized: true }` to [`next.config.mjs`](next.config.mjs) and set the publish directory to `out`. The "Recently pushed" line is then fixed at build time rather than refreshed daily.

## Project structure

```
├── app/
│   ├── layout.js        # Fonts, SEO metadata, theme bootstrap
│   ├── page.js          # Assembles all sections
│   ├── projects/[slug]/ # Case-study pages
│   ├── globals.css      # Tailwind, shared button/link styles, motion
│   └── icon.svg         # Favicon
├── components/          # One component per section
│   ├── Navbar.jsx         (sticky nav + mobile menu)
│   ├── Hero.jsx           (portrait, roles, Now line, CTAs)
│   ├── Projects.jsx       (featured rows + compact grid + GitHub line)
│   ├── About.jsx          (story + stats)
│   ├── WhyHireMe.jsx      (numbered strengths)
│   ├── Skills.jsx         (toolkit rows)
│   ├── Experience.jsx     (timeline)
│   ├── BeyondWork.jsx     (music)
│   ├── Testimonials.jsx   (quote grid)
│   ├── Contact.jsx        (Formspree form + socials)
│   ├── Footer.jsx         (copyright + back-to-top)
│   ├── ThemeToggle.jsx    (light/dark switch)
│   ├── Reveal.jsx         (shared scroll animation)
│   └── SectionHeading.jsx (shared heading block)
├── data/
│   └── content.js       # ★ ALL site content — edit this
├── public/
│   ├── images/          # Photo, app screenshots, case-study images, OG card
│   └── Chinmmay_V_Shastrry_Resume.pdf
└── tailwind.config.js   # Warm palette (hex codes documented at top)
```
