import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { heroSlides } from "@/data/home";

/**
 * "We design as one" — a sketch → built reveal.
 * A loose, rough, hand-drawn architectural sketch draws itself line by line,
 * then dissolves into the real built photograph: from drawing to reality.
 */

// Landscape project photo so nothing is cropped inside the frame.
const BUILT_IMAGE = heroSlides[0].image;

export function ConnectionMoment() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const active = reduce || inView;

  // self-drawing stroke helper
  const draw = (delay: number, duration = 1.1, opacity = 1) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: active ? { pathLength: 1, opacity } : {},
    transition: {
      pathLength: { duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease: "easeInOut" as const },
      opacity: { duration: reduce ? 0 : 0.25, delay: reduce ? 0 : delay },
    },
  });

  const pencil = {
    fill: "none",
    stroke: "var(--gold)",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };

  // when the photo begins developing in under the sketch (overlaps the last strokes)
  const revealAt = reduce ? 0 : 1.55;

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-background py-24 md:py-32">
      {/* Big blueprint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold-soft) 1px, transparent 1px), linear-gradient(90deg, var(--gold-soft) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        {/* Drawing-board frame — capped to the viewport so nothing is cut off */}
        <div className="relative mx-auto aspect-[16/9] max-h-[78vh] w-full overflow-hidden rounded-sm border border-border/60 bg-card/40">
          {/* Layer 2 — built photo (develops in under the sketch, fully contained) */}
          <motion.img
            src={BUILT_IMAGE}
            alt="A Team One Architects project, realised"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain"
            initial={{ opacity: 0, filter: "grayscale(1) blur(9px)", scale: 1.05 }}
            animate={
              active
                ? { opacity: 1, filter: "grayscale(0) blur(0px)", scale: 1 }
                : {}
            }
            transition={{ duration: reduce ? 0 : 1.7, delay: revealAt, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* soft darkening so the sketch & spark read on top of the photo */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/25" />

          {/* Gold wipe line sweeping down as the photo resolves */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 h-px w-full bg-gold shadow-[0_0_18px_2px_var(--gold-soft)]"
            initial={{ top: "0%", opacity: 0 }}
            animate={active ? { top: ["0%", "100%"], opacity: [0, 1, 1, 0] } : {}}
            transition={{ duration: reduce ? 0 : 1.4, delay: revealAt, ease: "easeInOut" }}
          />

          {/* Layer 1 — loose hand-drawn sketch (fades down concurrently, lingers faintly) */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={active ? { opacity: 0.1 } : {}}
            transition={{ duration: reduce ? 0 : 1.6, delay: revealAt, ease: "easeInOut" }}
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 1000 560"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <filter id="pencilWobble" x="-5%" y="-5%" width="110%" height="110%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves={2} seed={7} result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>

              <g filter="url(#pencilWobble)">
                {/* construction / guide lines (draw first, faint, dashed) */}
                <motion.line x1="60" y1="470" x2="940" y2="470" {...pencil} strokeWidth={1} strokeDasharray="6 10" {...draw(0, 0.5, 0.5)} />
                <motion.line x1="300" y1="60" x2="300" y2="500" {...pencil} strokeWidth={1} strokeDasharray="6 10" {...draw(0.1, 0.5, 0.4)} />
                <motion.line x1="120" y1="150" x2="900" y2="150" {...pencil} strokeWidth={1} strokeDasharray="6 10" {...draw(0.15, 0.5, 0.35)} />

                {/* ground line — two rough overlapping strokes */}
                <motion.line x1="70" y1="475" x2="935" y2="473" {...pencil} strokeWidth={2.4} {...draw(0.35, 0.8)} />
                <motion.line x1="80" y1="480" x2="945" y2="479" {...pencil} strokeWidth={1.6} {...draw(0.45, 0.8, 0.7)} />

                {/* main tower massing — front face (double stroke, with overshoot) */}
                <motion.path d="M300 110 L300 478 L640 478 L640 150 Z" {...pencil} strokeWidth={2.6} {...draw(0.55, 1.2)} />
                <motion.path d="M295 116 L305 470 M634 156 L646 472" {...pencil} strokeWidth={1.5} {...draw(0.75, 1.0, 0.65)} />

                {/* side face (perspective) */}
                <motion.path d="M640 150 L760 200 L760 478 L640 478" {...pencil} strokeWidth={2.4} {...draw(0.7, 1.1)} />
                {/* roof line back edge */}
                <motion.line x1="300" y1="110" x2="420" y2="92" {...pencil} strokeWidth={2} {...draw(0.85, 0.7)} />
                <motion.line x1="420" y1="92" x2="760" y2="200" {...pencil} strokeWidth={1.8} {...draw(0.95, 0.8, 0.7)} />

                {/* floor plates (front) */}
                {[180, 250, 320, 390].map((y, i) => (
                  <motion.line key={`f${y}`} x1="300" y1={y} x2="640" y2={y + 4} {...pencil} strokeWidth={1.4} {...draw(1.15 + i * 0.08, 0.6, 0.8)} />
                ))}
                {/* mullions (front) */}
                {[380, 460, 540].map((x, i) => (
                  <motion.line key={`m${x}`} x1={x} y1="130" x2={x} y2="478" {...pencil} strokeWidth={1.2} {...draw(1.2 + i * 0.08, 0.6, 0.7)} />
                ))}

                {/* entrance */}
                <motion.path d="M440 478 L440 410 L500 410 L500 478" {...pencil} strokeWidth={2} {...draw(1.5, 0.6)} />

                {/* cross-hatching on the shadow (side) face */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.line
                    key={`h${i}`}
                    x1={660 + i * 18}
                    y1={478}
                    x2={700 + i * 18}
                    y2={210 + i * 6}
                    {...pencil}
                    strokeWidth={0.9}
                    {...draw(1.35 + i * 0.05, 0.45, 0.45)}
                  />
                ))}

                {/* context: a loose tree */}
                <motion.path d="M160 478 L160 405" {...pencil} strokeWidth={2} {...draw(1.45, 0.5, 0.8)} />
                <motion.path d="M160 410 q-42 -10 -30 -52 q34 -34 64 -2 q40 -2 28 40 q-26 30 -62 14" {...pencil} strokeWidth={1.6} {...draw(1.5, 0.8, 0.7)} />

                {/* context: a quick sun with rays */}
                <motion.circle cx="850" cy="110" r="34" {...pencil} strokeWidth={1.6} {...draw(1.55, 0.7, 0.7)} />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                  const a = (deg * Math.PI) / 180;
                  return (
                    <motion.line
                      key={`r${deg}`}
                      x1={850 + Math.cos(a) * 44}
                      y1={110 + Math.sin(a) * 44}
                      x2={850 + Math.cos(a) * 60}
                      y2={110 + Math.sin(a) * 60}
                      {...pencil}
                      strokeWidth={1.4}
                      {...draw(1.65 + i * 0.03, 0.3, 0.6)}
                    />
                  );
                })}
              </g>
            </svg>
          </motion.div>

          {/* Spark when the sketch completes */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              left: "64%",
              top: "27%",
              width: 150,
              height: 150,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, var(--gold-soft) 0%, transparent 62%)",
            }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={active ? { opacity: [0, 0.9, 0], scale: [0.4, 1.1, 1.3] } : {}}
            transition={{ duration: reduce ? 0 : 1, delay: reduce ? 0 : 1.7, ease: "easeOut" }}
          />
        </div>

        {/* Tagline */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 22 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 2.2 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.42em] text-gold">Design, realised</p>
          <h2 className="font-display mt-5 text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            We design as one
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Where the drawing becomes the building.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
