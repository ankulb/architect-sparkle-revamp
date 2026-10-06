# Add new Interior Architecture projects from Drive (Interior Architecture V2)

The V2 folder holds 9 sector folders. Most projects already have pages on the site. Five are new:

| Sector | Project | Material in Drive | What gets built |
|---|---|---|---|
| Banking & Finance | Grihum Housing Finance | Write-up + 16 photos | Full project page with gallery |
| IT & Software | Strux (Strux One) | Write-up + 13 photos | Full project page with gallery |
| IT & Software | Everlance | 8 photos, no write-up | Page named Everlance, gallery + short neutral intro |
| Healthcare + Pharma | Sava Global Healthcare | Write-up + same 13 photos as Strux | Full project page, same gallery as Strux (confirmed same office) |
| Engineering | Generac, Pune | Write-up, no photos | Page with facts and text only, no gallery |

The Education folder is empty, so nothing is added there. Existing projects (ERGO, ICICI, Columbia, BASF, etc.) are left as they are.

## Details
- Facts (client, city, area, date/year, status, sector label) and overview text taken from each write-up as written; City and Area shown where the write-up gives them, and I'll list any that are missing rather than invent them.
- An AI-edited photo in the Strux/Sava folder ("add TV in board room") is left out; any photos with people are left out, matching the Columbia approach.
- Each new project appears in the main portfolio under Interiors and on its sector page (Banking & Finance, IT & Software, Health & Pharma, Engineering), and in site search.
- Generac and Everlance cards use a plain styled tile/first photo respectively; Generac's page simply has no gallery section.

## Technical details
- Download images via the Drive connector into /tmp, resize to web size, upload with lovable-assets into `src/assets/projects/<slug>/`, register galleries in `src/data/projectAssets.ts`.
- Parse the PDFs/docx write-ups; add `projects` + `projectDetails` entries in `src/data/portfolio.ts` (sector grouping kept separate from source sector label per AGENTS.md).
- Add the new slugs to the relevant sector configs in `src/routes/expertise.$sector.tsx`; hide the gallery section in `portfolio.$slug.tsx` when a gallery is empty.
- Verify all five pages and the four sector pages at desktop/mobile; build clean.
