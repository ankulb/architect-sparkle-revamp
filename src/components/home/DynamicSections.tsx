import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { dynamicSections } from "@/data/home";
import { Reveal } from "@/components/Reveal";

type Item = (typeof dynamicSections)[number];

function SpatialCard({
  item,
  index,
  onOpen,
  dimmed,
}: {
  item: Item;
  index: number;
  onOpen: (i: number) => void;
  dimmed: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, px: 0, py: 0 });
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();

  function handleMove(e: React.PointerEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ ry: x * 8, rx: -y * 8, px: -x * 12, py: -y * 12 });
  }

  function reset() {
    setHover(false);
    setTilt({ rx: 0, ry: 0, px: 0, py: 0 });
  }

  const num = String(index + 1).padStart(2, "0");

  return (
    <button
      ref={ref}
      type="button"
      onPointerEnter={() => setHover(true)}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onClick={() => onOpen(index)}
      className="group relative block h-[68vh] max-h-[640px] min-h-[440px] w-[74vw] shrink-0 snap-start overflow-hidden bg-background text-left outline-none focus-visible:ring-2 focus-visible:ring-gold sm:w-[42vw] md:w-[28vw] lg:w-[calc((100%-6px)/7)]"
      style={{
        perspective: "1200px",
        opacity: dimmed ? 0.45 : 1,
        filter: dimmed ? "saturate(0.6)" : "none",
        transition: "opacity 400ms ease, filter 400ms ease",
      }}
      aria-label={`${item.caption}: ${item.title}`}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          layoutId={`spatial-image-${index}`}
          className="absolute inset-0 overflow-hidden"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover"
            animate={{
              scale: hover ? 1.08 : 1,
              x: tilt.px,
              y: tilt.py,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

        {/* Gold corner marks on hover */}
        <div
          className={`pointer-events-none absolute inset-3 transition-opacity duration-500 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-gold" />
          <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-gold" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-gold" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-gold" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-7">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/60">{num}</span>
            <motion.span
              className="font-mono text-[10px] tracking-[0.3em] text-gold"
              animate={{ opacity: hover ? 1 : 0, x: hover ? 0 : 6 }}
              transition={{ duration: 0.4 }}
            >
              ENTER →
            </motion.span>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
              {item.caption}
            </p>
            <h3 className="font-display mt-3 text-xl font-normal leading-tight tracking-tight text-white sm:text-2xl">
              {item.title}
            </h3>
            <motion.p
              className="mt-3 max-w-[28ch] text-sm leading-relaxed text-white/70"
              initial={false}
              animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 6 }}
              transition={{ duration: 0.45 }}
            >
              {item.excerpt}
            </motion.p>
            <motion.span
              className="mt-4 block h-px bg-gold"
              initial={false}
              animate={{ width: hover ? 64 : 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </button>
  );
}

function ImmersiveOverlay({
  item,
  index,
  onClose,
}: {
  item: Item;
  index: number;
  onClose: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className="fixed inset-0 z-[80] bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Ken-Burns image */}
      <motion.div
        layoutId={`spatial-image-${index}`}
        className="absolute inset-0 overflow-hidden"
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 8, ease: "linear" }}
        />
      </motion.div>

      {/* Depth scrim */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: "inset 0 0 200px 40px rgba(0,0,0,0.55)",
        }}
      />

      {/* Gold hairline frame */}
      <motion.span
        className="pointer-events-none absolute left-6 right-6 top-6 h-px origin-left bg-gold/70"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="pointer-events-none absolute bottom-6 left-6 right-6 h-px origin-right bg-gold/70"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-8 top-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white/90 backdrop-blur transition hover:border-gold hover:text-gold"
        aria-label="Close"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {/* Rail */}
      <div className="pointer-events-none absolute bottom-8 right-8 z-10 flex flex-col items-end gap-2">
        <span className="font-mono text-[10px] tracking-[0.3em] text-gold">{num} / 07</span>
        <span className="h-16 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>

      {/* Copy */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-8 pb-20 md:px-16 md:pb-24">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {item.caption}
        </motion.p>
        <motion.h2
          className="font-display mt-4 max-w-4xl text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {item.title}
        </motion.h2>
        {(item.body || item.excerpt) && (
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            {item.body || item.excerpt}
          </motion.p>
        )}
        {item.href && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-8"
          >
            <a
              href={item.href}
              {...(item.href.startsWith("/") ? {} : { target: "_blank", rel: "noreferrer" })}
              className="group inline-flex items-center gap-3 border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold transition hover:bg-gold hover:text-black"
            >
              Know more
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function DynamicSections() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleOpen(i: number) {
    setOpenIndex(i);
  }

  const openItem = openIndex !== null ? dynamicSections[openIndex] : null;

  return (
    <section className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-36">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Our practice in action
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-5xl">
              See how we're shaping the future
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 pb-24 md:mt-20 md:pb-36">
        <div className="flex snap-x snap-mandatory gap-px overflow-x-auto scroll-px-6 px-6 [scrollbar-width:none] md:scroll-px-10 md:px-10 [&::-webkit-scrollbar]:hidden">
          {dynamicSections.map((item, i) => (
            <SpatialCard
              key={item.caption}
              item={item}
              index={i}
              onOpen={handleOpen}
              dimmed={openIndex !== null && openIndex !== i}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openItem && openIndex !== null && (
          <ImmersiveOverlay
            key={openIndex}
            item={openItem}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
