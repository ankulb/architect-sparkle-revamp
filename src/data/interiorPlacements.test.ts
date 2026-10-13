import { test } from "node:test";
import { strictEqual } from "node:assert";
import { projectDetails } from "./portfolio";

test("WebMD belongs to Healthcare & Pharma", () => {
  strictEqual(projectDetails.webmd.sector, "Healthcare & Pharma");
});

test("TTEC belongs to Technology & Software", () => {
  strictEqual(projectDetails.ttec.sector, "Technology & Software");
});