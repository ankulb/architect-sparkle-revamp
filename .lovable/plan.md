# Add 3i project page under IT & Software

You shared 10 interior photos for the 3i project. Plan is to turn the "3i" named tile on the IT & Software sector page into a full project case study, like the ones already built for ERGO, Axis Securities, Federal Bank and ICICI Securities.

## What will be built

- **10 photos uploaded to the CDN** (from the 3i.zip you sent) so they load fast without bloating the project.
- **A new "3i" case-study entry** in the portfolio data with:
  - Project name: 3i
  - Discipline: Interior Architecture
  - Sector: IT & Software
  - Gallery of all 10 photos
  - Metadata rows (Client: 3i, Sector: IT & Software, Discipline: Interior Architecture)
  - A short placeholder narrative paragraph — I will write a draft; send me the official write-up (like the ERGO document) whenever ready and I'll replace it.
- **Project detail page** automatically available at `/portfolio/3i` (the existing project page renders hero, facts and photo gallery from the data entry — no new code needed).
- **IT & Software sector page**: the "3i" named tile becomes a real project card showing a 3i photo and linking to the case study.

## Technical details

- Upload each image with `lovable-assets create` → pointer files under `src/assets/3i/`.
- Register them in `src/data/projectAssets.ts` (the existing asset manifest).
- Add the `3i` entry to `src/data/portfolio.ts` (`projectDetails`) using the manifest, category Interiors.
- In `src/routes/expertise.$sector.tsx`, replace the named tile slug list for IT & Software: remove `"3i"` from name-only tiles and add `"3i"` to `projectSlugs`.
- No navigation, header, or other sector changes.
