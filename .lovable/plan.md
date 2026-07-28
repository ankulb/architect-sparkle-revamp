## Homepage revamp — round of adjustments

Scope covers the visible/structural changes we can make now. Content-dependent items (final expertise order, workspace photos, section copy) will land in a later pass once TOA shares them.

### 1. Hero headline visibility
The current headline uses `font-light` with a soft text-shadow over a busy scrim, so it recedes into the imagery.
- Bump the headline weight from `font-light` to `font-normal` (and `font-medium` on the wireframe brand line, slide 1).
- Increase size on desktop (`xl:text-[5rem]` → keep line-height tight) and widen tracking slightly.
- Strengthen the bottom scrim (`from-background/95 via-background/50`) and add a subtle dark radial behind the text block only — keeps images cinematic, guarantees contrast.
- Kicker: brighten from gold to a higher-contrast gold with a stronger shadow.
- No changes to slide images, timing, or animation.

### 2. Mix Architecture + Interior imagery in the hero
Current 5 slides already alternate categories (Luxury Housing, Commercial, Data Centres, Hospitality, Interior). We'll leave the set as-is for now and swap/re-order once TOA shares the final selection. No code change this round unless you want a specific new mix immediately.

### 3. Split "Featured Projects" into Architecture & Interiors
`ProjectsGallery` currently shows one combined grid. We'll:
- Add a `category: "architecture" | "interiors"` field to each project in `src/data/portfolio.ts` (best-guess mapping now, TOA can correct later).
- Restructure `ProjectsGallery.tsx` into two stacked sections, each with its own eyebrow + heading ("Architecture" / "Interiors") and its own masonry grid.
- Keep the same card component, hover, and Reveal animations — purely a structural split, no new motion work (per your note that animation is locked later).

### 4. Animation / look-and-feel
Noted — no motion changes this round. Existing hero, dynamic sections, and portfolio animations stay.

### 5. Expertise dropdown order
Leaving the current sub-category order in `expertiseGroups` (`src/data/home.ts`) untouched. Will re-sequence once TOA sends the final list. No code change now.

### 6. Leadership split into two pages
Currently `/about/board` renders everyone from `board.people` in `src/data/about.ts`. We'll:
- Rename the current route's intent to **Board of Directors** and filter it to just **Ar. Parish S. Kapse** and **Ar. Aditya B. Yamsanwar**. Update the page heading/eyebrow and `head()` meta accordingly.
- Create a new route `src/routes/about.anchors.tsx` titled **Anchors of TOA** for the remaining leadership, reusing `PageHero` + `PeopleGrid` for a consistent look.
- Split `board.people` in `src/data/about.ts` into `board.directors` (the two founders) and `board.anchors` (everyone else); wire each page to its slice.
- Update the Studio dropdown in `src/data/home.ts`: replace the single "Leadership" entry with **Board of Directors** (`/about/board`) and **Anchors of TOA** (`/about/anchors`).
- Footer links updated to match.

### 7. Distinct visual identity (less reference-like)
Small, safe additions that reinforce an architectural identity without redesigning sections:
- Add a thin gold "measurement tick" rule under each section eyebrow (little vertical ticks + a horizontal hairline) — a recurring motif used site-wide.
- Add subtle corner crosshair marks (`CornerMarks`, already in the codebase) to the Hero and ProjectsGallery sections.
- Introduce a numbered section index (`01 — Architecture`, `02 — Interiors`, etc.) rendered in mono type as a running counter down the homepage.
- These are all presentation-only and use existing tokens (`--gold`, existing fonts).

### 8. Content / images from TOA & Kaizzen
Deferred — no code change until we receive the workspace images and section copy. When they arrive we'll upload via `lovable-assets` and swap into the relevant sections.

---

### Files touched
- `src/components/home/Hero.tsx` — headline weight/size/scrim.
- `src/components/home/ProjectsGallery.tsx` — split into two category sections.
- `src/data/portfolio.ts` — add `category` field.
- `src/data/about.ts` — split `board.people` into `directors` + `anchors`.
- `src/routes/about.board.tsx` — filter to directors, update copy + meta.
- `src/routes/about.anchors.tsx` — new page for Anchors of TOA.
- `src/data/home.ts` — Studio dropdown entries + footer link source.
- `src/components/layout/Footer.tsx` — matching links.
- `src/components/home/*` — add tick-rule motif + corner marks + section numbers (Hero, ProjectsGallery, Careers, DynamicSections eyebrows).

### Deferred (waiting on TOA / Kaizzen)
- Final expertise category order.
- Workspace photography.
- Final headline & section copy per section.
- Any locked-in animation direction.
