# Footer links: point every link to its real page

## What changes
- **Expertise column**
  - "Workspace Interiors" opens the Banking & Finance sector page (first Workspace Interiors sector), and "Architecture & Urban Design" opens the Civic and Institutional page (first A&UD sector). Both currently just jump to the homepage.
  - Add "GCC" (opens /gcc) and "Portfolio" (opens /portfolio).
- **Connect column**
  - "News" opens the News & Media page instead of the homepage.
  - Add "Awards", "Videos & Interviews" and "Articles" so all Insights pages are reachable.
  - "Careers" and "Contact" keep their pages; "Feedback" keeps its email.
- **Studio column**: already correct (Our Story, Board, Team, CSR, Life at TOA, Clientele).
- **Legal column**: already correct (Privacy, Terms, Cookies).
- **Social icons**: Instagram, Facebook and YouTube currently go nowhere. They will use the same addresses as the Contact page (instagram.com/teamonearchitects, facebook.com/teamonearchitects, youtube.com/@teamonearchitects). LinkedIn stays.
- **Contact email** in the bottom bar and Feedback: stays info@teamonearchitects.com.

## Check
- Click every footer link on desktop and phone and confirm each opens a real page with no errors.

## Technical details
- Edit `src/components/layout/Footer.tsx` only: switch internal links to TanStack `Link` (`/expertise/$sector` with params), replace `#` social hrefs.
