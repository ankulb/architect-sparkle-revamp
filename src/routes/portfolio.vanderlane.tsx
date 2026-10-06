import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/vanderlane")({
  beforeLoad: () => {
    throw redirect({ to: "/portfolio/$slug", params: { slug: "vanderlande" }, statusCode: 301 });
  },
});
