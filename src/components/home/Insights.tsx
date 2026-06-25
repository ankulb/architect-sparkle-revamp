import { insights } from "@/data/home";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";

export function Insights() {
  return (
    <section id="insights" className="relative overflow-hidden border-t border-border">
      <GridBackdrop radius={220} baseOpacity={0.35} />
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Journal</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display mt-6 max-w-2xl text-3xl font-light tracking-tight sm:text-5xl">
                Latest insights on sustainable workspaces
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={i}>
              <a href={post.href} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <h3 className="font-display mt-6 text-lg font-normal leading-snug tracking-tight text-foreground transition-colors group-hover:text-gold">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Read article
                  <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-12" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
