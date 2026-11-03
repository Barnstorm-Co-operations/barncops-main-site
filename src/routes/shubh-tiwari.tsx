import { Link, createFileRoute } from "@tanstack/react-router";

const SITE = "https://www.barncops.in";
const PAGE_URL = SITE + "/shubh-tiwari";
const PHOTO_URL = SITE + "/images/shubh-tiwari.jpg";
const TITLE = "Shubh Tiwari – Election Strategist & Data Analyst | Barnstorm";
const DESCRIPTION =
  "Shubh Tiwari is an election strategist and data analyst from Bhopal, " +
  "Founder & Director of Barnstorm Co-operations, building mandata.ai and Ask the Atlas.";

const PROFILES = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shubhspeaks" },
  { label: "X", href: "https://x.com/shubhspeaks" },
  { label: "Instagram", href: "https://www.instagram.com/shubhspeaks" },
  { label: "Threads", href: "https://www.threads.net/@shubhspeaks" },
  { label: "YouTube", href: "https://www.youtube.com/@shubhspeaks" },
  { label: "Facebook", href: "https://www.facebook.com/shubhspeaks" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": PAGE_URL + "#page",
  url: PAGE_URL,
  name: TITLE,
  mainEntity: {
    "@type": "Person",
    "@id": PAGE_URL + "#person",
    name: "Shubh Tiwari",
    alternateName: ["Shubh Speaks", "shubhspeaks"],
    jobTitle: "Founder & Director, Barnstorm Co-operations",
    description:
      "Election strategist and data analyst from Bhopal, India. Founder & Director of " +
      "Barnstorm Co-operations and builder of mandata.ai and Ask the Atlas.",
    url: PAGE_URL,
    image: PHOTO_URL,
    homeLocation: { "@type": "Place", name: "Bhopal, Madhya Pradesh, India" },
    knowsAbout: [
      "Election strategy",
      "Election data analysis",
      "Election campaign management",
      "Constituency management",
      "Political technology",
    ],
    worksFor: {
      "@type": "Organization",
      "@id": SITE + "/#org",
      name: "Barnstorm Co-operations",
      alternateName: "BarnCops",
      legalName: "Barnstorm Coops Private Limited",
      foundingDate: "2019",
      url: SITE + "/",
      sameAs: [
        "https://www.linkedin.com/company/barncops",
        "https://x.com/BarnCops",
        "https://www.instagram.com/barncops",
      ],
    },
    sameAs: PROFILES.map((p) => p.href),
  },
};

export const Route = createFileRoute("/shubh-tiwari")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "author", content: "Shubh Tiwari" },
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: "Barnstorm Co-operations" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: PHOTO_URL },
      { property: "profile:first_name", content: "Shubh" },
      { property: "profile:last_name", content: "Tiwari" },
      { property: "profile:username", content: "shubhspeaks" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@BarnCops" },
      { name: "twitter:creator", content: "@shubhspeaks" },
    ],
    links: [
      { rel: "canonical", href: PAGE_URL },
      ...PROFILES.map((p) => ({ rel: "me", href: p.href })),
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: ShubhTiwariPage,
});

function ShubhTiwariPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="flex justify-center lg:col-span-5">
            <img
              src="/images/shubh-tiwari.jpg"
              alt="Shubh Tiwari"
              width={400}
              height={400}
              className="h-auto w-full max-w-[400px] rounded-xl border border-border object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h1 className="type-section text-fg">Shubh Tiwari</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Election Strategist &amp; Data Analyst · Founder &amp; Director, Barnstorm Co-operations
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 px-6 py-16 text-sm leading-relaxed text-muted sm:text-base md:px-12 md:py-24">
          <p>
            Shubh Tiwari is an election strategist and data analyst, and the Founder &amp; Director of
            Barnstorm Co-operations, a political consulting firm based in Bhopal, Madhya Pradesh, with
            studios in New Delhi and Hyderabad. Known online as Shubh Speaks, he has worked in elections
            and political communication for 15 years.
          </p>
          <p>
            Before founding Barnstorm, Shubh was an Associate in the Political Intelligence Unit at
            I-PAC, and served as National Strategic Consultant for the Indian Youth Congress in the 2019
            Lok Sabha election, where he designed and ran the Haath Uthao campaign across 200+
            constituencies. He was also lead consultant for a 2019 Haryana Assembly campaign.
          </p>
          <p>
            He founded Barnstorm in 2019, after the general election; it was incorporated as Barnstorm
            Coops Private Limited in 2021. Its campaign, field and constituency work now spans 10+ states, 35+ parliamentary constituencies and 200+ assembly segments,
            covering narrative strategy, booth-level voter analysis, war-room management and digital
            campaigns.
          </p>
          <p>
            Shubh is now building two AI products for Indian politics. mandata.ai is a constituency
            management platform for sitting MPs and MLAs that brings public grievances (Jan-Sunwai),
            citizen outreach, booth data and MPLADS / MLACDS fund tracking into one system, with human
            oversight. Ask the Atlas lets anyone ask about Indian elections in plain English or Hindi,
            with answers computed from every Lok Sabha and Vidhan Sabha result since 1952.
          </p>
          <p>
            His working belief: politics does not end on counting day; governance begins the next
            morning.
          </p>

          <h2 className="type-section pt-6 text-fg">Work</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link to="/about" className="text-fg underline-offset-4 hover:underline">
                Barnstorm Co-operations
              </Link>
            </li>
            <li>
              <Link to="/platform" className="text-fg underline-offset-4 hover:underline">
                mandata.ai
              </Link>
            </li>
            <li>
              <a
                href="https://atlas.barncops.in/ask/"
                className="text-fg underline-offset-4 hover:underline"
              >
                Ask the Atlas
              </a>
            </li>
          </ul>

          <h2 className="type-section pt-6 text-fg">Find Shubh online</h2>
          <ul className="list-disc space-y-2 pl-5">
            {PROFILES.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  rel="me noopener"
                  target="_blank"
                  className="text-fg underline-offset-4 hover:underline"
                >
                  {p.label} · @shubhspeaks
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
