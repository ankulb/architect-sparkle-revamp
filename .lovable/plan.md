# GCC homepage tile: dedicated stock image

## Current state
- In `src/data/home.ts`, the GCC tile in `dynamicSections` (line 208-214) reuses `gccTile` — a Columbia Ship Management project photo (`src/assets/projects/columbia-ship-management/dsc_7864.jpg.asset.json`).
- The other dynamic-section tiles (CSR, Sustainability, Global Collaborations, Research, Press) each have a dedicated image under `src/assets/dynamic/*.jpg.asset.json`.

## Change
1. Generate one stock-style image for GCC matching the visual tone of the other dynamic tiles (modern global workplace / collaborative capability-centre environment, no identifiable people, no text).
2. Save it as `src/assets/dynamic/gcc.jpg` and upload it as a CDN asset pointer (`src/assets/dynamic/gcc.jpg.asset.json`).
3. In `src/data/home.ts`, replace the `gccTile` import with the new `src/assets/dynamic/gcc.jpg.asset.json` pointer; `dynamicSections` keeps using `.url` — no other changes.

## Verification
- Build log clean.
- Check the homepage GCC tile in the browser (desktop + mobile, both themes) — image shows correctly with the tile text.
