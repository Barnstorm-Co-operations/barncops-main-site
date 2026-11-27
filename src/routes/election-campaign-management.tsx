import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, servicePageHead } from "@/components/firm/service-page";
import { electionCampaignManagement } from "@/lib/content/service-pages";

export const Route = createFileRoute("/election-campaign-management")({
  head: () => servicePageHead(electionCampaignManagement),
  component: () => <ServicePage copy={electionCampaignManagement} />,
});
