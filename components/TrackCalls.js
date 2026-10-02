"use client";
import { useEffect } from "react";

/* GA4 conversion events. Page path only — no names, numbers, or message text. */
export default function TrackCalls() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.("a[href^='tel:'], a[href^='sms:'], a[data-ga='directions']");
      if (!a || typeof window.gtag !== "function") return;
      const href = a.getAttribute("href") || "";
      const kind = a.dataset.ga === "directions" ? "get_directions"
        : href.startsWith("tel:") ? "click_to_call" : "click_to_text";
      window.gtag("event", kind, { page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
