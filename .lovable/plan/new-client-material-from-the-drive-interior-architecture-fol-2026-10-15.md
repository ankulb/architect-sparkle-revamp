# New client material from the Drive "Interior Architecture" folder

The Drive now has a fresh "Interior Architecture" folder (added today) alongside "Interior Architecture V2". Most client folders match what is already on the site. New material found:

| Client | New in Drive | What changes on the site |
|---|---|---|
| TTEC | Write-up + 7 photos | Real write-up replaces my placeholder text; facts added: Mumbai, 25,000 sq ft, Completed, sector label "Customer Experience & Digital Services". Photos already on the page stay. |
| Nxtra | 15 photos, no write-up (Telecom folder) | New Nxtra project page with a photo gallery and a short neutral intro, plus a Telecom sector page listing it |
| WebMD | Same write-up and 4 photos as before | No change. City, area and date are still missing |
| Atlas Copco | Write-up only, still no photos | No change. It keeps the styled tile |

## Details
- TTEC: overview uses the supplied wording; the headline line ("A global vision brought to life locally…") becomes the intro. TTEC also gets its city and area in the fact bar and the line under the title.
- Nxtra: photos resized for the web; any with people are left out. City, area and date are left off until a write-up arrives. I'll flag this in my reply.
- Telecom: a Telecom sector page is added back under Workspace Interiors, holding Nxtra. The other sector pages and their order stay the same, with Telecom placed last.
- Before building, every other client folder's file count is checked against its gallery on the site. Anything extra is reported to you, not added silently.

## Technical details
- Download through the linked Drive connection into /tmp, resize, upload with lovable-assets to `src/assets/projects/nxtra/`, add `nxtraGallery` to `src/data/projectAssets.ts`.
- `src/data/portfolio.ts`: update the `ttec` details (location, area, status, sectorLabel, description); add `nxtra` to `projects` and `projectDetails` (INTERIORS, sector "Telecom").
- `src/routes/expertise.$sector.tsx` plus the menu, footer and portfolio filters: add a Telecom sector config with Nxtra. Update mem://features/sector-naming to record that Telecom is back.
- Verify /portfolio/ttec, /portfolio/nxtra and the Telecom page on desktop and mobile; the build must be clean.
