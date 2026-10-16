# Write-up to page mapping (Google Sheet)

A Google Sheet, created in your Google Drive, that lists every write-up next to the website page it feeds.

## Columns
- Drive folder (Interior Architecture / Interior Architecture V2 / Writeups)
- Sector folder (e.g. 1. Banking & Finance)
- Project
- Write-up file name
- Google Drive link to the write-up (clickable)
- Website page link (published site, e.g. https://architect-sparkle-revamp.lovable.app/portfolio/axis-securities)
- Sector page link the project appears on
- Status: Matched / No page on site / Duplicate copy (same write-up in V2 or older version)

## Extra tabs
- Pages without a write-up (e.g. Nxtra, Atomberg)
- Write-ups without a page, if any

## Delivery
- Sheet named "TOA Write-ups to Website Pages Map" in your Google Drive; I'll share its link.
- Bold header row, frozen header, filters on, clickable links.

## Technical details
- Drive listing with file IDs via the Drive connector (all three folders); links built as `https://drive.google.com/file/d/<id>/view`.
- Page slugs from `src/data/portfolio.ts` and sector configs in `src/routes/expertise.$sector.tsx`, matched by project name with an alias table.
- Sheet created and filled through the Google Sheets connector (needs a Sheets connection; I'll prompt to connect if none exists). No site changes.
