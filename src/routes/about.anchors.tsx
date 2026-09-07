import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/about/anchors")({
  beforeLoad: () => {
    throw redirect({ to: "/about/board", statusCode: 301 });
  },
});
