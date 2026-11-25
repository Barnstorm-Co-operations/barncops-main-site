export const NAV = [
  { to: "/advisory", labelKey: "advisory", badge: false },
  { to: "/mandata", labelKey: "mandataNav", badge: true },
  { to: "/about", labelKey: "firm", badge: false },
  { to: "/", hash: "mandates", labelKey: "caseStudies", badge: false },
  { to: "/insights", labelKey: "insights", badge: false },
] as const;

/** Mirrors https://atlas.barncops.in/sitemaps/upcoming.xml. */
export const ATLAS_2027 = [
  { href: "https://atlas.barncops.in/upcoming/uttar-pradesh-2027/", label: "Uttar Pradesh 2027" },
  { href: "https://atlas.barncops.in/upcoming/punjab-2027/", label: "Punjab 2027" },
  { href: "https://atlas.barncops.in/upcoming/uttarakhand-2027/", label: "Uttarakhand 2027" },
  { href: "https://atlas.barncops.in/upcoming/goa-2027/", label: "Goa 2027" },
  { href: "https://atlas.barncops.in/upcoming/manipur-2027/", label: "Manipur 2027" },
  { href: "https://atlas.barncops.in/upcoming/himachal-pradesh-2027/", label: "Himachal Pradesh 2027" },
  { href: "https://atlas.barncops.in/upcoming/gujarat-2027/", label: "Gujarat 2027" },
] as const;

export const ATLAS_DELIMITATION = {
  href: "https://atlas.barncops.in/delimitation/",
  label: "Delimitation 2026",
} as const;

export const FOOTER_NAV = {
  practice: [
    { to: "/advisory", labelKey: "advisory" },
    { to: "/mandata", labelKey: "mandataNav" },
    { to: "/console", labelKey: "footerLive" },
    { to: "/work", labelKey: "caseStudies" },
  ],
  atlas: [
    { href: "https://atlas.barncops.in/elections/", labelKey: "electionAtlas" },
    { href: "https://atlas.barncops.in/lok-sabha/2024/", labelKey: "atlasLs2024" },
    { href: "https://atlas.barncops.in/lok-sabha/2024/party-wise/", labelKey: "atlasPartyWise" },
    { href: "https://atlas.barncops.in/lok-sabha/2024/state-wise/", labelKey: "atlasStateWise" },
    { href: "https://atlas.barncops.in/vidhan-sabha/", labelKey: "atlasVidhan" },
    { href: "https://atlas.barncops.in/ask/", labelKey: "atlasAsk" },
  ],
  firm: [
    { to: "/about", labelKey: "firm" },
    { to: "/governance", labelKey: "governanceNav" },
    { to: "/track-record", labelKey: "trackRecord" },
    { to: "/insights", labelKey: "insights" },
    { to: "/contact", labelKey: "footerBrief" },
  ],
} as const;
