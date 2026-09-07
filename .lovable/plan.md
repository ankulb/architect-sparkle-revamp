# Add real photos: 3i, Idea Forge, Intangles (IT & Software) and JCI (Engineering)

You shared photo sets for four clients. Plan is to give each a full, photo-rich case study, like ERGO, Axis Securities, Federal Bank and ICICI Securities.

## What will be built

### 1. 3i — new project (IT & Software)
- 10 photos uploaded to the CDN.
- New portfolio entry: name "3i", discipline Interior Architecture, sector IT & Software, gallery of all 10 photos.
- Detail page at `/portfolio/3i` with hero, facts and gallery.
- Short draft narrative — replace with the official write-up when you send it.
- IT & Software sector page: "3i" moves from a name-only tile to a real project card with photo and link.

### 2. Idea Forge — existing project, new photos (IT & Software)
- "IdeaForge Headquarters, Mumbai" already exists with older website images.
- Upload the 10 new photos to the CDN and rebuild its gallery (hero becomes "1 FRONT.jpg").

### 3. Intangles — existing project, new photos + write-up (IT & Software)
- "Intangles" already exists with older images.
- Parse the included "INTANGLES - WRITE UP.docx" for the official narrative and facts (area, location, completion) and update the entry.
- Upload the new photos (skipping "copy" duplicates) and rebuild its gallery.

### 4. JCI — existing project, new photos (Engineering)
- "Johnson Controls (JCI)" already exists under Engineering with an older image.
- Upload the 7 new photos to the CDN and rebuild its gallery (hero becomes "RECEPTION.jpg").

## Technical details
- Upload images with `lovable-assets create` → pointer files under `src/assets/3i/`, `src/assets/ideaforge/`, `src/assets/intangles/`, `src/assets/jci/`.
- Register all in `src/data/projectAssets.ts`.
- `src/data/portfolio.ts`: add `3i` to `projectDetails`; update `ideaforge-headquarters-mumbai`, `intangles` and the JCI entry's images/galleries (and Intangles narrative/metadata from the write-up).
- `src/routes/expertise.$sector.tsx`: IT & Software `projectSlugs` gains `"3i"`; remove `"3i"` from the name-only tile list.
- No navigation, header, or other sector changes.
