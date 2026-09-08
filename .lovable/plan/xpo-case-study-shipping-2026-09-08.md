# XPO case study (Shipping)

## What the archive contains
- 6 photos in `XPO/` (DSC00777 – DSC01562 JPGs)
- No write-up document — a placeholder narrative will be used, same as MSL Group and Prasad Studios, ready to swap when a write-up arrives.

## Changes

1. **Images** — compress the 6 JPGs with ImageMagick (`-resize 1800x1800> -quality 80`, lowercased filenames) into a temp folder, then upload each via `lovable-assets` to CDN pointers at `src/assets/projects/xpo/`.

2. **`src/data/projectAssets.ts`** — append an `xpo` block: six `import` lines for the pointer JSONs and `export const xpoGallery = [xpo1.url, …, xpo6.url]`.

3. **`src/data/portfolio.ts`** —
   - Add `xpoGallery` to the gallery imports.
   - Point the existing XPO archive tile at `xpoGallery[0]`.
   - Add a `projectDetails` entry for slug `xpo`: sector Shipping, client XPO, service Corporate Interiors, placeholder description (noting the write-up can be provided later), gallery `xpoGallery`. Location/area/status marked as placeholders until the write-up arrives.

4. **Verify** — check `/tmp/observability/build-errors.log` shows a clean build.

The XPO tile on the Shipping expertise page already links via `projectSlug: "xpo"`, so it will open the new case study automatically.
