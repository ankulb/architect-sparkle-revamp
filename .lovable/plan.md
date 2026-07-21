## Dynamic Section — "See how we're shaping the future"

Replace the current numbered `DynamicSections` (5 vertical alternating blocks) with a horizontal row of 7 tall portrait cards, modeled on the Colliers "See how we accelerate success" reference the user attached.

### Layout (desktop)
- Full-width band with border-top, dark canvas consistent with rest of homepage.
- Eyebrow: `OUR PRACTICE IN ACTION` (gold, tracked caps).
- Headline: **"See how we're shaping the future"** (display, light weight).
- Row of 7 tall cards, aspect ~2:5, edge-to-edge with 1px gaps (matches Colliers density).
  - Desktop (≥1280px): all 7 visible, horizontal scroll if viewport narrower.
  - Tablet (768–1279px): horizontal scroll-snap carousel, 3–4 cards visible.
  - Mobile (<768px): scroll-snap carousel, ~1.3 cards visible with peek.
- Each card:
  - Full-bleed image, dark gradient scrim from bottom.
  - Category caption bottom-left in tracked caps (e.g. `AWARDS & RECOGNITION`).
  - Short title below caption (2 lines max).
  - Hover: image scales 1.05, gold underline draws under title, subtle brightness lift.

### The 7 cards (order per user)
1. Awards & Recognition — "Recognized among India's leading practices"
2. In the News — "TOA in the press"
3. CSR — "Design in service of community"
4. Clients — "Trusted by 200+ brands worldwide"
5. Upcoming Projects — "What we're building next"
6. University Collaboration — "Mentoring the next generation"
7. AI in Architecture — "Designing with intelligent tools"

Images pulled from existing `UP` (WordPress uploads) set already used across `src/data/home.ts` and `src/data/about.ts` (CSR, team, project renders) — no new uploads required in this pass.

### Files
- `src/data/home.ts` — replace `dynamicSections` array with the 7-item shape `{ caption, title, image, href? }`. `href` optional; omit for now (all inert) or link to matching About/Portfolio routes where they exist (`/about/csr`, `/about/clientele`).
- `src/components/home/DynamicSections.tsx` — rewrite as horizontal card row with scroll-snap + Reveal on the header block only (cards fade in on their own via CSS on scroll into view to avoid staggering jank in a horizontal scroller).
- No changes to `src/routes/index.tsx` (section already mounted).

### Out of scope
- Individual landing pages for News / Upcoming / University / AI (cards render but don't route yet unless a matching page already exists).
- Any change to Hero, Expertise, Projects, Careers, Footer.
- New image uploads — reuse existing CDN images.
