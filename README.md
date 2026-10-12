# Riski Hidayat — Portfolio

Personal portfolio of Riski Hidayat, Fullstack Developer (Golang · React · Java Spring Boot · REST API).
Live: https://portofolio.rtech.studio

Built with Next.js (App Router, static export), React 19, TypeScript and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # type-check
npm run build      # static site in dist/
npm run preview    # serve dist/ on http://localhost:4173
npm run test:e2e   # Playwright tests against dist/ (run `npm run build` first; `npx playwright install chromium` once)
```

## Deploying

`npm run build` produces a fully static site in `dist/` (plain HTML, CSS, JS and images — no Node server
needed). Deploy that folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, nginx).
On Vercel, use the **Next.js** framework preset.

## Updating content

All content lives in `src/data/portfolio.ts` (profile, stats, experience, projects, skills, education,
certifications, organization). Project screenshots go in `src/data/assets/<project>/` as WebP (longest
side ≤ 1600px); each project card uses a smaller `1-thumb.webp` (≤ 800px).
The downloadable CV is served from `public/Riski-Hidayat_Software-Developer_CV.pdf` — replace that file
when the CV changes.
