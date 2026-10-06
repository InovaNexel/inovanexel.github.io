import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Arrow, buttonClass } from "@/components/ui";
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
      <div className="overflow-hidden rounded-[22px] bg-ink/5">
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
      <figcaption className="mt-3 border-l-2 border-mint pl-3 text-sm leading-relaxed text-ink/60">
        {midia.legenda}
      </figcaption>
    </figure>
  );
}

function InovaChamada({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <aside className="rounded-[24px] border border-mint/50 bg-mint/10 p-6 sm:p-8">
      <p className="eyebrow text-mint-ink">Inova Nexel recomenda</p>
      <p className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-ink">
        {titulo}
      </p>
      <p className="mt-2 text-base leading-relaxed text-ink/75">{texto}</p>
      <Link
        href="/sistemas"
        className="group mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-ink underline decoration-mint decoration-2 underline-offset-4 transition-colors duration-200 hover:text-mint-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        Conheça os sistemas da Inova Nexel
        <Arrow />
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
        <h2 className="pt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.75rem]">
          {bloco.texto}
        </h2>
      );
    case "citacao":
      return (
        <blockquote className="border-l-4 border-mint py-1 pl-6 font-display text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
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
              className="flex flex-col-reverse rounded-[20px] border border-line bg-white p-4 text-center sm:p-6"
            >
              <dt className="mt-1 text-xs leading-snug text-ink/60 sm:text-sm">{item.rotulo}</dt>
              <dd className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
                {item.valor}
              </dd>
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
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <PageHero
          crumbs={[
            { label: "Início", href: "/" },
            { label: "Notícias", href: "/#noticias" },
            { label: noticia.categoria },
          ]}
          eyebrow={noticia.categoria}
          title={noticia.titulo}
          description={
            <>
              <p>{noticia.resumo}</p>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/55">
                <span>
                  Por <span className="font-semibold text-white/85">Redação Inova Nexel</span>
                </span>
                <span aria-hidden>·</span>
                <time dateTime={noticia.dataISO}>{noticia.data}</time>
              </p>
            </>
          }
        />

        <article className="bg-paper pb-24 sm:pb-32">
          <div className="container-site">
            <div className="mx-auto max-w-3xl -translate-y-10 sm:-translate-y-14">
              <Midia midia={noticia.capa} priority />
            </div>

            <div className="mx-auto max-w-[68ch] space-y-7 text-[18px] leading-[1.8] text-ink/80">
              {noticia.corpo.map((bloco, i) => (
                <Bloco key={i} bloco={bloco} />
              ))}
            </div>

            <Reveal className="mx-auto mt-20 max-w-3xl">
              <section
                aria-labelledby="inova-cta"
                className="relative isolate overflow-hidden rounded-[28px] bg-ink p-8 text-white sm:p-12"
              >
                <div aria-hidden className="absolute inset-0 -z-10">
                  <div className="bg-grid absolute inset-0" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(143,209,143,0.18),transparent_55%)]" />
                </div>
                <p className="eyebrow text-mint">Uma notícia trazida por Inova Nexel</p>
                <h2
                  id="inova-cta"
                  className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-balance sm:text-3xl"
                >
                  Quem conta boas histórias também constrói grandes resultados.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-mist/80">
                  A Inova Nexel é especialista em GovTech: criamos sistemas que tornam a
                  gestão pública mais inteligente, transparente e conectada com a
                  sociedade. Se a sua gestão quer ir mais longe, a gente entra no ringue
                  com você.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/sistemas" className={buttonClass("primary")}>
                    Conheça os sistemas
                    <Arrow />
                  </Link>
                  <Link href="/#contato" className={buttonClass("ghost-dark")}>
                    Fale com um especialista
                  </Link>
                </div>
              </section>
            </Reveal>

            {outras.length > 0 && (
              <section aria-labelledby="leia-tambem" className="mx-auto mt-16 max-w-3xl">
                <h2 id="leia-tambem" className="font-display text-xl font-bold text-ink">
                  Leia também
                </h2>
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {outras.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/noticias/${n.slug}`}
                        className="group flex items-center justify-between gap-4 py-5 font-semibold text-ink"
                      >
                        {n.titulo}
                        <Arrow />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mx-auto mt-12 max-w-3xl">
              <Link href="/#noticias" className={buttonClass("ghost", "sm")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
                Voltar para notícias
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
