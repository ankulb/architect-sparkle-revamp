# GCC page: stock image + Generac

## Current state
- The GCC tile in `dynamicSections` (`src/data/home.ts`, lines 208-214) reuses `gccTile` — a Columbia Ship Management project photo (`src/assets/projects/columbia-ship-management/dsc_7864.jpg.asset.json`). The other dynamic-section tiles (CSR, Sustainability, Global Collaborations, Research, Press) each have a dedicated image under `src/assets/dynamic/*.jpg.asset.json`.
- `src/data/gcc.ts` also reuses Columbia photos for the GCC hero and tile, and its `experience` list is WebMD, ERGO Technology & Services, Columbia Ship Management, Voya, Volkswagen — no Generac.

## Changes
1. Generate one stock-style image for GCC matching the visual tone of the other dynamic tiles (modern global workplace / collaborative capability-centre environment, no identifiable people, no text). Save as `src/assets/dynamic/gcc.jpg` and upload as a CDN asset pointer (`src/assets/dynamic/gcc.jpg.asset.json`).
2. In `src/data/home.ts`, replace the `gccTile` import with the new pointer; `dynamicSections` keeps using `.url` — no other changes there.
3. In `src/data/gcc.ts`, add `{ name: "Generac", to: "/portfolio/generac-pune" }` to `experience` (Generac, Pune already has a project page).
4. Keep the GCC page hero as is unless the new stock image reads better there — hero/tile on the GCC page stay Columbia photos for now unless the stock image clearly fits; only the homepage tile image changes in this pass.

## Verification
- Build log clean.
- Check the homepage GCC tile and the /gcc experience list in the browser (desktop + mobile, both themes).
