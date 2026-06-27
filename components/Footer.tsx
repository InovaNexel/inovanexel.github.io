import { footerEmpresaLinks } from "@/lib/navigation";
import { LogoDark } from "./Logo";
import { NavLink } from "./NavLink";
import type { ReactNode } from "react";

const footerSolucoesLinks = [
  { label: "GovTech", href: "/#solucoes" },
  { label: "Transformação Digital", href: "/#solucoes" },
  { label: "Planejamento", href: "/#solucoes" },
  { label: "Capacitação", href: "/#solucoes" },
];

const footerLinks = {
  Empresa: footerEmpresaLinks,
  Soluções: footerSolucoesLinks,
};

function SocialIcon({ label, children }: { label: string; children: ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#8FD18F]/50 hover:text-[#8FD18F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FD18F]"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="rounded-t-[20px] bg-[#03152F] text-white">
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <LogoDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
  Inovação que transforma o futuro público com soluções inteligentes
  para governos mais eficientes e conectados.
</p>

<div className="mt-5 space-y-1 text-sm text-white/45">
  <p>
    <span className="font-medium text-white/70"></span><br />
    INOVA NEXEL LTDA.
  </p>

  <p>
    <span className="font-medium text-white/70"></span><br />
    67.504.348/0001-97
  </p>
</div>
            <div className="mt-6 flex gap-3">
              <SocialIcon label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8 18H5v-9h3v9zM6.5 7.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM19 18h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V18h-3v-9h3v1.2c.6-.9 1.6-1.5 2.7-1.5 2 0 3.3 1.6 3.3 4.1V18z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zM12 4.8c-3.97 0-7.2 3.23-7.2 7.2s3.23 7.2 7.2 7.2 7.2-3.23 7.2-7.2-3.23-7.2-7.2-7.2zm0-2.4c2.67 0 3-.01 4.05.06 1.1.05 1.69.24 2.09.4.52.2.88.45 1.27.84.39.39.64.75.84 1.27.16.4.35.99.4 2.09.07 1.05.06 1.38.06 4.05s.01 3-.06 4.05c-.05 1.1-.24 1.69-.4 2.09-.2.52-.45.88-.84 1.27-.39.39-.75.64-1.27.84-.4.16-.99.35-2.09.4-1.05.07-1.38.06-4.05.06s-3 .01-4.05-.06c-1.1-.05-1.69-.24-2.09-.4-.52-.2-.88-.45-1.27-.84-.39-.39-.64-.75-.84-1.27-.16-.4-.35-.99-.4-2.09-.07-1.05-.06-1.38-.06-4.05s-.01-3 .06-4.05c.05-1.1.24-1.69.4-2.09.2-.52.45-.88.84-1.27.39-.39.75-.64 1.27-.84.4-.16.99-.35 2.09-.4C8.99 2.41 9.33 2.4 12 2.4zm0 2.64c-2.62 0-2.93.01-3.95.07-1.01.05-1.56.22-1.93.37-.49.19-.84.41-1.21.78-.37.37-.59.72-.78 1.21-.15.37-.32.92-.37 1.93-.06 1.02-.07 1.33-.07 3.95s.01 2.93.07 3.95c.05 1.01.22 1.56.37 1.93.19.49.41.84.78 1.21.37.37.72.59 1.21.78.37.15.92.32 1.93.37 1.02.06 1.33.07 3.95.07s2.93-.01 3.95-.07c1.01-.05 1.56-.22 1.93-.37.49-.19.84-.41 1.21-.78.37-.37.59-.72.78-1.21.15-.37.32-.92.37-1.93.06-1.02.07-1.33.07-3.95s-.01-2.93-.07-3.95c-.05-1.01-.22-1.56-.37-1.93-.19-.49-.41-.84-.78-1.21-.37-.37-.72-.59-1.21-.78-.37-.15-.92-.32-1.93-.37-1.02-.06-1.33-.07-3.95-.07z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M21.6 7.2a2.7 2.7 0 00-1.9-1.9C17.6 5 12 5 12 5s-5.6 0-7.7.3a2.7 2.7 0 00-1.9 1.9C2 9.4 2 12 2 12s0 2.6.4 4.8a2.7 2.7 0 001.9 1.9c2.1.3 7.7.3 7.7.3s5.6 0 7.7-.3a2.7 2.7 0 001.9-1.9c.4-2.2.4-4.8.4-4.8s0-2.6-.4-4.8zM10 15.5V8.5l6 3.5-6 3.5z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {group}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={`${group}-${link.label}`}>
                    <NavLink
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-[#8FD18F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FD18F]"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
        <div className="text-sm text-white/45">
  <p>
    © {new Date().getFullYear()} Inova Nexel. Todos os direitos reservados.
  </p>

  <p className="mt-1">
    INOVA NEXEL LTDA. • CNPJ: 67.504.348/0001-97
  </p>
</div>
          <div className="flex gap-6 text-sm text-white/45">
            <a
              href="#"
              className="hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8FD18F]"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8FD18F]"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
