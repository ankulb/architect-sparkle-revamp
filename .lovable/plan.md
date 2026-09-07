# Add 3i, Idea Forge and Intangles case-study pages under IT & Software

You shared photo sets for three IT & Software clients: 3i (10 photos), Idea Forge (10 photos), and Intangles (~11 unique photos plus an official write-up document). Plan is to give all three full case-study pages, like ERGO, Axis Securities, Federal Bank and ICICI Securities.

## What will be built

### 1. 3i (new project)
- 10 photos uploaded to the CDN.
- New portfolio entry: name "3i", discipline Interior Architecture, sector IT & Software, gallery of all 10 photos.
- Detail page at `/portfolio/3i` with hero, facts and gallery.
- Short draft narrative — replace with the official write-up when you send it.
- IT & Software sector page: "3i" moves from a name-only tile to a real project card with photo and link.

### 2. Idea Forge (existing project, new photos)
- The "IdeaForge Headquarters, Mumbai" entry already exists with older website images.
- Upload the 10 new photos to the CDN and rebuild its gallery with them (hero becomes "1 FRONT.jpg").

### 3. Intangles (existing project, new photos + write-up)
- The "Intangles" entry already exists with older images.
- Parse the included "INTANGLES - WRITE UP.docx" for the official narrative and facts (area, location, completion) and update the entry accordingly.
- Upload the new photos (skipping the "copy" duplicates) to the CDN and rebuild its gallery.

## Technical details
- Upload images with `lovable-assets create` → pointer files under `src/assets/3i/`, `src/assets/ideaforge/`, `src/assets/intangles/`.
- Register all in `src/data/projectAssets.ts`.
- `src/data/portfolio.ts`: add `3i` to `projectDetails`; update `ideaforge-headquarters-mumbai` and `intangles` entries' images, galleries and (for Intangles) narrative/metadata.
- `src/routes/expertise.$sector.tsx`: IT & Software `projectSlugs` gains `"3i"`; remove `"3i"` from the name-only tile list. Idea Forge and Intangles already render as project cards.
- No navigation, header, or other sector changes.
