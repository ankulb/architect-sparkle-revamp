import { useEffect, useRef } from "react";

type InteractiveGridProps = {
  /** Grid cell size in px. */
  cellSize?: number;
  /** Glow radius in px that follows the cursor. */
  radius?: number;
  /** Opacity of the static base grid (0–1). */
  baseOpacity?: number;
  /** When false, only the static grid renders (no cursor tracking). */
  interactive?: boolean;
  className?: string;
};

/**
 * A blueprint grid that illuminates with the TOA orange–gold blend near the
 * cursor and trails behind the pointer. Sits as an absolute background layer
 * inside a `relative` parent. Theme-aware via semantic tokens.
 */
export function InteractiveGrid({
  cellSize = 96,
  radius = 220,
  baseOpacity = 0.32,
  interactive = true,
  className = "",
}: InteractiveGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!interactive) return;
    const el = ref.current;
    if (!el) return;

    // Walk up past any pointer-events-none wrappers to the real host that
    // actually receives pointer events (e.g. the section).
    let host: HTMLElement | null = el.parentElement;
    while (host && getComputedStyle(host).pointerEvents === "none") {
      host = host.parentElement;
    }
    if (!host) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let raf = 0;
    let nx = 0;
    let ny = 0;

    const apply = () => {
      raf = 0;
      el.style.setProperty("--mx", `${nx}px`);
      el.style.setProperty("--my", `${ny}px`);
    };
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      nx = e.clientX - rect.left;
      ny = e.clientY - rect.top;
      el.style.setProperty("--on", "1");
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => el.style.setProperty("--on", "0");

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host!.removeEventListener("pointermove", onMove);
      host!.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [interactive]);

  const gridLines = `linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`;
  const goldLines = `linear-gradient(to right, var(--gold) 1px, transparent 1px), linear-gradient(to bottom, var(--gold) 1px, transparent 1px)`;
  const mask = `radial-gradient(circle ${radius}px at var(--mx, -9999px) var(--my, -9999px), #000 0%, rgba(0,0,0,0.6) 38%, transparent 70%)`;

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ ["--on" as string]: "0" }}
    >
      {/* Static blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: gridLines,
          backgroundSize: `${cellSize}px ${cellSize}px`,
          opacity: baseOpacity,
          maskImage:
            "radial-gradient(ellipse 120% 120% at 50% 40%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 120% at 50% 40%, #000 55%, transparent 100%)",
        }}
      />
      {/* Cursor-revealed gold grid */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: goldLines,
          backgroundSize: `${cellSize}px ${cellSize}px`,
          maskImage: mask,
          WebkitMaskImage: mask,
          opacity: "calc(var(--on) * 0.7)",
        }}
      />
      {/* Warm orange–gold core glow */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle ${radius * 0.7}px at var(--mx, -9999px) var(--my, -9999px), color-mix(in oklab, var(--gold) 55%, #ff7a1a) 0%, color-mix(in oklab, var(--gold) 18%, transparent) 32%, transparent 65%)`,
          opacity: "calc(var(--on) * 0.22)",
        }}
      />
    </div>
  );
}
