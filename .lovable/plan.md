## Current footer vs. wireframe

The wireframe footer calls for these blocks (in a single strip): **Contact · News · Vendor Registration CTA · Policy · Feedback · Expertise · Social Media Links (LinkedIn, Instagram, Facebook, YouTube)**.

The current footer has an unrelated 4‑column layout (brand blurb, Explore nav mirror, About sub‑nav, Studio address). No vendor CTA, no policy/feedback, no social icons, no news link, and Expertise is buried inside the Explore list.

## Rebuild plan (frontend only, `src/components/layout/Footer.tsx`)

Replace the 4‑column grid with a wireframe‑accurate layout:

1. **Top row — brand + Vendor Registration CTA**
   - Left: TOA logo + one‑line signature ("We design as one. We deliver as one.").
   - Right: prominent gold‑outline CTA button **"Vendor Registration →"** (links to `/vendor-registration` placeholder / mailto until a route exists — will use `mailto:info@teamonearchitects.com?subject=Vendor%20Registration` for now).

2. **Middle row — 4 link columns** (matches wireframe tokens)
   - **Expertise**: Architecture & Urban Design, Interior Architecture (anchors to `/#expertise`).
   - **Studio**: Our Story, Leadership, CSR, Life at TOA, Clientele (reuses `aboutNav`).
   - **Connect**: Contact, News (`/#insights`), Feedback (`mailto:` with subject), Careers (`/#careers`).
   - **Legal**: Privacy Policy, Terms of Use, Cookie Policy (placeholder anchors `#` for now — no new routes created).

3. **Bottom bar**
   - Left: `© {year} Team One Architects. All rights reserved.`
   - Center: address line (Mumbai, India · info@teamonearchitects.com).
   - Right: **Social icons** — LinkedIn, Instagram, Facebook, YouTube (lucide-react icons, gold hover, 20px, square hit target, `aria-label` each). Links to the brand's public profiles (placeholder `#` if unknown, but LinkedIn → `https://www.linkedin.com/company/team-one-architects/`).

## Styling
- Keep existing tokens: `bg-background`, `border-border`, `text-muted-foreground`, `text-gold`, font-display for signature.
- Vendor CTA: `border border-gold text-gold hover:bg-gold hover:text-background` pill with arrow.
- Column headings: existing `text-xs uppercase tracking-[0.2em] text-gold`.
- Social icons: `hover:text-gold` transition, `border border-border rounded-full p-2` chips for a subtle architectural stamp feel.

## Out of scope
- No new routes (Policy, Vendor Registration, Feedback resolve to `#` or `mailto:` for now — flag to user in reply so they can confirm real URLs).
- No changes to header nav, home sections, or data files beyond footer.
