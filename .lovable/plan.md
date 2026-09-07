# Fix IT & Software sector page — titles and project slugs

## Problem
The IT & Software sector page (`/expertise/it-software`) shows incorrect and duplicate content:

1. **Client tile titles** — the `clients` array reads `["3i", "Idea Forge", "Intangles", "VW ITS"]`. The client wants exact titles: `3i`, `Idea forge`, `Intangles`, `VW ITS` (note the lowercase "f" in "forge").
2. **Duplicate IdeaForge project cards** — `projectSlugs` lists both `"ideaforge"` and `"ideaforge-headquarters-mumbai"`, so two IdeaForge cards appear in the project grid.
3. **Volkswagen project card** — `projectSlugs` includes `"volkswagen"`, pulling in a project titled "Volkswagen" that does not match the client name "VW ITS".
4. **ERGO project card** — `projectSlugs` includes `"ergo-technologies"`, which is an IT & Software client work, so it stays.

## Plan

File: `src/routes/expertise.$sector.tsx`

1. **Fix the client tile titles** — change the IT & Software `clients` array from
   `["3i", "Idea Forge", "Intangles", "VW ITS"]`
   to
   `["3i", "Idea forge", "Intangles", "VW ITS"]`.

2. **Remove the duplicate IdeaForge slug** — in the IT & Software `projectSlugs` array, drop `"ideaforge"` and keep only `"ideaforge-headquarters-mumbai"` so a single IdeaForge project card appears.

3. **Remove the Volkswagen slug** — drop `"volkswagen"` from the IT & Software `projectSlugs` array so no Volkswagen project card appears (the client tile "VW ITS" remains as the only reference to that account).

The resulting `projectSlugs` for IT & Software becomes:
`["ideaforge-headquarters-mumbai", "intangles", "ergo-technologies"]`

No other sectors are touched. The `clients` tile grid (already converted from LogoMarquee to tiles) will display exactly the four titles the client provided.
