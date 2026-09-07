# Add 3i and Idea Forge case-study pages under IT & Software

You shared 10 interior photos for 3i (3i.zip) and 10 for Idea Forge (IdeaForge.zip, folder "Idea forge"). Plan is to give both clients full case-study pages, like ERGO, Axis Securities, Federal Bank and ICICI Securities.

## What will be built

### 1. 3i (new project)
- 10 photos uploaded to the CDN.
- New portfolio entry: name "3i", discipline Interior Architecture, sector IT & Software.
- Detail page automatically available at `/portfolio/3i` with hero, facts (Client: 3i, Sector: IT & Software, Discipline: Interior Architecture) and a gallery of all 10 photos.
- Short draft narrative paragraph — replace with the official write-up when you send it.
- IT & Software sector page: "3i" moves from a name-only tile to a real project card with photo and link.

### 2. Idea Forge (existing project, new photos)
- The "IdeaForge Headquarters, Mumbai" entry already exists but currently uses older website images.
- Upload the 10 new photos to the CDN and rebuild the entry's gallery with them (hero image becomes "1 FRONT.jpg").
- Enrich its metadata/facts if the current entry is thin; narrative stays as-is unless you send a write-up.

## Technical details
- Upload each image with `lovable-assets create` → pointer files under `src/assets/3i/` and `src/assets/ideaforge/`.
- Register all 20 in `src/data/projectAssets.ts`.
- Add `3i` to `projectDetails` in `src/data/portfolio.ts`; update the `ideaforge-headquarters-mumbai` entry's image/gallery to the new assets.
- In `src/routes/expertise.$sector.tsx`: IT & Software `projectSlugs` gains `"3i"`; remove `"3i"` from the name-only tile list. Idea Forge already renders as a project card.
- No navigation, header, or other sector changes.
