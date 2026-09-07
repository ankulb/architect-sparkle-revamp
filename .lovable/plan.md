# Remove Suraj's profile from the team page

## Change
Delete the single team entry for **Suraj Lazar** (Associate Director) in `src/data/about.ts` (line 105, inside the `team.core` array):

```ts
{ name: "Suraj Lazar", role: "Associate Director", image: `${UP}/2021/10/Suraj-Lazar-1.png` },
```

## Scope
- One line removed from the `team.core` array.
- No other pages or components reference Suraj, so the team page (`/about/team`) simply renders one fewer profile card. Layout auto-adjusts.

## Verification
- Load `/about/team` and confirm Suraj Lazar no longer appears.
- Confirm the remaining core team (Laxmikant Sawant, Varsha Changedia) still renders correctly.
