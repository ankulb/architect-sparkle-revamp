# New GCC page + homepage tile

## 1. New page: /gcc (Global Capability Centres)
- Uses your supplied write-up, lightly polished for grammar:
  - "the workplace becomes more than an office, it becomes a platform…" gets an em dash ("more than an office — it becomes a platform…") to fix the run-on sentence.
  - "Columbia Shipmanagement" is written as "Columbia Ship Management" to match the name used everywhere else on the site. Everything else stays as supplied.
- Same cinematic look as the other pages: photo hero (PageHero) with the headline "Building workplaces for global capabilities.", then the two body paragraphs, then an "Our GCC experience" section.
- Experience list shown as five name tiles: WebMD, ERGO Technology & Services, Columbia Ship Management, Voya, Volkswagen. ERGO, Columbia and Volkswagen link to their existing project pages; WebMD and Voya have no project pages yet, so their tiles stay unlinked until you add them.
- Its own page title/description/social-preview metadata.
- Added to the site search results ("GCC" under Pages).

## 2. Homepage tile
- New tile in the "See how we're shaping the future" section (Our practice in action row), placed last: caption "GCC", linking directly to /gcc.
- Tile image: an existing people-free GCC workspace photo from the Columbia Ship Management gallery (a different frame than the homepage featured-project one) — no people, per your earlier rule. Easy to swap if you'd prefer another photo.
- The row currently fits 6 tiles; it becomes 7 across on desktop so nothing wraps to a lonely second row (slightly narrower tiles, same style). Mobile/tablet layouts reflow as they already do.

## 3. Checks
- View /gcc and the homepage row on desktop and mobile in both themes.
- Confirm the tile links to the page, the page's project links work, and the build is clean.

## Technical details
- New route file src/routes/gcc.tsx (createFileRoute("/gcc")) with its own head(); reuses PageHero, StorySection, Reveal, GridBackdrop.
- GCC content (copy + experience list) in a small data module; tile added to dynamicSections in src/data/home.ts; grid column count in DynamicSections.tsx changed 6 → 7 at lg.
- SearchOverlay.tsx static page list gains { label: "GCC", to: "/gcc" }.
- Image pointers registered as asset JSON in src/assets like all other images.
