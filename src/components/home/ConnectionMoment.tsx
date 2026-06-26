import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";

/**
 * "Where Vision Meets Craft" — two real project images slide in from the edges
 * and join at a glowing gold cornerstone (spark + ring pop). The left frame is
 * treated as the "vision" (cool blueprint tint + drafting grid overlay), the
 * right frame as the realized "craft" (full color). Triggered once in view.
 */

const UP = "https://teamonearchitects.com/wp-content/uploads";

const VISION_IMG = `${UP}/2025/10/WhatsApp-Image-2025-10-28-at-11.20.12-AM-1.jpeg`;
const CRAFT_IMG = `${UP}/2026/03/DSC07321-HDR-650x650.jpg`;

function ImageFrame({
  src,
  alt,
  vision = false,
}: {
  src: string;
  alt: string;
  vision?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        style={
          vision
            ? { filter: "grayscale(0.55) contrast(1.05) brightness(0.85)" }
            : undefined
        }
      />
      {/* Cool blueprint wash on the "vision" frame */}
      {vision && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--blueprint) 42%, transparent), color-mix(in oklab, var(--blueprint) 12%, transparent))",
            mixBlendMode: "multiply",
          }}
        />
      )}
      {/* Drafting grid overlay on the "vision" frame */}
      {vision && (
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(color-mix(in oklab, var(--blueprint) 55%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--blueprint) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
      )}
      {/* Inner edge vignette toward the seam */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: vision
            ? "linear-gradient(to right, transparent 70%, rgba(0,0,0,0.35))"
            : "linear-gradient(to left, transparent 70%, rgba(0,0,0,0.35))",
        }}
      />
      {/* Corner ticks */}
      <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t" style={{ borderColor: "color-mix(in oklab, var(--gold) 60%, transparent)" }} />
      <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r" style={{ borderColor: "color-mix(in oklab, var(--gold) 60%, transparent)" }} />
    </div>
  );
}

export function ConnectionMoment() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (reduce) {
      setOn(true);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.22 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  const T = reduce ? "none" : undefined;

  return (
    <section
      ref={sectionRef}
      id="conn-section"
      className="overflow-hidden bg-background px-6 pb-28 pt-32 lg:pb-32 lg:pt-36"
    >
      <div className="mx-auto max-w-[1160px]">
        {/* Heading */}
        <div className="mb-16 text-center lg:mb-20">
          <div
            className="mb-3.5 text-[9px] uppercase tracking-[0.26em]"
            style={{ color: "var(--gold)", fontFamily: "ui-monospace, monospace" }}
          >
            Partnership
          </div>
          <h2
            className="font-display text-[clamp(2.2rem,4.6vw,3.5rem)] font-light leading-[1.08] text-foreground"
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "translateY(0)" : "translateY(22px)",
              transition: T ?? "opacity 0.8s, transform 0.8s",
            }}
          >
            Where Vision
            <br />
            <em className="italic text-gold">Meets Craft</em>
          </h2>
        </div>

        {/* Joining blueprints */}
        <div className="relative flex items-end justify-center">
          {/* Left half */}
          <div
            className="flex-shrink-0"
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "translateX(0)" : "translateX(-200px)",
              transition:
                T ??
                "transform 1.35s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.9s",
            }}
          >
            <BlueprintHalf />
            <div
              className="mt-2.5 text-center text-[9px] uppercase tracking-[0.22em]"
              style={{ color: "var(--blueprint)", fontFamily: "ui-monospace, monospace" }}
            >
              Your Vision
            </div>
          </div>

          {/* Center cornerstone */}
          <div
            className="relative h-[300px] w-[3px] flex-shrink-0 self-start sm:h-[360px] lg:h-[440px]"
            style={{
              opacity: on ? 1 : 0,
              transition: T ?? "opacity 0.5s 1.1s",
            }}
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, var(--gold) 25%, var(--gold) 75%, transparent 100%)",
                boxShadow: "0 0 28px 6px var(--gold-soft)",
              }}
            />
            {/* Spark */}
            <div
              className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: "var(--foreground)",
                boxShadow: "0 0 24px 8px var(--gold)",
                opacity: on ? 1 : 0,
                transition: T ?? "opacity 0.3s 1.4s",
              }}
            />
            {/* Ring pop */}
            {on && !reduce && (
              <div
                className="toa-ring-pop absolute left-1/2 top-1/2 h-9 w-9 rounded-full border"
                style={{
                  borderColor: "color-mix(in oklab, var(--gold) 50%, transparent)",
                  animationDelay: "1.45s",
                }}
              />
            )}
          </div>

          {/* Right half */}
          <div
            className="flex-shrink-0"
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "translateX(0)" : "translateX(200px)",
              transition:
                T ??
                "transform 1.35s cubic-bezier(0.25,0.46,0.45,0.94) 0.07s, opacity 0.9s 0.07s",
            }}
          >
            <BlueprintHalf mirror />
            <div
              className="mt-2.5 text-center text-[9px] uppercase tracking-[0.22em]"
              style={{ color: "var(--blueprint)", fontFamily: "ui-monospace, monospace" }}
            >
              Our Expertise
            </div>
          </div>
        </div>

        {/* Copy */}
        <div
          className="mt-16 text-center lg:mt-20"
          style={{
            opacity: on ? 1 : 0,
            transform: on ? "translateY(0)" : "translateY(18px)",
            transition: T ?? "opacity 0.7s 1.7s, transform 0.7s 1.7s",
          }}
        >
          <p className="mx-auto mb-9 max-w-xl text-xl font-light italic leading-relaxed text-muted-foreground sm:text-2xl">
            From the first conversation to the final cornerstone — every great
            project is built on a foundation of trust.
          </p>
          <Link
            to="/portfolio"
            className="border-b pb-1 text-[10px] uppercase tracking-[0.16em] text-gold transition-opacity hover:opacity-70"
            style={{ borderColor: "color-mix(in oklab, var(--gold) 30%, transparent)" }}
          >
            Start Your Project →
          </Link>
        </div>
      </div>
    </section>
  );
}
