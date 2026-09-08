export type MarqueeClient = {
  name?: string;
  logo?: string;
};

type LogoMarqueeProps = {
  clients: readonly MarqueeClient[];
  /** Scroll direction. */
  direction?: "left" | "right";
  /** Seconds for one full loop; lower = faster. */
  duration?: number;
  label?: string;
};

/**
 * Seamless infinite client marquee. Logos render grayscale + dimmed and turn to
 * full colour on hover of the individual tile. The whole row pauses on hover.
 * Each tile shows the client name as a caption; clients without a logo yet
 * render as an elegant name-only tile. Falls back gracefully for reduced motion.
 */
export function LogoMarquee({ clients, direction = "left", duration = 40, label }: LogoMarqueeProps) {
  // Duplicate the set so the -50% translate loops without a visible seam.
  const track = [...clients, ...clients];

  return (
    <div
      className="toa-marquee relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <ul
        className="toa-marquee-track gap-4 py-2"
        data-dir={direction}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {track.map((client, i) => (
          <li key={`${client.name ?? client.logo}-${i}`} className="shrink-0">
            <div className="group flex h-28 w-44 flex-col items-center justify-center gap-2 rounded-sm border border-border/60 bg-card p-5 transition-colors duration-300 hover:border-gold/40">
              {client.logo ? (
                <span className="flex h-12 w-full items-center justify-center overflow-hidden rounded-[2px] bg-white/90 px-2 py-1">
                  <img
                    src={client.logo}
                    alt={
                      client.name ??
                      (label
                        ? `${label} client of Team One Architects`
                        : "Client of Team One Architects")
                    }
                    loading="lazy"
                    className="max-h-10 max-w-full object-contain opacity-70 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </span>
              ) : null}

              {client.name ? (
                <span
                  className={`text-center uppercase tracking-[0.14em] text-foreground/70 ${
                    client.logo ? "text-[10px]" : "font-display text-sm font-medium tracking-[0.18em]"
                  }`}
                >
                  {client.name}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
