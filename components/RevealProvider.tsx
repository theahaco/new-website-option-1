"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mirrors the design's scroll-reveal: elements marked `data-aha-reveal`
 * fade + rise in once they enter the viewport. Re-scans on route change
 * so client-navigated pages animate too. The CSS in globals.css only
 * hides elements when html[data-reveal-ready] is set (motion allowed),
 * so this is a pure progressive enhancement.
 */
export default function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!document.documentElement.hasAttribute("data-reveal-ready")) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-aha-reveal]:not(.is-visible)")
    );
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
