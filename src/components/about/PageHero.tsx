import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { InteractiveGrid } from "@/components/graphics/InteractiveGrid";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  phrases,
  align = "center",
  faceSafe = false,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  phrases?: readonly string[];
  /** "right" pins the photograph to the outer edge of its contained image area. */
  align?: "center" | "right";
  /** Keeps people photographs fully framed within the right-hand image area. */
  faceSafe?: boolean;
}) {
  const [phrase, setPhrase] = useState(0);
  const reduce = useReducedMotion();
  const words = title.split(" ");

  useEffect(() => {
    if (!phrases || phrases.length < 2) return;
    const t = setInterval(() => setPhrase((p) => (p + 1) % phrases.length), 3200);
    return () => clearInterval(t);
  }, [phrases]);

  // Timing: the curtain wipe opens first, then text rises in behind it.
  const revealDur = reduce ? 0 : 1.3;
  const textStart = reduce ? 0.1 : 0.85;

  return (
    <section className="relative flex min-h-[760px] w-full items-end overflow-hidden bg-hero-scrim md:h-[88vh] md:min-h-[640px]">
      {/* The image has its own stage: upper frame on mobile, right-hand frame on desktop. */}
      <motion.div
        initial={{ clipPath: "inset(0 50% 0 50%)" }}
        animate={{ clipPath: "inset(0 0% 0 0%)" }}
        transition={{ duration: revealDur, ease: [0.77, 0, 0.18, 1] }}
        className="absolute inset-x-0 top-0 h-[46%] overflow-hidden md:inset-y-0 md:left-auto md:h-full md:w-[60%]"
      >
        <motion.div
          initial={{ opacity: 0.72, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-end"
        >
          <img
            src={image}
            alt=""
            className={
              faceSafe
                ? "h-full w-full object-contain object-top md:object-right"
                : align === "right"
                  ? "h-full w-full object-contain object-right"
                  : "h-full w-full object-contain object-center md:object-right"
            }
          />
        </motion.div>
      </motion.div>

      {/* Solid text field blending into only the left edge of the photograph. */}
      <div className="absolute inset-x-0 top-[30%] h-[22%] bg-gradient-to-b from-transparent via-hero-scrim/90 to-hero-scrim md:inset-0 md:h-auto md:bg-gradient-to-r md:from-hero-scrim md:from-35% md:via-hero-scrim/95 md:via-48% md:to-transparent md:to-78%" />

      {/* Thin gold sweep line that travels with the reveal edge, then fades.
          Always rendered so SSR and client markup match; duration 0 when
          reduced motion jumps it straight to its invisible end state. */}
      <motion.div
        initial={{ left: "50%", opacity: 0 }}
        animate={{ left: ["50%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: revealDur, ease: [0.77, 0, 0.18, 1], times: [0, 0.1, 0.85, 1] }}
        className="absolute top-0 z-20 h-full w-px bg-gold"
        style={{ boxShadow: "0 0 24px 2px var(--gold)" }}
      />

      {/* Blueprint grid that reacts to the cursor */}
      <InteractiveGrid radius={260} baseOpacity={0.32} />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 pt-[48vh] md:px-10 md:pb-20 md:pt-0 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: textStart }}
          className="text-xs font-medium uppercase tracking-[0.4em] text-gold [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]"
        >
          {eyebrow}
        </motion.p>

        {/* Headline reveals word-by-word with a rising mask */}
        <h1 className="font-display mt-6 max-w-4xl text-balance text-4xl font-light leading-[1.05] tracking-tight text-on-image [text-shadow:0_2px_24px_rgba(0,0,0,0.65)] sm:text-6xl md:max-w-[42%] lg:text-7xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: textStart + 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block max-w-full break-words pr-[0.25em]"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: textStart + 0.1 + words.length * 0.08 + 0.2 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-on-image [text-shadow:0_1px_14px_rgba(0,0,0,0.75)] sm:text-lg md:max-w-[38%]"
        >
          {lead}
        </motion.p>

        {phrases && phrases.length > 1 && (
          <div className="mt-8 flex min-h-6 items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrase}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5 }}
                className="text-sm uppercase tracking-[0.22em] text-on-image/70"
              >
                {phrases[phrase]}
              </motion.span>
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-9 right-6 z-10 hidden md:right-10 md:block">
        <div className="relative h-12 w-px overflow-hidden bg-foreground/20">
          <div className="toa-scroll-dot absolute left-0 top-0 h-4 w-px bg-gold" />
        </div>
      </div>
    </section>
  );
}
