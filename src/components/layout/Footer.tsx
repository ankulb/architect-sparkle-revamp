import { Link } from "@tanstack/react-router";
import { nav, aboutNav } from "@/data/home";
import logoAsset from "@/assets/toa-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src={logoAsset.url} alt="Team One Architects" className="mb-7 h-11 w-auto" />
            <div className="font-display text-3xl font-light tracking-tight">
              We design as one.
              <br />
              We deliver as one.
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Architecture, urban design and interiors that bring out the best in people. Headquartered in Mumbai, delivering worldwide since 2001.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : item.to ? (
                    <Link
                      to={item.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-gold">About</h4>
            <ul className="mt-5 space-y-3">
              {aboutNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Studio</h4>
            <address className="mt-5 space-y-3 text-sm not-italic text-muted-foreground">
              <p>Team One Architects, Mumbai, India</p>
              <p>
                <a href="mailto:info@teamonearchitects.com" className="transition-colors hover:text-foreground">
                  info@teamonearchitects.com
                </a>
              </p>
              <p>
                <a
                  href="https://teamonearchitects.com/"
                  className="transition-colors hover:text-foreground"
                >
                  teamonearchitects.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Team One Architects. All rights reserved.</span>
          <span className="tracking-[0.16em] uppercase">Designing spaces that endure</span>
        </div>
      </div>
    </footer>
  );
}
