import { noticias } from "@/lib/noticias";
import Image from "next/image";
import Link from "next/link";
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
        </ScrollReveal>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {noticias.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.06}>
              <li className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#03152F]/5">
                    <Image
                      src={item.capa.src}
                      alt={item.capa.alt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-center gap-3">
                      <span className="inline-block rounded-full bg-[#8FD18F]/15 px-3 py-1 text-xs font-semibold text-[#03152F]">
                        {item.categoria}
                      </span>
                      <time
                        dateTime={item.dataISO}
                        className="text-xs font-medium text-[#03152F]/50"
                      >
                        {item.data}
                      </time>
                    </div>

                    <h3 className="mt-5 text-lg font-bold leading-snug text-[#03152F]">
                      <Link
                        href={`/noticias/${item.slug}`}
                        className="after:absolute after:inset-0 focus-visible:outline-none after:rounded-[16px] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[#8FD18F]"
                      >
                        {item.titulo}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#03152F]/60">
                      {item.resumo}
                    </p>

                    <span
                      aria-hidden
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#03152F]"
                    >
                      Ler notícia
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
