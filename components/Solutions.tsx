import Link from "next/link";
import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

type Solution = {
  title: string;
  description: string;
  icon: ReactNode;
  /** Quando presente, o card vira link para a página correspondente. */
  href?: string;
};

const solutions: Solution[] = [
  {
    title: "Sistemas",
    description:
      "Soluções completas de sistemas próprios, para governos e prefeituras, modernizando a gestão pública com tecnologia de ponta.",
    href: "/sistemas",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="#8FD18F" strokeWidth="1.5" />
        <path d="M8 9h8M8 13h5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Transformação Digital",
    description:
      "Estratégias e implementação para digitalizar processos, serviços e a relação com o cidadão.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" stroke="#8FD18F" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Planejamento Estratégico",
    description:
      "Diagnósticos, roadmaps e governança para alinhar inovação aos objetivos institucionais.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 18V8l4-2 4 2 4-2 4 2v10" stroke="#8FD18F" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 16V10M12 18V8M16 14v4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Captação de Recursos",
    description:
      "Apoio na identificação e estruturação de editais, parcerias e fontes de financiamento.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="#8FD18F" strokeWidth="1.5" />
        <path d="M12 8v8M9 11h6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Consultoria",
    description:
      "Consultoria estratégica para inovação e gestão pública com metodologia própria.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 18l-4-4 4-4M15 6l4 4-4 4" stroke="#8FD18F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 14h14" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Capacitação & Educação",
    description:
      "Programas de formação para equipes públicas em competências digitais e inovação.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 8l8-4 8 4-8 4-8-4z" stroke="#8FD18F" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 10v6c0 2 2.5 4 6 4s6-2 6-4v-6" stroke="#3B82F6" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="scroll-mt-[90px] bg-[#F8FAFC] py-20 sm:py-24">
      <div className="container-site">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#03152F] sm:text-4xl">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#03152F]/65 sm:text-lg">
            Oferecemos um portfólio completo para impulsionar a transformação digital
            e a inovação no setor público.
          </p>
        </ScrollReveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => {
            const card = (
              <>
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#03152F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#03152F]/60">
                  {item.description}
                </p>
                {item.href && (
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#03152F]">
                    Ver sistemas
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                )}
              </>
            );

            const cardClass =
              "group flex h-full flex-col rounded-[16px] border border-[#E5E7EB] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";

            return (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <li className="h-full">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`${cardClass} hover:border-[#8FD18F]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FD18F]`}
                    >
                      {card}
                    </Link>
                  ) : (
                    <article className={cardClass}>{card}</article>
                  )}
                </li>
              </ScrollReveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}