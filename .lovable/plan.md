# Commercial portfolio — three projects added

The uploaded Commercial folder has three projects with photographs and write-ups. They will be built the same way as the interior and architecture case studies already on the site.

## Projects

**Fujitsu — Pune** (10 photographs)
Greenfield commercial building, 1,25,000 sq. ft., completed 2011. The story is the five-floor Panchabhuta theme (Earth, Water, Wind, Fire, Sky) expressing Fujitsu's identity and its "Understanding you better – serving you best" vision.

**Brose — Pune** (9 photographs)
Industrial and logistics facility for the automotive sector, 1,25,000 sq. ft., completed. Linear process-driven layout, large-span column-free shop floors, architecture as an extension of the production line.

**Commercial Office Building — Kinshasa, DR Congo** (3 renders)
20-floor tower, 1,60,000 sq. ft., ongoing, completion 2028. Flexible column-free floor plates, climate-responsive shaded façade, active public ground plane.

This last one already exists on the site as a tile pointing at a low-resolution image from the old website. It will be upgraded into a full case study using the three new renders and the supplied write-up.

## What gets built

- A full case-study page for each project: cinematic hero, narrative, project facts (location, area, status, completion), and a scrolling photo gallery — matching the existing project pages.
- The Commercial expertise page gets all three projects listed, replacing the single placeholder entry, with a stronger lead drawn from the supplied write-ups.
- Photographs are optimised and served from the CDN, so nothing heavy is added to the project itself.

## Notes on accuracy

- Only facts from the supplied write-ups are used. Brose has no completion date in the document, so none will be shown.
- Where two versions of a write-up exist, the shorter "Formated - V2" edit is used as the page narrative, consistent with the earlier architecture pages. Fujitsu and Congo's longer originals inform supporting copy only where they add no new claims.
- Brose is an industrial and logistics facility rather than an office building; it sits under Commercial since that is the folder it arrived in. Say the word if it should have its own Industrial & Logistics category instead.

## Technical detail

- Optimise the 22 source images to max 2400px, upload via `lovable-assets`, and add pointer-backed galleries (`fujitsuPuneGallery`, `brosePuneGallery`, `congoOfficeGallery`) to `src/data/projectAssets.ts`.
- Add `fujitsu-pune` and `brose-pune` entries plus `projectDetails` records to `src/data/portfolio.ts` under the `ARCHITECTURE` category; update the existing `commercial-office-building` entry to use the new gallery and add its detail record.
- Update the `commercial` sector in `src/routes/expertise.$sector.tsx` with the three project mappings and a refreshed lead/hero image.
- Verify the build and check `/expertise/commercial` and the three project routes on desktop and mobile.
