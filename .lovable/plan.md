# Clientele tiles: full-bleed logos with visible names

## Goal
On the Clientele page (`/about/clientele`), make each client logo cover its tile (full-bleed, edge-to-edge) instead of sitting small and centered with whitespace, while keeping the brand name visible as a caption below the logo — same caption-below pattern as today.

## Current state (verified)
- `src/routes/about.clientele.tsx:49-55` renders each tile as a flex column: a logo image constrained to `max-h-12 max-w-[145px] object-contain` (small, centered, lots of empty space), then a tiny uppercase name span below.
- All clientele entries now have logo references in `src/data/about.ts` / `src/data/clientLogos.ts` (the missing-logo set was just completed), so every tile has a logo to show. A no-logo fallback is still kept for safety.
- Tiles are `aspect-[4/3]`, bordered, on a dark grid with `GridBackdrop`.

## Change
Edit only the tile markup in `src/routes/about.clientele.tsx` (no data changes, no new files):

1. Tile container: keep `aspect-[4/3]`, borders, `group`, `bg-background`, `hover:bg-card`, but add `overflow-hidden` and switch from centered flex to a top-down column so the logo area can fill.
2. Logo area: a `flex-1` region with `overflow-hidden`; the `<img>` becomes `h-full w-full object-cover` so it fills the region edge-to-edge (may crop, as chosen). Keep the existing grayscale + `opacity-65` default and color + full opacity on hover.
3. Name caption: a thin strip below the logo with a top border, `bg-background`, small uppercase tracked text, `text-muted-foreground` → `text-foreground` on hover. Same wording/placement as now, just relocated under a full logo.
4. Fallback: if a client has no logo, center the name in the full tile (no empty image region).
5. Keep everything else unchanged: sector headers, numbering, `Reveal` wrappers, grid columns, `GridBackdrop`, SEO/head, hero.

## Result
Each tile shows the logo covering the tile's main area with the brand name in a clean caption strip beneath it — tiles read as full, bold logo blocks instead of small floating logos, while every name stays legible. Grayscale-to-color hover behavior is preserved.

## Verify
- Playwright screenshot of `/about/clientele` at desktop and mobile widths after the edit.
- Confirm logos fill tiles, names are visible below, no overflow, no broken images.
- Check `/tmp/observability/build-errors.log` for `build OK`.
