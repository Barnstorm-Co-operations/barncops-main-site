import { BHOPAL_POSTAL_ADDRESS } from "@/lib/content/firm";

export const ORIGIN = "https://www.barncops.in";
export const ORG_ID = `${ORIGIN}/#org`;
export const PERSON_ID = `${ORIGIN}/shubh-tiwari#person`;

export function absoluteUrl(path = "/") {
  return path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Self-referencing en-IN + x-default alternates. Add hi-IN only once /hi/ pages exist.
 * The lowercase `hreflang` key is deliberate: React renders attribute names verbatim, and SEO audit
 * tools grep the raw HTML for `hreflang`, missing React's camelCase `hrefLang`.
 */
export function alternateLinks(url: string) {
  return [
    { rel: "alternate", hreflang: "en-IN", href: url },
    { rel: "alternate", hreflang: "x-default", href: url },
  ];
}

export function pageHead(
  title: string,
  description: string,
  path = "/",
  opts: { index?: boolean; titleMax?: number } = {},
) {
  const pageTitle = fit(title, opts.titleMax ?? 60);
  const pageDescription = fit(description, 155);
  const url = absoluteUrl(path);
  const index = opts.index ?? true;
  return {
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: url },
      ...(index ? [] : [{ name: "robots", content: "noindex,nofollow" }]),
    ],
    links: [{ rel: "canonical", href: url }, ...(index ? alternateLinks(url) : [])],
  };
}

function fit(value: string, max: number) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const last = cut.lastIndexOf(" ");
  return (last > 24 ? cut.slice(0, last) : cut).trimEnd();
}

export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

/** Home › Section › Page. Home is prepended; pass the remaining crumbs as [name, path]. */
export function breadcrumbJsonLd(crumbs: readonly (readonly [name: string, path: string])[]) {
  const trail = [["Home", "/"] as const, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

/** FAQPage for head(); `items` must be the same array the page renders so the text matches word for word. */
export function faqJsonLd(path: string, items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Service offered by the firm; reuse for each service page (e.g. the planned D6 pages). */
export function serviceJsonLd(service: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  offers?: readonly { name: string; description: string }[];
  audienceType?: string;
  relatedSoftware?: { name: string; path: string };
}) {
  const url = absoluteUrl(service.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: "IN",
    ...(service.audienceType
      ? { audience: { "@type": "Audience", audienceType: service.audienceType } }
      : {}),
    ...(service.relatedSoftware
      ? {
          isRelatedTo: {
            "@type": "SoftwareApplication",
            name: service.relatedSoftware.name,
            url: absoluteUrl(service.relatedSoftware.path),
          },
        }
      : {}),
    ...(service.offers?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: service.name,
            itemListElement: service.offers.map((o) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: o.name, description: o.description },
            })),
          },
        }
      : {}),
  };
}

export const SITE_NAME = "Barnstorm Co-operations";
export const SITE_TAGLINE =
  "Political consulting firm in India — election campaign management and constituency intelligence.";

// telephone and geo are deliberately absent until confirmed against the Google Business Profile.
export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: "Barnstorm Co-operations",
  legalName: "Barnstorm Coops Private Limited",
  url: ORIGIN,
  logo: `${ORIGIN}/icons/icon-512.png`,
  image: `${ORIGIN}/icons/icon-512.png`,
  foundingDate: "2019",
  founder: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Shubh Tiwari",
    url: `${ORIGIN}/shubh-tiwari`,
  },
  email: "poll@barncops.in",
  address: BHOPAL_POSTAL_ADDRESS,
  areaServed: "IN",
  sameAs: [
    "https://x.com/BarnCops",
    "https://www.linkedin.com/company/barncops",
    "https://www.instagram.com/barncops",
    "https://zenodo.org/records/24338661",
    "https://atlas.barncops.in/",
  ],
};
