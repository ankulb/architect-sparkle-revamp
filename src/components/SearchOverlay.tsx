import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowUpRight, Search, X } from "lucide-react";
import { projects } from "@/data/portfolio";
import { coverageIndex } from "@/data/coverageIndex";
import { mediaCoverage } from "@/data/mediaCoverage";
import { expertiseGroups } from "@/data/home";

type Result = {
  group: string;
  label: string;
  sub?: string;
  to?: string;
  href?: string;
};

const pages: Result[] = [
  { group: "Pages", label: "Our Story", to: "/about" },
  { group: "Pages", label: "Board of Directors", to: "/about/board" },
  { group: "Pages", label: "Our Team", to: "/about/team" },
  { group: "Pages", label: "CSR", to: "/about/csr" },
  { group: "Pages", label: "Life at TOA", to: "/about/life" },
  { group: "Pages", label: "Clientele", to: "/about/clientele" },
  { group: "Pages", label: "Portfolio", to: "/portfolio" },
  { group: "Pages", label: "News & Media", to: "/insights/news" },
  { group: "Pages", label: "Awards & Recognition", to: "/insights/awards" },
  { group: "Pages", label: "Videos / Podcasts / Interviews", to: "/insights/media" },
  { group: "Pages", label: "Articles & Coverage Index", to: "/insights/articles" },
  { group: "Pages", label: "Contact", to: "/contact" },
  { group: "Pages", label: "Careers", to: "/careers" },
  { group: "Pages", label: "Privacy Policy", to: "/privacy" },
  { group: "Pages", label: "Terms of Use", to: "/terms" },
  { group: "Pages", label: "Cookie Policy", to: "/cookies" },
];

const sectors: Result[] = expertiseGroups.flatMap((g) =>
  g.items
    .filter((i) => i.to)
    .map((i) => ({ group: "Expertise", label: i.label, sub: g.title, to: i.to })),
);

const projectResults: Result[] = projects.map((p) => ({
  group: "Projects",
  label: p.title,
  sub: [p.category, p.location].filter(Boolean).join(" · "),
  to: `/portfolio/${p.slug}`,
}));

const mediaResults: Result[] = mediaCoverage.map((m) => ({
  group: "Videos & Interviews",
  label: m.title,
  sub: m.publication,
  to: "/insights/media",
}));

const coverageResults: Result[] = coverageIndex.flatMap((month) =>
  month.items.map((item) => ({
    group: "News & Coverage",
    label: item.headline,
    sub: `${item.publication} · ${month.month}`,
    href: item.url,
    to: item.url ? undefined : "/insights/articles",
  })),
);

const index: Result[] = [...pages, ...sectors, ...projectResults, ...mediaResults, ...coverageResults];

const GROUP_ORDER = ["Pages", "Expertise", "Projects", "Videos & Interviews", "News & Coverage"];
const PER_GROUP = 6;

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const matched = index.filter(
      (r) => r.label.toLowerCase().includes(q) || r.sub?.toLowerCase().includes(q),
    );
    return GROUP_ORDER.map((group) => ({
      group,
      items: matched.filter((r) => r.group === group).slice(0, PER_GROUP),
    })).filter((g) => g.items.length > 0);
  }, [query]);

  const go = (r: Result) => {
    onClose();
    if (r.href) {
      window.open(r.href, "_blank", "noopener,noreferrer");
    } else if (r.to) {
      navigate({ to: r.to });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] flex flex-col bg-background/97 backdrop-blur-md"
          role="dialog"
          aria-label="Search"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-8 md:py-14">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <Search className="h-5 w-5 shrink-0 text-gold" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, news, pages…"
                className="w-full bg-transparent font-display text-2xl font-light outline-none placeholder:text-muted-foreground sm:text-3xl"
              />
              <button onClick={onClose} aria-label="Close search" className="shrink-0 text-muted-foreground transition-colors hover:text-foreground">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-8 flex-1 overflow-y-auto pb-10">
              {query.trim().length < 2 ? (
                <p className="text-sm font-light text-muted-foreground">
                  Type to search across projects, expertise, news and pages.
                </p>
              ) : results.length === 0 ? (
                <p className="text-sm font-light text-muted-foreground">
                  No results for “{query.trim()}”.
                </p>
              ) : (
                <div className="space-y-10">
                  {results.map((g) => (
                    <div key={g.group}>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                        {g.group}
                      </p>
                      <ul className="divide-y divide-border border-y border-border">
                        {g.items.map((r, i) => (
                          <li key={`${r.label}-${i}`}>
                            <button
                              onClick={() => go(r)}
                              className="group flex w-full items-center justify-between gap-4 py-3.5 text-left transition-colors hover:bg-card md:px-2"
                            >
                              <span>
                                <span className="block text-[15px] font-light leading-snug text-foreground">
                                  {r.label}
                                </span>
                                {r.sub ? (
                                  <span className="mt-0.5 block text-xs font-light text-muted-foreground">
                                    {r.sub}
                                  </span>
                                ) : null}
                              </span>
                              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {query.trim().length >= 2 && (
                    <Link
                      to="/insights/articles"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold"
                    >
                      Browse the full articles index
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
