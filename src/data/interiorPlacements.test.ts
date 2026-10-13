import { expect, test } from "bun:test";
import { projectDetails } from "./portfolio";

test("WebMD belongs to Healthcare & Pharma", () => {
  expect(projectDetails.webmd.sector).toBe("Healthcare & Pharma");
});

test("TTEC belongs to Technology & Software", () => {
  expect(projectDetails.ttec.sector).toBe("Technology & Software");
});