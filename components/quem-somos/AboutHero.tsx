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

      <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#06264F] via-[#08305F] to-[#0B2E5A] lg:min-h-[450px]">
        {/* Halo de luz atrás da marca */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(143,209,143,0.20),transparent_60%)]"
          aria-hidden
        />
        {/* Malha sutil, ecoando a rede de conexões da home */}
        <div
          className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:56px_56px]"
          aria-hidden
        />
        {/* Emenda suave com o bloco de texto à esquerda */}
        <div
          className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#03152F] to-transparent"
          aria-hidden
        />

        <motion.div
          className="relative z-10 flex flex-col items-center px-8 py-16 text-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <Image
            src="/logo da inova.png"
            alt="Logo da Inova Nexel"
            width={180}
            height={180}
            priority
            className="h-auto w-[120px] drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:w-[150px] lg:w-[170px]"
          />
          <p className="mt-7 text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-none tracking-tight text-white">
            INOVA <span className="text-[#8FD18F]">NEXEL</span>
          </p>
          <span className="mt-4 h-px w-16 bg-[#8FD18F]/60" aria-hidden />
          <p className="mt-4 max-w-[22rem] text-sm font-medium uppercase tracking-[0.18em] text-white/70">
            Inovação e tecnologia para a gestão pública
          </p>
        </motion.div>
      </div>
    </section>
  );
}
