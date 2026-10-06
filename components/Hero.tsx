import { contactHref } from "@/lib/navigation";
import { sistemas } from "@/lib/sistemas";
import Link from "next/link";
import type { CSSProperties } from "react";
import { LogoFormation } from "./hero/LogoFormation";
import { NavLink } from "./NavLink";
import { Arrow, buttonClass, Eyebrow } from "./ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-titulo"
      className="relative isolate h-[100svh] max-h-[940px] min-h-[660px] w-full overflow-hidden bg-ink text-white"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-2 to-ink-3" />
        <div className="bg-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_45%_at_77%_52%,rgba(59,130,246,0.22),transparent_70%)]" />
        {/* Disco de luz atrás do logo animado (lg+): dá contraste às barras navy do símbolo. */}
        <div className="absolute left-[83%] top-[54%] hidden aspect-square w-[clamp(340px,34vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,229,244,0.30),rgba(147,197,253,0.12)_55%,transparent)] lg:block xl:left-[77%]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_10%_100%,rgba(143,209,143,0.10),transparent_70%)]" />
      </div>

      <LogoFormation />

      <div className="container-site relative flex h-full flex-col justify-center pb-10 pt-[var(--header-h)]">
        <div className="max-w-[640px] lg:max-w-[min(640px,52%)]">
          <Eyebrow tone="dark" className="rise">
            GovTech<span className="-ml-[0.6rem] hidden sm:inline">&nbsp;· Inovação para o setor público</span>
            <span className="-ml-[0.6rem] sm:hidden">&nbsp;· Setor público</span>
          </Eyebrow>

          <h1
            id="hero-titulo"
            className="rise mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-balance"
            style={d(80)}
          >
            Inovação que transforma a{" "}
            <span className="text-mint">gestão pública.</span>
          </h1>

          <p
            className="rise mt-6 max-w-[480px] text-[17px] leading-relaxed text-mist/85 sm:text-lg"
            style={d(160)}
          >
            Soluções tecnológicas para governos inteligentes, eficientes e
            conectados com a sociedade.
          </p>

          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={d(240)}>
            <Link href="/sistemas" className={buttonClass("primary")}>
              Conheça nossos sistemas
              <Arrow />
            </Link>
            <NavLink href={contactHref} className={buttonClass("ghost-dark")}>
              Fale com um especialista
            </NavLink>
          </div>

          <div className="rise mt-14 border-t border-white/10 pt-6" style={d(340)}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
              Sistemas próprios
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {sistemas.map((s) => (
                <li key={s.sigla}>
                  <Link
                    href={s.href ?? "/sistemas"}
                    className="btn inline-flex h-9 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 font-mono text-xs font-medium tracking-wide text-white/80 hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
                  >
                    {s.loginHref && (
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-mint" />
                    )}
                    {s.sigla}
                    <span className="sr-only">— {s.nome}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
