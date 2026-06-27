"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const contactCards = [
  {
    title: "Instagram",
    description:
      "Acompanhe novidades, conteúdos e projetos da Inova Nexel.",
    info: "@inovanexel",
    buttonLabel: "Ver Instagram",
    href: "https://instagram.com/inovanexel",
    external: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "E-mail",
    description:
      "Envie sua dúvida, proposta ou solicitação diretamente para nossa equipe.",
    info: "inovanexel@gmail.com",
    buttonLabel: "Enviar E-mail",
    href: "mailto: inovanexel@gmail.com",
    external: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    description: "Converse rapidamente com nossa equipe de atendimento.",
    info: "(69) 99204-7492",
    buttonLabel: "Conversar Agora",
    href: "https://wa.me/69992047492",
    external: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.3A10 10 0 1012 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 9.5c.4 1.2 1.5 2.8 3.2 3.5 1.2.5 2.1.3 2.8-.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <section
      id="contato"
      className="scroll-mt-[90px] bg-[#F8FAFC] py-20 sm:py-24"
      aria-labelledby="contato-titulo"
    >
      <div className="container-site">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2
            id="contato-titulo"
            className="text-3xl font-bold tracking-tight text-[#03152F] sm:text-4xl"
          >
            Fale Conosco
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#03152F]/65 sm:text-lg">
            Estamos prontos para ajudar sua organização a transformar desafios em
            oportunidades por meio da inovação, tecnologia e soluções estratégicas.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#03152F]/55 sm:text-base">
            Entre em contato com nossa equipe para conhecer nossos serviços, esclarecer
            dúvidas, solicitar propostas ou conversar sobre possíveis parcerias.
          </p>
        </ScrollReveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.08}>
              <li className="h-full">
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col rounded-[16px] border border-[#E5E7EB] bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="mb-5 text-[#8FD18F]">{card.icon}</div>
                  <h3 className="text-lg font-bold text-[#03152F]">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#03152F]/60">
                    {card.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#03152F]">{card.info}</p>
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex items-center justify-center rounded-[10px] bg-[#8FD18F] px-5 py-2.5 text-sm font-semibold text-[#03152F] transition-colors hover:bg-[#7bc47d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FD18F]"
                    aria-label={`${card.buttonLabel} — ${card.title}`}
                  >
                    {card.buttonLabel}
                  </a>
                </motion.article>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
