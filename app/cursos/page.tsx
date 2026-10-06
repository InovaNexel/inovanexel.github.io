import { ContactSection } from "@/components/ContactSection";
import { CourseCatalog } from "@/components/cursos/CourseCatalog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Arrow, buttonClass, SectionHeader } from "@/components/ui";
import { duracoes, metodologia, totalCursos, trilhas, whatsappCurso, type Duracao } from "@/lib/cursos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos e Capacitação | Inova Nexel",
  description:
    "Portfólio de cursos da Inova Nexel: trilhas em gestão pública, compras públicas para inovação, GovTech, finanças, Lei de Inovação de Rondônia e capacitação empresarial.",
};

export default function CursosPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <PageHero
          crumbs={[{ label: "Início", href: "/" }, { label: "Cursos" }]}
          eyebrow="Capacitação & Educação"
          title="Cursos que viram prática na gestão."
          description="Trilhas de conhecimento para servidores, gestores, agentes políticos e empresas — com professores que vivem a realidade de cada tema, estudos de caso e certificado por carga horária."
          aside={
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-white/10 ring-1 ring-white/10">
              {[
                [String(totalCursos), "cursos"],
                [String(trilhas.length), "trilhas"],
                ["4–80h", "de carga horária"],
                ["100%", "com certificado"],
              ].map(([v, l]) => (
                <div key={l} className="bg-ink-2/80 p-7">
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-4xl font-extrabold tracking-[-0.03em] text-white">{v}</dd>
                  <dd className="mt-1 text-sm text-mist/70">{l}</dd>
                </div>
              ))}
            </dl>
          }
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#catalogo" className={buttonClass("primary")}>
              Ver todos os cursos
              <Arrow className="rotate-90" />
            </a>
            <a href={whatsappCurso()} target="_blank" rel="noopener noreferrer" className={buttonClass("ghost-dark")}>
              <Icon name="whatsapp" size={18} />
              Ajuda para escolher
            </a>
          </div>
        </PageHero>

        <section aria-labelledby="formatos-titulo" className="bg-white py-16 sm:py-20">
          <div className="container-site">
            <h2 id="formatos-titulo" className="sr-only">
              Formatos dos cursos
            </h2>
            <ol className="grid gap-4 md:grid-cols-3">
              {(Object.keys(duracoes) as Duracao[]).map((d, i) => (
                <Reveal as="li" key={d} delay={i * 60} className="border-t-2 border-ink pt-5 first:border-mint">
                  <p className="font-mono text-xs tracking-[0.14em] text-ink/40">{duracoes[d].horas.toUpperCase()}</p>
                  <p className="mt-1 font-display text-xl font-bold tracking-tight text-ink">{duracoes[d].label}</p>
                  <p className="mt-1 text-[15px] text-ink/60">{duracoes[d].resumo}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section id="catalogo" aria-labelledby="catalogo-titulo" className="bg-paper pb-24 pt-20 sm:pt-24">
          <div className="container-site">
            <SectionHeader
              id="catalogo-titulo"
              eyebrow="Portfólio de cursos"
              title="Encontre o curso certo para você ou sua equipe."
              description="Filtre por público e duração, ou busque um tema. Toque em um curso para ver os detalhes e se inscrever na hora pelo WhatsApp."
            />
            <div className="mt-10">
              <CourseCatalog />
            </div>
          </div>
        </section>

        <section aria-labelledby="metodo-titulo" className="bg-paper pb-16">
          <div className="container-site">
            <Reveal className="grid gap-10 rounded-[28px] bg-ink p-8 text-white sm:p-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
              <div>
                <p className="eyebrow text-mint">Metodologia</p>
                <h2
                  id="metodo-titulo"
                  className="mt-4 font-display text-[clamp(1.6rem,3vw,2.25rem)] font-bold leading-tight tracking-[-0.02em] text-balance"
                >
                  Teoria com respaldo jurídico, prática de quem já fez.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-mist/75">
                  Cada palestrante tem experiência na sua área de atuação. Levamos turmas abertas ou formações in
                  company para prefeituras, câmaras e empresas.
                </p>
                <a
                  href={whatsappCurso()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonClass("primary")} mt-8`}
                >
                  Montar turma para minha instituição
                  <Arrow />
                </a>
              </div>
              <ul className="grid content-start gap-3 sm:grid-cols-2">
                {metodologia.map((m) => (
                  <li key={m} className="flex items-start gap-3 rounded-2xl bg-white/[0.05] p-4 text-[15px] text-mist/85 ring-1 ring-white/10">
                    <span className="mt-0.5 text-mint">
                      <Icon name="check" size={18} strokeWidth={2} />
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <ContactSection flush />
      </main>
      <Footer />
    </>
  );
}
