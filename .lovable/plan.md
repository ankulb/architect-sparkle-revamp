# Contact page copy from the current site + finish the multi-city check

## 1. Contact page copy (from teamonearchitects.com/get-in-touch)
Replace the wording on the Contact page with the live site's copy, keeping the current layout and photo:

- Top heading: "Get In Touch" (replaces "Thank you!")
- Main line: "Let's Build the Next Landmark Together."
- Sub-heading: "Tell us about your vision and we'll help you shape it into space"
- Intro: "We work closely with our clients, listening deeply to their goals and communities to co-create spaces that celebrate identity and inspire well-being."
- Office cards, with the addresses as written on the live site and phone numbers added (tap-to-call on mobile):
  - Mumbai Office — Laxmi Towers, B Wing, 3B Second Floor, G Block, Bandra Kurla Complex, Mumbai-400051, Maharashtra, India — 022 66223344
  - Pune Office — Cello Platina, Office No. 201, 2nd Floor, Fergusson College Road, Near Police Ground, Shivajinagar, Pune-411016, Maharashtra, India — +91 808 704 8484
- Form heading: "Schedule a Discovery Call"; button: "Send"
- The Dubai office card and the "TOA Presence" city list are not on the live page; they stay as they are unless you'd like them removed.
- Page title and search description updated to match the new wording.

## 2. Finish the multi-city check (already in progress)
- Done: all 14 architecture write-ups list one city each, matching the site.
- Found in Drive search: five interiors write-ups mention more than one city: XPO, Johnson Controls, Volkswagen Group, Infinx and Digital Domain.
- Next: read those five, work out whether each project really covers several cities (or just mentions another city in passing), and update the City fact and the short line under the title (e.g. "Mumbai & Pune") only where the write-up says so.
- Remove the temporary readable copies made in your Drive while reading the write-ups.
- Report the final list to you.

## Technical details
- Contact: copy-only edits in `src/routes/contact.tsx` (`offices` array gains a `phone` field rendered as a `tel:` link; hero h1, form intro, labels, head meta). The form behaviour stays the same.
- Multi-city: Drive files converted to Docs copies and exported as text, copies deleted afterwards; edits only to the affected `projectDetails`/grid `location` values in `src/data/portfolio.ts`.
- Record the Contact task in roadmap.md; verify the Contact page and any changed project pages at desktop/mobile; build clean.
