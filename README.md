# Chinmmay V Shastrry — Personal Portfolio

A warm, single-page portfolio built with **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide icons**. Fully static — no backend, no database — and deployable to Vercel or Netlify with zero configuration.

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
| Name, tagline roles, intro | `profile` |
| Hero availability badge | `profile.availability` (set `""` to hide) |
| SEO title / description / URL | `siteMeta` |
| Bio paragraphs, photo, stats | `about` |
| "What I Do" cards | `services` |
| Toolkit chips, grouped by category | `skillGroups` |
| "Currently growing into" chips | `learning` |
| Project cards (links, tags, images) | `projects` — add `featured: true` for a badge |
| Work / education timeline | `timeline` |
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

### Replacing the placeholder images

- **Your photo** → already in place at `public/images/profile.jpg` (1200×1500, EXIF stripped). To swap it, overwrite that file with another 4:5 portrait
- **Project screenshots** → drop 16:9 images (e.g. 1200×675) into `public/images/projects/` and update each project's `image` path
- **Social share image** → drop a 1200×630 image at `public/images/og.png` and set `siteMeta.ogImage` to `"/images/og.png"`
- **Résumé** → replace `public/Chinmmay_V_Shastrry_Resume.pdf` with the latest version (same filename, or update `profile.resumeUrl`)

### ⚠️ Before you go live

The three testimonials in `data/content.js` are **clearly-marked placeholders** ("Placeholder Name"). Either replace them with real quotes or set `testimonials = []` to hide the section — don't ship the placeholders.

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

If you'd rather ship a plain static export (no Netlify Next.js runtime), uncomment `output: "export"` and `images: { unoptimized: true }` in [`next.config.mjs`](next.config.mjs), set the publish directory to `out`, and redeploy.

## Project structure

```
├── app/
│   ├── layout.js        # Fonts, SEO metadata, theme bootstrap
│   ├── page.js          # Assembles all sections
│   ├── globals.css      # Tailwind + base styles
│   └── icon.svg         # Favicon
├── components/          # One component per section
│   ├── Navbar.jsx         (sticky nav + mobile menu)
│   ├── Hero.jsx           (typing tagline + CTAs)
│   ├── About.jsx          (bio, photo, stats)
│   ├── Skills.jsx         (service cards + tool chips)
│   ├── Projects.jsx       (project card grid)
│   ├── Experience.jsx     (vertical timeline)
│   ├── Testimonials.jsx   (quote grid)
│   ├── Contact.jsx        (Formspree form + socials)
│   ├── Footer.jsx         (copyright + back-to-top)
│   ├── ThemeToggle.jsx    (light/dark switch)
│   ├── Reveal.jsx         (shared scroll animation)
│   └── SectionHeading.jsx (shared heading block)
├── data/
│   └── content.js       # ★ ALL site content — edit this
├── public/
│   ├── images/          # Placeholder artwork (replace with real images)
│   └── Chinmmay_V_Shastrry_Resume.pdf
└── tailwind.config.js   # Warm palette (hex codes documented at top)
```
