import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { heroSlides, expertise } from "@/data/home";

export function Hero() {
  const [slide, setSlide] = useState(0);
  const [word, setWord] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setWord((w) => (w + 1) % expertise.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Rotating, slowly zooming backdrop */}
      <AnimatePresence>
        <motion.div
          key={slide}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.6, ease: "easeInOut" }, scale: { duration: 6, ease: "easeOut" } }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[slide].image}
            alt={heroSlides[slide].alt}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs font-medium uppercase tracking-[0.42em] text-gold"
        >
          Inspiring Spaces Since 2001
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-7 max-w-5xl text-balance text-4xl font-light leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Designing spaces that work,
          <br className="hidden sm:block" /> inspire and endure
        </motion.h1>

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

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="group mt-12 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground"
        >
          Discover the studio
          <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
        </motion.a>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-6 z-10 flex gap-2 md:left-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-px w-10 transition-all duration-500 ${
              i === slide ? "bg-gold" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="relative h-12 w-px overflow-hidden bg-foreground/20">
          <div className="toa-scroll-dot absolute left-0 top-0 h-4 w-px bg-gold" />
        </div>
      </div>
    </section>
  );
}
