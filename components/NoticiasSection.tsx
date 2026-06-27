import { ScrollReveal } from "./ScrollReveal";

export function NoticiasSection() {
  return (
    <section
      id="noticias"
      className="scroll-mt-[90px] bg-white py-20 sm:py-24"
      aria-labelledby="noticias-titulo"
    >
      <div className="container-site">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2
            id="noticias-titulo"
            className="text-3xl font-bold tracking-tight text-[#03152F] sm:text-4xl"
          >
            Notícias
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#03152F]/65 sm:text-lg">
            Acompanhe as novidades, publicações e insights da Inova Nexel sobre
            inovação, GovTech e transformação digital.
          </p>
          <p className="mt-8 inline-block rounded-full bg-[#F8FAFC] px-5 py-2 text-sm font-medium text-[#03152F]/60 ring-1 ring-[#E5E7EB]">
            Em breve, novos conteúdos
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
