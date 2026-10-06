import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon, type IconName } from "@/components/Icon";
import { NavLink } from "@/components/NavLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Arrow, buttonClass, SectionHeader } from "@/components/ui";
import { contactHref } from "@/lib/navigation";
import { site } from "@/lib/site";
import { sigelEtapas as etapas } from "@/lib/sistemas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGEL | Inova Nexel",
  description:
    "Sistema de gestão de leilão para cadastro, avaliação, reavaliação, depreciação automática, loteamento e prestação de contas completo.",
};


const features: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Gestão Centralizada",
    description:
      "Reúne informações, processos e indicadores em um único ambiente, com visão integrada para a tomada de decisão.",
    icon: "monitor",
  },
  {
    title: "Painéis em Tempo Real",
    description:
      "Dashboards e relatórios dinâmicos que transformam dados em informação clara para gestores e equipes.",
    icon: "chart",
  },
  {
    title: "Segurança e Conformidade",
    description:
      "Controle de acesso, trilhas de auditoria e aderência às boas práticas de proteção de dados do setor público.",
    icon: "shield",
  },
  {
    title: "Integração Simples",
    description:
      "Conecta-se a sistemas e bases já existentes, evitando retrabalho e acelerando a adoção pela equipe.",
    icon: "consult",
  },
  {
    title: "Pronto para Uso",
    description:
      "Solução consolidada e disponível para implantação, com implantação assistida e suporte da Inova Nexel.",
    icon: "check",
  },
  {
    title: "Solução Completa",
    description:
      "Solução completa de desfazimento através de leilão, doação ou descarte, com todo processo e procedimento integrados e com tecnologia.",
    icon: "package",
  },
];

export default function SigelPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <PageHero
          crumbs={[
            { label: "Início", href: "/" },
            { label: "Sistemas", href: "/sistemas" },
            { label: "SIGEL" },
          ]}
          eyebrow="Disponível · Sistema Integrado de Gestão de Leilão"
          title="SIGEL"
          description="Sistema de gestão de leilão para cadastro, avaliação, reavaliação, depreciação automática, loteamento e prestação de contas completo."
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={site.sigelLoginHref}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("primary")}
            >
              <Icon name="lock" size={16} />
              Acesso de usuário
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <NavLink href={contactHref} className={buttonClass("ghost-dark")}>
              Solicitar demonstração
            </NavLink>
          </div>
        </PageHero>

        <section aria-labelledby="ciclo-titulo" className="bg-white py-24 sm:py-32">
          <div className="container-site">
            <SectionHeader
              id="ciclo-titulo"
              eyebrow="Como funciona"
              title="Todo o ciclo do bem, em um só lugar."
              description="Do cadastro à prestação de contas, cada etapa do leilão acontece no SIGEL — sem planilhas paralelas."
            />

            <ol className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
              {/* Linha que liga as etapas, como as barras do logo */}
              <span aria-hidden className="absolute left-[11px] top-3 hidden h-[2px] w-[calc(100%-22px)] bg-line lg:block" />
              {etapas.map((etapa, i) => (
                <Reveal as="li" key={etapa} delay={i * 60} className="relative flex gap-4 lg:flex-col lg:gap-5">
                  <span
                    aria-hidden
                    className={`relative z-10 mt-0.5 h-6 w-6 shrink-0 rounded-full border-[5px] border-white ring-2 lg:mt-0 ${
                      i === etapas.length - 1 ? "bg-mint ring-mint" : "bg-ink ring-ink/15"
                    }`}
                  />
                  <div>
                    <p className="font-mono text-xs tracking-[0.14em] text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold leading-snug tracking-tight text-ink">
                      {etapa}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="recursos-titulo" className="bg-paper py-24 sm:py-32">
          <div className="container-site">
            <SectionHeader
              id="recursos-titulo"
              eyebrow="O que o SIGEL entrega"
              title="Uma plataforma completa e madura."
              description="Pensada para os desafios reais da administração pública."
            />

            <ul className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal as="li" key={f.title} delay={i * 50} className="bg-white p-8 sm:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper text-ink ring-1 ring-line [--icon-accent:var(--color-mint-ink)]">
                    <Icon name={f.icon} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{f.description}</p>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-[24px] border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="font-display text-xl font-bold tracking-tight text-ink">
                Sua prefeitura já usa o SIGEL?
              </p>
              <a
                href={site.sigelLoginHref}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("dark")}
              >
                Entrar no sistema
                <Arrow />
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </Reveal>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
