import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { X } from "lucide-react";
import { dynamicSections } from "@/data/home";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

type Item = (typeof dynamicSections)[number];

function ScrollRow({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1, 1, 1, 0]);

  return (
    <div ref={ref}>
      <motion.div style={reduce ? undefined : { opacity }}>{children}</motion.div>
    </div>
  );
}

function SpatialCard({ item, onOpen }: { item: Item; onOpen: () => void }) {
  const target = item.href;

  const content = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-card">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold sm:text-xs">
          {item.caption}
        </h3>
        {target && <span className="mt-2 block h-px w-0 bg-gold transition-all duration-400 group-hover:w-10 group-focus-visible:w-10" />}
      </div>
    </>
  );

  return target ? (
    <Link
      to={target}
      aria-label={`Explore ${item.caption}`}
      className="group block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      {content}
    </Link>
  ) : (
    <Button variant="ghost" onClick={onOpen} aria-label={`Explore ${item.caption}`} className="group block h-auto w-full rounded-none p-0 text-left whitespace-normal hover:bg-transparent">
      {content}
    </Button>
  );
}

export function DynamicSections() {
  const [openItem, setOpenItem] = useState<Item | null>(null);
  return (
    <section className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-36">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Our practice in action</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-5xl">
              See how we're shaping the future
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-14 md:px-10 md:pb-36 md:pt-20">
        <ScrollRow>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-5">
            {dynamicSections.map((item) => <SpatialCard key={item.caption} item={item} onOpen={() => setOpenItem(item)} />)}
          </div>
        </ScrollRow>
      </div>
      <AnimatePresence>
        {openItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={openItem.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-end bg-background"
          >
            <img src={openItem.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <Button variant="ghost" size="icon" onClick={() => setOpenItem(null)} aria-label="Close" className="absolute right-6 top-6 z-10 text-foreground"><X /></Button>
            <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-10 md:pb-28">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{openItem.caption}</p>
              <h2 className="font-display mt-5 max-w-3xl text-4xl text-foreground sm:text-6xl">{openItem.title}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">{openItem.body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
