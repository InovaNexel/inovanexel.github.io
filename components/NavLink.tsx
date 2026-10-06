"use client";

import { parseHashHref } from "@/lib/navigation";
import { scrollToSection } from "@/lib/scroll";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type NavLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick"> & {
  href: string;
  onClick?: () => void;
};

/** Link que rola suavemente até âncoras da home, de qualquer página. */
export function NavLink({ href, onClick, children, ...rest }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { path, hash } = parseHashHref(href);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (!hash) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

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
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
