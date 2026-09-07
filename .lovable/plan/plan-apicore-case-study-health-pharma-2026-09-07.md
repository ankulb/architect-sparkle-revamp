# Plan: Apicore case study (Health & Pharma)

Add a photo-rich case study for **Apicore**, matching the Sedmac / Emerson / VW ITS pattern.

## Steps

1. **Photos**: compress the 7 HDR shots in `/tmp/apicore/Apicore/Images/` for web and upload to the CDN; write pointers to `src/assets/projects/apicore/`.
2. **Gallery manifest**: append the 7 images to `src/data/projectAssets.ts` as the `apicore` entry.
3. **Project entry** (`src/data/portfolio.ts`): add/extend the Apicore project with:
   - Narrative from the write-up: a wellness-driven, human-centric 10,000 sq. ft. boutique workspace — natural materials, warm wood, layered lighting, biophilic elements, informal lounges and collaborative nooks.
   - Fact file: Client Apicore · 10,000 sq. ft. · Mumbai · Corporate Office · Completed 2022 · Category Corporate Interiors.
4. **Wire the slug** in `src/routes/expertise.$sector.tsx` so the Apicore tile on the Health & Pharma page opens the case study.
5. Verify the build is clean.

## Notes
- Same cinematic layout as the other sector case studies (hero, narrative, fact file, photo gallery).
- No new client names added anywhere; Apicore only appears under Health & Pharma as provided.
