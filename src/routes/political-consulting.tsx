import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, servicePageHead } from "@/components/firm/service-page";
import { politicalConsulting } from "@/lib/content/service-pages";

export const Route = createFileRoute("/political-consulting")({
  head: () => servicePageHead(politicalConsulting),
  component: () => <ServicePage copy={politicalConsulting} />,
});
