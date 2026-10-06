import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui";

const values = [
  "Inovação",
  "Ética e Transparência",
  "Excelência",
  "Sustentabilidade",
  "Colaboração",
  "Compromisso com Resultados",
  "Responsabilidade Social",
];

const pillars = [
  {
    icon: "mission" as const,
    title: "Nossa Missão",
    text: "Promover inovação e transformação digital por meio de soluções inteligentes que aumentem a eficiência, fortaleçam a transparência e contribuam para o desenvolvimento sustentável de organizações e comunidades.",
  },
  {
    icon: "eye" as const,
    title: "Nossa Visão",
    text: "Ser referência nacional em inovação, GovTech e transformação digital, reconhecida pela excelência na entrega de projetos que geram impacto positivo e resultados duradouros.",
  },
];

export function MvvSection() {
  return (
    <section aria-labelledby="proposito-titulo" className="bg-white py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          id="proposito-titulo"
          eyebrow="Propósito"
          title="Conectar tecnologia, inteligência e gestão."
          description="Nossa missão é gerar resultados concretos, impulsionar a modernização institucional e promover impacto positivo na sociedade."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="flex h-full flex-col rounded-[28px] border border-line bg-paper p-8 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-ink ring-1 ring-line [--icon-accent:var(--color-mint-ink)]">
                  <Icon name={p.icon} />
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{p.text}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={140}>
            <article className="h-full rounded-[28px] bg-ink p-8 text-white sm:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight">Nossos Valores</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {values.map((value) => (
                  <li
                    key={value}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-white/85"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
