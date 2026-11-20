import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/platform")({
  beforeLoad: () => {
    throw redirect({ to: "/mandata", statusCode: 301 });
  },
});
