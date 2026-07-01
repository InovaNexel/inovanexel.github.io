<!---/*

import { ScrollReveal } from "./ScrollReveal";

##
const stats = [
  { value: "+120", label: "Projetos realizados" },
  { value: "+80", label: "Órgãos atendidos" },
  { value: "+15 mi", label: "Pessoas impactadas" },
  { value: "+30", label: "Prêmios e reconhecimentos" },
];

export function Stats() {
  return (
    <section className="bg-[#03152F] py-12 sm:py-0 sm:min-h-[220px] sm:flex sm:items-center">
      <div className="container-site w-full py-10 sm:py-14">
        <ScrollReveal>
          <h2 className="text-center text-xl font-bold text-white sm:text-2xl">
            Resultados que geram impacto
          </h2>
        </ScrollReveal>
        <ul className="mt-10 grid grid-cols-2 gap-8 sm:mt-12 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
              <li>
                <p className="text-4xl font-bold tracking-tight text-[#8FD18F] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/85 sm:text-[15px]">{stat.label}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
*/