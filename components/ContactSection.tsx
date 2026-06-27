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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.448a.75.75 0 00.92.92l5.687-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.696 9.696 0 01-4.96-1.363l-.355-.212-3.679.945.973-3.58-.232-.368A9.696 9.696 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
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
