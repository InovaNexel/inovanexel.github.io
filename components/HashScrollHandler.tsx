"use client";

import { scrollToSection } from "@/lib/scroll";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const run = () => scrollToSection(hash);
      requestAnimationFrame(() => {
        run();
        setTimeout(run, 150);
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}
