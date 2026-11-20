import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { trackLinkClick, trackPageView } from "@/lib/analytics";

export function AnalyticsListener() {
  const router = useRouter();

  useEffect(() => {
    // Let the route's head() update document.title before the hit is sent.
    const send = () => window.setTimeout(trackPageView, 0);
    send();
    const unsubscribe = router.subscribe("onResolved", (evt) => {
      if (evt.pathChanged) send();
    });
    const onClick = (e: MouseEvent) => trackLinkClick(e.target);
    document.addEventListener("click", onClick, true);
    return () => {
      unsubscribe();
      document.removeEventListener("click", onClick, true);
    };
  }, [router]);

  return null;
}
