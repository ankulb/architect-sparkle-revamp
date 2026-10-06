# Everllence rename + Sava Global Healthcare photos

## 1. Rename Everlance to Everllence

Correct the project name everywhere it appears on the site:

- **Project page data** (`src/data/portfolio.ts`): title, client name and write-up sentence become "Everllence"; slug changes from `everlance` to `everllence`, so the page lives at `/portfolio/everllence`.
- **IT & Software sector listing** (`src/routes/expertise.$sector.tsx`): client tile renamed and linked to the new slug.
- Internal image filenames/imports (`everlance01`…, `everlanceGallery`) stay as-is — they are not visible to visitors, so no re-uploads needed.

## 2. Sava Global Healthcare — real project photos

The site currently borrows placeholder images from the Strux One project for Sava Global Healthcare. Replace them with the 8 people-free photos from the uploaded archive (reception with SAVA branding, workstations, cabins, meeting rooms):

- Upload each photo via the assets CDN and register them as the Sava gallery (`savaGallery`).
- Use the reception photo as the project hero, portfolio-grid tile and gallery opener.
- Update `src/data/projectAssets.ts` and the `sava-global-healthcare` entry in `src/data/portfolio.ts` to use the new gallery.
- Keep the existing Sava write-up text unchanged unless the photos clearly contradict it.

Note: the archive also contained a "Generac Pune.docx" write-up — its content (client, sector, location, status, overview) is already live on the Generac page, so no change is needed there. Generac still shows a general interior image until its real photos arrive.

## Verification

- Open `/portfolio/everllence` and the IT & Software sector page to confirm the rename with no broken links.
- Open `/portfolio/sava-global-healthcare`, the Health & Pharma sector page and the portfolio grid to confirm the real photos render in both themes.
