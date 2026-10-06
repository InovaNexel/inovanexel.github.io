import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LogoMark, Wordmark } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { DifferentiatorsSection } from "@/components/quem-somos/DifferentiatorsSection";
import { MvvSection } from "@/components/quem-somos/MvvSection";
import { TeamSection } from "@/components/quem-somos/TeamSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos | Inova Nexel",
  description:
    "Conheça a Inova Nexel, empresa especializada em inovação, transformação digital, tecnologia e soluções estratégicas para gerar impacto positivo na sociedade.",
};

export default function QuemSomosPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <PageHero
          crumbs={[{ label: "Início", href: "/" }, { label: "Quem Somos" }]}
          eyebrow="Quem somos"
          title="Tecnologia, inteligência e gestão a serviço do público."
          description={
            <div className="space-y-4">
              <p>
                A Inova Nexel é uma empresa especializada em inovação, transformação
                digital e soluções estratégicas para organizações públicas e privadas.
              </p>
              <p className="text-mist/65">
                Atuamos no desenvolvimento de projetos inovadores, capacitação
                profissional, pesquisa aplicada e implementação de soluções digitais que
                tornam processos mais eficientes, transparentes e sustentáveis.
              </p>
            </div>
          }
          aside={
            <div className="relative mx-auto flex aspect-square max-w-[380px] flex-col items-center justify-center rounded-[36px] border border-white/10 bg-white/[0.03]">
              <div aria-hidden className="absolute inset-0 rounded-[36px] bg-[radial-gradient(ellipse_at_50%_45%,rgba(143,209,143,0.16),transparent_65%)]" />
              <LogoMark tone="dark" className="relative w-[46%]" />
              <Wordmark tone="dark" size="text-xl" className="relative mt-8" />
              <p className="relative mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                Inovação e tecnologia para a gestão pública
              </p>
            </div>
          }
        />
        <MvvSection />
        <TeamSection />
        <DifferentiatorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
