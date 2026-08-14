# Interior Architecture project pages — Axis Securities & ERGO Technologies

You're sending portfolio folders sector by sector. This sets up the pattern so each new folder is a quick add.

## What gets built

**1. Axis Securities (Banking & Finance)** — new project
- Added to the portfolio archive under Corporate Interiors, slug `axis-securities`.
- Full case-study page: cinematic hero, project facts panel, overview copy, scroll-parallax gallery.
- 4 photos: reception with Axis Securities signage and lit green wall, meeting room with the maroon/navy geometric wall, cabin with textured stone wall and leather chairs, breakout zone with the mural and turf.

**2. ERGO Technologies (IT & Software)** — existing project, now a full page
- `ergo-technologies` already exists in the archive but has no case study; it gets the same detail treatment.
- 9 photos: the marble reception with the multilingual welcome video wall and red heart green wall, the PASSION lounge, the #GERMANY coffee bar, the collaboration zones with swings and green carpet, the classic panelled meeting lounge, and the cafeteria.

**3. Sector tagging**
- Each project gains a `sector` field ("Banking & Finance", "IT & Software") that matches the Expertise mega-menu naming, so once the sector landing pages exist the projects slot straight in with no rework.

## Copy

I'll draft the project write-ups from the photographs in TOA's voice (material, light, brand-led spatial identity). Send facts you want stated — location, area, year, status — and I'll swap them in; otherwise I'll only show the facts we can support.

## Technical notes

- Photos uploaded through the CDN asset pipeline (`src/assets/projects/axis-securities/*`, `.../ergo/*`), not committed as binaries.
- `src/data/portfolio.ts`: add the `axis-securities` entry, add `sector` to the `Project` type, add both `projectDetails` records.
- No component changes needed — `portfolio.$slug.tsx` already renders facts, overview and gallery.

## Open items

- Facts for both projects (location, area, year, status).
- Whether Expertise sector landing pages (e.g. `/expertise/banking-finance`) should be built next once more folders arrive.
