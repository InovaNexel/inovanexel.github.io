import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGEL | Inova Nexel",
  description:
    "Sistema de gestão de leilão para cadastro, avaliação, reavaliação, depreciação automática, loteamento e prestação de contas completo.",
};

const features = [
  {
    title: "Gestão Centralizada",
    description:
      "Reúne informações, processos e indicadores em um único ambiente, com visão integrada para a tomada de decisão.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#8FD18F" strokeWidth="1.5" />
        <path d="M8 9h8M8 13h5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Painéis em Tempo Real",
    description:
      "Dashboards e relatórios dinâmicos que transformam dados em informação clara para gestores e equipes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 18V8l4-2 4 2 4-2 4 2v10" stroke="#8FD18F" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 16V10M12 18V8M16 14v4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Segurança e Conformidade",
    description:
      "Controle de acesso, trilhas de auditoria e aderência às boas práticas de proteção de dados do setor público.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3l7 3v6c0 4-3 6.5-7 9-4-2.5-7-5-7-9V6l7-3z" stroke="#8FD18F" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Integração Simples",
    description:
      "Conecta-se a sistemas e bases já existentes, evitando retrabalho e acelerando a adoção pela equipe.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 18l-4-4 4-4M15 6l4 4-4 4" stroke="#8FD18F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 14h14" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Pronto para Uso",
    description:
      "Solução consolidada e disponível para implantação, com implantação assistida e suporte da Inova Nexel.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="#8FD18F" strokeWidth="1.5" />
        <path d="M8.5 12l2.5 2.5L15.5 9.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Solução Completa",
    description:
      "Solução completa de desfazimento através de leilão, doação ou descarte, com todo processo e procedimento integrados e com tecnologia.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 7h16v13H4z" stroke="#8FD18F" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 7l2-3h12l2 3" stroke="#8FD18F" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SigelPage() {
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
                Nosso produto pronto para uso
              </span>
              <h1 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-white">
                SIGEL
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#D9E5F4] sm:text-lg">
                Sistema de gestão de leilão para cadastro, avaliação, reavaliação,
                depreciação automática, loteamento e prestação de contas completo.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://sigel.inovanexel.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[10px] bg-[#8FD18F] px-7 py-3.5 text-sm font-semibold text-[#03152F] transition-colors hover:bg-[#7bc47d]"
                >
                  Acesso de usuário
                </a>
                <Link
                  href="/sistemas"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Sistemas
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* O que é */}
        <section className="py-20 sm:py-24">
          <div className="container-site">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#03152F] sm:text-4xl">
                O que o SIGEL entrega
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#03152F]/65 sm:text-lg">
                Uma plataforma completa e madura, pensada para os desafios reais da
                administração pública.
              </p>
            </ScrollReveal>

            <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.06}>
                  <li>
                    <article className="group h-full rounded-[16px] border border-[#E5E7EB] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="mb-5">{item.icon}</div>
                      <h3 className="text-lg font-bold text-[#03152F]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#03152F]/60">
                        {item.description}
                      </p>
                    </article>
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
