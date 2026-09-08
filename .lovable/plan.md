# Prasad Studios case study (Media sector)

The archive has 10 photos (web-sized JPGs, no compression needed) and the Prasad Studios logo. No write-up document, so the case study launches photo-led with a short placeholder narrative; facts swap in when the write-up arrives.

## Steps

1. **Upload assets** — `lovable-assets create` for the 10 photos and the logo (filenames lowercased, e.g. `prasad-1.jpg` … `prasad-10.jpg`, `prasad-studios-logo.png`) into pointers at `src/assets/projects/prasad-studios/`.
2. **Gallery manifest** — append `prasadStudiosGallery` (10 image URLs) to `src/data/projectAssets.ts`, following the existing `mslGroupGallery` pattern. Logo pointer imported separately.
3. **Portfolio data** (`src/data/portfolio.ts`):
   - Import `prasadStudiosGallery`.
   - Update the existing Prasad Studios archive tile to use `prasadStudiosGallery[0]`.
   - Add a `projectDetails` entry: slug `prasad-studios`, sector `Media`, client `Prasad Studios`, service `Interior Architecture`, image `prasadStudiosGallery[0]`, gallery `prasadStudiosGallery`, 1–2 placeholder description paragraphs (consistent with how MSL Group launched), area/status marked "—" until the write-up arrives.
4. **Verify** — check the build log, confirm no errors.

## Technical notes

- Sector page tile already links via `projectSlug: "prasad-studios"` (Media group), so only data files change.
- No binaries copied into the repo — CDN pointers only.
- Logo is kept as an asset for future use (client tiles currently show names only).
