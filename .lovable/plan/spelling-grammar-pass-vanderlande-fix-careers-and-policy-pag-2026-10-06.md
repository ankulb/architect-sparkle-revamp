# Spelling/grammar pass, Vanderlande fix, Careers and policy pages

## 1. Vanderlane becomes Vanderlande
- Update the project name, client name, Engineering sector tile, Clientele list and search results.
- The project address changes from /portfolio/vanderlane to /portfolio/vanderlande. The old address will still open the page.

## 2. Spelling and grammar check across the whole site
- Go through every page's wording: homepage, Studio pages, Expertise sectors, all project write-ups, Awards, News and Media, Contact and the footer.
- Fix spelling, grammar, punctuation, and inconsistent names or capitalisation (for example "sq. ft." formatting and company names).
- Project facts and supplied write-ups keep their meaning. Only clear errors get corrected.
- Press headlines and publication names stay exactly as they were published.
- I'll send you a short list of what changed.

## 3. Careers page (new, /careers)
- Uses the copy from teamonearchitects.com/career:
  - "Culture at TOA" and the quote "We don't just build ideas, we build each other."
  - The three pillars: Design with Purpose, Sustainability at the Core and Beyond the Drawing Board.
  - The invitation to apply at hr1@toa.org.in.
- Lists the current open roles from the live page (for example Project Head and Procurement Head, Mumbai), with filters for category and location. Each role links to its full details on the live site.
- Gets the same look as the other pages: photo header, gold accents, light and dark themes.
- These links will go to the new page: Careers in the menu, "Open Positions", the footer's Careers link and the homepage "Explore Careers" button. "Life at TOA" stays as it is.

## 4. Privacy Policy, Terms of Use, Cookie Policy (new pages)
- **Your current site has no policy pages**: the matching addresses on teamonearchitects.com show "page doesn't exist". There's nothing to copy.
- Instead, I'll write plain, standard policy text using the company details from your site:
  - Team One Architects, with the Mumbai and Pune office addresses.
  - communications@toa.org.in as the contact.
  - What the site collects: the contact form, embedded videos and basic visit statistics.
- Each page will be clearly marked "Last updated October 2026". **Please have your legal team review the text before you rely on it.**
- The three footer links will open these pages instead of doing nothing.

## 5. Check
- Click every menu and footer link on desktop and mobile in both themes, and confirm no link is dead.
- Confirm the site builds cleanly.

## Technical details
- Rename the `vanderlane` slug and labels in `portfolio.ts`, `about.ts`, `clientLogos.ts` (key) and `expertise.$sector.tsx`. Add a redirect route `portfolio.vanderlane.tsx` → `/portfolio/vanderlande`. Internal gallery variable names stay unchanged.
- New routes: `careers.tsx`, `privacy.tsx`, `terms.tsx`, `cookies.tsx`. Each gets its own `head()` metadata. Content goes in a data module.
- Update links in `home.ts` (nav, careers CTA) and `Footer.tsx`; add the new pages to `SearchOverlay`.
- The copy pass covers string content in `src/data/*` and route/component JSX text. The coverage archive is untouched.
- Record the tasks in roadmap.md.
