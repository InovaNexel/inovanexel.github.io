"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    title: "Cidade Inteligente",
    description:
      "Plataforma integrada de gestão urbana com sensores IoT e painéis em tempo real para tomada de decisão.",
    tag: "GovTech",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portal da Transparência",
    description:
      "Dashboard público de indicadores financeiros e sociais com dados abertos e acessibilidade total.",
    tag: "Transparência",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Saúde Digital Municipal",
    description:
      "Agendamento unificado, prontuário eletrônico e telemedicina para redes públicas de atenção básica.",
    tag: "Inovação",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hub de Inovação Aberta",
    description:
      "Ambiente colaborativo para startups, universidades e governo cocriarem soluções para desafios locais.",
    tag: "Inovação",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

function usePerView() {
  const [perView, setPerView] = useState(3);

  const update = useCallback(() => {
    if (window.innerWidth < 768) setPerView(1);
    else if (window.innerWidth < 1024) setPerView(2);
    else setPerView(3);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return perView;
}

export function Projects() {
  const [index, setIndex] = useState(0);
  const perView = usePerView();
  const maxIndex = projects.length - 1;

  const prev = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i === maxIndex ? 0 : i + 1));

  const visible = Array.from({ length: perView }, (_, i) => projects[(index + i) % projects.length]!);

  return (
    <section id="projetos" className="bg-[#F8FAFC] py-20 sm:py-24">
      <div className="container-site">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#03152F] sm:text-4xl">
            Projetos em destaque
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#03152F]/65 sm:text-lg">
            Conheça iniciativas que estão transformando a administração pública em
            todo o Brasil.
          </p>
        </ScrollReveal>

        <div className="relative mt-14">
          <button
            type="button"
            onClick={prev}
            className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-xl text-[#03152F]/50 shadow-sm transition-colors hover:border-[#03152F]/20 hover:text-[#03152F] sm:flex lg:-left-5"
            aria-label="Projeto anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-xl text-[#03152F]/50 shadow-sm transition-colors hover:border-[#03152F]/20 hover:text-[#03152F] sm:flex lg:-right-5"
            aria-label="Próximo projeto"
          >
            ›
          </button>

          <div className="overflow-hidden px-1">
            <AnimatePresence mode="wait">
              <motion.ul
                key={`${index}-${perView}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className={`grid gap-6 ${
                  perView === 1
                    ? "grid-cols-1"
                    : perView === 2
                      ? "grid-cols-2"
                      : "grid-cols-3"
                }`}
              >
                {visible.map((project) => (
                  <li key={`${project.title}-${index}`}>
                    <article className="group overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#03152F]">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#03152F]/60">
                          {project.description}
                        </p>
                        <span className="mt-4 inline-block rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#03152F]/70 ring-1 ring-[#E5E7EB]">
                          {project.tag}
                        </span>
                      </div>
                    </article>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-[#8FD18F]" : "w-2 bg-[#03152F]/20"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-4 sm:hidden">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-[#E5E7EB] bg-white px-5 py-2 text-sm font-medium text-[#03152F]"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-[#E5E7EB] bg-white px-5 py-2 text-sm font-medium text-[#03152F]"
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
