import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistemas | Inova Nexel",
  description:
    "Soluções completas de sistemas próprios para governos e prefeituras: SIGEL, SIGAL, SIGEFROT e SIGEP.",
};

type Sistema = {
  sigla: string;
  nome: string;
  descricao: string;
  icon: ReactNode;
  /** Quando presente, o card leva para a página dedicada do sistema. */
  href?: string;
};

const sistemas: Sistema[] = [
  {
    sigla: "SIGEL",
    nome: "Sistema Integrado de Gestão de Leilão",
    descricao:
      "Sistema de gestão de leilão para cadastro, avaliação, reavaliação, depreciação automática, loteamento e prestação de contas completo.",
    href: "/sigel",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 21h8" stroke="#8FD18F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 21v-7" stroke="#8FD18F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.5 3.5l6 6M15.5 6.5l-9 9-3-3 9-9z" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    sigla: "SIGAL",
    nome: "Sistema Integrado de Gestão de Almoxarifado",
    descricao:
      "Sistema de organização e gestão de almoxarifado com aplicação completa para prefeituras e governos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 8l9-4 9 4v10l-9 4-9-4V8z" stroke="#8FD18F" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 8l9 4 9-4M12 12v10" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    sigla: "SIGEFROT",
    nome: "Sistema Integrado de Gestão de Frotas",
    descricao:
      "Sistema de gestão de frotas de veículos oficiais, controle de abastecimento, viagens, manutenção e motoristas.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 13l2-5h9l3 5h4v4H3v-4z" stroke="#8FD18F" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="7.5" cy="17.5" r="1.8" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="17" cy="17.5" r="1.8" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    sigla: "SIGEP",
    nome: "Sistema Integrado de Gestão de Patrimônio",
    descricao:
      "Gestão completa de patrimônio público, desde a entrada até o desfazimento e depreciação do bem.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 10h16M5 10V7l7-4 7 4v3" stroke="#8FD18F" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10v7M12 10v7M17 10v7M4 20h16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const cardClass =
  "group flex h-full flex-col rounded-[16px] border border-[#E5E7EB] bg-white p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";

export default function SistemasPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8FAFC]">
        {/* Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#03152F] via-[#08244A] to-[#0B2E5A] pt-[150px] pb-24 sm:pt-[170px] sm:pb-28">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(59,130,246,0.18),transparent_55%)]"
            aria-hidden
          />
          <div className="container-site relative z-10">
            <ScrollReveal className="max-w-3xl">
              <span className="inline-block rounded-full bg-[#8FD18F]/15 px-4 py-1.5 text-sm font-semibold text-[#8FD18F]">
                Nossos sistemas próprios
              </span>
              <h1 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-white">
                Sistemas
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#D9E5F4] sm:text-lg">
                Soluções completas de sistemas próprios, para governos e
                prefeituras, modernizando a gestão pública com tecnologia de ponta.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Sistemas */}
        <section id="sistemas" className="scroll-mt-[90px] py-20 sm:py-24">
          <div className="container-site">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#03152F] sm:text-4xl">
                Conheça nossos sistemas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#03152F]/65 sm:text-lg">
                Plataformas desenvolvidas pela Inova Nexel para os desafios reais
                da administração pública.
              </p>
            </ScrollReveal>

            <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
              {sistemas.map((item, i) => (
                <ScrollReveal key={item.sigla} delay={i * 0.06}>
                  <li className="h-full">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`${cardClass} hover:border-[#8FD18F]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FD18F]`}
                      >
                        <div className="mb-5">{item.icon}</div>
                        <h3 className="text-lg font-bold text-[#03152F]">
                          {item.sigla}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#03152F]/70">
                          {item.nome}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[#03152F]/60">
                          {item.descricao}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#03152F]">
                          Acessar página do {item.sigla}
                          <span
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </span>
                      </Link>
                    ) : (
                      <article className={cardClass}>
                        <div className="mb-5">{item.icon}</div>
                        <h3 className="text-lg font-bold text-[#03152F]">
                          {item.sigla}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#03152F]/70">
                          {item.nome}
                        </p>

                        <details className="group/details mt-5">
                          <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-[#03152F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FD18F] [&::-webkit-details-marker]:hidden">
                            <span className="group-open/details:hidden">
                              Ver descritivo
                            </span>
                            <span className="hidden group-open/details:inline">
                              Fechar
                            </span>
                            <span
                              aria-hidden
                              className="transition-transform duration-300 group-open/details:rotate-180"
                            >
                              ↓
                            </span>
                          </summary>
                          <p className="mt-4 border-t border-[#E5E7EB] pt-4 text-sm leading-relaxed text-[#03152F]/70">
                            {item.descricao}
                          </p>
                        </details>
                      </article>
                    )}
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
