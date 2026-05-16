# Tabby Landing Page

Marketing site for Tabby, the macOS menu bar app that brings on-device inline autocomplete to native and web text fields.

The product app lives in the main Tabby repository. This repository owns the public landing page: the hero, demo section, app examples, feature storytelling, FAQ, legal pages, metadata, and static assets that explain the product to users before they download it.

## Tech Stack

- **Next.js 16** with the App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** for page motion and interaction details
- **Vercel Analytics**

## Project Structure

```text
frontend/
  app/
    components/        Reusable landing-page sections and UI primitives
    lib/site.ts        Site-wide URLs, support email, and creator metadata
    privacy/           Privacy policy route
    release-notes/     Release notes route
    terms/             Terms route
    page.tsx           Home page composition
  public/              Icons, app logos, and static media
  package.json         Scripts and dependencies
```

The home page is intentionally composed from section components in `frontend/app/components/`. That keeps the page easy to reorder while letting each section own its copy, layout, and motion behavior.

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

Run these from `frontend/`:

```bash
npm run dev      # Start the local development server
npm run lint     # Run ESLint
npm run build    # Build the production site
npm run start    # Serve the production build locally
```

## Content And Links

Global links and metadata live in `frontend/app/lib/site.ts`. Update that file when the landing page needs a new canonical site URL, GitHub link, release-download URL, support email, or creator profile.

Most visual sections are self-contained:

- `hero.tsx` owns the first viewport and primary CTA.
- `demo-video-section.tsx` owns the demo embed area.
- `apps-carousel-section.tsx` owns the app compatibility carousel.
- `how-it-works-section.tsx`, `alternating-feature-section.tsx`, and `customization-cards-section.tsx` own the core product explanation.
- `privacy-section.tsx`, `faq-section.tsx`, and `final-footer-section.tsx` own trust, objections, and final conversion copy.

## Deployment

The app is a standard Next.js site and can be deployed from `frontend/` on Vercel or any platform that supports Next.js. Before shipping copy or SEO changes, run:

```bash
cd frontend
npm run lint
npm run build
```

## Repository Hygiene

Do not commit generated build output, local environment files, dependency folders, or macOS `.DS_Store` metadata. The root `.gitignore` covers Finder metadata for the whole repository, while `frontend/.gitignore` covers the Next.js app-specific outputs.
