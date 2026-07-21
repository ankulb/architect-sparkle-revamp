import { careers } from "@/data/home";
import { Reveal } from "@/components/Reveal";

export function Careers() {
  return (
    <section id="careers" className="relative overflow-hidden border-t border-border">
      <div className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster={careers.poster}
        >
          <source src={careers.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              {careers.overline}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display mt-6 max-w-3xl text-3xl font-light tracking-tight sm:text-5xl md:text-6xl">
              {careers.title}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {careers.body}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a
              href={careers.cta.href}
              className="group mt-10 inline-flex w-fit items-center gap-3 border border-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-gold hover:text-background"
            >
              {careers.cta.label}
              <span className="h-px w-10 bg-gold transition-all duration-300 group-hover:w-16 group-hover:bg-background" />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 md:pb-36">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {careers.team.map((src, i) => (
            <Reveal key={src} delay={i}>
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt="TOA team"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover grayscale transition-all duration-700 hover:-translate-y-1 hover:grayscale-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
