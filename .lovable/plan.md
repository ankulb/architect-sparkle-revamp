# About Section — Cinematic Page Suite

Build the six About-section pages as real TanStack routes, styled in the same dark cinematic system as the homepage (Outfit/Figtree fonts, gold accent, `Reveal`/`CountUp`, motion). Each page opens with a full-height **animated, story-driven hero** and continues with scroll-revealed editorial sections. All content is pulled from the live site.

## Routes & files

```text
src/routes/about.tsx              -> /about            (About Us)
src/routes/about.board.tsx        -> /about/board      (Board of Directors)
src/routes/about.team.tsx         -> /about/team       (Our Team)
src/routes/about.clientele.tsx    -> /about/clientele  (Clientele)
src/routes/about.csr.tsx          -> /about/csr        (CSR)
src/routes/about.life.tsx         -> /about/life       (Life at TOA)
```

Each route gets its own `head()` (unique title, description, og:title/description, and a leaf-level og:image). Each page reuses `<Header />` + `<Footer />` and the `bg-background text-foreground` shell.

## Shared building blocks (new components)

- **`PageHero.tsx`** — the cinematic, reusable hero used by every page. Features:
  - Full-screen background image with slow Ken-Burns zoom + dark cinematic gradient overlays (same treatment as homepage `Hero`).
  - **Storytelling narrative**: a small gold eyebrow/kicker, a large display headline that animates in word-by-word (staggered mask reveal), and a sub-narrative line that fades up after it.
  - Optional rotating/sequenced "story phrases" for pages that benefit (e.g. Life at TOA), and a scroll cue.
  - Props: `eyebrow`, `title`, `lead`, `image`, optional `phrases[]`. Keeps motion consistent across all six pages.
- **`StorySection.tsx`** — a small editorial text block (eyebrow + heading + body) wrapped in `Reveal`, for vision/mission/objective copy.
- **`PeopleGrid.tsx`** — responsive card grid for people (photo with grayscale→color hover, name, role), staggered reveal. Used by Board and Team.
- **`home.ts` companion data file `about.ts`** — all About-section content (hero copy, people, values, CSR partners, clientele categories, Life-at-TOA blocks) in one typed module, mirroring the `home.ts` pattern.

## Page-by-page content & layout

**1. About Us (`/about`)**
- Hero: eyebrow "Decades of Design. Driven by Vision", headline "Creating spaces that matter", lead = the firm intro (founders, 25-year legacy, Fortune 500, GCC, IGBC/wellness).
- Sections: Vision & Mission (two `StorySection`s side by side), an impact stat strip (Repeat Clients / Design Awards / Increase in Productivity / Drop in Attrition) using `CountUp`, and **TOA Core Values** cards (Design First, Experiential Architecture, Innovation Beyond AI, Collaboration Excellence).

**2. Board of Directors (`/about/board`)**
- Hero narrative: "The future isn't imagined alone — it's built together, brick by brick, mind by mind."
- `PeopleGrid` of the 5 directors (Parish S. Kapse, Aditya B. Yamsanwar, Bharat Yamsanwar, Jyoti Yamsanwar, Rupali Kapse) with their live photo URLs.

**3. Our Team (`/about/team`)**
- Hero same narrative thread, headline "The people behind the practice".
- Two `PeopleGrid` blocks: **Core Team** (Laxmikant Sawant, Suraj Lazar, Varsha Changedia) and **Emerging Leaders** (Tasheen Issani, Mahesh Dhanawade, Abhijit Sutar, Archiit Chatterjee, Hiral Parekh, Hiral Chouhan, Alpesh Parab) with live photos/roles.

**4. Clientele (`/about/clientele`)**
- Hero: "Trusted by the Best. Chosen for Vision."
- Logo wall grouped by sector (Engineering, IT & Software, etc.) using the live client logo image URLs, each group in a `Reveal` with a subtle hover lift. (Logos shown on light cards so brand marks stay legible.)

**5. CSR (`/about/csr`)**
- Hero: "Our Commitment to Social Impact", lead = design-for-social-impact intro.
- Sections: CSR Objective `StorySection`, the two CSR images, and a partner grid (Jivan Jyot, XL Target, Dharti, Sant Gadge Maharaj, Give Welfare, Vijay Shikshan Sanstha, Lift for Upliftment, Yuva Unstoppable, Manilal Gandhi Trust, Deepstambh) as cards with name, description, and outbound website links.

**6. Life at TOA (`/about/life`)**
- Most cinematic hero: rotating story phrases ("Where spaces are built. And so are people.", "A team that owns, builds, and evolves.").
- Narrative scroll sections for: A Culture of Builders, Where Learning is Real, Collaboration Without Boundaries, Driven by Scale, Moments That Define Us, A Place to Grow, The TOA Mindset, Why TOA — alternating image/text editorial layout with the Family Day photo and bullet lists styled as accent-marked items.

## Navigation wiring

- Convert the header "About" item into a dropdown (desktop) / nested links (mobile menu) pointing to the six internal routes, using TanStack `<Link>`. Keep the other nav items as-is.
- Footer "Explore" list gains the About sub-links.
- Internal navigation uses `<Link to=...>`; external links (client/CSR/portfolio sites) stay as `<a>`.

## Technical notes

- Images load directly from `teamonearchitects.com/wp-content/...` URLs (same approach already used in `home.ts`) — no asset downloads needed.
- Motion via `motion/react` (already installed); reuse `Reveal` and `CountUp`; no new dependencies.
- All colors use existing semantic tokens (`bg-background`, `text-foreground`, `text-gold`, `text-muted-foreground`, `border-border`) so both dark and light themes work.
- Pure frontend/presentation work — no backend, no data layer changes beyond the new static `about.ts` content module.
