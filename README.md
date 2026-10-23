# Mosa Potsane — Portfolio

This is the Notorious Solutions codebase rebuilt as Mosa Potsane's personal
portfolio: same architecture, animations, and polish, with the agency-only
pieces removed and the content swapped for Mosa's real background.

## What changed from the Notorious Solutions template

**Removed entirely**
- `ProjectCalculator.tsx` — agency pricing tool
- `Team.tsx` — "team" listing, not relevant to a solo portfolio
- `ServiceDetail.tsx` and the `react-router-dom` routing it needed
- `WhyUs.tsx` — agency trust-building accordion
- `FAQ.tsx` — agency pricing/timeline FAQ
- The Y2 Network column in the footer (side-project links)

**Added**
- `About.tsx`, `Skills.tsx`, `Education.tsx` — new sections, styled to match
  the rest of the site, content pulled from Mosa's original portfolio

**Reworked**
- `Showcase.tsx` → `Projects.tsx`: trimmed from the full agency client
  showcase down to Mosa's 5 real projects (Notorious Store, Trackademy,
  Buddy, Campus Care, SPU United), same card-grid polish, hover image-swap
  instead of the multi-image documentation modal
- `Services.tsx`: swapped the 4 agency service tiers for Mosa's 6 real
  dev services, dropped the "Learn More" links (no detail pages anymore)
  and the fabricated agency metrics banner
- `Contact.tsx`: dropped the "Project Type" selector and Netlify form
  wiring, added the resume download link, kept the validated two-column
  layout
- `Navbar.tsx` / `Hero.tsx` / `Footer.tsx`: swapped the Notorious logo/copy
  for an "MP" gradient badge and Mosa's own bio, links, and socials
- `App.tsx`: dropped `react-router-dom` entirely — everything is a single
  scrolling page now, so `BrowserRouter`/`Routes` were removed
- Color tokens recolored site-wide from Notorious green (`#6CB065`) to
  Mosa's gold/burgundy (`#CE9635` / `#C04D30`)
- Default theme changed from dark-first to light-first (matches Mosa's
  original site); the dark/light toggle from Notorious was kept

**Unchanged**
- `ThemeContext.tsx` — solid as-is, just renamed the localStorage key

## One manual step before this builds

The image assets referenced by `Hero.tsx`, `Navbar.tsx`, `Footer.tsx` (favicon)
and `Projects.tsx` aren't included here — I don't have access to your actual
image files, only the code that references them. Before running `npm install`:

1. Copy your project images into `src/assets/` as `1.png` through `10.png`
   (matching the order used in `Projects.tsx` — swap the imports if you want
   a different image per project).
2. Copy your resume PDF into `src/assets/` as `Potsane-Resume.pdf`, **and**
   also into `public/` at `public/assets/Potsane-Resume.pdf` (the download
   links in `Hero.tsx` and `Contact.tsx` point at `/assets/...` so it's
   served as a static file rather than bundled).
3. Copy a favicon into `public/images/13.png` (referenced in `index.html`).

## Running it

```bash
npm install
npm run dev
```
