"use client";

import { parseHashHref } from "@/lib/navigation";
import { scrollToSection } from "@/lib/scroll";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

export function NavLink({
  href,
  children,
  className,
  onClick,
  "aria-label": ariaLabel,
}: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { path, hash } = parseHashHref(href);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (!hash) return;

    const isHome = pathname === "/";
    const targetsHome = path === "/";

    if (isHome && targetsHome) {
      e.preventDefault();
      scrollToSection(hash);
      window.history.replaceState(null, "", `/#${hash}`);
      return;
    }

    if (!isHome && targetsHome) {
      e.preventDefault();
      router.push(`/#${hash}`);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
