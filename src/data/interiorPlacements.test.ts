import { test } from "node:test";
import { strictEqual } from "node:assert";
import { projectDetails } from "./portfolio";

test("WebMD belongs to Healthcare & Pharma", () => {
  strictEqual(projectDetails.webmd.sector, "Healthcare & Pharma");
});

test("TTEC belongs to Technology & Software", () => {
  strictEqual(projectDetails.ttec.sector, "Technology & Software");
});
test("Nxtra sits under Telecom", () => {
  strictEqual(projectDetails.nxtra.sector, "Telecom");
});

test("TTEC facts come from its write-up", () => {
  strictEqual(projectDetails.ttec.location, "Mumbai");
  strictEqual(projectDetails.ttec.area, "25,000 sq. ft.");
});
