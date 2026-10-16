# Write-up to page mapping sheet

A single Excel file that lists every write-up in Drive next to the website page it feeds.

## Columns
- Drive folder (Interior Architecture / Interior Architecture V2 / Writeups)
- Sector folder (e.g. 1. Banking & Finance)
- Project
- Write-up file name
- Google Drive link to the write-up (opens the document)
- Website page link (published site, e.g. https://architect-sparkle-revamp.lovable.app/portfolio/axis-securities)
- Sector page link the project appears on
- Status: Matched / No page on site / Page without write-up / Duplicate copy (same write-up in V2 or older version)

## Extra tabs
- Pages without a write-up (e.g. Nxtra, Atomberg)
- Write-ups without a page, if any

## Delivery
- Saved to Files as `TOA_Writeups_to_Pages_Map.xlsx`, added to the "TOA Revamp Handover Documents" collection.
- Styled to match the handover documents (navy headers, gold accents), with clickable links.

## Technical details
- Drive listing with file IDs via the connector (all three folders), links built as `https://drive.google.com/file/d/<id>/view`.
- Page slugs from `src/data/portfolio.ts` and sector configs in `src/routes/expertise.$sector.tsx`; matching by project name with a manual alias table.
- Built with xlsxwriter in /tmp, checked, then copied to /mnt/documents. No site changes.
