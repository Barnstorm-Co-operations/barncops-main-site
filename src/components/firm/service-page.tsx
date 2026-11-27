import { Fragment, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { WhatsAppCta } from "@/components/contact/whatsapp-cta";
import { FaqBlock } from "@/components/firm/faq-block";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import type { ServiceBlock, ServicePageCopy } from "@/lib/content/service-pages";
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript, pageHead, serviceJsonLd } from "@/lib/seo";

/** The copy names the platform "Mandata AI"; its live route is /mandata (/platform 301s there). */
const RELATED_SOFTWARE_PATH = "/mandata";

export function servicePageHead(copy: ServicePageCopy) {
  return {
    ...pageHead(copy.title, copy.description, copy.path),
    scripts: [
      jsonLdScript(
        serviceJsonLd({
          path: copy.path,
          name: copy.service.name,
          serviceType: copy.service.serviceType,
          description: copy.service.description,
          audienceType: copy.service.audienceType,
          relatedSoftware: { name: copy.service.relatedSoftware, path: RELATED_SOFTWARE_PATH },
        }),
      ),
      jsonLdScript(faqJsonLd(copy.path, copy.faqs)),
      jsonLdScript(breadcrumbJsonLd(copy.breadcrumbs)),
    ],
  };
}

export function ServicePage({ copy }: { copy: ServicePageCopy }) {
  const [primary, ...secondary] = copy.hero.ctas;
  return (
    <main>
      <PageHero kicker={copy.breadcrumbs[0]?.[0] ?? ""} title={copy.h1}>
        {copy.hero.paragraphs.map((p) => (
          <p key={p} className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            <Rich text={p} />
          </p>
        ))}
        {copy.hero.stats ? (
          <p className="mt-6 max-w-3xl font-mono text-xs tracking-wide text-slate-300 sm:text-sm">
            {copy.hero.stats}
          </p>
        ) : null}
        <div className="relative z-10 mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
          {primary ? (
            <Button asChild size="lg">
              <CopyLink href={primary.href}>{primary.label}</CopyLink>
            </Button>
          ) : null}
          {secondary.map((cta) => (
            <Button key={cta.href} asChild variant="strike" size="lg">
              <CopyLink href={cta.href}>{cta.label}</CopyLink>
            </Button>
          ))}
        </div>
      </PageHero>

      {copy.sections.map((section) => (
        <section key={section.title} className="border-b border-border">
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
            <h2 className="type-section max-w-3xl text-slate-100">{section.title}</h2>
            <div className="mt-8 max-w-4xl space-y-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <FaqBlock title={copy.faqTitle} items={copy.faqs} jsonLd={false} />

      <section>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="flex flex-col gap-3 bg-surface px-6 py-12 shadow-[var(--shadow-border)] sm:flex-row sm:flex-wrap sm:px-12">
            {copy.closing.map((cta, i) => (
              <Button
                key={cta.href}
                asChild
                size="lg"
                variant={i === 0 ? "primary" : i === 1 ? "strike" : "secondary"}
              >
                <CopyLink href={cta.href}>{cta.label}</CopyLink>
              </Button>
            ))}
            <WhatsAppCta prominent />
          </div>
        </div>
      </section>
    </main>
  );
}

function Block({ block }: { block: ServiceBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p>
          <Rich text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="grid gap-x-8 gap-y-5 pt-2 sm:grid-cols-2">
          {block.items.map((item) => (
            <li key={item} className="border-t border-border pt-5">
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-4 pl-5 marker:font-mono marker:text-slate-400">
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              <Rich text={item} />
            </li>
          ))}
        </ol>
      );
    case "steps":
      return (
        <ol className="grid gap-6 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <Rich text={item} />
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th
                    key={cell}
                    scope="col"
                    className="border-b border-white/10 px-5 py-3 font-mono text-xs font-normal uppercase tracking-wide text-slate-400"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-b border-white/10 last:border-b-0">
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th
                        key={i}
                        scope="row"
                        className="px-5 py-4 align-top font-display font-normal text-slate-100"
                      >
                        <Rich text={cell} />
                      </th>
                    ) : (
                      <td key={i} className="px-5 py-4 align-top">
                        <Rich text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renders the copy's inline markdown: **bold** and [label](href). */
function Rich({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    if (m[1] !== undefined) {
      out.push(
        <strong key={at} className="font-medium text-slate-100">
          <Rich text={m[1]} />
        </strong>,
      );
    } else {
      out.push(
        <CopyLink
          key={at}
          href={m[3]}
          className="text-slate-100 underline underline-offset-4 hover:text-white"
        >
          {m[2]}
        </CopyLink>,
      );
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return (
    <>
      {out.map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
    </>
  );
}

function CopyLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  if (href === "/contact") {
    return (
      <Link to="/contact" search={{ need: "advisory" }} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link to={href as "/"} className={className}>
      {children}
    </Link>
  );
}
