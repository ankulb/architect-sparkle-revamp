import { careers } from "@/data/home";
import { Reveal } from "@/components/Reveal";

export function Careers() {
  return (
    <section id="careers" className="relative overflow-hidden border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-36">
        {/* Left: media */}
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[4/5]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={careers.poster}
            >
              <source src={careers.video} type="video/mp4" />
            </video>
            <span className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l border-t border-gold" />
            <span className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r border-t border-gold" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold" />
          </div>
        </Reveal>

        {/* Right: text */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="block h-px w-14 bg-gold" />
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              {careers.overline}
            </p>
          </Reveal>
          <Reveal delay={2}>
            <h2 className="font-display mt-6 max-w-xl text-3xl font-light tracking-tight sm:text-5xl md:text-6xl">
              {careers.title}
            </h2>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              {careers.body}
            </p>
          </Reveal>
          <Reveal delay={4}>
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
    </section>
  );
}
