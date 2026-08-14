# Interior Architecture project pages — Axis Securities & ERGO Technologies

You're sending portfolio folders sector by sector. This sets up the pattern so each new folder is a quick add.

## What gets built

**1. ERGO Technologies (IT & Software)** — existing archive entry, now a full case study
- `ergo-technologies` currently exists only as a tile in the archive with a stock cover image; it gets a real project page and its cover swapped to the marble reception shot.
- 14 photos in a scroll gallery: marble reception with the multilingual Welcome video wall, the red heart green-wall lounge, the LED stage floor with ERGO branding, the PASSION acoustic lounge, the #GERMANY coffee bar, collaboration zones with swings and green carpet, the classic panelled library with chandeliers, the blue-fin open workspace, the games room with mural, and the cafeteria in both ceiling treatments.

**2. Axis Securities (Banking & Finance)** — new project
- Added to the archive under Interiors, slug `axis-securities`, with a full case study page.
- 4 photos: reception with the lit green wall and Axis signage, the maroon/navy geometric meeting room, the executive cabin with stone-clad wall and leather chairs, and the mural breakout zone.

**3. Sector tagging**
- Each project gains a `sector` field ("Banking & Finance", "IT & Software") matching the Expertise mega-menu naming, so sector landing pages can slot these in later with no rework.

## Copy

I'll draft the write-ups from the photographs in TOA's voice — brand-led spatial identity, material and light. Send facts you want stated (location, area, year, status) and I'll swap them in; otherwise the page shows only what we can support.

## Technical notes

- Photos go through the CDN asset pipeline (`src/assets/projects/ergo/*`, `.../axis-securities/*`), not committed as binaries.
- `src/data/portfolio.ts`: add the `axis-securities` entry, add `sector` to the project type, add gallery/detail records for both projects, update the Ergo cover image.
- No component changes needed — `portfolio.$slug.tsx` already renders facts, overview and gallery.

## Open items

- Facts for both projects (location, area, year, status).
- Whether Expertise sector landing pages (e.g. `/expertise/banking-finance`) should be built once more folders arrive.
