# HP Petrochemicals — Redesign Concept

A corporate-style **redesign concept** of the HP Petrochemicals page
([hindustanpetroleum.com/hp-petrochemicals](https://www.hindustanpetroleum.com/hp-petrochemicals)),
built as a standalone modern front-end for demo purposes.

> ⚠️ **Unofficial.** This project is not affiliated with, authorised by, or
> endorsed by Hindustan Petroleum Corporation Limited. The HP roundel used here
> is an original stylised mark, not the official logo. Figures and product
> descriptions are paraphrased from public HPCL disclosures about the Rajasthan
> Refinery (HRRL) and Visakh petrochemical projects and may be approximate.

## Stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Build tool     | Vite 6                                             |
| Framework      | React 18 + TypeScript                              |
| Styling        | Tailwind CSS 3 with CSS-variable design tokens     |
| Components     | shadcn/ui-style primitives on Radix UI (`src/components/ui`) |
| Icons          | lucide-react                                       |
| Fonts          | Barlow (display) + Inter (body), via Google Fonts  |

## Design decisions

- **Brand match.** The palette approximates the parent site: HP navy
  `#00206b`, HP blue `#0067b1`, HP red `#e2231a`, plus an orange accent.
  Tokens live in [`src/index.css`](src/index.css) and
  [`tailwind.config.js`](tailwind.config.js) (`hp.*` colours + `--primary` /
  `--accent` HSL vars), so re-theming is a one-file change.
- **Typography.** Condensed, industrial **Barlow** for headings; **Inter** for
  body — a common pairing for Indian PSU / infrastructure corporate sites.
- **"About Hindustan Petroleum" is a small expandable button.** See
  [`src/components/AboutHpcl.tsx`](src/components/AboutHpcl.tsx) — a compact
  pill-style control inside the About section that expands (animated
  `grid-rows` transition, `aria-expanded` / `aria-controls`) to reveal the
  corporate background, key facts and an outbound link.
- **Corporate patterns.** Utility bar + sticky condensing header with hover
  mega-menu, dark hero with stat band, tabbed product portfolio, numbered
  business-complex list, applications grid, dark sustainability band, newsroom,
  split contact block, fat footer. Responsive down to mobile with a Radix
  slide-in menu. Skip-link + focus styles for accessibility.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
```

Requires Node 18+.

## Project structure

```
src/
├── App.tsx                 # page composition
├── index.css               # Tailwind layers + light/dark design tokens
├── data/content.ts         # all copy, stats, product & project data
├── lib/utils.ts            # cn() class merger
└── components/
    ├── ui/                  # button, accordion, card, badge, tabs, sheet
    ├── SiteHeader.tsx       # utility bar + sticky nav + mobile sheet
    ├── Hero.tsx
    ├── AboutSection.tsx     # "About HP Petrochemicals" + pillars
    ├── AboutHpcl.tsx        # ← the expandable "About Hindustan Petroleum" button
    ├── ProductPortfolio.tsx # tabbed: Polymers / Intermediates / Aromatics
    ├── BusinessSegments.tsx # Rajasthan Refinery, Visakh, Marketing
    ├── Applications.tsx
    ├── Sustainability.tsx
    ├── Newsroom.tsx
    ├── ContactCta.tsx       # demo enquiry form (non-functional)
    └── SiteFooter.tsx
```

## Editing content

Almost everything readable is in
[`src/data/content.ts`](src/data/content.ts) — navigation, hero stats, product
families and grades, project highlights, application sectors, sustainability
pillars, newsroom items and the "About Hindustan Petroleum" text.

## Deploy

Static output in `dist/` — deploy to GitHub Pages, Netlify, Vercel or any
static host. For **GitHub Pages** under a project path, set Vite's `base`:

```ts
// vite.config.ts
export default defineConfig({ base: "/hpcl_petrochemical/", /* ... */ });
```

## License

Provided as-is for demonstration and educational use. All third-party brand
names and marks are the property of their respective owners.
