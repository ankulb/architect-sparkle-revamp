# Add real photos and case studies across sector pages

You shared photo sets for eight clients. Plan is to give each a full, photo-rich case study, like ERGO, Axis Securities, Federal Bank and ICICI Securities.

## IT & Software sector

### 1. 3i — new project
- 10 photos uploaded to the CDN.
- New portfolio entry "3i", Interior Architecture, page at `/portfolio/3i`, short draft narrative (replace when you send the official write-up).
- Sector page: "3i" becomes a real project card with photo and link.

### 2. Idea Forge — existing project, new photos
- Upload the 10 new photos; rebuild the "IdeaForge Headquarters, Mumbai" gallery (hero becomes "1 FRONT.jpg").

### 3. Intangles — existing project, new photos + write-up
- Parse "INTANGLES - WRITE UP.docx" for the official narrative and facts; update the entry.
- Upload the new photos (skipping "copy" duplicates) and rebuild its gallery.

## Engineering sector

### 4. JCI — existing project, new photos
- Upload the 7 new photos; rebuild the "Johnson Controls (JCI)" gallery (hero becomes "RECEPTION.jpg").

### 5. Vanderlane — new project
- 7 photos uploaded; parse "Concept Note-Vanderlande.docx" for narrative and facts.
- New entry "Vanderlane", Interior Architecture, page at `/portfolio/vanderlane`; becomes a real project card.

## Health & Pharma sector

### 6. Bharat Serum — new project
- 7 photos uploaded; new entry "Bharat Serum", Interior Architecture, page at `/portfolio/bharat-serum`, short draft narrative (replace when you send the write-up).
- Sector page: becomes a real project card.

### 7. Indira IVF — existing project, new photos + write-up
- Parse "Final Indira IVF WRITEUP.docx" for narrative and facts; update the entry.
- Upload the 15 new photos and rebuild its gallery.

## Media sector

### 8. Digital Domain — new project (first Media case study)
- 8 files: 7 JPGs plus one very large TIFF (124 MB) — the TIFF will be converted to a web-friendly JPG before upload.
- New entry "Digital Domain", Interior Architecture, page at `/portfolio/digital-domain`, short draft narrative (replace when you send the write-up).
- Media sector page: "Digital Domain" becomes a real project card with photo and link.

## Technical details
- Upload images with `lovable-assets create` → pointer files under `src/assets/{3i,ideaforge,intangles,jci,vanderlane,bharat-serum,indira-ivf,digital-domain}/`. Convert the TIFF with ImageMagick/ffmpeg first.
- Register all in `src/data/projectAssets.ts`.
- `src/data/portfolio.ts`: add `3i`, `vanderlane`, `bharat-serum`, `digital-domain` to `projectDetails`; update `ideaforge-headquarters-mumbai`, `intangles`, the JCI entry and `indira-ivf`.
- `src/routes/expertise.$sector.tsx`: add `"3i"` (IT & Software), `"vanderlane"` (Engineering), `"bharat-serum"` (Health & Pharma), `"digital-domain"` (Media) to `projectSlugs`; remove them from the name-only tile lists.
- No navigation, header, or other sector changes.
