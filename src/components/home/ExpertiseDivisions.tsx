import { expertiseDivisions } from "@/data/home";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";

export function ExpertiseDivisions() {
  return (
    <section id="expertise" className="relative overflow-hidden border-t border-border">
      <GridBackdrop radius={240} baseOpacity={0.4} />
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Expertise</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-5xl">
              Two divisions. One integrated practice.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border-t border-border md:grid-cols-2">
          {expertiseDivisions.map((div, i) => (
            <Reveal key={div.number} delay={i} className="group bg-background">
              <div className="flex h-full flex-col gap-8 px-2 py-10 md:px-10 md:py-14">
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-sm text-gold">{div.number}</span>
                  <h3 className="font-display text-2xl font-normal tracking-tight sm:text-3xl">
                    {div.title}
                  </h3>
                </div>

                <div className="overflow-hidden">
                  <img
                    src={div.image}
                    alt={div.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>

                <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                  {div.lede}
                </p>

                <ul className="mt-auto flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
                  {div.services.map((s) => (
                    <li
                      key={s}
                      className="text-xs font-medium uppercase tracking-[0.16em] text-foreground/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
