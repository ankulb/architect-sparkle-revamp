import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { dynamicSections } from "@/data/home";
import { Reveal } from "@/components/Reveal";

type Item = (typeof dynamicSections)[number];

function ScrollRow({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [-40, 0, 0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref}>
      <motion.div style={reduce ? undefined : { x, opacity }}>{children}</motion.div>
    </div>
  );
}

function SpatialCard({ item }: { item: Item }) {
  const target = item.caption === "Awards" ? "/insights/awards"
    : item.caption === "News" ? "/insights/news"
    : item.caption === "CSR" ? "/about/csr"
    : undefined;

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
    <div className="group w-full">{content}</div>
  );
}

export function DynamicSections() {
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-5">
            {dynamicSections.map((item) => <SpatialCard key={item.caption} item={item} />)}
          </div>
        </ScrollRow>
      </div>
    </section>
  );
}
