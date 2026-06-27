import { ScrollReveal } from "@/components/ScrollReveal";

const values = [
  "Inovação",
  "Ética e Transparência",
  "Excelência",
  "Sustentabilidade",
  "Colaboração",
  "Compromisso com Resultados",
  "Responsabilidade Social",
];

function MissionIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[#3B82F6]">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3v1M12 20v1M3 12h1M20 12h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function VisionIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8FD18F]/15 text-[#10B981]">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

export function MvvSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <ScrollReveal className="px-0 py-8 lg:px-8 lg:py-0 lg:first:pl-0">
            <article className="rounded-[16px] bg-white p-8 lg:p-0">
              <MissionIcon />
              <h2 className="mt-5 text-xl font-bold text-[#03152F]">Nossa Missão</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#03152F]/65 sm:text-[15px]">
                Promover inovação e transformação digital por meio de soluções
                inteligentes que aumentem a eficiência, fortaleçam a transparência
                e contribuam para o desenvolvimento sustentável de organizações e
                comunidades.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="px-0 py-8 lg:px-8 lg:py-0">
            <article className="rounded-[16px] bg-white p-8 lg:p-0">
              <VisionIcon />
              <h2 className="mt-5 text-xl font-bold text-[#03152F]">Nossa Visão</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#03152F]/65 sm:text-[15px]">
                Ser referência nacional em inovação, GovTech e transformação
                digital, reconhecida pela excelência na entrega de projetos que
                geram impacto positivo e resultados duradouros.
              </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.16} className="px-0 py-8 lg:px-8 lg:py-0 lg:last:pr-0">
            <article className="rounded-[16px] bg-white p-8 lg:p-0">
              <h2 className="text-xl font-bold text-[#03152F]">Nossos Valores</h2>
              <ul className="mt-5 space-y-2.5">
                {values.map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-2.5 text-sm text-[#03152F]/70 sm:text-[15px]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8FD18F]" />
                    {value}
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
