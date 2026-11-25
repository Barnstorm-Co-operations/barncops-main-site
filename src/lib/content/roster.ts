import { BHOPAL_ADDRESS_TEXT, BHOPAL_POSTAL_ADDRESS } from "@/lib/content/firm";
import { ROSTER_ROLES } from "@/lib/content/roster-roles";

export { BHOPAL_ADDRESS_TEXT, BHOPAL_POSTAL_ADDRESS, ROSTER_ROLES };

export const SITE = "https://www.barncops.in";
export const ROSTER_URL = SITE + "/roster";
export const ROSTER_FORM = "https://forms.gle/B3iXR4d1XPxmNoV3A";
export const ROSTER_EMAIL = "lead@barncops.in";
export const ROSTER_DATE_POSTED = "2026-11-20";
export const ROSTER_VALID_THROUGH = "2027-01-31T23:59:59+05:30";

export type RosterLocation = "remote_or_bhopal" | "bhopal_field" | "bhopal" | "field";

export type RosterRole = {
  slug: string;
  unit: string;
  job: string;
  title: string;
  description: string;
  intro: string;
  resp: string[];
  must: string[];
  good: string[];
  loc: RosterLocation;
  employmentType: "FULL_TIME" | "INTERN";
  track: "exp" | "intern";
};

export const REMOTE_LINE = "This role can be done 100% remotely from anywhere in India.";

export function rosterRole(slug: string) {
  return ROSTER_ROLES.find((r) => r.slug === slug);
}

export function locationText(role: RosterRole) {
  switch (role.loc) {
    case "remote_or_bhopal":
      return "Bhopal office or 100% work from home anywhere in India (your choice)";
    case "bhopal_field":
      return "Bhopal office, with regular field travel to campaign constituencies";
    case "bhopal":
      return "Bhopal office";
    case "field":
      return "Field-based in campaign geographies; reports to the Bhopal office";
  }
}

export function employmentText(role: RosterRole) {
  return role.employmentType === "INTERN" ? "Internship" : "Full-time";
}

export const WHO_EXPERIENCED =
  "We hire experienced professionals for this role. Freshers may apply, but we usually hire through our internship track.";
export const WHO_INTERN =
  "This is an internship: students and recent graduates. Most of our analysts started on this track. Already have work experience? Apply for the full-time role instead.";

export function mailtoFor(subject: string) {
  return `mailto:${ROSTER_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function list(items: string[]) {
  return "<ul>" + items.map((x) => `<li>${esc(x)}</li>`).join("") + "</ul>";
}

export function jobPostingJsonLd(role: RosterRole) {
  const who = role.track === "intern" ? WHO_INTERN : WHO_EXPERIENCED;
  const remote = role.loc === "remote_or_bhopal";
  const description =
    `<p>${esc(role.intro)}</p>` +
    `<p><strong>What you will do</strong></p>${list(role.resp)}` +
    `<p><strong>Must-haves</strong></p>${list(role.must)}` +
    `<p><strong>Good to have</strong></p>${list(role.good)}` +
    `<p><strong>Who should apply:</strong> ${esc(who)}</p>` +
    `<p><strong>Location:</strong> ${esc(locationText(role))}${remote ? ". " + REMOTE_LINE : "."} Office: ${esc(BHOPAL_ADDRESS_TEXT)}.</p>` +
    `<p><strong>How to apply:</strong> fill the BarnCops application form linked on this page, or email your CV to ${ROSTER_EMAIL} with the subject "${esc(role.job)}".</p>`;

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.job,
    description,
    identifier: { "@type": "PropertyValue", name: "BarnCops", value: "ROSTER-" + role.slug.toUpperCase() },
    datePosted: ROSTER_DATE_POSTED,
    validThrough: ROSTER_VALID_THROUGH,
    employmentType: role.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      "@id": SITE + "/#org",
      name: "Barnstorm Co-operations (BarnCops)",
      sameAs: SITE,
      logo: SITE + "/icons/icon-512.png",
    },
    // Field roles report to the Bhopal office until the field states are confirmed.
    jobLocation: { "@type": "Place", address: BHOPAL_POSTAL_ADDRESS },
    ...(remote
      ? {
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: { "@type": "Country", name: "India" },
        }
      : {}),
    directApply: true,
    occupationalCategory: role.unit,
    url: `${ROSTER_URL}/${role.slug}`,
  };
}

export function roleBreadcrumbJsonLd(role: RosterRole) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "The Roster", item: ROSTER_URL },
      { "@type": "ListItem", position: 3, name: role.job, item: `${ROSTER_URL}/${role.slug}` },
    ],
  };
}
