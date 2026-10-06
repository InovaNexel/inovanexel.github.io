import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { NavLink } from "@/components/NavLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Arrow, buttonClass, SectionHeader } from "@/components/ui";
import { contactHref } from "@/lib/navigation";
import { sistemas } from "@/lib/sistemas";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistemas | Inova Nexel",
  description:
    "Soluções completas de sistemas próprios para governos e prefeituras: SIGEL, SIGAL, SIGEFROT e SIGEP.",
};

export default function SistemasPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <PageHero
          crumbs={[{ label: "Início", href: "/" }, { label: "Sistemas" }]}
          eyebrow="Nossos sistemas próprios"
          title="Sistemas para a gestão pública."
          description="Soluções completas de sistemas próprios, para governos e prefeituras, modernizando a gestão pública com tecnologia de ponta."
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <NavLink href={contactHref} className={buttonClass("primary")}>
              Solicitar apresentação
              <Arrow />
            </NavLink>
            <Link href="/sigel" className={buttonClass("ghost-dark")}>
              Conhecer o SIGEL
            </Link>
          </div>
        </PageHero>

        <section aria-labelledby="lista-sistemas" className="bg-paper py-24 sm:py-32">
          <div className="container-site">
            <SectionHeader
              id="lista-sistemas"
              eyebrow="Portfólio"
              title="Conheça nossos sistemas."
              description="Plataformas desenvolvidas pela Inova Nexel para os desafios reais da administração pública."
            />

            <ol className="mt-14 grid gap-5 md:grid-cols-2">
              {sistemas.map((s, i) => (
                <Reveal as="li" key={s.sigla} delay={i * 70}>
                  <article className="flex h-full flex-col rounded-[28px] border border-line bg-white p-8 sm:p-10">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-paper text-ink ring-1 ring-line [--icon-accent:var(--color-mint-ink)]">
                        <Icon name={s.icon} size={28} />
                      </span>
                      <span className="font-mono text-xs tracking-[0.14em] text-ink/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-ink">
                        {s.sigla}
                      </h3>
                      {s.loginHref && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/20 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-mint-ink">
                          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-mint-ink" />
                          Disponível
                        </span>
                      )}
                      {!s.loginHref && (
                        <span className="rounded-full bg-ink/[0.05] px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink/60">
                          Sob consulta
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[15px] font-medium text-ink/60">{s.nome}</p>
                    <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/70">{s.descricao}</p>

                    <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                      {s.href ? (
                        <Link href={s.href} className={buttonClass("dark", "sm")}>
                          Página do {s.sigla}
                          <Arrow />
                        </Link>
                      ) : (
                        <NavLink href={contactHref} className={buttonClass("ghost", "sm")}>
                          Solicitar apresentação
                          <span className="sr-only"> do {s.sigla}</span>
                          <Arrow />
                        </NavLink>
                      )}
                      {s.loginHref && (
                        <a
                          href={s.loginHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClass("ghost", "sm")}
                        >
                          <Icon name="lock" size={14} />
                          Acesso de usuário
                          <span className="sr-only">(abre em nova aba)</span>
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
