import { dynamicSections } from "@/data/home";
import { Reveal } from "@/components/Reveal";

export function DynamicSections() {
  return (
    <section className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">How we work</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-5xl">
              A practice built on principle.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col">
          {dynamicSections.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={item.number}
                className="relative grid gap-8 border-t border-border py-14 md:grid-cols-12 md:gap-10 md:py-24"
              >
                <Reveal className="md:col-span-2">
                  <span className="font-display block text-5xl font-light tracking-tight text-gold md:sticky md:top-28">
                    {item.number}
                  </span>
                </Reveal>

                <div
                  className={`md:col-span-10 md:grid md:grid-cols-10 md:gap-10 ${
                    reverse ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal delay={1} className="md:col-span-5">
                    <h3 className="font-display text-2xl font-normal tracking-tight sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                    <span className="mt-8 inline-block h-px w-16 bg-gold" />
                  </Reveal>

                  <Reveal delay={2} className="md:col-span-5">
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover opacity-80 transition-all duration-700 hover:scale-105 hover:opacity-100"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
