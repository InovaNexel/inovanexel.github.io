import { contactHref } from "@/lib/navigation";
import { sigelEtapas, sistemas } from "@/lib/sistemas";
import Link from "next/link";
import { Icon } from "./Icon";
import { LogoMark } from "./Logo";
import { NavLink } from "./NavLink";
import { Reveal } from "./Reveal";
import { Arrow, buttonClass, SectionHeader } from "./ui";

export function SystemsShowcase() {
  const [destaque, ...outros] = sistemas;
  if (!destaque) return null;

  return (
    <section aria-labelledby="sistemas-titulo" className="bg-paper py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          id="sistemas-titulo"
          eyebrow="01 · Sistemas próprios"
          title="Sistemas feitos para a rotina da prefeitura."
          description="Plataformas desenvolvidas pela Inova Nexel para os desafios reais da administração pública — do almoxarifado ao leilão de bens."
          action={
            <Link href="/sistemas" className={buttonClass("ghost")}>
              Ver todos os sistemas
              <Arrow />
            </Link>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Destaque: o sistema já disponível online */}
          <Reveal className="lg:col-span-7 lg:row-span-3">
            <article className="relative isolate flex h-full flex-col overflow-hidden rounded-[28px] bg-ink p-8 text-white sm:p-10">
              <div aria-hidden className="absolute inset-0 -z-10">
                <div className="bg-grid absolute inset-0 opacity-70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_0%,rgba(59,130,246,0.25),transparent_70%)]" />
              </div>
              <LogoMark
                tone="dark"
                className="pointer-events-none absolute -bottom-10 -right-8 -z-10 w-64 opacity-[0.07] sm:w-80"
              />

              <div className="flex items-center justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-white ring-1 ring-white/10 [--icon-accent:var(--color-mint)]">
                  <Icon name={destaque.icon} size={28} />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-mint/15 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-mint">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-mint" />
                  Disponível
                </span>
              </div>

              <h3 className="mt-10 font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
                {destaque.sigla}
              </h3>
              <p className="mt-2 text-base font-medium text-mist/80">{destaque.nome}</p>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mist/70">
                {destaque.descricao}
              </p>

              <ul className="mt-8 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 border-t border-white/10 pt-8 sm:grid-cols-2">
                {sigelEtapas.map((etapa) => (
                  <li key={etapa} className="flex items-center gap-3 text-[15px] text-mist/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    {etapa}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
                <Link href={destaque.href ?? "/sistemas"} className={buttonClass("primary")}>
                  Conhecer o {destaque.sigla}
                  <Arrow />
                </Link>
                {destaque.loginHref && (
                  <a
                    href={destaque.loginHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass("ghost-dark")}
                  >
                    <Icon name="lock" size={16} />
                    Acesso de usuário
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                )}
              </div>
            </article>
          </Reveal>

          {outros.map((s, i) => (
            <Reveal key={s.sigla} delay={(i + 1) * 70} className="lg:col-span-5">
              <article className="group card-lift flex h-full items-start gap-5 rounded-[24px] border border-line bg-white p-6 sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-paper text-ink ring-1 ring-line [--icon-accent:var(--color-mint-ink)]">
                  <Icon name={s.icon} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink">{s.sigla}</h3>
                    <span className="rounded-full bg-ink/[0.05] px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-ink/60">
                      Sob consulta
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-ink/60">{s.nome}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.descricao}</p>
                  <NavLink
                    href={contactHref}
                    className="mt-4 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    Solicitar apresentação
                    <span className="sr-only"> do {s.sigla}</span>
                    <Arrow />
                  </NavLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
