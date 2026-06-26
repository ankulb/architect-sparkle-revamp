import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";

/**
 * Scroll-driven hero: an architectural blueprint draws itself stage by stage as
 * the visitor scrolls, then "becomes built" — its draft-blue lines warming to
 * brand gold, dimension annotations and a "PROPOSED ELEVATION" stamp resolving
 * in. The right column tells the story in four phases (Vision → Realized).
 *
 * Ported from a standalone prototype and re-skinned to the TOA design tokens.
 */

// Per-stage [start, end] scroll windows (0..1 of the pinned section).
const STAGE_MAP: Array<[number, number]> = [
  [0.0, 0.12],
  [0.08, 0.3],
  [0.27, 0.5],
  [0.45, 0.68],
  [0.62, 0.82],
  [0.76, 0.94],
  [0.88, 0.97],
  [0.93, 1.0],
];

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

function stageProg(stage: number, sp: number) {
  const [s, e] = STAGE_MAP[stage] ?? [0, 1];
  return clamp01((sp - s) / (e - s));
}

// Resolve a CSS color (incl. var()) to an [r,g,b] triple via the browser.
function resolveRgb(value: string): [number, number, number] {
  const probe = document.createElement("span");
  probe.style.color = value;
  probe.style.display = "none";
  document.body.appendChild(probe);
  const computed = getComputedStyle(probe).color;
  probe.remove();
  const m = computed.match(/\d+(\.\d+)?/g);
  if (!m) return [112, 150, 200];
  return [Number(m[0]), Number(m[1]), Number(m[2])];
}

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const svg = svgRef.current;
    if (!section || !svg) return;

    const paths = Array.from(
      svg.querySelectorAll<SVGPathElement>(".bp-path[data-stage]"),
    );
    const lens = new Map<SVGPathElement, number>();

    const draftRgb = resolveRgb("var(--blueprint)");
    const goldRgb = resolveRgb("var(--gold)");

    // Seed dash arrays so paths start "undrawn".
    paths.forEach((p) => {
      if (p.dataset.anim === "opacity") {
        p.style.opacity = "0";
        return;
      }
      try {
        const len = p.getTotalLength();
        lens.set(p, len);
        p.style.strokeDasharray = String(len);
        p.style.strokeDashoffset = String(len);
      } catch {
        /* ignore non-measurable paths */
      }
    });

    const byId = (id: string) =>
      section.querySelector<HTMLElement>(`#${id}`);
    const svgById = (id: string) =>
      svg.querySelector<SVGElement>(`#${id}`);

    const updatePaths = (sp: number) => {
      paths.forEach((p) => {
        const stage = Number(p.dataset.stage);
        const prog = stageProg(stage, sp);
        if (p.dataset.anim === "opacity") {
          p.style.opacity = String(prog);
          return;
        }
        const len = lens.get(p) ?? 0;
        p.style.strokeDashoffset = String(len * (1 - prog));

        // Structural lines warm from draft-blue to gold at completion.
        if (stage === 0 || stage === 1) {
          if (sp >= 0.93) {
            const t = clamp01((sp - 0.93) / 0.07) * 0.85;
            const r = Math.round(draftRgb[0] + (goldRgb[0] - draftRgb[0]) * t);
            const g = Math.round(draftRgb[1] + (goldRgb[1] - draftRgb[1]) * t);
            const b = Math.round(draftRgb[2] + (goldRgb[2] - draftRgb[2]) * t);
            p.style.stroke = `rgb(${r},${g},${b})`;
          } else {
            p.style.stroke = "";
          }
        }
      });

      // Dimension labels fade in with stage 7.
      const s7 = stageProg(7, sp);
      ["dim-h", "dim-w", "dim-sc"].forEach((id) => {
        const el = svgById(id);
        if (el) el.style.opacity = String(s7);
      });
      const stamp = svgById("stamp-group");
      if (stamp)
        stamp.style.opacity = sp >= 0.97 ? String(clamp01((sp - 0.97) / 0.03)) : "0";

      const lbl = byId("bp-label");
      if (lbl) {
        if (sp > 0.92) lbl.textContent = "Proposed elevation — realized.";
        else if (sp > 0.62) lbl.textContent = "Defining the extraordinary.";
        else if (sp > 0.35) lbl.textContent = "Taking shape…";
        else lbl.textContent = "Every vision starts with a line.";
      }

      const et = byId("elev-tag");
      if (et) et.style.opacity = sp > 0.45 ? String(clamp01((sp - 0.45) / 0.15)) : "0";
    };

    const updateText = (sp: number) => {
      const phases = ["tp0", "tp1", "tp2", "tp3"];
      const thresholds = [0, 0.28, 0.58, 0.88];
      let active = 0;
      thresholds.forEach((t, i) => {
        if (sp >= t) active = i;
      });
      phases.forEach((id, i) => {
        const el = byId(id);
        if (!el) return;
        el.classList.toggle("active", i === active);
        el.classList.toggle("past", i < active);
      });
    };

    const updateIndicator = (sp: number) => {
      const fill = byId("prog-fill");
      const pip = byId("prog-pip");
      if (fill) fill.style.height = `${sp * 100}%`;
      if (pip) pip.style.top = `${sp * 100}%`;
      const cue = byId("scroll-cue");
      if (cue) cue.style.opacity = sp > 0.02 ? "0" : "1";
    };

    const apply = (sp: number) => {
      updatePaths(sp);
      updateText(sp);
      updateIndicator(sp);
    };

    if (reduce) {
      apply(1);
      return;
    }

    let rafPending = false;
    const onScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        const r = section.getBoundingClientRect();
        const sp = clamp01(-r.top / (section.offsetHeight - window.innerHeight));
        apply(sp);
      });
    };

    apply(0);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative h-[260vh] lg:h-[350vh]"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-background lg:flex-row">
        {/* ── Blueprint column ───────────────────────────────────────── */}
        <div className="relative flex flex-1 items-center justify-center px-4 pt-24 pb-6 lg:py-[72px] lg:pl-[72px] lg:pr-4">
          {/* Pulsing technical grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(var(--blueprint) 1px, transparent 1px), linear-gradient(90deg, var(--blueprint) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              opacity: 0.06,
              animation: "toa-grid-pulse 5s ease-in-out infinite",
            }}
          />

          <svg
            ref={svgRef}
            id="building-svg"
            viewBox="0 0 800 580"
            className="relative z-[1] h-auto w-full max-w-[560px] lg:max-w-[620px]"
          >
            {/* 0: Ground */}
            <path className="bp-path thick" data-stage="0" d="M 0 530 L 800 530" />

            {/* 1: Outline — walls + roof */}
            <path className="bp-path thick" data-stage="1" d="M 100 530 L 100 75" />
            <path className="bp-path thick" data-stage="1" d="M 700 530 L 700 75" />
            <path className="bp-path thick" data-stage="1" d="M 100 75 L 700 75" />

            {/* 2: Floor lines */}
            <path
              className="bp-path"
              data-stage="2"
              d="M 100 455 L 700 455 M 100 380 L 700 380 M 100 305 L 700 305 M 100 230 L 700 230 M 100 155 L 700 155"
            />

            {/* 3a: Canopy + entrance */}
            <path
              className="bp-path"
              data-stage="3"
              d="M 295 440 L 505 440 L 505 455 L 295 455 L 295 440"
            />
            <path
              className="bp-path"
              data-stage="3"
              d="M 319 455 L 319 530 M 481 455 L 481 530 M 400 455 L 400 530 M 319 492 L 481 492"
            />
            <path
              className="bp-path"
              data-stage="3"
              d="M 373 490 L 382 490 M 418 490 L 427 490"
            />
            {/* 3b: Ground-floor windows */}
            <path
              className="bp-path"
              data-stage="3"
              d="M 115 468 L 177 468 L 177 520 L 115 520 L 115 468 M 215 468 L 277 468 L 277 520 L 215 520 L 215 468 M 523 468 L 585 468 L 585 520 L 523 520 L 523 468 M 623 468 L 685 468 L 685 520 L 623 520 L 623 468"
            />

            {/* 4: Floors 2 & 3 windows */}
            <path
              className="bp-path"
              data-stage="4"
              d="M 115 392 L 177 392 L 177 443 L 115 443 L 115 392 M 215 392 L 277 392 L 277 443 L 215 443 L 215 392 M 319 392 L 381 392 L 381 443 L 319 443 L 319 392 M 419 392 L 481 392 L 481 443 L 419 443 L 419 392 M 523 392 L 585 392 L 585 443 L 523 443 L 523 392 M 623 392 L 685 392 L 685 443 L 623 443 L 623 392"
            />
            <path
              className="bp-path"
              data-stage="4"
              d="M 115 317 L 177 317 L 177 368 L 115 368 L 115 317 M 215 317 L 277 317 L 277 368 L 215 368 L 215 317 M 319 317 L 381 317 L 381 368 L 319 368 L 319 317 M 419 317 L 481 317 L 481 368 L 419 368 L 419 317 M 523 317 L 585 317 L 585 368 L 523 368 L 523 317 M 623 317 L 685 317 L 685 368 L 623 368 L 623 317"
            />

            {/* 5: Floors 4, 5 & 6 windows */}
            <path
              className="bp-path"
              data-stage="5"
              d="M 115 242 L 177 242 L 177 293 L 115 293 L 115 242 M 215 242 L 277 242 L 277 293 L 215 293 L 215 242 M 319 242 L 381 242 L 381 293 L 319 293 L 319 242 M 419 242 L 481 242 L 481 293 L 419 293 L 419 242 M 523 242 L 585 242 L 585 293 L 523 293 L 523 242 M 623 242 L 685 242 L 685 293 L 623 293 L 623 242"
            />
            <path
              className="bp-path"
              data-stage="5"
              d="M 115 167 L 177 167 L 177 218 L 115 218 L 115 167 M 215 167 L 277 167 L 277 218 L 215 218 L 215 167 M 319 167 L 381 167 L 381 218 L 319 218 L 319 167 M 419 167 L 481 167 L 481 218 L 419 218 L 419 167 M 523 167 L 585 167 L 585 218 L 523 218 L 523 167 M 623 167 L 685 167 L 685 218 L 623 218 L 623 167"
            />
            <path
              className="bp-path"
              data-stage="5"
              d="M 115 87 L 177 87 L 177 138 L 115 138 L 115 87 M 215 87 L 277 87 L 277 138 L 215 138 L 215 87 M 319 87 L 381 87 L 381 138 L 319 138 L 319 87 M 419 87 L 481 87 L 481 138 L 419 138 L 419 87 M 523 87 L 585 87 L 585 138 L 523 138 L 523 87 M 623 87 L 685 87 L 685 138 L 623 138 L 623 87"
            />

            {/* 6: Roof parapet + penthouse */}
            <path
              className="bp-path thick"
              data-stage="6"
              d="M 88 75 L 88 56 L 712 56 L 712 75"
            />
            <path
              className="bp-path"
              data-stage="6"
              d="M 248 56 L 248 24 L 552 24 L 552 56"
            />
            <path
              className="bp-path"
              data-stage="6"
              d="M 344 24 L 344 8 L 456 8 L 456 24"
            />

            {/* 7: Dimension lines (opacity-driven) */}
            <path
              className="bp-path dim"
              data-stage="7"
              data-anim="opacity"
              d="M 62 75 L 62 530"
            />
            <path
              className="bp-path"
              data-stage="7"
              data-anim="opacity"
              style={{ strokeWidth: 1 }}
              d="M 55 75 L 69 75 M 55 530 L 69 530 M 62 87 L 57 104 M 62 87 L 67 104 M 62 518 L 57 501 M 62 518 L 67 501"
            />
            <path
              className="bp-path dim"
              data-stage="7"
              data-anim="opacity"
              d="M 100 557 L 700 557"
            />
            <path
              className="bp-path"
              data-stage="7"
              data-anim="opacity"
              style={{ strokeWidth: 1 }}
              d="M 100 550 L 100 564 M 700 550 L 700 564 M 112 557 L 130 552 M 112 557 L 130 562 M 688 557 L 670 552 M 688 557 L 670 562"
            />

            {/* Dimension labels */}
            <text
              id="dim-h"
              fontSize="11"
              fill="var(--blueprint)"
              textAnchor="middle"
              transform="rotate(-90 38 302)"
              opacity="0"
              style={{ transition: "opacity 0.6s", fontFamily: "ui-monospace, monospace" }}
            >
              H=18.4M
            </text>
            <text
              id="dim-w"
              fontSize="11"
              fill="var(--blueprint)"
              textAnchor="middle"
              x="400"
              y="576"
              opacity="0"
              style={{ transition: "opacity 0.6s", fontFamily: "ui-monospace, monospace" }}
            >
              W=30.0M
            </text>
            <text
              id="dim-sc"
              fontSize="9"
              fill="var(--blueprint-dim)"
              textAnchor="end"
              x="796"
              y="576"
              opacity="0"
              style={{ transition: "opacity 0.6s", fontFamily: "ui-monospace, monospace" }}
            >
              SCALE 1:100
            </text>

            {/* "PROPOSED ELEVATION" stamp at completion */}
            <g id="stamp-group" opacity="0" style={{ transition: "opacity 0.8s" }}>
              <circle
                cx="400"
                cy="302"
                r="68"
                fill="none"
                stroke="var(--gold)"
                strokeOpacity="0.3"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <circle
                cx="400"
                cy="302"
                r="56"
                fill="none"
                stroke="var(--gold)"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
              <text
                x="400"
                y="296"
                fontSize="10"
                fill="var(--gold)"
                fillOpacity="0.7"
                textAnchor="middle"
                letterSpacing="4"
                style={{ fontFamily: "ui-monospace, monospace" }}
              >
                PROPOSED
              </text>
              <text
                x="400"
                y="312"
                fontSize="10"
                fill="var(--gold)"
                fillOpacity="0.7"
                textAnchor="middle"
                letterSpacing="4"
                style={{ fontFamily: "ui-monospace, monospace" }}
              >
                ELEVATION
              </text>
            </g>
          </svg>

          {/* Caption */}
          <div
            id="bp-label"
            className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] transition-opacity"
            style={{ color: "var(--blueprint)", fontFamily: "ui-monospace, monospace" }}
          >
            Every vision starts with a line.
          </div>

          {/* Elevation side-tag */}
          <div
            id="elev-tag"
            className="absolute left-5 top-1/2 hidden origin-center -translate-y-1/2 -rotate-90 whitespace-nowrap text-[9px] uppercase tracking-[0.18em] opacity-0 transition-opacity lg:block"
            style={{ color: "var(--blueprint-dim)", fontFamily: "ui-monospace, monospace" }}
          >
            North Elevation — TOA-2024-001
          </div>
        </div>

        {/* ── Text column ────────────────────────────────────────────── */}
        <div className="relative flex w-full flex-col justify-center px-8 pb-16 lg:w-[37%] lg:px-16 lg:py-20">
          {/* Progress rail */}
          <div className="absolute left-0 top-16 bottom-16 hidden w-px lg:block" style={{ background: "color-mix(in oklab, var(--blueprint) 18%, transparent)" }}>
            <div
              id="prog-fill"
              className="w-px"
              style={{
                background: "var(--blueprint)",
                height: "0%",
                transition: "height 0.08s linear",
              }}
            />
            <div
              id="prog-pip"
              className="toa-pip-glow absolute left-[-3px] top-0 h-[7px] w-[7px] rounded-full"
              style={{ background: "var(--gold)", transition: "top 0.08s linear" }}
            />
          </div>

          <div className="relative min-h-[320px] lg:min-h-0 lg:pl-9">
            {/* Phase 0 */}
            <div id="tp0" className="hero-phase active">
              <div
                className="mb-5 text-[9px] uppercase tracking-[0.26em]"
                style={{ color: "var(--gold)", fontFamily: "ui-monospace, monospace" }}
              >
                01 — Vision
              </div>
              <h1 className="font-display mb-5 text-[clamp(2.4rem,5vw,3.6rem)] font-light leading-[1.04] text-foreground">
                Architecture
                <br />
                <em className="font-light italic text-gold">that endures.</em>
              </h1>
              <p className="max-w-md text-lg font-light leading-relaxed text-muted-foreground">
                Every great building begins with a single line — a thought made
                tangible on paper.
              </p>
            </div>

            {/* Phase 1 */}
            <div id="tp1" className="hero-phase">
              <div
                className="mb-5 text-[9px] uppercase tracking-[0.26em]"
                style={{ color: "var(--gold)", fontFamily: "ui-monospace, monospace" }}
              >
                02 — Blueprint
              </div>
              <h2 className="font-display mb-5 text-[clamp(2.1rem,4.4vw,3.1rem)] font-light leading-[1.04] text-foreground">
                Every line drawn
                <br />
                <em className="font-light italic text-gold">with purpose.</em>
              </h2>
              <p className="max-w-md text-lg font-light leading-relaxed text-muted-foreground">
                Translating your vision into precise architectural language —
                where function meets beauty.
              </p>
            </div>

            {/* Phase 2 */}
            <div id="tp2" className="hero-phase">
              <div
                className="mb-5 text-[9px] uppercase tracking-[0.26em]"
                style={{ color: "var(--gold)", fontFamily: "ui-monospace, monospace" }}
              >
                03 — Craft
              </div>
              <h2 className="font-display mb-5 text-[clamp(2.1rem,4.4vw,3.1rem)] font-light leading-[1.04] text-foreground">
                Details that define
                <br />
                <em className="font-light italic text-gold">the extraordinary.</em>
              </h2>
              <p className="max-w-md text-lg font-light leading-relaxed text-muted-foreground">
                From the first sketch to the final stone — every decision shaped
                by decades of expertise.
              </p>
            </div>

            {/* Phase 3 */}
            <div id="tp3" className="hero-phase">
              <div
                className="mb-5 text-[9px] uppercase tracking-[0.26em]"
                style={{ color: "var(--gold)", fontFamily: "ui-monospace, monospace" }}
              >
                04 — Realized
              </div>
              <h2 className="font-display mb-5 text-[clamp(2.6rem,5vw,3.8rem)] font-semibold italic leading-none text-gold">
                Complete.
              </h2>
              <p className="mb-9 max-w-md text-lg font-light leading-relaxed text-muted-foreground">
                Your vision, precisely realized. A landmark built to stand for
                generations.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 border px-7 py-3.5 text-[10px] uppercase tracking-[0.14em] text-gold transition-opacity hover:opacity-70"
                style={{ borderColor: "color-mix(in oklab, var(--gold) 45%, transparent)" }}
              >
                View Portfolio <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Scroll cue */}
          <div
            id="scroll-cue"
            className="absolute bottom-8 left-8 flex items-center gap-3.5 transition-opacity lg:left-16"
          >
            <div className="h-px w-5" style={{ background: "var(--gold)" }} />
            <span
              className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
              style={{ fontFamily: "ui-monospace, monospace" }}
            >
              Scroll to reveal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
