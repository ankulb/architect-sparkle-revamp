type LogoMarqueeProps = {
  logos: readonly string[];
  /** Scroll direction. */
  direction?: "left" | "right";
  /** Seconds for one full loop; lower = faster. */
  duration?: number;
  label?: string;
};

/**
 * Seamless infinite logo marquee. Logos render grayscale + dimmed and turn to
 * full colour on hover of the individual logo. The whole row pauses on hover.
 * Falls back to a centered static wrap when reduced motion is preferred.
 */
export function LogoMarquee({ logos, direction = "left", duration = 40, label }: LogoMarqueeProps) {
  // Duplicate the set so the -50% translate loops without a visible seam.
  const track = [...logos, ...logos];

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
        {track.map((logo, i) => (
          <li key={`${logo}-${i}`} className="shrink-0">
            <div className="flex h-24 w-44 items-center justify-center rounded-sm border border-border/60 bg-card p-6 transition-colors duration-300 hover:border-gold/40">
              <img
                src={logo}
                alt={label ? `${label} client of Team One Architects` : "Client of Team One Architects"}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
