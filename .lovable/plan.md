# Add real photos and case studies across sector pages

You shared photo sets for six clients. Plan is to give each a full, photo-rich case study, like ERGO, Axis Securities, Federal Bank and ICICI Securities.

## IT & Software sector

### 1. 3i — new project
- 10 photos uploaded to the CDN.
- New portfolio entry: name "3i", Interior Architecture, gallery of all 10 photos, page at `/portfolio/3i`.
- Short draft narrative — replace with the official write-up when you send it.
- Sector page: "3i" moves from a name-only tile to a real project card with photo and link.

### 2. Idea Forge — existing project, new photos
- Upload the 10 new photos; rebuild the gallery of "IdeaForge Headquarters, Mumbai" (hero becomes "1 FRONT.jpg").

### 3. Intangles — existing project, new photos + write-up
- Parse "INTANGLES - WRITE UP.docx" for the official narrative and facts; update the entry.
- Upload the new photos (skipping "copy" duplicates) and rebuild its gallery.

## Engineering sector

### 4. JCI — existing project, new photos
- Upload the 7 new photos; rebuild the "Johnson Controls (JCI)" gallery (hero becomes "RECEPTION.jpg").

### 5. Vanderlane — new project
- 7 photos uploaded to the CDN.
- Parse "Concept Note-Vanderlande.docx" for the official narrative and facts.
- New portfolio entry "Vanderlane", Interior Architecture, page at `/portfolio/vanderlane`.
- Sector page: "Vanderlane" moves from a name-only tile to a real project card.

## Health & Pharma sector

### 6. Bharat Serum — new project
- 7 photos uploaded to the CDN.
- New portfolio entry "Bharat Serum", Interior Architecture, page at `/portfolio/bharat-serum`.
- Short draft narrative — replace with the official write-up when you send it.
- Sector page: "Bharat Serum" moves from a name-only tile to a real project card.

## Technical details
- Upload images with `lovable-assets create` → pointer files under `src/assets/{3i,ideaforge,intangles,jci,vanderlane,bharat-serum}/`.
- Register all in `src/data/projectAssets.ts`.
- `src/data/portfolio.ts`: add `3i`, `vanderlane`, `bharat-serum` to `projectDetails`; update `ideaforge-headquarters-mumbai`, `intangles` and the JCI entry.
- `src/routes/expertise.$sector.tsx`: add `"3i"` (IT & Software), `"vanderlane"` (Engineering), `"bharat-serum"` (Health & Pharma) to `projectSlugs`; remove them from the name-only tile lists.
- No navigation, header, or other sector changes.
