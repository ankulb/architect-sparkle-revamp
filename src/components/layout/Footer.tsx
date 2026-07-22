import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";
import { aboutNav } from "@/data/home";
import logoAsset from "@/assets/toa-logo.png.asset.json";

const expertiseLinks = [
  { label: "Architecture & Urban Design", href: "/#expertise" },
  { label: "Interior Architecture", href: "/#expertise" },
];

const connectLinks = [
  { label: "Contact", href: "https://teamonearchitects.com/contact-us/", external: true },
  { label: "News", href: "/#insights" },
  { label: "Careers", href: "/#careers" },
  {
    label: "Feedback",
    href: "mailto:info@teamonearchitects.com?subject=Website%20Feedback",
    external: true,
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/team-one-architects/", Icon: Linkedin },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "YouTube", href: "#", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20">
        {/* Top row — brand + Vendor Registration CTA */}
        <div className="flex flex-col gap-10 border-b border-border pb-12 md:flex-row md:items-center md:justify-between">
          <div>
            <img src={logoAsset.url} alt="Team One Architects" className="mb-6 h-11 w-auto" />
            <div className="font-display text-2xl font-light leading-tight tracking-tight md:text-3xl">
              We design as one.
              <br />
              We deliver as one.
            </div>
          </div>

          <a
            href="mailto:info@teamonearchitects.com?subject=Vendor%20Registration"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-gold px-6 py-3 text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-background md:self-auto"
          >
            Vendor Registration
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Middle row — 4 link columns */}
        <div className="grid gap-10 py-14 md:grid-cols-4">
          <FooterColumn title="Expertise">
            {expertiseLinks.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Studio">
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
          </FooterColumn>

          <FooterColumn title="Connect">
            {connectLinks.map((item) => (
              <FooterLink key={item.label} href={item.href} external={item.external}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            {legalLinks.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Team One Architects. All rights reserved.</span>
          <span className="hidden md:inline">
            Mumbai, India ·{" "}
            <a
              href="mailto:info@teamonearchitects.com"
              className="transition-colors hover:text-foreground"
            >
              info@teamonearchitects.com
            </a>
          </span>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{title}</h4>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </a>
    </li>
  );
}
