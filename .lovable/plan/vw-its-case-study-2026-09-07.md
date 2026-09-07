# VW ITS case study

Add a photo-rich case study for VW ITS under the IT & Software sector, matching the other client pages.

## What happens

- The 8 VW ITS photos are compressed for the web and uploaded to CDN storage.
- The supplied write-up document is read and used as the project narrative and fact list (location, scope, area, year) — no invented details.
- A new VW ITS project entry is created with a hero image, story text and a full gallery.
- The VW ITS tile on the IT & Software page becomes a clickable card with its own photo, opening the case study.

## Technical notes

- Extract `VW_ITS.zip`, resize/compress the 8 JPGs, upload with `lovable-assets`, and add pointers to `src/data/projectAssets.ts`.
- Parse `VW ITS/Write up/VWITS -Write Up.docx` for the narrative and metadata.
- Add a `vw-its` entry to `projectDetails` in `src/data/portfolio.ts` (discipline: Interior Architecture, sector: IT & Software).
- In `src/routes/expertise.$sector.tsx`, change `{ name: "VW ITS" }` to `{ name: "VW ITS", projectSlug: "vw-its" }`.
