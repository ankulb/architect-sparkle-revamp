import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import logoAsset from "@/assets/toa-logo.png.asset.json";

/**
 * Cinematic opening: the TOA logo "fills up" with brand orange-gold light from
 * the bottom, then the overlay lifts to reveal the hero. Plays on every load.
 */
export function IntroOverlay() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  const dismiss = useCallback(() => setVisible(false), []);

  // Lock scroll while the overlay is up.
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  // Auto-dismiss + skip affordances.
  useEffect(() => {
    const total = reduce ? 900 : 2400;
    const timer = window.setTimeout(dismiss, total);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    const onScroll = () => dismiss();
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
  }, [reduce, dismiss]);

  const fillDuration = reduce ? 0.4 : 1.5;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 flex flex-col items-center justify-center bg-background"
          style={{ zIndex: 100 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          onClick={dismiss}
          role="presentation"
        >
          {/* Soft gold ambience */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, var(--gold-soft) 0%, transparent 65%)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.9, 0.5], scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Logo fill-up */}
          <div className="relative">
            {/* Dim base silhouette */}
            <img
              src={logoAsset.url}
              alt=""
              aria-hidden
              className="h-24 w-auto opacity-[0.16] md:h-28"
            />
            {/* Bright copy welling up from the bottom */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: fillDuration, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
            >
              <img
                src={logoAsset.url}
                alt="Team One Architects"
                className="h-24 w-auto drop-shadow-[0_0_24px_var(--gold-soft)] md:h-28"
              />
              {/* Meniscus glow riding the top of the fill */}
              <div
                aria-hidden
                className="absolute left-0 top-0 h-2 w-full"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--gold), transparent)",
                  opacity: 0.7,
                }}
              />
            </motion.div>
          </div>

          {/* Wordmark + progress */}
          <motion.p
            className="mt-8 text-[0.6rem] font-medium uppercase tracking-[0.5em] text-muted-foreground md:text-xs"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reduce ? 0.1 : 0.9 }}
          >
            Team One Architects
          </motion.p>

          <div className="mt-5 h-px w-40 overflow-hidden bg-foreground/10">
            <motion.div
              className="h-full bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduce ? 0.5 : 2.1, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
