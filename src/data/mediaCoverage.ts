export type MediaCoverageType = "video" | "podcast" | "interview";

export type MediaCoverageItem = {
  type: MediaCoverageType;
  publication: string;
  title: string;
  url: string;
  videoId?: string;
  summary?: string;
};

export const mediaCoverage: MediaCoverageItem[] = [
  {
    type: "video",
    publication: "Magicbricks — The Property Show",
    title: "Teaser: Investing in Real Estate Property vs REIT",
    url: "https://www.youtube.com/watch?v=X5iiR5cFlLY",
    videoId: "X5iiR5cFlLY",
    summary:
      "A short preview of The Property Show episode weighing direct property ownership against listed real estate investment trusts.",
  },
  {
    type: "video",
    publication: "Magicbricks — The Property Show",
    title: "Investing in Real Estate Property vs REIT",
    url: "https://www.youtube.com/watch?v=79bJ76j9oVU",
    videoId: "79bJ76j9oVU",
    summary:
      "The full panel discussion on how investors should weigh physical real estate against REITs in today's market.",
  },
  {
    type: "interview",
    publication: "Sugermint",
    title: "Designing for Tomorrow: A Conversation with Aditya Yamsanwar of TOA",
    url: "https://sugermint.com/aditya-yamsanwar/",
    summary:
      "An in-depth conversation on workplace strategy, technology and the evolving relationship between people and the spaces they occupy.",
  },
];
