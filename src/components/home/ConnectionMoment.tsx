import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/**
 * "Blueprint meets building" — a connection beat inspired by the reference's
 * reaching-hands moment. A draftsman's hand + pencil (blueprint line-art)
 * reaches in from the left; a rising building reaches back from the right.
 * They meet at a glowing gold spark. Signifies design becoming reality.
 */
export function ConnectionMoment() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const active = reduce || inView;

  const stroke = "var(--gold)";
  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: active ? { pathLength: 1, opacity: 1 } : {},
    transition: { duration: reduce ? 0 : 1.4, delay: reduce ? 0 : delay, ease: "easeInOut" as const },
  });
  const lineStyle = {
    fill: "none",
    stroke,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-background py-28 md:py-40"
    >
      {/* Blueprint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold-soft) 1px, transparent 1px), linear-gradient(90deg, var(--gold-soft) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div className="relative mx-auto h-[260px] w-full max-w-6xl px-6 md:h-[340px]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 400"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          {/* LEFT — pencil + hand reaching toward center */}
          <motion.g
            initial={{ x: -60, opacity: 0 }}
            animate={active ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* pencil body */}
            <motion.line x1="120" y1="250" x2="430" y2="195" {...lineStyle} {...draw(0.1)} />
            <motion.line x1="118" y1="262" x2="428" y2="207" {...lineStyle} {...draw(0.15)} />
            {/* pencil tip */}
            <motion.path d="M430 195 L470 198 L430 207 Z" {...lineStyle} {...draw(0.5)} />
            {/* hand outline gripping pencil */}
            <motion.path
              d="M90 235 q-40 6 -55 34 q-8 18 6 30 q22 18 64 8 q34 -8 48 -30"
              {...lineStyle}
              {...draw(0.25)}
            />
            <motion.path d="M104 250 q-14 12 -10 30" {...lineStyle} {...draw(0.35)} />
            <motion.path d="M126 252 q-12 16 -6 34" {...lineStyle} {...draw(0.4)} />
          </motion.g>

          {/* RIGHT — rising building reaching toward center */}
          <motion.g
            initial={{ x: 60, opacity: 0 }}
            animate={active ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* tower envelope */}
            <motion.path d="M560 205 L660 175 L880 175 L880 360 L560 360 Z" {...lineStyle} {...draw(0.2)} />
            {/* floor plates */}
            <motion.line x1="560" y1="245" x2="880" y2="245" {...lineStyle} {...draw(0.45)} />
            <motion.line x1="560" y1="285" x2="880" y2="285" {...lineStyle} {...draw(0.55)} />
            <motion.line x1="560" y1="325" x2="880" y2="325" {...lineStyle} {...draw(0.65)} />
            {/* mullions */}
            <motion.line x1="640" y1="180" x2="640" y2="360" {...lineStyle} {...draw(0.5)} />
            <motion.line x1="720" y1="175" x2="720" y2="360" {...lineStyle} {...draw(0.6)} />
            <motion.line x1="800" y1="175" x2="800" y2="360" {...lineStyle} {...draw(0.7)} />
            {/* reaching cantilever toward center */}
            <motion.line x1="560" y1="205" x2="490" y2="200" {...lineStyle} {...draw(0.5)} />
          </motion.g>

          {/* Spark at the meeting point */}
          <motion.circle
            cx="480"
            cy="199"
            r="6"
            fill={stroke}
            initial={{ scale: 0, opacity: 0 }}
            animate={active ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: reduce ? 0 : 1.3, ease: "backOut" }}
            style={{ transformOrigin: "480px 199px" }}
          />
        </svg>

        {/* Spark bloom (DOM glow) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: "48%",
            top: "49%",
            width: 180,
            height: 180,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, var(--gold-soft) 0%, transparent 60%)",
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={active ? { opacity: [0, 1, 0.55], scale: 1 } : {}}
          transition={{ duration: 1.2, delay: reduce ? 0 : 1.3, ease: "easeOut" }}
        />
      </div>

      {/* Tagline */}
      <motion.div
        className="relative mt-10 px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 1.5 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.42em] text-gold">
          Design, realised
        </p>
        <h2 className="font-display mt-5 text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          We design as one
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Where the drawing meets what's built.
        </p>
      </motion.div>
    </section>
  );
}
