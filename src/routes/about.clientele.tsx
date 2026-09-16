import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { GridBackdrop } from "@/components/graphics/GridBackdrop";
import { clientele } from "@/data/about";

const title = "Clientele — Team One Architects";
const description =
  "Trusted by the best, chosen for vision. The engineering, technology and enterprise leaders who build the future with Team One Architects.";
const url = "https://architect-sparkle-revamp.lovable.app/about/clientele";

export const Route = createFileRoute("/about/clientele")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: clientele.hero.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: clientele.hero.image },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: ClientelePage,
});

function ClientelePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero {...clientele.hero} />

        <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28">
          <GridBackdrop radius={240} baseOpacity={0.4} />
          <div className="relative z-10 mx-auto max-w-[1600px]">
          {clientele.groups.map((group, gi) => (
            <section key={group.sector} className={gi > 0 ? "mt-20 border-t border-border pt-16" : ""}>
              <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.28fr)_1fr] lg:gap-14">
                <Reveal>
                  <span className="font-mono text-[10px] text-gold">{String(gi + 1).padStart(2, "0")}</span>
                  <h2 className="font-display mt-4 text-2xl font-light tracking-tight text-foreground sm:text-3xl">{group.sector}</h2>
                </Reveal>
                <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-4">
                  {group.clients.map((client, i) => (
                    <Reveal key={client.name ?? client.logo} delay={i % 4}>
                      {client.logo ? (
                        <div className="group flex aspect-[16/10] h-full flex-col overflow-hidden border-b border-r border-border bg-background transition-colors hover:bg-card">
                          <div className="relative min-h-0 flex-1 overflow-hidden">
                            <img src={client.logo} alt={client.name ? `${client.name} logo` : "Client logo"} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-4 opacity-65 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
                          </div>
                          {client.name ? (
                            <div className="border-t border-border bg-background px-3 py-2 text-center text-[10px] font-medium uppercase tracking-[0.13em] text-muted-foreground transition-colors group-hover:text-foreground">
                              {client.name}
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div className="group flex aspect-[16/10] h-full flex-col items-center justify-center border-b border-r border-border bg-background p-5 transition-colors hover:bg-card">
                          {client.name ? <span className="text-center text-[10px] font-medium uppercase tracking-[0.13em] text-muted-foreground transition-colors group-hover:text-foreground">{client.name}</span> : null}
                        </div>
                      )}
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
