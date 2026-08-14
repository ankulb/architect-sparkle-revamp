import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { InteractiveGrid } from "@/components/graphics/InteractiveGrid";

import luxury from "@/assets/hero/luxury-housing.jpg.asset.json";
import commercial from "@/assets/hero/commercial.png.asset.json";
import dataCentre from "@/assets/hero/data-centre.png.asset.json";
import hospitality from "@/assets/hero/hospitality.png.asset.json";
import interior from "@/assets/hero/interior.png.asset.json";
import urbanDesign from "@/assets/hero/architecture-urban-design.jpg.asset.json";


type Slide = {
  image: string;
  kicker: string;
  headline: string;
  kb: "in" | "right" | "left" | "up" | "down";
};

const SLIDES: Slide[] = [
  {
    image: luxury.url,
    kicker: "Luxury Development",
    headline:
      "Designing the future through experiential architecture & development, master planning, and detailed planning with sustainability at its core.",
    kb: "in",
  },
  {
    image: commercial.url,
    kicker: "Commercial",
    headline:
      "Iconic developments crafted to maximize space utilization while anchoring the skyline",
    kb: "left",
  },
  {
    image: dataCentre.url,
    kicker: "Data Centres",
    headline:
      "Mission-critical digital infrastructure developed with future-ready resilience and end-to-end engineering",
    kb: "right",
  },
  {
    image: hospitality.url,
    kicker: "Hospitality",
    headline:
      "Evolving spaces that elevate guest happiness and satisfaction from arrival to memory",
    kb: "up",
  },
  {
    image: interior.url,
    kicker: "Interior Architecture",
    headline:
      "Interiors where material, light, and craft shape intuitive and immersive user experiences",
    kb: "down",
  },
  {
    image: urbanDesign.url,
    kicker: "Architecture & Urban Design",
    headline:
      "Master planning and landmark architecture that give cities structure, scale, and a sense of place",
    kb: "in",
  },
];



const INTERVAL_MS = 7000;

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing || reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [playing, reduce]);

  // Preload the next image
  useEffect(() => {
    const next = SLIDES[(index + 1) % SLIDES.length];
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = next.image;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [index]);

  const slide = SLIDES[index];

  return (
    <section className="relative flex h-[100svh] min-h-[600px] w-full items-end overflow-hidden bg-background">
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`absolute inset-0 h-full w-full toa-kb-${slide.kb}`}>
            <img
              src={slide.image}
              alt={slide.kicker}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Cinematic shimmer band (mimics light drifting across a video) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="toa-shimmer absolute -inset-y-10 left-0 w-[60%]"
          style={{
            background:
              "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/20 to-transparent" />
      {/* Focused radial behind headline to guarantee contrast */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%]"
        style={{
          background:
            "radial-gradient(ellipse at 20% 90%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, transparent 75%)",
        }}
      />

      {/* Blueprint grid overlay */}
      <InteractiveGrid radius={280} baseOpacity={0.18} />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10 md:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.42em] text-gold [text-shadow:0_2px_16px_rgba(0,0,0,0.85)]">
              {slide.kicker}
            </p>
            <h1
              className={`font-display mt-5 max-w-5xl text-balance font-medium leading-[1.06] tracking-tight text-foreground [text-shadow:0_2px_32px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.6)] ${
                slide.headline.length > 110
                  ? "text-2xl sm:text-4xl lg:text-5xl xl:text-[3.5rem]"
                  : "text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
              }`}
            >
              {slide.headline}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots */}
        <div className="mt-10 flex items-center gap-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.kicker}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.kicker}`}
              className="group relative h-2.5 w-2.5"
            >
              <span
                className={`absolute inset-0 rounded-full border transition-all ${
                  i === index
                    ? "border-gold bg-gold scale-100"
                    : "border-foreground/50 bg-transparent scale-90 group-hover:border-foreground"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Pause / play control */}
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause slideshow" : "Play slideshow"}
        className="absolute bottom-8 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/40 bg-black/25 text-foreground/90 backdrop-blur transition hover:border-gold hover:text-gold md:right-10"
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="2" y="1.5" width="3" height="11" fill="currentColor" />
            <rect x="9" y="1.5" width="3" height="11" fill="currentColor" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 1.5v11l10-5.5L3 1.5z" fill="currentColor" />
          </svg>
        )}
      </button>
    </section>
  );
}
