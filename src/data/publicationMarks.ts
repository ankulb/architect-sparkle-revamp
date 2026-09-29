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
  "Interior & Decor": interiorDecor.url,
  "Interior & Decor Magaine": interiorDecor.url,
};