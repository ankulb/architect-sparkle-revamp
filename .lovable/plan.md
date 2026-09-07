# Emerson case study

Add a photo-rich case study for Emerson under the Engineering sector, matching the other client pages.

## What happens

- The 12 Emerson photos are compressed for the web and uploaded to CDN storage. Five are from the main folder and seven are marked "Nashik"; all go into one Emerson gallery, with the Nashik front image leading that part of the sequence.
- A new Emerson project entry is created with a hero image and full gallery.
- The Emerson tile on the Engineering page becomes a clickable card with its own photo, opening the case study.

## About the write-up

No write-up document came with this set, so the case study will carry only the facts visible in the photos plus a short, neutral description of the workplace — client name, discipline (Corporate Interiors), and location Nashik for that portion. No area, completion date, or invented concept text. Send the Emerson write-up whenever it's ready and the narrative and figures get filled in.

## Technical notes

- Extract `EMERSON.zip`, resize/compress the 12 JPGs, upload with `lovable-assets`, add pointers and an `emersonGallery` to `src/data/projectAssets.ts`.
- Add an `emerson` entry to `projectDetails` in `src/data/portfolio.ts` (category Interiors, sector Engineering) and to the project list.
- In `src/routes/expertise.$sector.tsx`, change `{ name: "Emerson" }` to `{ name: "Emerson", projectSlug: "emerson" }`.
