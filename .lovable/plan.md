# Interior Architecture project pages — ERGO Technologies & Axis Securities

You're sending portfolio folders sector by sector. This sets up the pattern so each new folder is a quick add.

## 1. ERGO Technologies — full case study

The archive already lists `ergo-technologies` as a tile with a stock cover; it becomes a real project page using your write-up and photographs.

Facts panel, verbatim from the document:
- Client: ERGO Technology and Services
- Location: Powai, Mumbai
- Area: 1 lakh sq ft
- Sector: Technology / IT
- Category: Corporate Interiors
- Status: Completed, August 2025

Page copy uses your text as written — the highlight line as the intro pull-quote ("A trusted design partner for Ergo — crafting three successive offices that blend culture-centric design, adaptive environments, and engaging workplace energy"), then the full narrative on the third collaboration, the LEED-certified youth-centric brief, "We bring our heart to work", the agile zoning, ceiling baffles and acoustic treatments, plant-rich reception, Steelcase height-adjustable workstations, and the biophilia/wellness DNA.

Gallery of 14 photographs: the marble reception with the multilingual Welcome video wall, the red heart green-wall lounge, the LED stage floor with ERGO branding and the Effectiveness graphic, the PASSION acoustic lounge, the #GERMANY coffee bar, the swing-and-greenery collaboration zones, the panelled library with chandeliers, the blue-fin open workspace, the games room, and the cafeteria in both ceiling treatments. Cover image switches to the marble reception.

## 2. Axis Securities (Banking & Finance) — new project

Added to the archive under Interiors, slug `axis-securities`, with the same page structure. 4 photos: reception with the lit green wall and Axis signage, the maroon/navy geometric meeting room, the executive cabin with stone-clad wall and leather chairs, and the mural breakout zone.

Copy drafted from the images in TOA's voice; facts shown only once you send them (location, area, year, status) — send an Axis write-up like the ERGO one and I'll use it verbatim.

## 3. Sector tagging

Both projects gain a `sector` field matching the Expertise mega-menu naming ("Technology / IT", "Banking & Finance"), so sector landing pages can slot these in later with no rework.

## Technical notes

- Photos go through the CDN asset pipeline (`src/assets/projects/ergo/*`, `.../axis-securities/*`), not committed as binaries.
- `src/data/portfolio.ts`: add the `axis-securities` entry, add `sector` to the project type, add detail records (facts, overview, gallery) for both, update the Ergo cover.
- No component changes needed — `portfolio.$slug.tsx` already renders facts, overview and gallery.

## Open items

- Axis Securities write-up and project facts.
- Whether Expertise sector landing pages (e.g. `/expertise/banking-finance`) should be built once more folders arrive.
