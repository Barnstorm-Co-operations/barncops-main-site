export const GA_MEASUREMENT_ID = "G-7MGWF767NL";

/**
 * GA4 bootstrap from D10. `send_page_view: false` because <AnalyticsListener /> sends
 * page_view on every resolved route (SPA), including the first one.
 * gtag.js only loads on barncops.in hosts so local and preview builds send nothing.
 */
export const GA_BOOTSTRAP = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:false,linker:{domains:['barncops.in','www.barncops.in','atlas.barncops.in']}});
if(/(^|\\.)barncops\\.in$/.test(location.hostname)){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}';document.head.appendChild(s);}`;

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

export function trackPageView() {
  if (typeof window === "undefined") return;
  track("page_view", {
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Key events driven by link clicks anywhere on the site (D10 + D12). */
export function trackLinkClick(target: EventTarget | null) {
  if (!(target instanceof Element)) return;
  const a = target.closest("a");
  if (!a) return;
  const href = a.getAttribute("href") ?? "";
  const rosterRole = a.getAttribute("data-roster-apply");
  if (rosterRole !== null) {
    track("roster_apply_click", {
      role: rosterRole || "general",
      method: href.startsWith("mailto:") ? "email" : "form",
    });
    return;
  }
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) {
    track("whatsapp_click", { link_url: href.split("?")[0] });
    return;
  }
  if (href.startsWith("mailto:")) {
    track("mailto_click", { email: href.slice(7).split("?")[0] });
    return;
  }
  if (/^https:\/\/atlas\.barncops\.in\/ask\/?/i.test(href)) {
    track("ask_sarathi_click", { link_url: href });
    return;
  }
  if (window.location.pathname === "/mandata" && /^\/contact(\?|$)/.test(href)) {
    track("platform_demo_click", { link_text: (a.textContent ?? "").trim().slice(0, 100) });
  }
}
