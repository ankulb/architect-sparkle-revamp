# Clientele page — real client logos

Replace the text-only client tiles with the actual logo images used on the live Team One Architects clientele page, keeping the moving marquee rows.

## What changes

- Pull every client logo from https://teamonearchitects.com/clientele/ (about 55 images) and host them on the project's own CDN so the page never depends on the old site staying online.
- Identify each logo visually (the source page has no names attached to the images) and label it, so hover text and accessibility read correctly.
- Show all of them: logos that match the existing sector lists (IT & Software, Engineering, Health & Pharma, Media, Shipping, Telecom, Green Field) stay under those headings; every remaining logo goes into a final "Partners across sectors" wall.
- Keep the current presentation: continuously scrolling rows, alternating direction, muted until hover where they come to full colour.
- Logos sit on a consistent tile so mixed shapes and backgrounds line up evenly.

## Notes

- A handful of logos may be unreadable or ambiguous; those keep a neutral label and I will list them for you to name.
- Nothing else on the page changes — hero, copy and layout stay as they are.

## Technical

- Download the ~55 `wp-content/uploads/2025/07/*.jpeg` logo files, compress (`magick -resize 800x800\> -quality 80`), upload with `lovable-assets create` into `src/assets/clients/`, and commit only the `.asset.json` pointers.
- Add a `src/data/clientLogos.ts` manifest mapping identified brand name to CDN URL.
- Extend `clientele.groups` in `src/data/about.ts` so each client carries an optional `logo`, plus a new catch-all group.
- Update `LogoMarquee` to render an `<img>` when a logo exists and fall back to the name otherwise; grayscale/opacity by default, full colour on hover.
