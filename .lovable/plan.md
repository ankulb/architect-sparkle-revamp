## Team One Architects — Cinematic Homepage Revamp

A full dark, immersive homepage that borrows the cinematic hero and scroll-reveal feel of Ultra Confidentiel and the multi-speed parallax project gallery of M Moser, rebuilt around TOA's real content.

### Design direction
- **Theme:** Full dark cinematic. Near-black background (`#0A0A0B`), off-white text (`#F5F4F1`), muted grey secondary text, and a single warm accent (architectural amber/bronze `#C8A35B`) used sparingly for eyebrows, hover lines, and the audio/scroll cues. Deep contrast, lots of negative space.
- **Typography:** Large light-weight display headings (Cormorant-style elegance is too soft for architecture, so we use a clean geometric: **Outfit** for display + **Figtree** for body) loaded via `@fontsource` packages. Generous letter-spacing on small uppercase eyebrows.
- **Motion:** Framer Motion (`motion/react`) for entrance reveals (fade + rise), scroll-linked parallax on gallery columns, count-up stats, and a slow Ken-Burns zoom/crossfade on the hero. Restrained, slow easing — premium not flashy.

### Page structure (top to bottom)
1. **Header shell** — transparent over hero, condenses to solid on scroll. TOA logo left; nav (Expertise, Projects, About, Insights, Contact) + a globe/menu affordance right. Mobile: slide-in overlay menu.
2. **Hero** — full-viewport rotating project images (TOA's existing photos) with slow crossfade + zoom. Centered: amber eyebrow ("INSPIRING SPACES"), large light headline "Designing Spaces That Work, Inspire and Endure", and a rotating expertise label cycling Urban Design & City Planning / Commercial & Institutional Architecture / Corporate Interiors. Scroll-down cue + optional mute toggle styled like Ultra.
3. **Stats + About** — "We Design as One. We deliver as One." intro paragraph, then four count-up stats (25 Years of Legacy, 490+ Projects, 115+ Employees, 20% YoY Growth) that animate when scrolled into view.
4. **Featured Projects gallery** — M Moser-style staggered masonry of TOA projects (APICORE, MMRDA HQ, JIO School, Volkswagen, Atomberg, INFINX, etc.). Columns scroll at different speeds (parallax); images sit dimmed and brighten + reveal title/category on hover.
5. **Responsibilities** — three editorial cards (Design with Purpose, Sustainability at the Core, Beyond the Drawing Board) with the "Good design serves people…" quote.
6. **Testimonials** — auto-advancing quote carousel (Rashmi Arya, Subrata Bhattacharya, Tan Kwang Liang).
7. **Latest Insights** — three most-recent blog cards with cover images and titles.
8. **Footer shell** — dark, multi-column: brand line, nav links, Mumbai location, contact, social. Links point to real TOA URLs / in-page anchors.

### Technical notes
- TanStack Start: replace placeholder `src/routes/index.tsx` with the composed homepage; build section components under `src/components/home/` and shared `Header`/`Footer` under `src/components/layout/`.
- Tailwind v4: define color + font tokens in `src/styles.css` via `@theme` (no `tailwind.config.ts`); load fonts with `@fontsource/outfit` + `@fontsource/figtree` imported in the app entry.
- Add `motion` (Framer Motion) via `bun add`. Build small reusable hooks for in-view reveal, count-up, and scroll parallax.
- Images: reuse TOA's existing hosted project/blog image URLs directly (hero rotation, gallery, insights). No backend needed.
- SEO: set route `head()` with TOA title/description, single H1, semantic sections, alt text, responsive viewport.
- Verify the build and capture a screenshot via Playwright against the local preview to confirm the dark hero, animations, and gallery render correctly.

### Out of scope
- Inner pages (Expertise, individual project, blog detail) — nav/footer links route to existing TOA URLs or anchors as placeholders.
- No CMS/backend; content is hardcoded from the current site.