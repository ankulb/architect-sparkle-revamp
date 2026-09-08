# Remove "Employee Stories" from Careers dropdown

## Change
In `src/data/home.ts`, delete the Careers dropdown entry:
```
{ label: "Employee Stories", href: "/#careers" },
```
(line 92) so the Careers dropdown no longer lists it.

No other files need to change — the nav is data-driven and consumed by the Header mega-menu.

## Verification
- Confirm build is clean via `/tmp/observability/build-errors.log`.
- Confirm "Employee Stories" no longer appears under Careers in the preview.
