# HP Petrochemicals - page redesign (embeddable)

A corporate-style redesign of the **body content** of
[hindustanpetroleum.com/hp-petrochemicals](https://www.hindustanpetroleum.com/hp-petrochemicals).
It does not touch HPCL's site header, mega-menu or footer.

## The deliverable

**`embed/hp-petrochemicals.html`** - one self-contained block: a
`<section class="hpx">` + a scoped `<style>` + a small vanilla-JS IIFE. Paste it
into the HTML content area of the `/hp-petrochemicals` page.

- No build, no framework, no external dependencies.
- Every selector is prefixed `.hpx` -> cannot collide with Bootstrap /
  `style.css` / `common.css`.
- Uses **Montserrat**, already loaded by the site.
- JS drives the expandable *About Hindustan Petroleum* panel and the two
  slideshow carousels (autoplay, prev/next, dots, keyboard, swipe,
  pause-on-hover, `prefers-reduced-motion` aware).
- Re-theme via the CSS custom properties in `.hpx { ... }`. Colours are sampled
  from the live site: navy `#001344`, blue `#005095` / `#003f85`, red `#df1a14`
  / `#b20100`, ink `#3a3131`, line `#e4e4e4`, Durapol cyan `#1aa7dd`.

### Images (`embed/assets/`)

| File | Used for |
| --- | --- |
| `hp-durapol-logo.png` | hero logo |
| `durapol-1..5.jpg` | hero carousel |
| `refinery-1..3.jpg` | HRRL section carousel |
| `refinery-map.png` | "Thrive with the right connections" map |

When embedding on the live site, repoint each `src` to an absolute path
(e.g. `/images/durapol/slide-1.jpg`) and update the `alt` text.

## Sections

Hero (logo + stat strip + campaign carousel) -> About HP Petrochemicals (with
the expandable *About Hindustan Petroleum* panel) -> HRRL (image carousel +
heading/text + six "uniqueness" stats) -> Thrive with the right connections
(logistics + map) -> HP Durapol polymers (licensor spec cards + product
taxonomy, incl. benzene / toluene / butadiene) -> Contact offices.

## Preview

`embed/preview.html` injects **only** the block - no mock chrome. Serve over
HTTP (it `fetch()`es the fragment):

```bash
python3 -m http.server -d embed 8000   # then open http://localhost:8000/preview.html
```

GitHub Pages publishes the same preview at the repo's Pages URL
(see `.github/workflows/deploy.yml`).
