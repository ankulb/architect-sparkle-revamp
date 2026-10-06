# Rename Everlance to Everllence

Correct the project name everywhere it appears on the site.

## Changes

1. **Project page data** (`src/data/portfolio.ts`)
   - Title, client name and the write-up sentence: "Everlance" → "Everllence".
   - Slug: `everlance` → `everllence`, so the page lives at `/portfolio/everllence`.

2. **Sector listing** (`src/routes/expertise.$sector.tsx`)
   - IT & Software client tile: "Everlance" → "Everllence", linked to the new slug.

3. **Internal names kept as-is**
   - Image files and import names (`everlance01`…`everlanceGallery`) stay unchanged — they are not visible to visitors, so no re-uploads needed.

## Verification

- Open `/portfolio/everllence`, the portfolio grid and the IT & Software sector page to confirm the new name shows everywhere and no broken links remain.
