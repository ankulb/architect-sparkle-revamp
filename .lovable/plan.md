## Remove spec line from all project page banners

Every project page banner will show only the category and project name. The line like "Grihum Housing Finance · Mumbai · 12,000 sq. ft. (carpet)" is removed everywhere, including pages without full details (no "A Team One Architects project." line either). Client, location, area and other facts stay in the Project facts panel below.

### Technical details
- `src/routes/portfolio.$slug.tsx`: stop passing `lead` to `PageHero`.
- `src/data/portfolio.ts`: remove the now-unused `hideHeroLead` field and its Johnson Controls usage.
- Check Grihum, Axis Securities and Johnson Controls on desktop and mobile.
