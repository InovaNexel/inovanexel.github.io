import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui";

// Cada diferencial vem com uma prova tirada do próprio site (equipe, sistemas, SIGEL).
const items: { title: string; detail: string; icon: IconName }[] = [
  {
    title: "Especialistas em inovação e transformação digital.",
    detail: "Sócios-fundadores à frente de inovação, operações, finanças e tecnologia.",
    icon: "users",
  },
  {
    title: "Metodologias modernas orientadas a resultados.",
    detail: "Diagnóstico, planejamento e capacitação no mesmo time que desenvolve.",
    icon: "gear",
  },
  {
    title: "Tecnologia aplicada para resolver problemas reais.",
    detail: "Quatro sistemas próprios para leilão, almoxarifado, frotas e patrimônio.",
    icon: "target",
  },
  {
    title: "Compromisso com impacto positivo e desenvolvimento sustentável.",
    detail: "Implantação assistida e suporte da Inova Nexel depois da entrega.",
    icon: "leaf",
  },
];

export function DifferentiatorsSection() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div className="container-site">
        <SectionHeader
          id="diferenciais-titulo"
          tone="dark"
          eyebrow="Diferenciais"
          title="Por que escolher a Inova Nexel?"
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60} className="bg-ink p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-white ring-1 ring-white/10 [--icon-accent:var(--color-mint)]">
                <Icon name={item.icon} />
              </span>
              <p className="mt-8 font-display text-lg font-semibold leading-snug tracking-tight">
                {item.title}
              </p>
              <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-mist/65">
                {item.detail}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
