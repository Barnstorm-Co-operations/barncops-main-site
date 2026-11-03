/**
 * /about/ must be a permanent redirect. TanStack's canonical redirect is 307.
 * This runs before that handler on the deployed server.
 */
interface SlashEvent {
  url: URL;
  req: { method: string };
}

export default function aboutSlashRedirect(event: SlashEvent, next: () => unknown): unknown {
  if (event.url.pathname !== "/about/") return next();
  return new Response(null, {
    status: 308,
    headers: { location: "/about" + event.url.search },
  });
}
