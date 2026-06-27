"use client";

import { useCallback, useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { contactHref, contactLabel, isNavActive, mainNav } from "@/lib/navigation";
import { NavLink } from "@/components/NavLink";
import { usePathname } from "next/navigation";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
        aria-expanded={open}
        aria-controls="site-mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        <span className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "top-[7px] rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "top-[7px] -rotate-45" : "top-[14px]"
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-[55] bg-[#050b18]/70 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden={!open}
      />

      <div
        id="site-mobile-menu"
        className={`fixed inset-y-0 right-0 z-[55] flex w-full max-w-[min(100vw,360px)] flex-col border-l border-white/10 bg-[#050b18] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label="Menu de navegação"
        inert={!open ? true : undefined}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <Logo onClick={close} />
          <button
            type="button"
            onClick={close}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            Fechar
          </button>
        </div>

        <nav
          className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4"
          aria-label="Principal"
        >
          {mainNav.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={close}
              className={`rounded-lg px-4 py-3 text-[15px] font-medium transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86efac] ${
                isNavActive(pathname, link.href)
                  ? "bg-white/5 text-white"
                  : "text-white/75"
              }`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-white/10 p-5">
          <NavLink
            href={contactHref}
            onClick={close}
            className="flex w-full items-center justify-center rounded-lg bg-[#86efac] px-5 py-3 text-sm font-semibold text-[#050b18] transition-colors hover:bg-[#6ee7a0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#86efac]"
            aria-label="Ir para a seção Fale Conosco"
          >
            {contactLabel}
          </NavLink>
        </div>
      </div>
    </>
  );
}
