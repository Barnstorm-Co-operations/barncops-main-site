import { Link, createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import {
  BHOPAL_ADDRESS_TEXT,
  BHOPAL_POSTAL_ADDRESS,
  ROSTER_EMAIL,
  ROSTER_FORM,
  ROSTER_URL,
  SITE,
  mailtoFor,
} from "@/lib/content/roster";
import { alternateLinks } from "@/lib/seo";

const TITLE = "Careers at BarnCops: Political Consulting Jobs in India";
const DESCRIPTION =
  "Political consulting jobs and internships at BarnCops, Bhopal: research and data analysts, AI engineers, cluster managers, social media and creative roles.";

type RoleLink = { slug: string; label: string };

const UNITS: { unit: string; does: string; roles: RoleLink[]; where: string }[] = [
  {
    unit: "Political Intelligence Unit",
    does: "Constituency profiles, opposition research, issue maps, daily briefs",
    roles: [{ slug: "political-research-analyst", label: "Political Research Analyst" }],
    where: "Bhopal office + field travel",
  },
  {
    unit: "Data Analysis Unit",
    does: "Booth-wise results, electoral rolls, swing models, dashboards",
    roles: [{ slug: "political-data-analyst", label: "Political Data Analyst" }],
    where: "Bhopal office or work from home",
  },
  {
    unit: "AI Backend Engineering",
    does: "Python APIs, data pipelines and LLM features for mandata.ai and the Election Atlas",
    roles: [{ slug: "ai-backend-engineer", label: "AI Backend Engineer (Python)" }],
    where: "Work from home (India) or Bhopal office",
  },
  {
    unit: "Cluster Managers (Field)",
    does: "Run the ground campaign across a cluster of assembly segments. Ongoing hiring for specific geographies",
    roles: [{ slug: "cluster-manager-election-field", label: "Cluster Manager, Election Field Operations" }],
    where: "Field-based in campaign geographies",
  },
  {
    unit: "Narrative Team (Social Media)",
    does: "Runs candidate pages and the rapid-response desk on a 72-hour clock",
    roles: [{ slug: "political-social-media-manager", label: "Political Social Media Manager" }],
    where: "Bhopal office",
  },
  {
    unit: "Creative Team",
    does: "Everything voters see: design, video, words",
    roles: [
      { slug: "political-graphic-designer", label: "Graphic Designer" },
      { slug: "political-video-editor", label: "Video Editor" },
      { slug: "political-content-writer", label: "Content Writer (Hindi and English)" },
    ],
    where: "Bhopal office or work from home",
  },
];

const INTERNSHIPS: { slug: string; label: string; unit: string; where: string }[] = [
  {
    slug: "political-research-intern",
    label: "Political Research Intern",
    unit: "Political Intelligence Unit",
    where: "Bhopal office",
  },
  {
    slug: "election-data-analyst-intern",
    label: "Election Data Analyst Intern",
    unit: "Data Analysis Unit",
    where: "Bhopal office or work from home",
  },
];

const WHY: { lead: string; body: ReactNode }[] = [
  {
    lead: "Real campaigns, real stakes.",
    body: "You will work on live assembly and Lok Sabha campaigns, not case studies. Your work reaches a candidate's desk the same week.",
  },
  {
    lead: "Election data at depth.",
    body: (
      <>
        Our <a href="https://atlas.barncops.in/">Barnstorm Election Atlas</a> holds every Lok Sabha and Vidhan Sabha
        result since 1952, and our teams have processed more than 90 million elector records.
      </>
    ),
  },
  {
    lead: "AI that ships.",
    body: (
      <>
        We build <Link to="/mandata">mandata.ai</Link>, a constituency operating platform, and Ask Sarathi, an AI
        election analyst on the Atlas. Engineers and analysts see their work used every day.
      </>
    ),
  },
  {
    lead: "Bhopal base, field reach, remote where it works.",
    body: "Our office is in Bhopal. Field teams work across the states where our campaigns run, and some roles can be done fully from home.",
  },
  {
    lead: "Small teams, direct access.",
    body: "Every unit works directly with the founder and the war-room leads.",
  },
];

const PROCESS: { lead: string; body: string }[] = [
  { lead: "Apply:", body: "use the form or email (below). It takes about 8 minutes." },
  {
    lead: "Screening call (about 20 minutes):",
    body: "a short conversation on your experience, availability and languages.",
  },
  {
    lead: "Role task:",
    body: "a short, practical task for your unit. For example, a one-page seat brief, a data clean-up, a small API, or three social posts.",
  },
  { lead: "Chat with the unit lead and a director.", body: "" },
  { lead: "Offer.", body: "" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Does BarnCops hire freshers or interns?",
    a: "We hire interns and experienced professionals. Most of our junior analysts join through the internship track in the Political Intelligence Unit and the Data Analysis Unit. Freshers may apply for any role, but we usually hire them through the internship track first.",
  },
  {
    q: "Where are BarnCops jobs located?",
    a: "Our office is in Bhopal (Bansal One, near Habibganj Railway Station). The Political Intelligence Unit works from Bhopal with field travel. Cluster Managers are field-based in campaign states. AI Backend, Data Analyst and Creative roles can be done from the Bhopal office or fully from home in India, as stated on each role page.",
  },
  {
    q: "Do I need to support a political party to work here?",
    a: "No party membership is required. We expect professional conduct and strict confidentiality about every client.",
  },
  {
    q: "Which languages do I need?",
    a: "Hindi and English for most roles. Field and content roles may need the language of the campaign state.",
  },
  {
    q: "How long does the hiring process take?",
    a: "The process has five steps: apply, screening call, role task, a chat with the unit lead, offer.",
  },
  {
    q: "How do I apply for a political consulting job at BarnCops?",
    a: "Fill the BarnCops application form linked on this page, or email your CV to lead@barncops.in with the role name in the subject line.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": SITE + "/#org",
      name: "Barnstorm Co-operations",
      alternateName: "BarnCops",
      url: SITE,
      logo: SITE + "/icons/icon-512.png",
      address: BHOPAL_POSTAL_ADDRESS,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: "The Roster", item: ROSTER_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/roster/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: ROSTER_URL },
    ],
    links: [{ rel: "canonical", href: ROSTER_URL }, ...alternateLinks(ROSTER_URL)],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Roster,
});

const SECTION = "relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20";
const PROSE = "max-w-3xl text-sm leading-relaxed text-muted sm:text-base [&_a]:text-fg [&_a]:underline-offset-4 hover:[&_a]:underline";
const TH = "border-b border-border px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-subtle";
const TD = "border-b border-border px-4 py-4 align-top text-sm leading-relaxed text-muted";
const ROLE_LINK = "text-fg underline-offset-4 hover:underline";

function Roster() {
  return (
    <main>
      <PageHero
        kicker="Careers · The Roster"
        title="The Roster: political consulting jobs at BarnCops"
        lede="We don't hire employees. We deploy political operatives and data architects. If you belong in a war room, this is where you start."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href="#roles">See open roles</a>
          </Button>
          <Button asChild variant="secondary">
            <a href={ROSTER_FORM} target="_blank" rel="noreferrer noopener" data-roster-apply="">
              Apply to BarnCops
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-border">
        <div className={SECTION}>
          <div className={`${PROSE} space-y-5`}>
            <p>
              Our hiring address is <strong className="text-fg">{ROSTER_EMAIL}</strong>, not careers@, and that is
              deliberate. Politics is about leadership, and so is every role here: the analyst who owns a seat profile,
              the engineer who owns a pipeline, the cluster manager who owns forty booths. At BarnCops you don't join a
              department. You lead a piece of a campaign.
            </p>
            <p>
              BarnCops (Barnstorm Co-operations) is a political consulting firm headquartered in Bhopal, with studios in
              New Delhi and Hyderabad. Since 2019 we have run election strategy, booth-level intelligence, digital
              campaigns and war rooms across 10+ states, 35+ parliamentary constituencies and 200+ assembly segments.
              Our founder and director, <Link to="/shubh-tiwari">Shubh Tiwari</Link>, has 13+ years in elections and
              political communication.
            </p>
            <p>
              We are hiring political research analysts, political data analysts, AI backend engineers, field cluster
              managers, a political social media manager and creative staff (graphic designers, video editors and
              content writers), plus interns for research and data.
            </p>
          </div>
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="On this page">
            <a href="#roles" className={ROLE_LINK}>See open roles ↓</a>
            <a href="#internships" className={ROLE_LINK}>Internships ↓</a>
            <a href="#process" className={ROLE_LINK}>How we hire ↓</a>
            <a href="#apply" className={ROLE_LINK}>Apply ↓</a>
          </nav>
        </div>
      </section>

      <section className="border-b border-border">
        <div className={SECTION}>
          <h2 className="type-section text-fg">Why work at BarnCops</h2>
          <ul className={`${PROSE} mt-8 space-y-4`}>
            {WHY.map((w) => (
              <li key={w.lead}>
                <strong className="text-fg">{w.lead}</strong> {w.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="roles" className="scroll-mt-16 border-b border-border">
        <div className={SECTION}>
          <h2 className="type-section text-fg">Open roles (November 2026)</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  <th className={TH}>Unit</th>
                  <th className={TH}>What the unit does</th>
                  <th className={TH}>Role</th>
                  <th className={TH}>Where</th>
                </tr>
              </thead>
              <tbody>
                {UNITS.map((u) => (
                  <tr key={u.unit}>
                    <td className={`${TD} font-medium text-fg`}>{u.unit}</td>
                    <td className={TD}>{u.does}</td>
                    <td className={TD}>
                      {u.roles.map((r, i) => (
                        <span key={r.slug}>
                          {i > 0 ? " · " : null}
                          <Link to="/roster/$role" params={{ role: r.slug }} className={ROLE_LINK}>
                            {r.label}
                          </Link>
                        </span>
                      ))}
                    </td>
                    <td className={TD}>{u.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`${PROSE} mt-6`}>
            <strong className="text-fg">Cluster Managers:</strong> we have already hired for several clusters. The role
            stays open because we still need the right people in specific places.
          </p>
        </div>
      </section>

      <section id="internships" className="scroll-mt-16 border-b border-border">
        <div className={SECTION}>
          <h2 className="type-section text-fg">Internship track</h2>
          <p className={`${PROSE} mt-6`}>
            Most of our analysts start here. We hire <strong className="text-fg">interns and experienced professionals</strong>.
            Freshers may apply for any role, but we usually hire through our internship track first.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse">
              <thead>
                <tr>
                  <th className={TH}>Internship</th>
                  <th className={TH}>Unit</th>
                  <th className={TH}>Where</th>
                </tr>
              </thead>
              <tbody>
                {INTERNSHIPS.map((r) => (
                  <tr key={r.slug}>
                    <td className={TD}>
                      <Link to="/roster/$role" params={{ role: r.slug }} className={ROLE_LINK}>
                        {r.label}
                      </Link>
                    </td>
                    <td className={TD}>{r.unit}</td>
                    <td className={TD}>{r.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="talent-pool" className="scroll-mt-16 border-b border-border">
        <div className={SECTION}>
          <h2 className="type-section text-fg">Talent pool – always accepting briefs</h2>
          <div className={`${PROSE} mt-6 space-y-4`}>
            <p>Not every role is open every month. For these, we keep a talent pool and read every brief:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-fg">Narrative Building Unit: Political Strategist.</strong> The line a campaign
                wins on: the theory of the race, the contrast and the message.
              </li>
            </ul>
            <p>
              Send a one-page note on a campaign you would run differently, with your CV, to{" "}
              <a href={mailtoFor("Talent pool: Narrative Building")} data-roster-apply="talent-pool">
                {ROSTER_EMAIL}
              </a>{" "}
              with the subject "Talent pool: [unit]".
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-16 border-b border-border">
        <div className={SECTION}>
          <h2 className="type-section text-fg">How we hire</h2>
          <ol className={`${PROSE} mt-8 list-decimal space-y-3 pl-5`}>
            {PROCESS.map((p) => (
              <li key={p.lead}>
                <strong className="text-fg">{p.lead}</strong>
                {p.body ? " " + p.body : null}
              </li>
            ))}
          </ol>
          <p className={`${PROSE} mt-6`}>
            All applications are confidential. We do not share your details outside BarnCops.
          </p>
        </div>
      </section>

      <section id="apply" className="scroll-mt-16 border-b border-border">
        <div className={SECTION}>
          <h2 className="type-section text-fg">Apply: write to lead@</h2>
          <div className={`${PROSE} mt-6 space-y-5`}>
            <p>The address says what we look for. Whatever the role, we want people who will lead in it.</p>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong className="text-fg">Application form (recommended):</strong>{" "}
                <a href={ROSTER_FORM} target="_blank" rel="noreferrer noopener" data-roster-apply="">
                  Apply to BarnCops →
                </a>
                . Pick your role, add your CV link, answer three short questions about the unit. About 8 minutes.
              </li>
              <li>
                <strong className="text-fg">Email:</strong> send your CV to{" "}
                <a href={`mailto:${ROSTER_EMAIL}`} data-roster-apply="">
                  {ROSTER_EMAIL}
                </a>{" "}
                with the role name in the subject line, for example "Political Research Analyst", plus 3–5 lines on why
                you, and a link to your work.
              </li>
            </ol>
            <p>
              <strong className="text-fg">Visit us:</strong> Barnstorm Co-operations, {BHOPAL_ADDRESS_TEXT}.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className={SECTION}>
          <h2 className="type-section text-fg">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-display text-lg tracking-tight text-fg">{f.q}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
