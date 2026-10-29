# Add two videos to Life at TOA

## Placement
- **Office Culture (portrait, 36s)** — right after the opening "The culture behind the work" intro, as a new "Inside the studio" section: the upright video sits on one side in a phone-shaped frame, with a short caption beside it. On mobile it stacks full width.
- **Thai trip (landscape, 40s)** — a wide, full-width cinematic band between the culture stories and the "Mindset" section, titled "Beyond the studio", for the team trip.

## Behaviour
- Both play silently on loop when scrolled into view and pause when off screen; a small sound on/off and play/pause button on each.
- A still frame from each video shows instantly while it loads; respects reduced-motion settings (no autoplay).
- Works in light and dark themes.

## Technical details
- Compress both with ffmpeg (Thai is 101 MB, Office 41 MB) to web-friendly MP4 (~720p/1080p, aiming under ~15 MB each) and extract poster JPGs; upload via lovable-assets, reference `.asset.json` pointers.
- New `LoopVideo` component (IntersectionObserver play/pause, muted toggle, `playsInline`, `preload="metadata"`), used in `src/routes/about.life.tsx`; captions in `life` data in `src/data/about.ts`.
- Captions/titles are my wording; easy to change if you send preferred text.
