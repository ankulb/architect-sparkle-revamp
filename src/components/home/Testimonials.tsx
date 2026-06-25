import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "@/data/home";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[i];

  return (
    <section className="relative overflow-hidden border-t border-border bg-card/40">
      <GridBackdrop glow radius={260} baseOpacity={0.38} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 py-24 text-center md:px-10 md:py-36">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">In their words</p>
        </Reveal>

        <div className="mt-12 min-h-[14rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-display mx-auto max-w-3xl text-2xl font-light leading-snug tracking-tight text-foreground sm:text-3xl">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <span className="block text-sm font-semibold tracking-wide text-foreground">
                  {current.name}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{current.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-px w-10 transition-all duration-500 ${
                idx === i ? "bg-gold" : "bg-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
