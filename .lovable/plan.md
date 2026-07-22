## 1. Spatial cards — click always opens the overlay

In `src/components/home/DynamicSections.tsx` and `src/data/home.ts`:

- Remove the "route items navigate directly" branch in `handleOpen`. Every card click opens the immersive overlay, regardless of whether it has an `href`.
- In `ImmersiveOverlay`, when `item.href` is set, render a "Know more" pill button below the body copy. Internal hrefs (`/about/csr`, `/about/clientele`) use TanStack `<Link>`; external hrefs use `<a target="_blank" rel="noreferrer">`. Styled as a gold-bordered chip with an arrow, matching the site's existing gold accent.
- Keep close via ✕, Esc, and backdrop; keep the shared-element `layoutId` expansion.

## 2. Nav alignment to the flowchart

The flowchart top nav is: **Home · Expertise · Projects · Insights · Studio · Careers · Contact**. Per your instruction, Projects is ignored. Current site has Expertise, Insights, Studio, Careers, Contact — order matches, but the sub-nav under Studio and Insights doesn't match the flowchart yet.

Rework `nav` in `src/data/home.ts` so each item that has children in the flowchart carries them, and update `Header.tsx` to render a dropdown for any item with `children` (not just Studio):

- **Expertise** → dropdown listing the two divisions as anchors on the homepage:
  - Architecture & Urban Design → `/#expertise`
  - Interior Architecture → `/#expertise`
  (Kept simple since the homepage `ExpertiseDivisions` block already details sub-categories. No new routes.)
- **Insights** → dropdown with flowchart children, all anchoring to `/#insights` for now (no routes exist):
  - News & Media, Awards & Recognition, Events & Engagements, Videos / Podcasts / Interviews, Articles, Research Reports
- **Studio** → replace current `aboutNav` with the flowchart's Studio list, mapped to existing routes where possible:
  - Our Story → `/about`
  - Leadership → `/about/board`
  - CSR → `/about/csr`
  - Climate Action → `/about/csr` (no dedicated page; anchors to CSR for now)
  - Life at TOA → `/about/life`
  - Clientele → `/about/clientele`
  (Drops "Our Team" from top nav since flowchart doesn't include it; the `/about/team` route stays reachable via existing pages.)
- **Careers** → dropdown with flowchart children, all anchoring to `/#careers`:
  - Life at TOA, Trainee Program, Open Positions, Employee Stories
- **Contact** → keep as single external link (flowchart children are contact reasons, not separate destinations).

`Header.tsx` changes:
- Generalise the dropdown renderer so any nav item with `children` gets the hover dropdown (desktop) and expandable section (mobile), not just the one hardcoded to About.
- Mobile: replace the single `aboutOpen` state with a per-item open map so multiple dropdowns can expand independently.
- Child links: internal `to` uses `<Link>`; anchor `href` (like `/#insights`) uses `<a>`.

## Out of scope

- No new routes for Insights sub-items, Climate Action, or Careers sub-items — they anchor to their respective homepage sections until dedicated pages are requested.
- Projects nav item intentionally omitted per your instruction.
- No changes to hero, expertise section content, careers section, or footer.

## Files touched

- `src/components/home/DynamicSections.tsx` — always open overlay; add "Know more" button.
- `src/data/home.ts` — restructure `nav` with children for Expertise, Insights, Studio, Careers.
- `src/components/layout/Header.tsx` — generic dropdown rendering for any item with `children`; per-item mobile expand state.
