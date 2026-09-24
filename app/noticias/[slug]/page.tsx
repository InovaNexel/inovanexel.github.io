import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getNoticia, noticias, type NoticiaBloco, type NoticiaMidia } from "@/lib/noticias";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return noticias.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/noticias/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const noticia = getNoticia(slug);
  if (!noticia) return {};

  return {
    title: `${noticia.titulo} | Inova Nexel`,
    description: noticia.resumo,
    openGraph: {
      title: noticia.titulo,
      description: noticia.resumo,
      type: "article",
      publishedTime: noticia.dataISO,
      images: [noticia.capa.src],
    },
  };
}

function Midia({ midia, priority = false }: { midia: NoticiaMidia; priority?: boolean }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-[16px] bg-[#03152F]/5">
        <Image
          src={midia.src}
          alt={midia.alt}
          width={midia.largura}
          height={midia.altura}
          priority={priority}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <figcaption className="mt-3 border-l-2 border-[#8FD18F] pl-3 text-sm leading-relaxed text-[#03152F]/60">
        {midia.legenda}
      </figcaption>
    </figure>
  );
}

function InovaChamada({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <aside className="rounded-[16px] border border-[#8FD18F]/40 bg-[#8FD18F]/10 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2f7d3a]">
        Inova Nexel recomenda
      </p>
      <p className="mt-3 text-lg font-bold leading-snug text-[#03152F]">{titulo}</p>
      <p className="mt-2 text-base leading-relaxed text-[#03152F]/75">{texto}</p>
      <Link
        href="/"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#03152F] underline decoration-[#8FD18F] decoration-2 underline-offset-4 transition-colors hover:text-[#2f7d3a]"
      >
        Conheça as soluções da Inova Nexel
        <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}

function Bloco({ bloco }: { bloco: NoticiaBloco }) {
  switch (bloco.tipo) {
    case "paragrafo":
      return <p>{bloco.texto}</p>;
    case "subtitulo":
      return (
        <h2 className="pt-4 text-2xl font-bold tracking-tight text-[#03152F]">
          {bloco.texto}
        </h2>
      );
    case "citacao":
      return (
        <blockquote className="border-l-4 border-[#8FD18F] py-1 pl-6 text-xl font-semibold leading-snug text-[#03152F] sm:text-2xl">
          {bloco.texto}
        </blockquote>
      );
    case "midia":
      return <Midia midia={bloco.midia} />;
    case "galeria":
      return (
        <div className="grid gap-6 sm:grid-cols-2">
          {bloco.midias.map((m) => (
            <Midia key={m.src} midia={m} />
          ))}
        </div>
      );
    case "destaques":
      return (
        <dl className="grid grid-cols-3 gap-3 sm:gap-4">
          {bloco.itens.map((item) => (
            <div
              key={item.rotulo}
              className="flex flex-col-reverse rounded-[16px] border border-[#E5E7EB] bg-white p-4 text-center sm:p-6"
            >
              <dt className="mt-1 text-xs leading-snug text-[#03152F]/60 sm:text-sm">
                {item.rotulo}
              </dt>
              <dd className="text-3xl font-bold text-[#03152F] sm:text-4xl">{item.valor}</dd>
            </div>
          ))}
        </dl>
      );
    case "inova":
      return <InovaChamada titulo={bloco.titulo} texto={bloco.texto} />;
  }
}

export default async function NoticiaPage({ params }: PageProps<"/noticias/[slug]">) {
  const { slug } = await params;
  const noticia = getNoticia(slug);
  if (!noticia) notFound();

  const outras = noticias.filter((n) => n.slug !== noticia.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-[#F8FAFC] pb-20 pt-[90px] sm:pb-24">
        <article className="container-site">
          <header className="mx-auto max-w-3xl pt-10 sm:pt-14">
            <nav aria-label="Trilha de navegação" className="text-sm text-[#03152F]/55">
              <Link href="/" className="hover:text-[#03152F]">
                Início
              </Link>
              <span aria-hidden className="mx-2">/</span>
              <Link href="/#noticias" className="hover:text-[#03152F]">
                Notícias
              </Link>
            </nav>

            <div className="mt-6 flex items-center gap-3">
              <span className="inline-block rounded-full bg-[#8FD18F]/15 px-3 py-1 text-xs font-semibold text-[#03152F]">
                {noticia.categoria}
              </span>
              <time dateTime={noticia.dataISO} className="text-xs font-medium text-[#03152F]/50">
                {noticia.data}
              </time>
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#03152F] sm:text-4xl lg:text-5xl">
              {noticia.titulo}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#03152F]/70 sm:text-xl">
              {noticia.resumo}
            </p>
            <p className="mt-6 border-t border-[#E5E7EB] pt-4 text-sm text-[#03152F]/55">
              Por <span className="font-semibold text-[#03152F]">Redação Inova Nexel</span>
            </p>
          </header>

          <div className="mx-auto mt-10 max-w-3xl">
            <Midia midia={noticia.capa} priority />
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-7 text-[17px] leading-[1.8] text-[#03152F]/80">
            {noticia.corpo.map((bloco, i) => (
              <Bloco key={i} bloco={bloco} />
            ))}
          </div>

          <ScrollReveal className="mx-auto mt-16 max-w-3xl">
            <section
              aria-labelledby="inova-cta"
              className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#03152F] via-[#08244A] to-[#0B2E5A] p-8 text-white sm:p-12"
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(143,209,143,0.18),transparent_55%)]"
                aria-hidden
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8FD18F]">
                  Uma notícia trazida por Inova Nexel
                </p>
                <h2 id="inova-cta" className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                  Quem conta boas histórias também constrói grandes resultados.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#D9E5F4]">
                  A Inova Nexel é especialista em GovTech: criamos sistemas que tornam a
                  gestão pública mais inteligente, transparente e conectada com a
                  sociedade. Se a sua gestão quer ir mais longe, a gente entra no ringue
                  com você.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#8FD18F] px-7 py-3.5 text-sm font-semibold text-[#03152F] transition-colors hover:bg-[#7bc47d]"
                  >
                    Conheça a Inova Nexel
                  </Link>
                  <Link
                    href="/#contato"
                    className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Fale com um especialista
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {outras.length > 0 && (
            <section className="mx-auto mt-16 max-w-3xl">
              <h2 className="text-xl font-bold text-[#03152F]">Leia também</h2>
              <ul className="mt-6 space-y-4">
                {outras.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/noticias/${n.slug}`}
                      className="font-semibold text-[#03152F] hover:underline"
                    >
                      {n.titulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mx-auto mt-12 max-w-3xl">
            <Link
              href="/#noticias"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#03152F] hover:text-[#2f7d3a]"
            >
              <span aria-hidden>←</span>
              Voltar para notícias
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
