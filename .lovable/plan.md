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

## Careers: job descriptions and an application pop-up
- Add the four job descriptions you sent (job brief, responsibilities, what we expect) to the matching open roles. Each of these roles gets a "View details" option that opens the full description.
  - Design Head: Pune
  - Project Manager: Mumbai and Pune
  - Site Engineer / Site Supervisor: Mumbai Site Supervisor / Engineer and Pune Site Engineer
  - Senior Quality Engineer: matched to the Pune "Quality Control Engineer" role and renamed to Senior Quality Engineer. Tell me if these should be two separate roles.
- Every role's Apply button opens a pop-up form instead of an email draft. The form asks for name, email, phone, years of experience, a CV upload (PDF or Word, up to 10 MB), and an optional cover note or portfolio link.
- Each application is saved to a private list with its CV. It's never visible to the public. You'll find it in Cloud → Database → job applications.
- HR (hr1@toa.org.in) gets an email for each application, with a link to the CV. Email can't carry the CV as an attachment. To send these emails, the site needs a verified sender domain you own, such as toa.org.in. If none is set up, I'll show you the setup step. Applications are still saved in the meantime.

## Technical details (Careers)
- Turn on Lovable Cloud. Create a `job_applications` table with grants and row-level security, and no public read access. Create a private `resumes` storage bucket.
- The form is validated with zod on both the browser side and the server side. A server function checks the input, uploads the CV, inserts the row, then sends the HR notification email through the managed app-email template, with an idempotency key based on the application id.
- In `src/data/careers.ts`, add optional `brief`, `responsibilities` and `requirements` fields to jobs. Build a shared `ApplyDialog` component.
- Test: submit one application, confirm it was saved and the email was logged, then delete the test entry.
