import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

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
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={() => onOpen(index)}
      className="group block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-gold"
      style={{
        opacity: dimmed ? 0.5 : 1,
        transition: "opacity 400ms ease",
      }}
      aria-label={`${item.caption}: ${item.title}`}
    >
      <motion.div
        layoutId={`spatial-image-${index}`}
        className="relative aspect-[3/5] w-full overflow-hidden bg-card"
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover"
          animate={{ scale: hover ? 1.06 : 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </motion.div>

      <div className="mt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
          {item.caption}
        </p>
        <h3 className="font-display mt-2 text-sm font-normal leading-snug tracking-tight text-foreground sm:text-base">
          {item.title}
        </h3>
        <motion.span
          className="mt-2 block h-px bg-gold"
          initial={false}
          animate={{ width: hover ? 40 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
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

      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-14 md:px-10 md:pb-36 md:pt-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-3">
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
