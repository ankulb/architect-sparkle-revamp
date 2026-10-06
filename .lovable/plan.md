# New Interior Architecture V2 content from Drive

The Drive folder has new material since the last update:

| Sector | Project | Material | What gets built |
|---|---|---|---|
| Green Field | Hyatt | Write-up + 9 photos | New project page with gallery; added to Green Field sector page |
| Engineering | Atlas COPCO | Write-up only, no photos | New project page, text only (styled tile card, like Generac was) |
| Engineering | Generac, Pune | Photo zip (164 MB) | Real photo gallery + real card image, replacing the generic interior picture |
| Engineering | Everllence | "Everllence India.docx" write-up | Real write-up and facts replace the placeholder one-liner; project moves from IT & Software to Engineering, matching the Drive folder |
| Health & Pharma | Sava Global | 13 more photos + PDF write-up | Gallery expanded with the additional office photos; write-up checked against the page and facts updated if they differ |

## Details
- Facts (client, city, area, date, status, sector label) and overview text taken from each write-up as written; anything missing is listed in my reply, not invented.
- The AI-edited "add TV in board room" image in the Sava folder is left out; any photos with people are left out, matching the Columbia approach.
- Everllence keeps its existing 5 photos; only the text, facts and sector placement change. The IT & Software page loses the Everllence tile and the Engineering page gains it.
- Atlas COPCO gets a plain styled tile until photos arrive; Hyatt's card uses its first photo.
- Each new/updated project appears in the portfolio grid under Interiors, on its sector page, and in site search.

## Technical details
- Download images via the Drive connector into /tmp, resize to web size, upload with lovable-assets into `src/assets/projects/<slug>/`, register galleries in `src/data/projectAssets.ts`.
- Parse the docx/PDF write-ups; add or update `projects` + `projectDetails` entries in `src/data/portfolio.ts` (sector grouping kept separate from source sector label per AGENTS.md).
- Update sector configs in `src/routes/expertise.$sector.tsx` (Green Field gains Hyatt, Engineering gains Atlas COPCO + Everllence, IT & Software loses Everllence).
- Verify all touched pages at desktop/mobile, both themes; build clean.
