import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { InteractiveGrid } from "@/components/graphics/InteractiveGrid";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  phrases,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  phrases?: readonly string[];
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
    <section className="relative flex h-[88vh] min-h-[600px] w-full items-end overflow-hidden bg-background">
      {/* Center-opening clip-path curtain wraps the Ken-Burns image */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 50% 0 50%)" }}
        animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0% 0 0%)" }}
        transition={{ duration: revealDur, ease: [0.77, 0, 0.18, 1] }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 1.22 }}
          animate={{ scale: 1 }}
          transition={{ duration: 9, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={image} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </motion.div>

      {/* Thin gold sweep line that travels with the reveal edge, then fades */}
      {!reduce && (
        <motion.div
          initial={{ left: "50%", opacity: 0 }}
          animate={{ left: ["50%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: revealDur, ease: [0.77, 0, 0.18, 1], times: [0, 0.1, 0.85, 1] }}
          className="absolute top-0 z-20 h-full w-px bg-gold"
          style={{ boxShadow: "0 0 24px 2px var(--gold)" }}
        />
      )}

      {/* Localized scrim behind the headline only (bottom-left) */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-transparent to-transparent" />

      {/* Blueprint grid that reacts to the cursor */}
      <InteractiveGrid radius={260} baseOpacity={0.32} />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: textStart }}
          className="text-xs font-medium uppercase tracking-[0.4em] text-gold [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]"
        >
          {eyebrow}
        </motion.p>

        {/* Headline reveals word-by-word with a rising mask */}
        <h1 className="font-display mt-6 max-w-4xl text-balance text-4xl font-light leading-[1.05] tracking-tight text-foreground [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: textStart + 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block pr-[0.25em]"
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
          className="mt-7 max-w-xl text-base leading-relaxed text-foreground/85 [text-shadow:0_1px_14px_rgba(0,0,0,0.5)] sm:text-lg"
        >
          {lead}
        </motion.p>

        {phrases && phrases.length > 1 && (
          <div className="mt-8 flex h-6 items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrase}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5 }}
                className="text-sm uppercase tracking-[0.22em] text-foreground/70"
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
