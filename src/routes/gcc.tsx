import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Globe2, Layers3, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { GlobalConnectivity } from "@/components/graphics/GlobalConnectivity";
import { gcc } from "@/data/gcc";

const title = "GCC — Global Capability Centres | Team One Architects";
const description = "Global standards. Indian context. TOA brings workplace strategy, design and end-to-end delivery to Global Capability Centres for WebMD, ERGO, Columbia Ship Management, Volkswagen and Generac.";
const url = "https://architect-sparkle-revamp.lovable.app/gcc";
export const Route = createFileRoute("/gcc")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title }, { name: "twitter:description", content: description },
  ], links: [{ rel: "canonical", href: url }] }),
  component: GccPage,
});
const themes = [
  { icon: Globe2, title: "Connected across borders", body: "Technology-enabled collaboration for teams working across time zones." },
  { icon: Users, title: "Designed around people", body: "Workplaces that bring together talent, employee experience and brand expression." },
  { icon: Layers3, title: "Built to evolve", body: "Agile planning and scalable environments that support the next stage of growth." },
];
function GccPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...gcc.hero} />
        <section className="relative overflow-hidden border-b border-border">
          <GridBackdrop corners baseOpacity={0.16} />
          <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
            <div>
              <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Global ambition. Local intelligence.</Reveal>
              <Reveal as="h2" delay={1} className="font-display mt-6 max-w-xl text-3xl font-light leading-tight sm:text-5xl">Global standards.<br />Indian context.</Reveal>
              <div className="mt-8 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {gcc.paragraphs.map((p, i) => <Reveal as="p" key={p} delay={i}>{p}</Reveal>)}
              </div>
            </div>
            <Reveal><GlobalConnectivity /></Reveal>
          </div>
        </section>
        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 md:grid-cols-3">
            {themes.map(({ icon: Icon, title: heading, body }, i) => (
              <Reveal key={heading} delay={i} className="border-t border-border pt-6">
                <Icon strokeWidth={1} className="h-8 w-8 text-gold" />
                <h3 className="font-display mt-6 text-2xl font-light">{heading}</h3>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 overflow-hidden">
            <img src={gcc.experience[2].image} alt="Columbia Ship Management global capability centre workplace" loading="lazy" className="aspect-[16/9] w-full object-cover md:aspect-[21/9]" />
          </Reveal>
          <div className="mt-12 grid gap-8 border-b border-border pb-10 md:grid-cols-3">
            {[{ title: "Strategy", text: "Align workplace planning with global teams and future growth." }, { title: "Design", text: "Translate global standards into a distinctive, people-centred environment." }, { title: "Delivery", text: "Bring the workplace to life through end-to-end execution." }].map((step, i) => (
              <Reveal key={step.title} delay={i}>
                <div className="flex items-center gap-4"><span className="font-mono text-xs text-gold">0{i + 1}</span><h3 className="font-display text-2xl">{step.title}</h3>{i < 2 && <ArrowRight className="ml-auto hidden h-5 w-5 text-muted-foreground md:block" />}</div>
                <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Our GCC experience</Reveal>
            <Reveal as="h2" delay={1} className="font-display mt-5 max-w-3xl text-3xl font-light sm:text-5xl">Workplaces for a connected world</Reveal>
            <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
              {gcc.experience.filter(item => item.to).map((item, i) => (
                <Reveal key={item.name} delay={i % 2}>
                  <Link to={item.to} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-card">
                      <img src={item.image} alt={`${item.name} GCC workplace`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute left-4 top-4 bg-hero-scrim px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-on-image">GCC</span>
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-5 border-b border-border pb-5"><h3 className="font-display text-xl font-light sm:text-2xl">{item.name}</h3><ArrowUpRight className="h-5 w-5 shrink-0 text-gold" /></div>
                  </Link>
                </Reveal>
              ))}
              <Reveal className="flex min-h-40 flex-col justify-center border-y border-border py-10">
                <p className="text-xs uppercase tracking-[0.16em] text-gold">Further GCC experience</p>
                <h3 className="font-display mt-5 text-3xl font-light">Voya</h3>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
