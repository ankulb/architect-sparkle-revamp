# Team LinkedIn links, Essani spelling, Life at TOA photo

## What will change
- **Our Team LinkedIn links:** Abhijit Sutar, Hiral Parekh and Alpesh Parab each get their own LinkedIn profile, replacing the company page:
  - Abhijit Sutar: https://www.linkedin.com/in/abhijit-sutar-b6806b11a/
  - Hiral Parekh: https://www.linkedin.com/in/hiral-parekh-100204211/
  - Alpesh Parab: https://www.linkedin.com/in/alpesh-parab-2b298214b/
- **Spelling:** "Tasheen Issani" becomes "Tasheen Essani" everywhere it appears on the site.
- **Life at TOA:** the Family Day 2025 photo appears twice, once in the top banner and again in the large photo just below. The second copy will be removed, so the photo appears only once. If you have another team photo for that spot, send it and I'll put it there.
- **Open positions (Careers page):** replace the current 10 roles with only the roles in your October list. The two rows you blurred out are left off. Spellings are corrected (Project Manager, Quantity Estimator, Liaison Architect, Safety Engineer, Mechanical).
  - **Mumbai:** Design Lead, Purchase Head, Purchase Manager, B.D. Head, Jr. Architect, Sr. Architect, Liaison Architect, Project Head, Project Manager (2), Site Supervisor / Engineer (4), Quantity Estimator, Civil Engineer, MEP Engineer, Interns (Mechanical, Electrical, Plumbing)
  - **Pune:** Design Head, Mid-Level Interior Designer, Jr. Interior Designer, Project Manager (2), Site Engineer (2), Safety Engineer, Sr. 3D Visualiser, Graphic Designer, Quality Control Engineer, Quantity Estimator, Jr. Business Development
  - **Bengaluru:** Regional Head, Business Development; Business Development Manager
  - **Hyderabad:** SPOC / MEP, Electrical Supervisor, HVAC, QA / QC, Quantity Surveyor, Project Coordinator
  - Each role shows its city, number of openings and department. Your sheet doesn't give experience levels or job descriptions, so none will be shown.
  - **Apply button:** most of these roles have no job page on teamonearchitects.com, so each role's button will open an email to hr1@toa.org.in with the role and city already filled in.
  - The "(Girl)" notes on the Pune roles won't be shown, because gender requirements in job ads can create legal risk. Tell me if you want them back.

## Technical details
- `src/data/about.ts`: update the three `linkedin` fields and Tasheen's name. Check whether the image filename needs to change too: the photo URL contains "Tasheen-Issani.png" from the live site, so leave it as-is.
- `src/routes/about.life.tsx`: remove the large-photo block that shows `life.blocks[0].image`, which is the same file as the banner. Then check that the page layout still flows on desktop and mobile.
- `src/data/careers.ts`: replace `jobs`. Make `band`, `focus` and `slug` optional, and add an `openings` field. `careers.tsx` keeps the Department and City filters, shows the number of openings, and opens a pre-filled email for each role. Check the page on desktop and mobile.
