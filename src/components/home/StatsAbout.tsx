import { stats, about } from "@/data/home";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";

export function StatsAbout() {
  return (
    <section id="about" className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <GridBackdrop corners radius={240} baseOpacity={0.45} />
      <div className="relative z-10 grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">We design as one</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display mt-6 text-3xl font-light leading-[1.12] tracking-tight sm:text-5xl">
              We deliver as one
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              {about.intro}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={about.image}
                alt="The Team One Architects studio team"
                className="aspect-[16/9] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 mt-20 grid grid-cols-1 gap-px overflow-hidden border-y border-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i}
            className="bg-background px-2 py-10 sm:px-6"
          >
            <div className="font-display text-5xl font-light tracking-tight text-foreground md:text-6xl">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </div>
            <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {stat.label}
            </h3>
            <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-muted-foreground">
              {stat.note}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
