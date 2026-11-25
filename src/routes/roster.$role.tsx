import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import {
  BHOPAL_ADDRESS_TEXT,
  REMOTE_LINE,
  ROSTER_EMAIL,
  ROSTER_FORM,
  ROSTER_URL,
  WHO_INTERN,
  employmentText,
  jobPostingJsonLd,
  locationText,
  mailtoFor,
  roleBreadcrumbJsonLd,
  rosterRole,
  type RosterRole,
} from "@/lib/content/roster";
import { alternateLinks } from "@/lib/seo";

export const Route = createFileRoute("/roster/$role")({
  loader: ({ params }) => {
    const role = rosterRole(params.role);
    if (!role) throw notFound();
    return { role };
  },
  head: ({ loaderData }) => {
    const role = loaderData?.role;
    if (!role) return {};
    const url = `${ROSTER_URL}/${role.slug}`;
    return {
      meta: [
        { title: role.title },
        { name: "description", content: role.description },
        { property: "og:title", content: role.title },
        { property: "og:description", content: role.description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }, ...alternateLinks(url)],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(jobPostingJsonLd(role)) },
        { type: "application/ld+json", children: JSON.stringify(roleBreadcrumbJsonLd(role)) },
      ],
    };
  },
  component: RolePage,
});

const SECTION = "relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 [&>*]:max-w-3xl";
const PROSE = "text-sm leading-relaxed text-muted sm:text-base [&_a]:text-fg [&_a]:underline-offset-4 hover:[&_a]:underline";

function Bullets({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-2xl tracking-tight text-fg">{title}</h2>
      <ul className={`${PROSE} mt-4 list-disc space-y-2 pl-5`}>
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function languages(role: RosterRole) {
  return role.loc === "field"
    ? "Hindi and English; field roles may need the language of the campaign state"
    : "Hindi and English";
}

function RolePage() {
  const { role } = Route.useLoaderData();
  const remote = role.loc === "remote_or_bhopal";

  return (
    <main>
      <PageHero
        kicker={`The Roster · ${role.unit}`}
        title={`${role.job}: ${role.unit}`}
        lede={`${role.unit} · ${locationText(role)} · ${employmentText(role)}`}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href={ROSTER_FORM} target="_blank" rel="noreferrer noopener" data-roster-apply={role.slug}>
              Apply for {role.job}
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={mailtoFor(role.job)} data-roster-apply={role.slug}>
              Email {ROSTER_EMAIL}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-border">
        <div className={SECTION}>
          <p className={PROSE}>{role.intro}</p>
          <Bullets title="What you will do" items={role.resp} />
          <Bullets title="Must-haves" items={role.must} />
          <Bullets title="Good to have" items={role.good} />

          <div className="mt-10">
            <h2 className="font-display text-2xl tracking-tight text-fg">Who should apply</h2>
            <p className={`${PROSE} mt-4`}>
              {role.track === "intern" ? (
                WHO_INTERN
              ) : (
                <>
                  We hire experienced professionals for this role. Freshers may apply, but we usually hire through our{" "}
                  <Link to="/roster" hash="internships">
                    internship track
                  </Link>
                  .
                </>
              )}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl tracking-tight text-fg">Location and terms</h2>
            <ul className={`${PROSE} mt-4 space-y-2`}>
              <li>
                <strong className="text-fg">Location:</strong> {locationText(role)}
                {remote ? `. ${REMOTE_LINE}` : null}
              </li>
              <li>
                <strong className="text-fg">Office address:</strong> {BHOPAL_ADDRESS_TEXT}
              </li>
              {role.track === "intern" ? (
                <li>
                  <strong className="text-fg">Experience:</strong> Students and recent graduates
                </li>
              ) : null}
              <li>
                <strong className="text-fg">Languages:</strong> {languages(role)}
              </li>
              <li>
                <strong className="text-fg">Employment type:</strong> {employmentText(role)}
              </li>
            </ul>
          </div>

          <div id="apply" className="mt-10 scroll-mt-16">
            <h2 className="font-display text-2xl tracking-tight text-fg">How to apply</h2>
            <p className={`${PROSE} mt-4`}>
              At BarnCops you don't join a department. You take charge of a piece of a campaign, which is why our hiring
              address is <strong className="text-fg">lead@</strong>.
            </p>
            <ol className={`${PROSE} mt-4 list-decimal space-y-3 pl-5`}>
              <li>
                <strong className="text-fg">Apply through the form (recommended):</strong>{" "}
                <a href={ROSTER_FORM} target="_blank" rel="noreferrer noopener" data-roster-apply={role.slug}>
                  Apply for {role.job}
                </a>
                . It takes about 8 minutes.
              </li>
              <li>
                <strong className="text-fg">Or email</strong> your CV to{" "}
                <a href={mailtoFor(role.job)} data-roster-apply={role.slug}>
                  {ROSTER_EMAIL}
                </a>{" "}
                with the subject line <strong className="text-fg">"{role.job}"</strong>, and add 3–5 lines on why this
                role plus a link to your work (portfolio, GitHub, writing samples or LinkedIn).
              </li>
              <li>
                Shortlisted candidates get a short role task, then a chat with the unit lead.{" "}
                <Link to="/roster" hash="process">
                  How we hire
                </Link>
              </li>
            </ol>
          </div>

          <p className="mt-12 border-t border-border pt-8 text-sm">
            <Link
              to="/roster"
              className="inline-flex min-h-11 items-center gap-2 text-muted no-underline hover:text-fg"
            >
              <ArrowLeft className="size-4" />
              All roles on The Roster
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
