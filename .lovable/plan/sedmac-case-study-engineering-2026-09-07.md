# Sedmac case study (Engineering)

## Goal
Give Sedmac its own photo-rich case study page under the Engineering sector, matching the pattern used for JCI, Emerson, Vanderlane and the other sector projects.

## Steps
1. **Extract & parse** — Already unzipped: 6 images (`01, 03, 03(alt), 04, 05, 07`) plus `SEDMAC - FINAL.docx` and `SEDMAC -WRITE UP.docx`. Parse the write-up for narrative, facts and project details.
2. **Upload photos to CDN** — Compress/convert the PNGs/JPG for web, upload via `lovable-assets`, and save pointers in `src/assets/projects/sedmac/`.
3. **Data wiring** —
   - Append a gallery manifest entry to `src/data/projectAssets.ts`.
   - Add/complete the Sedmac entry in `src/data/portfolio.ts` with title, description, facts and gallery.
   - Ensure the `sedmac` slug is wired in `src/routes/expertise.$sector.tsx` so the Sedmac tile on the Engineering page opens the case study.
4. **Verify** — Check the build log and confirm the Sedmac tile renders and navigates to the full case study.

## Technical details
- Sector: Engineering (`/expertise/engineering`)
- Images: 6 files (one duplicate-numbered PNG/JPG pair — best version kept)
- Content source: the two DOCX write-ups in the archive
