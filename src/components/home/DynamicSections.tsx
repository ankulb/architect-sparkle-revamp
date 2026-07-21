import { Link } from "@tanstack/react-router";
import { dynamicSections } from "@/data/home";
import { Reveal } from "@/components/Reveal";

export function DynamicSections() {
  return (
    <section className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-10 md:pt-36">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Our practice in action
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display mt-6 text-3xl font-light tracking-tight sm:text-5xl">
              See how we're shaping the future
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 md:mt-20 pb-24 md:pb-36">
        <div
          className="flex snap-x snap-mandatory gap-px overflow-x-auto scroll-px-6 px-6 md:scroll-px-10 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {dynamicSections.map((item) => {
            const inner = (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.06] group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                    {item.caption}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-normal leading-tight tracking-tight text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <span className="mt-4 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-16" />
                </div>
              </>
            );

            const className =
              "group relative block h-[68vh] max-h-[640px] min-h-[440px] w-[74vw] shrink-0 snap-start overflow-hidden bg-background sm:w-[42vw] md:w-[28vw] lg:w-[calc((100%-6px)/7)]";

            return item.href ? (
              <Link key={item.caption} to={item.href} className={className}>
                {inner}
              </Link>
            ) : (
              <div key={item.caption} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
