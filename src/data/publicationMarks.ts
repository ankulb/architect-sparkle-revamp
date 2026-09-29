// Publisher-supplied mastheads; unknown publications deliberately retain a text label.
import economicTimes from "@/assets/clients/economic-times.jpg.asset.json";
import timesOfIndia from "@/assets/press/times-of-india.jpg.asset.json";
import hindustanTimes from "@/assets/press/hindustan-times.png.asset.json";
import etEdge from "@/assets/press/et-edge.png.asset.json";
import constructionTimes from "@/assets/press/construction-times.svg.asset.json";
import cxoToday from "@/assets/press/cxo-today.png.asset.json";
import mgsArchitecture from "@/assets/press/mgs-architecture.png.asset.json";
import constructionWorld from "@/assets/press/construction-world.webp.asset.json";
import cxoDigitalPulse from "@/assets/press/cxo-digital-pulse.png.asset.json";
import skillOutlook from "@/assets/press/skill-outlook.png.asset.json";
import aceUpdate from "@/assets/press/ace-update.png.asset.json";
import forbesIndia from "@/assets/press/forbes-india.png.asset.json";
import cnbcTv18 from "@/assets/press/cnbc-tv18.svg.asset.json";
import mint from "@/assets/press/mint.png.asset.json";
import businessLine from "@/assets/press/business-line.svg.asset.json";
import sugermint from "@/assets/press/sugermint.png.asset.json";
import magicbricks from "@/assets/press/magicbricks.svg.asset.json";
import interiorDecor from "@/assets/press/interior-decor.png.asset.json";
import realtyPlus from "@/assets/press/realty-plus.png.asset.json";
import constructionWeek from "@/assets/press/construction-week.png.asset.json";
import commercialDesign from "@/assets/press/commercial-design.png.asset.json";
import manufacturingToday from "@/assets/press/manufacturing-today.png.asset.json";
import architectInteriors from "@/assets/press/architect-interiors-india.png.asset.json";
import ndtvProfit from "@/assets/press/ndtv-profit.png.asset.json";
import timesNow from "@/assets/press/times-now.png.asset.json";
import timesProperty from "@/assets/press/times-property.png.asset.json";
import zeeBusiness from "@/assets/press/zee-business.svg.asset.json";
import bwBusinessworld from "@/assets/press/bw-businessworld.png.asset.json";
import bwPeople from "@/assets/press/bw-people.png.asset.json";

export const publicationMarks: Record<string, string> = {
  "The Economic Times": economicTimes.url,
  "The Times of India": timesOfIndia.url,
  "Times Of India Daily": timesOfIndia.url,
  "Hindustan Times": hindustanTimes.url,
  "ET Edge Insights": etEdge.url,
  "ET Edge Insight": etEdge.url,
  "Construction Times": constructionTimes.url,
  "Realty+": realtyPlus.url,
  "CXO Today": cxoToday.url,
  "MGS Architecture": mgsArchitecture.url,
  "Construction World": constructionWorld.url,
  "CXO Digital Pulse": cxoDigitalPulse.url,
  "Skill Outlook": skillOutlook.url,
  "ACE Update": aceUpdate.url,
  "Ace Update": aceUpdate.url,
  "Forbes India": forbesIndia.url,
  "CNBC-TV18": cnbcTv18.url,
  "CNBCTV18": cnbcTv18.url,
  "Mint": mint.url,
  "The Hindu Business Line": businessLine.url,
  "Sugermint": sugermint.url,
  "Magic Bricks": magicbricks.url,
  "Magicbricks": magicbricks.url,
  "Magicbricks — The Property Show": magicbricks.url,
  "Interior & Decor": interiorDecor.url,
  "Interior & Decor Magaine": interiorDecor.url,
  "Construction Week": constructionWeek.url,
  "Commercial Design": commercialDesign.url,
  "Manufacturing Today": manufacturingToday.url,
  "Architect and Interiors India": architectInteriors.url,
  "Architect & Interiors India": architectInteriors.url,
  "NDTV Profit": ndtvProfit.url,
  "Times Now": timesNow.url,
  "Times Property": timesProperty.url,
  "Zee Business": zeeBusiness.url,
  "BW Businessworld": bwBusinessworld.url,
  "BW Businessworld ": bwBusinessworld.url,
  "BW People": bwPeople.url,
};
// Mastheads drawn in white/light artwork need a dark card to stay visible.
const lightArtwork = new Set<string>([
  etEdge.url,
  mint.url,
  realtyPlus.url,
  magicbricks.url,
  cnbcTv18.url,
  manufacturingToday.url,
  zeeBusiness.url,
]);

export function getPublicationMark(publication: string) {
  const url = publicationMarks[publication];
  return url ? { url, tone: lightArtwork.has(url) ? ("dark" as const) : ("light" as const) } : null;
}
