import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { z } from "zod";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/toa-logo.png.asset.json";
import architectureImage from "@/assets/hero/architecture-urban-design.jpg.asset.json";

const title = "Contact Team One Architects | Mumbai, Pune & Dubai";
const description = "Contact Team One Architects in Mumbai, Pune or Dubai to discuss architecture, urban design and interior architecture projects.";
const pageUrl = "https://architect-sparkle-revamp.lovable.app/contact";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  phone: z.string().trim().max(24).regex(/^[+\d\s().-]*$/, "Please enter a valid phone number."),
  inquiry: z.enum(["New project", "Careers", "Media", "Vendor", "Other"]),
  message: z.string().trim().min(10, "Please add a little more detail.").max(1200),
});

const offices = [
  { city: "Mumbai", label: undefined, detail: "Level 2/3 B, Laxmi Tower, G-Block, Plot # C-25, Bandra Kurla Complex, Mumbai – 400 051, India." },
  { city: "Pune", label: undefined, detail: "Office No. 201, 2nd Floor, “Cello Platina”, Fergusson College Road, Near Police Ground, Shivajinagar, Pune – 411 016, India." },
  { city: "Dubai", label: "Team One Alliance Design – FZCO", detail: "Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates." },
] as const;

const presence = ["Mumbai", "Pune", "Hyderabad", "Bengaluru", "Nagpur", "Singapore", "Dubai", "Congo Africa"];
const fieldClass = "mt-2 w-full border-b border-input bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function scrollToForm() {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = inquirySchema.safeParse({
      name: form.get("name"), email: form.get("email"), phone: form.get("phone"),
      inquiry: form.get("inquiry"), message: form.get("message"),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
    const subject = encodeURIComponent(`${parsed.data.inquiry} inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone || "Not provided"}\nInquiry: ${parsed.data.inquiry}\n\n${parsed.data.message}`);
    window.location.href = `mailto:communications@toa.org.in?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="mx-auto grid min-h-[82svh] max-w-[1600px] grid-cols-1 pt-20 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[46svh] overflow-hidden lg:min-h-0">
            <img src={architectureImage.url} alt="Architectural passage designed with rhythmic structural arches" className="absolute inset-0 h-full w-full object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-between px-6 py-14 md:px-12 lg:px-16 lg:py-16">
            <div>
              <span className="block h-px w-12 bg-gold" />
              <h1 className="font-display mt-8 text-6xl font-semibold leading-none sm:text-7xl lg:text-8xl">Thank <span className="text-gold">you!</span></h1>
              <img src={logoAsset.url} alt="Team One Architects" className="mt-14 h-16 w-auto" />
            </div>
            <div className="mt-16 flex flex-wrap items-center gap-5">
              <Button onClick={scrollToForm} className="h-12 rounded-none bg-gold px-8 uppercase tracking-[0.18em] text-background hover:bg-gold/85">
                Get in touch <ArrowDown />
              </Button>
              <a href="https://www.teamonearchitects.com" className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold">www.teamonearchitects.com</a>
            </div>
          </div>
        </section>

        <section className="border-y border-border px-6 py-16 md:px-10">
          <div className="mx-auto max-w-[1600px]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Locations</p>
            <div className="mt-8 grid gap-px bg-border md:grid-cols-3">
              {offices.map((office) => (
                <article key={office.city} className="border-l-2 border-gold bg-card px-7 py-8">
                  <h2 className="font-display text-xl font-semibold">{office.city}</h2>
                  {office.label && <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-gold">{office.label}</p>}
                  <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">{office.detail}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <span className="bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-background">TOA Presence</span>
              {presence.map((city) => <span key={city} className="flex items-center gap-2 text-xs font-semibold"><i className="h-1.5 w-1.5 bg-gold" />{city}</span>)}
            </div>
          </div>
        </section>

        <section id="contact-form" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Start a conversation</p>
              <h2 className="font-display mt-5 max-w-lg text-4xl font-light leading-tight sm:text-6xl">Let’s build the next landmark together.</h2>
              <p className="mt-6 max-w-md leading-7 text-muted-foreground">Tell us what you’re planning and the right team will get back to you.</p>
              <div className="mt-10 flex gap-3">
                {[{ Icon: Linkedin, href: "https://www.linkedin.com/company/teamonearchitects/", label: "LinkedIn" }, { Icon: Instagram, href: "https://www.instagram.com/teamonearchitects/", label: "Instagram" }, { Icon: Facebook, href: "https://www.facebook.com/teamonearchitects/", label: "Facebook" }, { Icon: Youtube, href: "https://www.youtube.com/@teamonearchitects", label: "YouTube" }].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"><Icon className="h-4 w-4" /></a>
                ))}
              </div>
            </div>
            <form noValidate onSubmit={submit} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} maxLength={100} required />
              <Field label="Email" name="email" type="email" error={errors.email} maxLength={255} required />
              <Field label="Phone" name="phone" type="tel" error={errors.phone} maxLength={24} />
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Inquiry type
                <select name="inquiry" className={fieldClass} defaultValue="New project">
                  {inquirySchema.shape.inquiry.options.map((option) => <option key={option} className="bg-background">{option}</option>)}
                </select>
              </label>
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:col-span-2">Message
                <textarea name="message" rows={5} maxLength={1200} required className={`${fieldClass} resize-y`} placeholder="Project scope, location and timeline" aria-invalid={Boolean(errors.message)} />
                {errors.message && <span className="mt-2 block normal-case tracking-normal text-destructive">{errors.message}</span>}
              </label>
              <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
                <Button type="submit" className="h-12 rounded-none bg-gold px-8 uppercase tracking-[0.18em] text-background hover:bg-gold/85">Send inquiry <ArrowUpRight /></Button>
                {sent && <p role="status" className="text-sm text-gold">Your email draft is ready to send.</p>}
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", error, maxLength, required }: { label: string; name: string; type?: string; error?: string; maxLength: number; required?: boolean }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}
      <input name={name} type={type} maxLength={maxLength} required={required} className={fieldClass} aria-invalid={Boolean(error)} />
      {error && <span className="mt-2 block normal-case tracking-normal text-destructive">{error}</span>}
    </label>
  );
}