"use client";

import { contactHref, contactLabel, isNavActive, mainNav } from "@/lib/navigation";
import { site } from "@/lib/site";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { buttonClass } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };

  const closeMenu = useCallback(() => dialogRef.current?.close(), []);

  // Fecha ao clicar no backdrop (área fora do painel).
  const onDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) closeMenu();
  };

  const solid = scrolled;
  const tone = solid ? "light" : "dark";

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-[100] h-[var(--header-h)] border-b ${
          solid
            ? "border-line bg-white shadow-[0_8px_24px_-16px_rgb(3_21_47/0.18)]"
            : "border-white/10 bg-transparent"
        }`}
      >
        <div className="container-site flex h-full items-center justify-between gap-6">
          <Logo tone={tone} />

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex h-10 items-center rounded-full px-4 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${
                        solid
                          ? active
                            ? "text-ink"
                            : "text-ink/65 hover:text-ink"
                          : active
                            ? "text-white"
                            : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <span
                          aria-hidden
                          className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-mint"
                        />
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.sigelLoginHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar o SIGEL (abre em nova aba)"
              title="Acessar o SIGEL"
              className={`hidden h-10 items-center gap-2 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint lg:inline-flex xl:px-4 ${
                solid ? "text-ink/70 hover:text-ink" : "text-white/75 hover:text-white"
              }`}
            >
              <Icon name="lock" size={16} />
              <span>
                <span className="hidden xl:inline">Acessar </span>SIGEL
              </span>
            </a>
            <span className="hidden sm:block">
              <NavLink href={contactHref} className={buttonClass("primary", "sm")}>
                {contactLabel}
              </NavLink>
            </span>
            <button
              type="button"
              onClick={openMenu}
              className={`btn flex h-11 w-11 items-center justify-center rounded-full border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint lg:hidden ${
                solid ? "border-line text-ink" : "border-white/20 text-white"
              }`}
              aria-label="Abrir menu"
              aria-haspopup="dialog"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        className="drawer bg-ink p-0 text-white backdrop:bg-transparent lg:hidden"
        aria-label="Menu de navegação"
        onClick={onDialogClick}
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[var(--header-h)] items-center justify-between border-b border-white/10 px-5">
            <Logo tone="dark" onClick={closeMenu} />
            <button
              type="button"
              onClick={closeMenu}
              className="btn flex h-11 w-11 items-center justify-center rounded-full border border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              aria-label="Fechar menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Principal" className="flex-1 overflow-y-auto px-3 py-6">
            <ul className="flex flex-col">
              {mainNav.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-mint ${
                        active ? "text-white" : "text-white/70"
                      }`}
                    >
                      {item.label}
                      {active && <span aria-hidden className="h-2 w-2 rounded-full bg-mint" />}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-white/10 p-5">
            <NavLink href={contactHref} onClick={closeMenu} className={`${buttonClass("primary")} w-full`}>
              {contactLabel}
            </NavLink>
            <a
              href={site.sigelLoginHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClass("ghost-dark")} w-full`}
            >
              <Icon name="lock" size={16} />
              Acessar SIGEL
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
