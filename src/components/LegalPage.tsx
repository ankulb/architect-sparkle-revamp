import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { legalDocs, legalUpdated, type LegalDoc } from "@/data/legal";

export function LegalPage({ slug }: { slug: LegalDoc["slug"] }) {
  const doc = legalDocs[slug];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-[900px] px-6 pb-24 pt-36 md:px-10 md:pt-44">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Legal</p>
        <h1 className="font-display mt-5 text-4xl font-light tracking-tight sm:text-6xl">{doc.title}</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{legalUpdated}</p>
        <p className="mt-10 text-lg leading-relaxed text-muted-foreground">{doc.intro}</p>
        <div className="mt-12 space-y-12">
          {doc.sections.map((s) => (
            <section key={s.heading} className="border-t border-border pt-8">
              <h2 className="font-display text-2xl font-light tracking-tight">{s.heading}</h2>
              <div className="mt-4 space-y-4">
                {s.body.map((p) => (
                  <p key={p} className="leading-relaxed text-muted-foreground">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function legalHead(slug: LegalDoc["slug"]) {
  const doc = legalDocs[slug];
  const title = `${doc.title} — Team One Architects`;
  return {
    meta: [
      { title },
      { name: "description", content: doc.intro },
      { property: "og:title", content: title },
      { property: "og:description", content: doc.intro },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `https://architect-sparkle-revamp.lovable.app/${slug}` }],
  };
}
