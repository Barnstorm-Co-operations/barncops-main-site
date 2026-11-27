import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, servicePageHead } from "@/components/firm/service-page";
import { politicalSocialMediaManagement } from "@/lib/content/service-pages";

export const Route = createFileRoute("/political-social-media-management")({
  head: () => servicePageHead(politicalSocialMediaManagement),
  component: () => <ServicePage copy={politicalSocialMediaManagement} />,
});
