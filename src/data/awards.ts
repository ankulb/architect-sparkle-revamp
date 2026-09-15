import entrepreneurshipImage from "@/assets/awards/entrepreneurship.jpg.asset.json";
import designWallImage from "@/assets/awards/design-wall.jpg.asset.json";
import goldenBrickImage from "@/assets/awards/golden-brick.jpg.asset.json";

export const awardsHero = {
  image: goldenBrickImage.url,
  imageAlt: "Team One Architects receiving recognition at the Golden Brick Awards in Dubai",
};

export const awardImages = [
  {
    src: entrepreneurshipImage.url,
    alt: "Team One Architects at The Economic Times India Entrepreneurship Summit",
    caption: "Industry recognition",
  },
  {
    src: designWallImage.url,
    alt: "Team One Architects receiving recognition at an IGBC awards ceremony",
    caption: "Design and sustainability",
  },
  {
    src: goldenBrickImage.url,
    alt: "Team One Architects receiving recognition at the Golden Brick Awards in Dubai",
    caption: "Golden Brick Awards, Dubai",
  },
] as const;

export const awardsTimeline = [
  {
    year: "2001",
    entries: [
      "International Friendship Society of India — Best Citizen of India Award",
      "B. S. Yamsanwar for Roca Presents Indian Architectural Design Festival",
      "Vikas Rattan Award — B. S. Yamsanwar, Outstanding Contribution to Indian Society (IADF)",
    ],
  },
  {
    year: "2010",
    entries: [
      "Snowcem Paints — CSI 2010",
      "AplT20 Architects Premier League 2010",
      "Best Architect Firm of the Year",
    ],
  },
  {
    year: "2011",
    entries: [
      "The Economic Times ACETECH 2011",
      "Eminent Jury — Design Wall 2011",
    ],
  },
  {
    year: "2012",
    entries: [
      "Sakal Sanman — Bharat Yamsanwar",
      "The Economic Times ACETECH 2012",
      "Eminent Jury — Design Wall 2012",
    ],
  },
  {
    year: "2013",
    entries: [
      "An ACETECH Initiative — Connect 2013",
      "The Economic Times ACETECH 2013",
      "Eminent Jury — Design Wall 2013",
    ],
  },
  {
    year: "2014",
    entries: [
      "The Economic Times ACETECH 2014",
      "FOAID — Festival of Architecture & Interior Designing 2014",
      "Eminent Jury — Design Wall 2014, Excellence in Architecture & Design",
    ],
  },
  {
    year: "2015",
    entries: [
      "The Economic Times ACETECH 2015",
      "DNA Real Estate & Infrastructure Round Table & Awards",
      "Design Wall 2015 — Best Architectural Firm of the Year",
    ],
  },
  {
    year: "2017",
    entries: [
      "iNFHRA FM Excellence Conference & Awards 2017",
      "Best Project — Architecture & PMC",
    ],
  },
  {
    year: "2019",
    entries: [
      "Society Interiors Design Competition & Awards 2019",
      "4th Edition Golden Brick Awards 2019, Dubai",
      "Outstanding Contribution to Architecture & Interior Design",
      "Most Innovative Construction Award 2019",
    ],
  },
] as const;