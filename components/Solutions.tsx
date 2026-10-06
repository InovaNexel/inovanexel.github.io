import Link from "next/link";
import { Icon, type IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { Arrow, SectionHeader } from "./ui";

type Solution = {
  title: string;
  description: string;
  icon: IconName;
  /** Quando presente, a linha vira link para a página correspondente. */
  href?: string;
};

const solutions: Solution[] = [
  {
    title: "Sistemas",
    description:
      "Soluções completas de sistemas próprios, para governos e prefeituras, modernizando a gestão pública com tecnologia de ponta.",
    icon: "monitor",
    href: "/sistemas",
  },
  {
    title: "Transformação Digital",
    description:
      "Estratégias e implementação para digitalizar processos, serviços e a relação com o cidadão.",
    icon: "digital",
  },
  {
    title: "Planejamento Estratégico",
    description:
      "Diagnósticos, roadmaps e governança para alinhar inovação aos objetivos institucionais.",
    icon: "chart",
  },
  {
    title: "Captação de Recursos",
    description:
      "Apoio na identificação e estruturação de editais, parcerias e fontes de financiamento.",
    icon: "funding",
  },
  {
    title: "Consultoria",
    description:
      "Consultoria estratégica para inovação e gestão pública com metodologia própria.",
    icon: "consult",
  },
  {
    title: "Capacitação & Educação",
    description:
      "Programas de formação para equipes públicas em competências digitais e inovação.",
    icon: "education",
  },
];

function Row({ item, index }: { item: Solution; index: number }) {
  const body = (
    <>
      <span className="font-mono text-xs font-medium tracking-[0.14em] text-ink/40 sm:pt-1.5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-ink ring-1 ring-line [--icon-accent:var(--color-mint-ink)]">
        <Icon name={item.icon} size={22} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-3 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
          {item.title}
          {item.href && <Arrow className="text-mint-ink" />}
        </span>
        <span className="mt-2 block max-w-xl text-[15px] leading-relaxed text-ink/65">
          {item.description}
        </span>
      </span>
    </>
  );

  const rowClass =
    "flex flex-col gap-4 py-7 sm:flex-row sm:items-start sm:gap-6";

  return item.href ? (
    <Link
      href={item.href}
      className={`group ${rowClass} -mx-4 rounded-2xl px-4 transition-colors duration-200 hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink`}
    >
      {body}
    </Link>
  ) : (
    <div className={rowClass}>{body}</div>
  );
}

export function Solutions() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-titulo" className="bg-white py-24 sm:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)] lg:self-start">
          <SectionHeader
            id="solucoes-titulo"
            eyebrow="02 · Soluções"
            title="Do diagnóstico à operação, ao lado da sua gestão."
            description="Oferecemos um portfólio completo para impulsionar a transformação digital e a inovação no setor público."
          />
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {solutions.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 50}>
              <Row item={item} index={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
