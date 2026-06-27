"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  contactHref,
  contactLabel,
  isNavActive,
  mainNav,
} from "@/lib/navigation";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] h-[90px] border-b border-[#E5E7EB]/90 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container-site flex h-full items-center justify-between">
          <div className="relative z-10 shrink-0">
            <Logo textClassName="text-[#03152F]" />
          </div>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 lg:flex"
            aria-label="Principal"
          >
            <ul className="flex items-center gap-8">
              {mainNav.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      className={`relative text-[15px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8FD18F] ${
                        active
                          ? "text-[#03152F]"
                          : "text-[#03152F]/70 hover:text-[#03152F]"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-[#8FD18F]" />
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <NavLink
              href={contactHref}
              className="hidden rounded-[10px] bg-[#8FD18F] px-5 py-2.5 text-sm font-semibold text-[#03152F] transition-colors hover:bg-[#7bc47d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FD18F] sm:inline-flex"
              aria-label="Ir para a seção Fale Conosco"
            >
              {contactLabel}
            </NavLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-[#03152F] hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FD18F] lg:hidden"
              aria-label="Abrir menu de navegação"
            >
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-[#03152F]/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-[120] flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <div className="flex h-[90px] items-center justify-between border-b border-[#E5E7EB] px-6">
                <Logo textClassName="text-[#03152F]" />
                <button
                  type="button"
                  onClick={closeMenu}
                  className="text-sm font-medium text-[#03152F]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8FD18F]"
                >
                  Fechar
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Principal">
                {mainNav.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-xl px-4 py-3.5 text-base font-medium hover:bg-[#F8FAFC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8FD18F] ${
                      isNavActive(pathname, item.href)
                        ? "bg-[#F8FAFC] text-[#03152F]"
                        : "text-[#03152F]/80"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="border-t border-[#E5E7EB] p-6">
                <NavLink
                  href={contactHref}
                  onClick={closeMenu}
                  className="flex w-full justify-center rounded-[10px] bg-[#8FD18F] py-3 text-sm font-semibold text-[#03152F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03152F]"
                  aria-label="Ir para a seção Fale Conosco"
                >
                  {contactLabel}
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
