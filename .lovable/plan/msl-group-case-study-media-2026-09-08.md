# MSL Group case study (Media)

The upload has 4 photos and no write-up, so this adds the photo gallery and a short placeholder story that can be replaced when the write-up arrives.

## What you'll see
- A new MSL Group project page under Media, with all four photos in the scrolling gallery.
- The MSL Group tile on the Media expertise page becomes clickable and opens the case study.
- The MSL Group entry in the projects archive uses the first photo as its cover.

## Details
- Compress the 4 JPGs (max 1800px, quality 80), upload via `lovable-assets` into `src/assets/projects/msl-group/`, no binaries in the repo.
- Add `mslGroupGallery` to `src/data/projectAssets.ts`.
- In `src/data/portfolio.ts`: add/replace the `msl-group` archive tile (category Interiors, location Mumbai) using `mslGroupGallery[0]`, plus a `projectDetails.msl-group` entry (sector Media, client MSL Group, service Corporate Interiors) with a brief narrative marked to be updated from the write-up.
- In `src/routes/expertise.$sector.tsx`, give the Media client `MSL Group` a `projectSlug: "msl-group"`.
- Verify the build is clean.

Facts not supplied (area, completion date, location) will be left out rather than invented — send the write-up and I'll fill them in.
