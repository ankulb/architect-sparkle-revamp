# Volkswagen tile to VW ITS + standardised project facts format

## Change 1 — Homepage Volkswagen tile
- The "Volkswagen" tile in Featured Projects (src/data/home.ts) still points at the old live-site URL. Point it to the VW ITS project page on this site: href "/portfolio/vw-its". The tile already resolves internal links from that href, so no component change is needed.

## Change 2 — Project facts in one standard format
Every project page's facts panel (src/routes/portfolio.$slug.tsx) changes to exactly this row order and labels:

1. CLIENT
2. SECTOR
3. LOCATION & AREA
4. STATUS
5. YEAR
6. CATEGORY

- LOCATION & AREA is one combined row: city and area joined, e.g. "Mumbai · 26,500 sq. ft. + 12,000 sq. ft."; multi-city projects show as written, e.g. "Pune & Bengaluru · 63,000 sq. ft.". If either city or area is missing from the write-up, show only what exists; if both are missing, the row is omitted.
- SECTOR keeps the current behaviour: the write-up's own sector label when present, otherwise the site sector.
- YEAR shows the write-up's completion year or date (e.g. "2023", "July 2024").
- The current extra rows (City, Area, Date, Service) are replaced by the above; Service is dropped since the new format has six rows only.
- Facts missing from a write-up are omitted, never invented (existing rule).
- The hero one-liner under the title and the sector-page/clientele groupings are unchanged.

## Verification
- Check the facts panel on a sample: Axis Securities (two areas, single city), VW ITS (two cities), ICICI Securities, ERGO, and a page with missing facts (WebMD — no area/date).
- Check the homepage Volkswagen tile opens /portfolio/vw-its.
- Desktop and mobile; build clean.
