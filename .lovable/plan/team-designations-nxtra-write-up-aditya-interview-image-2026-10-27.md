# Team designations, Nxtra write-up, Aditya interview image

## Our Team page
- Rahul Mane: role becomes **VP Operations**
- Bharat Kukreja: role becomes **Deputy General Manager**

## Nxtra project page
- Title "NXTRA Office", banner category Corporate Interiors.
- Facts from the write-up: Client NXTRA · Sector Telecom / Digital Infrastructure · Location & Area Airoli, Navi Mumbai · 10,000 sq. ft. · Status Completed · Year 2026 · Category Corporate Interiors.
- Replace the current text with the five Overview paragraphs from the write-up, word for word.
- Note: the write-up says "Location: 10K, Airoli". I'm reading "10K" as an area of 10,000 sq. ft. Tell me if it means something else.

## Videos & Interviews page
- On the "Designing for Tomorrow: A Conversation with Aditya Yamsanwar of TOA" tile, take out the play icon and show Aditya's photo there.

## Technical details
- `src/data/about.ts`: update the two `role` fields.
- `src/data/portfolio.ts`: update the Nxtra entry: title, facts, area, sector label and description. The address stays `/portfolio/nxtra`.
- Upload image-22.png with lovable-assets to `src/assets/media/aditya-interview.png.asset.json`. Add an optional `image` field to `MediaCoverageItem`, then make `MediaCard` render it with object-cover and no play icon.
- Check the team page, the Nxtra page and the media page.

## CSR page
- The banner photo appears again in the photo pair under "Objective". Swap that second copy for your new photo of hands holding a seedling. The banner photo stays as it is.
- Technical: upload image-23.png to `src/assets/csr/seedling.png.asset.json`, then replace `csrImage.url` in `csr.images` in `src/data/about.ts`.
- Note: the new photo has a small "teamonearchitects.com" watermark at the bottom.

## Careers: only the current openings
- Replace every role listed today with these 5, in this order:
  - **Mumbai:** Operations Head; Senior Procurement Executive; VP – Business Development; Quality Check – Quantity Check (using the Senior Quality Engineer description)
  - **Pune:** Business Development (3–5 years)
- Each role shows its full description from your files: job brief, responsibilities and what we expect. You didn't send a description for Operations Head, so it shows only its title and city until you do.
- The Head – Finance & Accounts description is left off because it isn't on your list. The Design Head, Project Manager and Site Engineer descriptions are left off as well.
- Every Apply button opens a pop-up form. It asks for name, email, phone, years of experience, a CV upload (PDF or Word, up to 10 MB), and an optional cover note or portfolio link.
- Each application is saved to a private list with its CV. You'll find it in Cloud → Database → job applications.
- HR (hr1@toa.org.in) gets an email for each application, with a link to the CV. To send these emails, the site needs a verified sender domain you own, such as toa.org.in. If none is set up, I'll show you the setup step. Applications are still saved in the meantime.

## Sava project page
- Make your new photo of the reception, with the SAVA Healthcare logo on the wall, the main image for the Sava page and its project card.

## Technical details (Careers, Sava)
- Turn on Lovable Cloud. Create a `job_applications` table with grants and row-level security, and no public read access. Create a private `resumes` storage bucket.
- Validate input with zod on both the browser and the server. A server function uploads the CV, inserts the row, then sends the HR notification email through a managed app-email template, keyed on the application id.
- Rewrite `jobs` in `src/data/careers.ts` with optional `brief`, `responsibilities`, `requirements`, `experience` fields. Build a shared `ApplyDialog` component and an expandable description in `careers.tsx`.
- Upload image-24.png as `src/assets/projects/sava-hero.png.asset.json` and use it as Sava's `image`, placed first in its gallery. The photo is vertical, so set its crop position so the reception desk and logo stay in view.
- Test: submit one application, confirm it was saved and the email was logged, then delete the test entry. Check the Careers and Sava pages on desktop and mobile.
