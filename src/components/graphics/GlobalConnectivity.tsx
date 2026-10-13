import { motion, useReducedMotion } from "motion/react";

/** Conceptual connectivity, not a map of TOA offices or project locations. */
export function GlobalConnectivity() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] text-gold">
      <svg viewBox="0 0 520 520" className="h-full w-full" role="img" aria-label="Conceptual global connectivity centred on India">
        <g fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3">
          <circle cx="260" cy="260" r="210" />
          <ellipse cx="260" cy="260" rx="140" ry="210" />
          <ellipse cx="260" cy="260" rx="65" ry="210" />
          <ellipse cx="260" cy="260" rx="210" ry="78" />
          <ellipse cx="260" cy="260" rx="210" ry="154" />
          <path d="M50 260H470M260 50V470" />
          <circle cx="260" cy="260" r="240" strokeDasharray="2 12" />
        </g>
        {[
          "M130 155Q240 110 330 285", "M105 305Q240 205 330 285",
          "M220 400Q315 410 330 285", "M395 145Q400 230 330 285",
          "M440 345Q380 365 330 285",
        ].map((d, i) => (
          <motion.path key={d} d={d} fill="none" stroke="currentColor" strokeWidth="1.5"
            initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 1.6, delay: i * 0.15 }} />
        ))}
        <g fill="currentColor">{[[130,155],[105,305],[220,400],[395,145],[440,345]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="4" />)}</g>
        <circle cx="330" cy="285" r="15" fill="none" stroke="currentColor" />
        <circle cx="330" cy="285" r="6" fill="currentColor" />
      </svg>
      <span className="absolute left-[65%] top-[60%] font-mono text-xs uppercase tracking-[0.16em] text-foreground">India</span>
    </div>
  );
}