import { footerEmpresaLinks, footerSolucoesLinks } from "@/lib/navigation";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

const groups = {
  Soluções: footerSolucoesLinks,
  Empresa: footerEmpresaLinks,
};

const linkClass =
  "rounded text-[15px] text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-40" />
      <div className="container-site pb-10 pt-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/60">
              Inovação que transforma o futuro público com soluções inteligentes para
              governos mais eficientes e conectados.
            </p>
          </div>

          {Object.entries(groups).map(([group, links]) => (
            <nav key={group} aria-label={group}>
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-mint">{group}</h2>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={`${group}-${link.label}`}>
                    <NavLink href={link.href} className={linkClass}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-mint">Contato</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {site.whatsappLabel}
                  <span className="sr-only"> (WhatsApp, abre em nova aba)</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <Icon name="instagram" size={16} />
                  {site.instagramLabel}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Wordmark na largura exata do container: o SVG estica o texto via textLength. */}
        <svg
          aria-hidden
          focusable="false"
          viewBox="0 0 1000 150"
          className="mt-20 hidden w-full select-none sm:block"
        >
          <text
            x="0"
            y="128"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="fill-white/[0.05] font-display font-extrabold"
            style={{ fontSize: 172, letterSpacing: "-0.04em" }}
          >
            INOVA NEXEL
          </text>
        </svg>

        <div className="mt-14 flex flex-col gap-2 border-t sm:mt-6 border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Inova Nexel. Todos os direitos reservados.</p>
          <p>
            {site.legalName} · CNPJ {site.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
