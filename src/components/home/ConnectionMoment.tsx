import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";

/**
 * "Where Vision Meets Craft" — two mirrored blueprint halves slide in from the
 * edges and join at a glowing gold cornerstone (spark + ring pop), then the
 * supporting copy resolves. Triggered once when scrolled into view.
 */

function BlueprintHalf({ mirror = false }: { mirror?: boolean }) {
  return (
    <svg
      viewBox="0 0 330 470"
      width="310"
      height="440"
      className="h-auto w-[220px] sm:w-[260px] lg:w-[310px]"
      style={mirror ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M 38 440 L 38 25" fill="none" stroke="var(--blueprint)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 38 25 L 330 25" fill="none" stroke="var(--blueprint)" strokeWidth="2.4" />
      <path d="M 0 440 L 330 440" fill="none" stroke="var(--blueprint)" strokeWidth="2.4" />
      <path
        d="M 38 372 L 330 372 M 38 304 L 330 304 M 38 236 L 330 236 M 38 168 L 330 168 M 38 100 L 330 100"
        fill="none"
        stroke="var(--blueprint-dim)"
        strokeWidth="1"
        strokeDasharray="8 5"
      />
      {[384, 316, 248, 180, 112].map((y) => (
        <path
          key={y}
          d={`M 52 ${y} L 98 ${y} L 98 ${y + 38} L 52 ${y + 38} Z M 114 ${y} L 160 ${y} L 160 ${y + 38} L 114 ${y + 38} Z M 176 ${y} L 222 ${y} L 222 ${y + 38} L 176 ${y + 38} Z M 238 ${y} L 284 ${y} L 284 ${y + 38} L 238 ${y + 38} Z`}
          fill="none"
          stroke="var(--blueprint)"
          strokeWidth="1.2"
        />
      ))}
      <path
        d="M 180 372 L 180 440 M 260 372 L 260 440 M 220 372 L 220 410 L 260 410"
        fill="none"
        stroke="var(--blueprint)"
        strokeWidth="1.3"
      />
      <path d="M 30 25 L 30 10 L 330 10" fill="none" stroke="var(--blueprint)" strokeWidth="1.5" />
    </svg>
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
