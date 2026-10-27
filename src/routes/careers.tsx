import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { ApplyDialog } from "@/components/careers/ApplyDialog";
import type { Job } from "@/data/careers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/about/PageHero";
import { Reveal } from "@/components/Reveal";
import { careersPage, jobs } from "@/data/careers";
import { careers } from "@/data/home";

const title = "Careers | Team One Architects";
const description =
  "Join Team One Architects. Explore open roles in design, projects, purchase, sales and HR across Mumbai and Pune.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://architect-sparkle-revamp.lovable.app/careers" }],
  }),
  component: CareersPage,
});

const unique = (k: "category" | "location") => ["All", ...Array.from(new Set(jobs.map((j) => j[k]))).sort()];

function CareersPage() {
  const [cat, setCat] = useState("All");
  const [loc, setLoc] = useState("All");
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const list = useMemo(
    () => jobs.filter((j) => (cat === "All" || j.category === cat) && (loc === "All" || j.location === loc)),
    [cat, loc],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHero eyebrow={careersPage.eyebrow} title={careersPage.title} lead={careersPage.quote} image={careers.image} faceSafe />

        <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {careersPage.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i} className="bg-background p-8 md:p-10">
                <span className="block h-px w-10 bg-gold" />
                <h2 className="font-display mt-6 text-2xl font-light tracking-tight">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="mt-14 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {careersPage.invite} Feel free to apply at{" "}
            <a href={`mailto:${careersPage.email}`} className="text-gold underline-offset-4 hover:underline">
              {careersPage.email}
            </a>
            .
          </Reveal>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">Open positions</h2>
              <div className="flex flex-wrap gap-4">
                <Filter label="Department" value={cat} options={unique("category")} onChange={setCat} />
                <Filter label="City" value={loc} options={unique("location")} onChange={setLoc} />
              </div>
            </div>
            <ul className="mt-10 border-t border-border">
              {list.map((j) => {
                const key = `${j.location}-${j.title}`;
                const expanded = open === key;
                const hasJd = !!j.brief;
                return (
                  <li key={key} className="border-b border-border">
                    <div className="flex flex-wrap items-center justify-between gap-4 py-6">
                      <button
                        type="button"
                        disabled={!hasJd}
                        onClick={() => setOpen(expanded ? null : key)}
                        aria-expanded={expanded}
                        className="group max-w-xl text-left"
                      >
                        <span className="font-display flex items-center gap-3 text-xl font-light tracking-tight transition-colors group-enabled:group-hover:text-gold sm:text-2xl">
                          {j.title}
                          {hasJd && <ChevronDown className={`h-5 w-5 text-gold transition-transform ${expanded ? "rotate-180" : ""}`} />}
                        </span>
                        {j.experience && <span className="mt-1 block text-sm text-muted-foreground">{j.experience} experience</span>}
                      </button>
                      <span className="flex items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        <span>{j.category}</span>
                        <span>{j.location}</span>
                        <button type="button" onClick={() => setApplyJob(j)} className="inline-flex items-center gap-1 uppercase tracking-[0.18em] text-gold hover:underline">
                          Apply <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </span>
                    </div>
                    {expanded && hasJd && (
                      <div className="grid gap-10 pb-10 text-muted-foreground md:grid-cols-2">
                        <p className="leading-relaxed md:col-span-2">{j.brief}</p>
                        {j.responsibilities && (
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Responsibilities</h3>
                            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">{j.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>
                          </div>
                        )}
                        {j.requirements && (
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">What we expect</h3>
                            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">{j.requirements.map((r) => <li key={r}>{r}</li>)}</ul>
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
              {list.length === 0 && <li className="py-10 text-muted-foreground">No roles match these filters right now.</li>}
            </ul>
          </div>
        </section>
      </main>
      <ApplyDialog job={applyJob} onClose={() => setApplyJob(null)} />
      <Footer />
    </div>
  );
}

function Filter({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <label className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 block min-w-40 border-b border-input bg-transparent py-2 text-sm normal-case tracking-normal text-foreground outline-none focus:border-gold"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
