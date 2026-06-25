import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type BlueprintRevealProps = {
  /** "plan" = floor-plan grid, "elevation" = building elevation. */
  variant?: "plan" | "elevation";
  /** Overall layer opacity (theme-aware gold strokes underneath). */
  opacity?: number;
  className?: string;
};

/**
 * Architecture motif: structural line art that "draws" itself as the section
 * scrolls into view, using SVG pathLength tied to scroll progress. Gold token
 * strokes at low opacity, theme-aware. Respects reduced motion.
 */
export function BlueprintReveal({
  variant = "plan",
  opacity = 0.5,
  className = "",
}: BlueprintRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  const progress = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const pathLength = reduce ? 1 : progress;

  const stroke = "var(--gold)";
  const line = {
    fill: "none",
    stroke,
    strokeWidth: 1,
    vectorEffect: "non-scaling-stroke" as const,
    style: { pathLength },
  };

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {variant === "plan" ? (
          <g>
            {/* Outer slab */}
            <motion.rect x="120" y="110" width="960" height="580" {...line} />
            {/* Internal partitions */}
            <motion.line x1="120" y1="330" x2="1080" y2="330" {...line} />
            <motion.line x1="120" y1="520" x2="1080" y2="520" {...line} />
            <motion.line x1="440" y1="110" x2="440" y2="690" {...line} />
            <motion.line x1="760" y1="110" x2="760" y2="690" {...line} />
            {/* Column grid */}
            <motion.circle cx="440" cy="330" r="9" {...line} />
            <motion.circle cx="760" cy="330" r="9" {...line} />
            <motion.circle cx="440" cy="520" r="9" {...line} />
            <motion.circle cx="760" cy="520" r="9" {...line} />
            {/* Dimension line */}
            <motion.line x1="120" y1="60" x2="1080" y2="60" {...line} />
            <motion.line x1="120" y1="48" x2="120" y2="72" {...line} />
            <motion.line x1="1080" y1="48" x2="1080" y2="72" {...line} />
            {/* Stair / detail block */}
            <motion.rect x="900" y="560" width="120" height="90" {...line} />
            <motion.line x1="900" y1="590" x2="1020" y2="590" {...line} />
            <motion.line x1="900" y1="620" x2="1020" y2="620" {...line} />
          </g>
        ) : (
          <g>
            {/* Building envelope */}
            <motion.rect x="380" y="90" width="440" height="620" {...line} />
            {/* Floor plates */}
            <motion.line x1="380" y1="210" x2="820" y2="210" {...line} />
            <motion.line x1="380" y1="330" x2="820" y2="330" {...line} />
            <motion.line x1="380" y1="450" x2="820" y2="450" {...line} />
            <motion.line x1="380" y1="570" x2="820" y2="570" {...line} />
            {/* Vertical mullions */}
            <motion.line x1="490" y1="90" x2="490" y2="710" {...line} />
            <motion.line x1="600" y1="90" x2="600" y2="710" {...line} />
            <motion.line x1="710" y1="90" x2="710" y2="710" {...line} />
            {/* Ground line */}
            <motion.line x1="220" y1="710" x2="980" y2="710" {...line} />
            {/* Height dimension */}
            <motion.line x1="320" y1="90" x2="320" y2="710" {...line} />
            <motion.line x1="308" y1="90" x2="332" y2="90" {...line} />
            <motion.line x1="308" y1="710" x2="332" y2="710" {...line} />
          </g>
        )}
      </svg>
    </div>
  );
}
