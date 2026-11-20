import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/roster")({
  component: RosterLayout,
});

function RosterLayout() {
  return <Outlet />;
}
