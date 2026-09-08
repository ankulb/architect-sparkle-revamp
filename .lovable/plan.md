# Remove "Life at TOA" from Studio dropdown

## Change
In `src/data/home.ts`, delete the `aboutNav` entry:
```
{ label: "Life at TOA", to: "/about/life" },
```
(line 30) so the Studio dropdown no longer lists it.

No other files need to change — the entry is data-driven and consumed by the Header mega-menu.

## Verification
- Confirm build is clean via `/tmp/observability/build-errors.log`.
- Confirm "Life at TOA" no longer appears in the Studio dropdown in the preview.
