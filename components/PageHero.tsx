import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { LogoMark } from "./Logo";
import { Eyebrow } from "./ui";

type Crumb = { label: string; href?: string };

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Banner escuro das páginas internas — mesma linguagem do hero da home. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-[calc(var(--header-h)+56px)] text-white sm:pb-24 sm:pt-[calc(var(--header-h)+80px)]">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-2 to-ink-3" />
        <div className="bg-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_60%_at_85%_30%,rgba(59,130,246,0.2),transparent_70%)]" />
      </div>
      {!aside && (
        <LogoMark
          tone="dark"
          className="pointer-events-none absolute -bottom-16 right-[-60px] -z-10 hidden w-[460px] opacity-[0.06] md:block"
        />
      )}

      <div className="container-site grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div className="max-w-3xl">
          <nav aria-label="Trilha de navegação" className="rise">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/55">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-white/30">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="rounded transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white/85">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <Eyebrow tone="dark" className="rise mt-10" >
            {eyebrow}
          </Eyebrow>
          <h1
            className="rise mt-5 font-display text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-balance"
            style={d(80)}
          >
            {title}
          </h1>
          {description && (
            <div className="rise mt-6 max-w-2xl text-[17px] leading-relaxed text-mist/80 sm:text-lg" style={d(160)}>
              {description}
            </div>
          )}
          {children && (
            <div className="rise mt-10" style={d(240)}>
              {children}
            </div>
          )}
        </div>
        {aside && (
          <div className="rise hidden lg:block" style={d(200)}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
