import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "motion/react";
import { heroSlides, expertise } from "@/data/home";

const FINAL = heroSlides[1]; // resolved, completed project photo

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [word, setWord] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const t = setInterval(() => setWord((w) => (w + 1) % expertise.length), 2800);
    return () => clearInterval(t);
  }, []);

  // Mount-time build-up: the blueprint draws itself from the very first frame and
  // the headline fades in — so the screen after the loader is never blank. These are
  // driven directly (not via scroll), then the scroll journey takes over the photo reveal.
  const pathLength = useMotionValue(reduce ? 1 : 0);
  const textOpacity = useMotionValue(reduce ? 1 : 0);
  const textY = useMotionValue(reduce ? 0 : 40);
  useEffect(() => {
    if (reduce) return;
    const c1 = animate(pathLength, 1, { duration: 1.6, ease: "easeInOut" });
    const c2 = animate(textOpacity, 1, { duration: 1, delay: 0.5, ease: "easeOut" });
    const c3 = animate(textY, 0, { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] });
    return () => {
      c1.stop();
      c2.stop();
      c3.stop();
    };
  }, [reduce, pathLength, textOpacity, textY]);

  // Stage A: blueprint stays drawn, then fades as the photo resolves on scroll.
  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.4, 0.85], [1, 1, 0]);

  // Stage B: completed photo crossfades + saturates + de-blurs (0.4 -> 0.85)
  const photoOpacity = useTransform(scrollYProgress, [0.35, 0.8], [0, 1]);
  const grayscale = useTransform(scrollYProgress, [0.4, 0.85], [1, 0]);
  const blurPx = useTransform(scrollYProgress, [0.4, 0.85], [14, 0]);
  const photoScale = useTransform(scrollYProgress, [0.35, 1], [1.14, 1]);
  const photoFilter = useMotionTemplate`grayscale(${grayscale}) blur(${blurPx}px)`;

  const overlayOpacity = useTransform(scrollYProgress, [0.6, 1], [0.25, 0.42]);
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Reduced-motion: static finished hero, no pinning.
  if (reduce) {
    return (
      <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img src={FINAL.image} alt={FINAL.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 -mt-[100vh] flex h-screen flex-col items-center justify-center px-6 text-center">
          <HeroCopy word={word} />
        </div>
      </section>
    );
  }

  const stroke = "var(--gold)";
  const line = {
    fill: "none",
    stroke,
    strokeWidth: 1.25,
    vectorEffect: "non-scaling-stroke" as const,
    style: { pathLength },
  };

  return (
    <section ref={ref} id="top" className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-background">
        {/* Completed project photo (resolves on scroll) */}
        <motion.div className="absolute inset-0" style={{ opacity: photoOpacity }}>
          <motion.img
            src={FINAL.image}
            alt={FINAL.alt}
            className="h-full w-full object-cover"
            style={{ filter: photoFilter, scale: photoScale }}
          />
        </motion.div>

        {/* Blueprint line-art over the dark canvas */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ opacity: blueprintOpacity }}
        >
          {/* faint grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(var(--gold-soft) 1px, transparent 1px), linear-gradient(90deg, var(--gold-soft) 1px, transparent 1px)",
              backgroundSize: "96px 96px",
            }}
          />
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Plan */}
            <motion.rect x="160" y="170" width="880" height="470" {...line} />
            <motion.line x1="160" y1="360" x2="1040" y2="360" {...line} />
            <motion.line x1="160" y1="500" x2="1040" y2="500" {...line} />
            <motion.line x1="440" y1="170" x2="440" y2="640" {...line} />
            <motion.line x1="760" y1="170" x2="760" y2="640" {...line} />
            <motion.circle cx="440" cy="360" r="8" {...line} />
            <motion.circle cx="760" cy="360" r="8" {...line} />
            <motion.circle cx="440" cy="500" r="8" {...line} />
            <motion.circle cx="760" cy="500" r="8" {...line} />
            {/* Elevation overlay */}
            <motion.line x1="160" y1="190" x2="1040" y2="190" {...line} />
            <motion.line x1="160" y1="120" x2="1040" y2="120" {...line} />
            <motion.line x1="160" y1="120" x2="160" y2="190" {...line} />
            <motion.line x1="1040" y1="120" x2="1040" y2="190" {...line} />
            {/* Dimension ticks */}
            <motion.line x1="160" y1="690" x2="1040" y2="690" {...line} />
            <motion.line x1="160" y1="678" x2="160" y2="702" {...line} />
            <motion.line x1="1040" y1="678" x2="1040" y2="702" {...line} />
          </svg>
        </motion.div>

        {/* Cinematic gradients — lighter at the end so the completed project reads */}
        <motion.div className="absolute inset-0 bg-background" style={{ opacity: overlayOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_95%)]" />

        {/* Settled copy */}
        <motion.div
          className="relative z-10 flex flex-col items-center px-6 text-center"
          style={{ opacity: textOpacity, y: textY }}
        >
          <HeroCopy word={word} />
        </motion.div>

        {/* Journey progress rail */}
        <div className="absolute bottom-10 left-6 z-10 hidden md:block">
          <div className="relative h-24 w-px bg-foreground/15">
            <motion.div
              className="absolute left-0 top-0 w-px bg-gold"
              style={{ height: railHeight }}
            />
          </div>
          <p className="mt-3 text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground">
            Blueprint to built
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroCopy({ word }: { word: number }) {
  return (
    <>
      <p className="text-xs font-medium uppercase tracking-[0.42em] text-gold">
        Inspiring Spaces Since 2001
      </p>
      <h1 className="font-display mt-7 max-w-5xl text-balance text-4xl font-light leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Designing spaces that work,
        <br className="hidden sm:block" /> inspire and endure
      </h1>
      <div className="mt-10 flex h-7 items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.24em] text-muted-foreground"
          >
            {expertise[word]}
          </motion.span>
        </AnimatePresence>
      </div>
      <a
        href="#about"
        className="group mt-12 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground"
      >
        Discover the studio
        <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
      </a>
    </>
  );
}
