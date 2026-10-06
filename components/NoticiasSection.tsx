import { noticias } from "@/lib/noticias";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { Arrow, SectionHeader } from "./ui";

export function NoticiasSection() {
  const [destaque, ...demais] = noticias;

  return (
    <section id="noticias" aria-labelledby="noticias-titulo" className="bg-white py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          id="noticias-titulo"
          eyebrow="04 · Notícias"
          title="Novidades da Inova Nexel."
          description="Acompanhe as novidades, publicações e insights sobre inovação, GovTech e transformação digital."
        />

        {destaque && (
          <Reveal className="mt-14">
            <article className="group relative grid overflow-hidden rounded-[28px] border border-line bg-paper lg:grid-cols-2">
              <div className="relative aspect-[16/11] overflow-hidden bg-ink/5 lg:aspect-auto lg:min-h-[440px]">
                <Image
                  src={destaque.capa.src}
                  alt={destaque.capa.alt}
                  fill
                  className="img-zoom object-cover object-[50%_25%]"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>
              <div className="flex flex-col p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-mint/20 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
                    {destaque.categoria}
                  </span>
                  <time dateTime={destaque.dataISO} className="text-sm text-ink/55">
                    {destaque.data}
                  </time>
                </div>
                <h3 className="mt-6 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink text-balance">
                  <Link
                    href={`/noticias/${destaque.slug}`}
                    className="after:absolute after:inset-0 after:rounded-[28px] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-ink"
                  >
                    {destaque.titulo}
                  </Link>
                </h3>
                <p className="mt-4 text-[17px] leading-relaxed text-ink/65">{destaque.resumo}</p>
                <span aria-hidden className="mt-auto inline-flex items-center gap-2 pt-10 text-[15px] font-semibold text-ink">
                  Ler notícia
                  <Arrow />
                </span>
              </div>
            </article>
          </Reveal>
        )}

        {demais.length > 0 && (
          <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {demais.map((n, i) => (
              <Reveal as="li" key={n.slug} delay={i * 60}>
                <article className="group card-lift relative flex h-full flex-col rounded-[24px] border border-line bg-white p-7">
                  <time dateTime={n.dataISO} className="text-sm text-ink/55">
                    {n.data}
                  </time>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-ink">
                    <Link
                      href={`/noticias/${n.slug}`}
                      className="after:absolute after:inset-0 after:rounded-[24px] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-ink"
                    >
                      {n.titulo}
                    </Link>
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{n.resumo}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
