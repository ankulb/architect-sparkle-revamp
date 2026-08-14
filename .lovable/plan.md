# Interior Architecture project pages — ERGO, Axis Securities, Federal Bank

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

Added to the archive under Interiors, slug `axis-securities`. 4 photos: reception with the lit green wall and Axis signage, the maroon/navy geometric meeting room, the executive cabin with stone-clad wall and leather chairs, and the mural breakout zone.

## 3. Federal Bank (Banking & Finance) — new project

Added under Interiors, slug `federal-bank`. 8 photos: the marble-floored reception with the yellow-inset desk and fluted wood wall, the whiteboard huddle room, the timber-fin lounge island against the blue/gold triangle-frosted glass fronts, the open workstation bay with the motivational quote wall and Federal Bank pillar graphics, the second workstation bay, the yellow-and-grey acoustic-panel cabin, the corner cabin with roller blinds, and the boardroom with the triangular light cove.

The brand's blue-and-gold triangular graphic language runs through all eight frames — the page narrative leads on that identity-driven interior approach.

Copy for both bank projects is drafted from the images in TOA's voice; facts (location, area, year, status) appear only once you send them — send write-ups like the ERGO one and I'll use them verbatim.

## 4. Sector tagging

All three projects gain a `sector` field matching the Expertise mega-menu naming ("Technology / IT", "Banking & Finance"), so sector landing pages can slot these in later with no rework.

## Technical notes

- Photos go through the CDN asset pipeline (`src/assets/projects/<slug>/*`), not committed as binaries.
- `src/data/portfolio.ts`: add `axis-securities` and `federal-bank` entries, add `sector` to the project type, add detail records (facts, overview, gallery) for all three, update the Ergo cover.
- No component changes needed — `portfolio.$slug.tsx` already renders facts, overview and gallery.

## Open items

- Axis Securities and Federal Bank write-ups and project facts.
- Whether Expertise sector landing pages (e.g. `/expertise/banking-finance`) should be built once more folders arrive.
