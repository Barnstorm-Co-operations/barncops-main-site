/**
 * X-Robots-Tag for /console and its subroutes. Set here rather than as a Nitro
 * `routeRules` header: the vercel preset emits header-only routes without
 * `continue: true`, which would stop Vercel routing before the server function.
 */
interface ConsoleEvent {
  url: URL;
}

export default async function consoleNoindex(
  event: ConsoleEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  if (!/^\/console(\/|$)/.test(event.url.pathname)) return next();
  const result = await next();
  if (!(result instanceof Response)) return result;
  const headers = new Headers(result.headers);
  headers.set("x-robots-tag", "noindex, nofollow");
  return new Response(result.body, {
    status: result.status,
    statusText: result.statusText,
    headers,
  });
}
