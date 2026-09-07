# Clean up sector pages — remove Clients section and fix IT & Software slugs

## Changes

File: `src/routes/expertise.$sector.tsx`

1. **Remove the entire "Clients / Partnerships in sector" section across all sector pages.** Delete the `{sector.clients.length > 0 ? (...) : null}` block (the section with the "Clients" eyebrow, the "Partnerships in {sector.name}" heading, and the client tile grid). The `clients` field and `Sector` type field can stay in the data for now, but nothing renders them.

2. **Remove the now-unused `LogoMarquee` import** (already removed earlier) — confirm no stale import remains.

3. **Remove the `GridBackdrop` import only if it is no longer used.** It is still used by the "Selected work" section below, so keep it.

## IT & Software project slug cleanup (in the same file)

4. **Remove the duplicate IdeaForge slug** — in the IT & Software `projectSlugs` array, drop `"ideaforge"` and keep only `"ideaforge-headquarters-mumbai"` so a single IdeaForge project card appears.

5. **Remove the Volkswagen slug** — drop `"volkswagen"` from the IT & Software `projectSlugs` array so no Volkswagen project card appears.

Resulting IT & Software `projectSlugs`:
`["ideaforge-headquarters-mumbai", "intangles", "ergo-technologies"]`

## Result
Every sector page shows only the hero, blueprint backdrop, and the project grid — no "Clients" section anywhere. The IT & Software page shows a single IdeaForge card, Intangles, and ERGO Technologies.
