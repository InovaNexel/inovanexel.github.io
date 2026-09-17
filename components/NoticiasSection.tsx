import { ScrollReveal } from "./ScrollReveal";

type Noticia = {
  categoria: string;
  titulo: string;
  resumo: string;
  corpo: string[];
  data: string;
  dataISO: string;
};

const noticias: Noticia[] = [
  {
    categoria: "Esporte",
    titulo: 'Conheça o lutador premiado conhecido do Norte, Charles "One Punch"',
    resumo:
      "Natural de Porto Velho, o peso meio-médio construiu na base do nocaute um dos cartéis mais respeitados do MMA rondoniense.",
    corpo: [
      'Charles "One Punch" Oliveira é de Porto Velho, Rondônia, e carrega um apelido que explica sozinho o seu estilo de luta. Dos seus 12 triunfos como profissional, 9 vieram por nocaute ou nocaute técnico — três em cada quatro vitórias terminam antes dos cartões de pontuação entrarem em cena.',
      "Competindo no peso meio-médio pela equipe Round by Round, ele soma 12 vitórias na carreira, sendo as outras 3 por finalização. É um cartel construído longe dos grandes centros, em eventos que projetaram o nome do atleta para além da região Norte.",
      'Entre os resultados de destaque estão a finalização sobre Marco Antônio, por guilhotina, no SFT 48, e o nocaute técnico logo no primeiro minuto do primeiro round contra Almir Lima, no BRTL 8. Mais recentemente, venceu Isaac Toledo Dull por nocaute técnico no segundo round do CFC 28 — mais um capítulo da trajetória que fez de "One Punch" um nome conhecido do MMA no Norte do país.',
    ],
    data: "8 de abril de 2026",
    dataISO: "2026-04-08",
  },
];

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
            <ScrollReveal key={item.titulo} delay={i * 0.06}>
              <li className="h-full">
                <article className="group flex h-full flex-col rounded-[16px] border border-[#E5E7EB] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
                    {item.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#03152F]/60">
                    {item.resumo}
                  </p>

                  <details className="group/details mt-5">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-[#03152F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FD18F] [&::-webkit-details-marker]:hidden">
                      <span className="group-open/details:hidden">Ler notícia</span>
                      <span className="hidden group-open/details:inline">Fechar</span>
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-open/details:rotate-180"
                      >
                        ↓
                      </span>
                    </summary>
                    <div className="mt-4 space-y-3 border-t border-[#E5E7EB] pt-4 text-sm leading-relaxed text-[#03152F]/70">
                      {item.corpo.map((paragrafo) => (
                        <p key={paragrafo.slice(0, 32)}>{paragrafo}</p>
                      ))}
                    </div>
                  </details>
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
