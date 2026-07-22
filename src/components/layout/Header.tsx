import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav } from "@/data/home";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoAsset from "@/assets/toa-logo.png.asset.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="flex items-center" aria-label="Team One Architects home">
            <img src={logoAsset.url} alt="Team One Architects" className="h-10 w-auto" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-10">
              {nav.map((item) =>
                item.groups ? (
                  <div key={item.label} className="group static">
                    <a
                      href={item.href ?? "#"}
                      className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </a>
                    <div className="invisible fixed inset-x-0 top-20 z-40 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="border-t border-border bg-background/95 backdrop-blur-md">
                        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-6 py-14 md:grid-cols-2 md:px-10 md:py-16">
                          {item.groups.map((g) => (
                            <div key={g.title}>
                              <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-gold">
                                {g.title}
                              </p>
                              <ul className="space-y-3">
                                {g.items.map((child) => (
                                  <li key={child.label}>
                                    <a
                                      href={child.href ?? "#"}
                                      className="group/link relative inline-block font-display text-xl font-light text-foreground/85 transition-colors hover:text-gold sm:text-2xl"
                                    >
                                      {child.label}
                                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover/link:w-full" />
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : item.children ? (
                  <div key={item.label} className="group relative">
                    <a
                      href={item.href ?? "#"}
                      className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </a>
                    <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="border border-border bg-background/95 p-2 backdrop-blur-md">
                        {item.children.map((child) =>
                          child.to ? (
                            <Link
                              key={child.label}
                              to={child.to}
                              activeProps={{ className: "text-gold" }}
                              className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                            >
                              {child.label}
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ) : item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    activeProps={{ className: "text-foreground" }}
                    className="group relative text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group relative text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                ),
              )}
            </nav>
            <ThemeToggle />
          </div>


          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-background px-6 py-7"
          >
            <div className="flex items-center justify-between">
              <img src={logoAsset.url} alt="Team One Architects" className="h-9 w-auto" />
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="mt-14 flex flex-col gap-7">
              {nav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenMap((m) => ({ ...m, [item.label]: !m[item.label] }))
                        }
                        className="flex items-center gap-2 font-display text-3xl font-light tracking-tight text-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${openMap[item.label] ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openMap[item.label] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 flex flex-col gap-4 border-l border-border pl-5">
                              {item.children.map((child) =>
                                child.to ? (
                                  <Link
                                    key={child.label}
                                    to={child.to}
                                    onClick={() => setOpen(false)}
                                    className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                                  >
                                    {child.label}
                                  </Link>
                                ) : (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setOpen(false)}
                                    className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                                  >
                                    {child.label}
                                  </a>
                                ),
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.to ? (
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="font-display text-3xl font-light tracking-tight text-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-3xl font-light tracking-tight text-foreground"
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
