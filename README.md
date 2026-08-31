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

Follows the current page's own structure, upgraded:

1. **Hero** — HP Durapol® wordmark + stat strip (9 MMTPA / 2.4 MMTPA / PE / PP).
2. **About HP Petrochemicals** — with the expandable *About Hindustan Petroleum*
   button + three pillars.
3. **HRRL** — JV intro (HPCL 74% / GoR 26%, 9 MMTPA, 2.4 MMTPA, Pachpadra) +
   six "uniqueness" stat cards (26% intensity, Nelson 17, EII 78, 2×500 KTPA
   swing train, 2×490 KTPA PPU train, 85%+ local content).
4. **Thrive with the right connections** — road/rail, city proximity,
   Amritsar–Jamnagar Expressway, Mundra/Kandla ports + an inline-SVG hub diagram.
5. **HP Durapol® polymers** — narrative + two licensor spec cards (Univation
   UNIPOL™ PE / Lummus Novolen PP, 2×500 KTA each) + a polymer taxonomy tree
   (PE → HDPE/LLDPE; PP → homopolymer/impact/random) + application-segment chips.
6. **Contact** — the three real petrochemical-marketing offices (Sion HQ,
   Bandra, Ahmedabad).

Figures come from the public HPCL / HRRL page — verify before publishing.

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
