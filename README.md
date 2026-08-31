# HP Petrochemicals — page redesign

A corporate-style redesign of the **body content** of
[hindustanpetroleum.com/hp-petrochemicals](https://www.hindustanpetroleum.com/hp-petrochemicals).
It does **not** touch HPCL's site header, mega-menu or footer.

> ⚠️ **Unofficial concept.** Not affiliated with, authorised by or endorsed by
> Hindustan Petroleum Corporation Limited. The HP roundel used in the React
> reference is an original stylised mark, not the official logo. Figures and
> product copy are paraphrased from public HPCL disclosures about the Rajasthan
> Refinery (HRRL) and Visakh petrochemical projects and may be approximate.

## What to hand over

### ➡️ `embed/hp-petrochemicals.html` — the deliverable

One self-contained block: a `<section class="hpx">` + a scoped `<style>` + a
~15-line vanilla-JS IIFE. Paste it into the HTML content area of the
`/hp-petrochemicals` page.

- **No build, no framework, no external dependencies.**
- Every selector is prefixed `.hpx` → cannot collide with Bootstrap /
  `style.css` / `common.css`.
- Uses **Montserrat**, already loaded by the site — no new web fonts.
- The only JavaScript drives the expandable **"About Hindustan Petroleum"**
  button. Progressive enhancement: with JS disabled the panel stays open.
- Icons are an inline SVG `<symbol>` set — no icon font.
- Re-theme by editing the CSS custom properties in `.hpx { … }`.

### `embed/preview.html` — standalone preview

Wraps the block in mock header/footer bars so it can be viewed in isolation.
Serve over HTTP (it `fetch()`es the fragment):

```bash
npx serve embed          # then open /preview.html
# or:  python3 -m http.server -d embed 8099
```

## Theme (sampled from the live site's CSS)

| Token (`--hpx-*`) | Value | Role |
| --- | --- | --- |
| `navy` | `#001344` | headings, dark bands |
| `blue` | `#005095` | primary blue |
| `blue-dark` | `#003f85` / `#004e8f` | hover, gradients |
| `red` | `#df1a14` | accent |
| `red-dark` | `#b20100` | accent hover |
| `ink` | `#3a3131` | body text |
| `line` | `#e4e4e4` | borders, grey fill |
| font | **Montserrat** 400/500/600/700, body `0.9rem` (14.4px) | matches site scale |

## Sections

Hero + stat strip → **About HP Petrochemicals** (with the expandable *About
Hindustan Petroleum* button) → approach pillars → product portfolio (Polymers /
Chemical Intermediates / Aromatics, plain responsive grid — no JS tabs) →
complexes (Rajasthan Refinery / Visakh / marketing) → applications grid →
sustainability (dark band) → contact CTA.

## `reference/` design (React) — optional

The repo also contains a full-page React + Vite + Tailwind + shadcn-style mockup
used to develop the visual language. It is a **reference**, not the thing you
embed.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + build to dist/
```

Key files: [src/data/content.ts](src/data/content.ts) (all copy),
[src/components/AboutHpcl.tsx](src/components/AboutHpcl.tsx) (the expandable
button), [tailwind.config.js](tailwind.config.js) + [src/index.css](src/index.css)
(theme tokens).

## Live preview (GitHub Pages)

Pushed to `main`, [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
builds and publishes:

- `…/hpcl_petrochemical/embed/preview.html` — the embed block in context
- `…/hpcl_petrochemical/embed/hp-petrochemicals.html` — the raw block
- `…/hpcl_petrochemical/` — the React reference

## License

Provided as-is for demonstration and educational use. Third-party brand names and
marks are the property of their respective owners.
