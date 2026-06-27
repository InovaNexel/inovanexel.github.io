"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const introText = `A Inova Nexel é uma empresa especializada em inovação, transformação digital e soluções estratégicas para organizações públicas e privadas.

Nossa missão é conectar tecnologia, inteligência e gestão para gerar resultados concretos, impulsionar a modernização institucional e promover impacto positivo na sociedade.

Atuamos no desenvolvimento de projetos inovadores, capacitação profissional, pesquisa aplicada e implementação de soluções digitais que tornam processos mais eficientes, transparentes e sustentáveis.`;

export function AboutHero() {
  return (
    <section className="grid min-h-[450px] grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-[#03152F] px-6 pb-12 pt-[calc(90px+2.5rem)] sm:px-10 lg:px-12 lg:pb-16 lg:pt-[calc(90px+3rem)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Quem Somos
          </h1>
          <nav aria-label="Breadcrumb" className="mt-4 text-sm text-white/60">
            <Link href="/#home" className="transition-colors hover:text-white">
              Início
            </Link>
            <span className="mx-2 text-white/40">›</span>
            <span className="text-white/90">Quem Somos</span>
          </nav>
          <div className="mt-8 max-w-xl space-y-4 text-sm leading-relaxed text-white/90 sm:text-[15px]">
            {introText.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative min-h-[280px] lg:min-h-[450px]">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
          alt="Escritório corporativo moderno"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#03152F]/30 to-transparent lg:hidden"
          aria-hidden
        />
      </div>
    </section>
  );
}
