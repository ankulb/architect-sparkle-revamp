import { responsibilities } from "@/data/home";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";

export function Responsibilities() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-card/40">
      <GridBackdrop radius={240} baseOpacity={0.4} />
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Our responsibility</p>
        </Reveal>
        <Reveal delay={1}>
          <blockquote className="font-display mt-8 max-w-4xl text-2xl font-light italic leading-snug tracking-tight text-foreground sm:text-4xl">
            “{responsibilities.quote}”
          </blockquote>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border-t border-border md:grid-cols-3">
          {responsibilities.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i}
              className="bg-background px-2 py-10 md:px-8"
            >
              <span className="font-display text-sm text-gold">0{i + 1}</span>
              <h3 className="font-display mt-5 text-xl font-normal tracking-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
