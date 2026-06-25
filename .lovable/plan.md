# Refinements + LinkedIn, brand logos & clientele carousel

Presentation-layer work across the homepage and About suite. No backend/business-logic changes.

## 1. Grid glow + bigger grid (from prior request)

`src/components/graphics/InteractiveGrid.tsx`
- Reduce the warm orange-gold core glow so it no longer dominates section text: drop opacity multiplier `0.5 → ~0.22`, smaller/softer falloff.
- Lower the revealed gold-grid line opacity (~`0.7×`) so it reads as a subtle trace.
- Increase default `cellSize` `48 → ~96px` for a larger blueprint scale; nudge base-grid opacity down.

`src/components/graphics/GridBackdrop.tsx`
- Update default `cellSize` to match (~96px).

## 2. About hero — remove overlay, add "big reveal"

`src/components/about/PageHero.tsx`
- Remove the heavy stacked dark overlays.
- Animate the hero image in with a cinematic `clip-path` wipe opening from center (~1.2s) combined with the existing slow Ken-Burns zoom, plus a thin gold sweep line on the reveal edge.
- Keep text legible with a localized bottom-left scrim behind the headline only (not the full frame) + subtle text shadow.
- Keep word-by-word headline rise, rotating phrases, scroll cue; retime to start as the reveal completes.
- Respect `prefers-reduced-motion` (skip wipe, fade only).

## 3. LinkedIn on team & board members

All members link to the **Team One Architects company LinkedIn page** (single URL, stored once in `src/data/about.ts`).

`src/components/about/PeopleGrid.tsx`
- Add a LinkedIn icon button (Lucide `Linkedin`) that appears on each card (visible, gold on hover) linking to the company LinkedIn in a new tab with `rel="noopener noreferrer"` and an aria-label like "View {name} on LinkedIn".
- Used by both `/about/board` and `/about/team` (both already render `PeopleGrid`).

## 4. Brand logos where brand names appear

Auto-source each brand's logo (from its website/favicon via Clearbit-style logo URL or the org's own site), download, host through `lovable-assets`, and store the pointer URL in data. Skip any with no resolvable logo (keep the styled text name as fallback).

- **Testimonials** (`src/data/home.ts` + `src/components/home/Testimonials.tsx`): add a `logo` field (e.g. Johnson Controls) and render a small monochrome logo near the attribution; text-only fallback when absent.
- **CSR partners** (`src/data/about.ts` + `src/routes/about.csr.tsx`): add a `logo` field per partner; render the logo in/above each partner card. Partners with a `href` already link out; logos become the visual anchor.

## 5. Clientele — infinite carousel, sector-grouped, grayscale→color

- Re-scrape `https://teamonearchitects.com/clientele/` to collect the full client-logo set and organize into the sectors shown live (e.g. Engineering, IT & Software, and any others), replacing the current placeholder/duplicated logos in `clientele.groups`.
- New `src/components/about/LogoMarquee.tsx`: a CSS-transform infinite marquee (duplicated track for seamless loop) that pauses on hover. Logos render **grayscale + dimmed**, transitioning to **full color** on hover of the individual logo.
- `src/routes/about.clientele.tsx`: keep each sector's label heading (Reveal), render one `LogoMarquee` per sector; alternate scroll direction per row for visual rhythm. Respect `prefers-reduced-motion` (static wrapped grid fallback).

## Technical notes
- Reveal/marquee use Motion (`motion/react`) / CSS transforms; GPU-friendly.
- Brand/client logos go through `lovable-assets` (CDN pointers committed as `.asset.json`), not committed binaries.
- Verify with Playwright screenshots: one About hero (legibility without full overlay), a homepage section (softer glow), the clientele carousel (grayscale→color), and a team card (LinkedIn icon).

## Files
- `src/components/graphics/InteractiveGrid.tsx`, `GridBackdrop.tsx`
- `src/components/about/PageHero.tsx`, `PeopleGrid.tsx`, new `LogoMarquee.tsx`
- `src/components/home/Testimonials.tsx`
- `src/routes/about.clientele.tsx`, `about.csr.tsx`
- `src/data/about.ts`, `src/data/home.ts`