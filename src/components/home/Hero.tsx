import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { InteractiveGrid } from "@/components/graphics/InteractiveGrid";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

const HEADLINE = "Designing the future through Architecture, Interiors and Engineering";
const SUBLINE = "Luxury Housing · Commercial · Data Centres · Interiors";

export function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const words = HEADLINE.split(" ");
  const textStart = reduce ? 0 : 0.4;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduce) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  }, [reduce]);

  return (
    <section className="relative flex h-[100svh] min-h-[600px] w-full items-end overflow-hidden bg-background">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Scrims for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      {/* Blueprint grid overlay */}
      <InteractiveGrid radius={280} baseOpacity={0.22} />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: textStart }}
          className="text-xs font-medium uppercase tracking-[0.4em] text-gold [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]"
        >
          Team One Architects
        </motion.p>

        <h1 className="font-display mt-6 max-w-5xl text-balance text-4xl font-light leading-[1.05] tracking-tight text-foreground [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={reduce ? { y: 0, opacity: 0 } : { y: "110%" }}
                animate={reduce ? { y: 0, opacity: 1 } : { y: 0 }}
                transition={{
                  duration: reduce ? 0.6 : 0.9,
                  delay: textStart + 0.1 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block pr-[0.28em]"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: textStart + 0.15 + words.length * 0.07 }}
          className="mt-7 max-w-2xl text-sm uppercase tracking-[0.28em] text-foreground/80 [text-shadow:0_1px_14px_rgba(0,0,0,0.55)] sm:text-base"
        >
          {SUBLINE}
        </motion.p>
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
