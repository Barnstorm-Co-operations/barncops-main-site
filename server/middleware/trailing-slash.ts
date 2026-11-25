/**
 * Trailing-slash URLs (e.g. /advisory/) must be a permanent redirect. TanStack's
 * canonical-location redirect is a 307; this runs before that handler on the
 * deployed server and answers with a 308 for every path.
 */
interface SlashEvent {
  url: URL;
  req: { method: string };
}

export default function trailingSlashRedirect(event: SlashEvent, next: () => unknown): unknown {
  const { pathname, search } = event.url;
  if (pathname === "/" || !pathname.endsWith("/")) return next();
  // Collapse leading slashes so "//host/" can never become a protocol-relative Location.
  const target = "/" + pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  return new Response(null, {
    status: 308,
    headers: { location: target + search },
  });
}
