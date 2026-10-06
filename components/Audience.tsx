import { site } from "@/lib/site";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { NavLink } from "./NavLink";
import { Reveal } from "./Reveal";
import { Arrow, SectionHeader } from "./ui";

type Path = {
  icon: IconName;
  label: string;
  title: string;
  text: string;
  links: { label: string; href: string; external?: boolean }[];
};

const paths: Path[] = [
  {
    icon: "building",
    label: "Para gestores e secretários",
    title: "Modernize a rotina da sua secretaria.",
    text: "Conheça os sistemas, peça uma apresentação para a sua equipe ou acesse o SIGEL se a sua prefeitura já utiliza.",
    links: [
      { label: "Ver sistemas", href: "/sistemas" },
      { label: "Conversar no WhatsApp", href: site.whatsappHref, external: true },
      { label: "Acessar o SIGEL", href: site.sigelLoginHref, external: true },
    ],
  },
  {
    icon: "digital",
    label: "Para quem acompanha tecnologia",
    title: "Conheça quem faz a Inova Nexel.",
    text: "Nossa missão, a equipe por trás dos sistemas e as notícias sobre inovação, GovTech e transformação digital.",
    links: [
      { label: "Quem somos", href: "/quem-somos" },
      { label: "Notícias", href: "/#noticias" },
      { label: "Instagram", href: site.instagramHref, external: true },
    ],
  },
];

function PathLink({ label, href, external }: Path["links"][number]): ReactNode {
  const cls =
    "group flex items-center justify-between gap-4 py-4 text-[15px] font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
        <span className="sr-only">(abre em nova aba)</span>
        <Icon name="arrowUpRight" size={16} className="arrow text-mint" />
      </a>
    );
  }
  if (href.includes("#")) {
    return (
      <NavLink href={href} className={cls}>
        {label}
        <Arrow className="text-mint" />
      </NavLink>
    );
  }
  return (
    <Link href={href} className={cls}>
      {label}
      <Arrow className="text-mint" />
    </Link>
  );
}

export function Audience() {
  return (
    <section aria-labelledby="publico-titulo" className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div className="container-site">
        <SectionHeader
          id="publico-titulo"
          tone="dark"
          eyebrow="03 · Por onde começar"
          title="Um caminho claro para cada visita."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <article className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white ring-1 ring-white/10 [--icon-accent:var(--color-mint)]">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-mint">{p.label}</p>
                </div>
                <h3 className="mt-8 font-display text-3xl font-bold tracking-[-0.02em] text-balance">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md flex-1 text-[15px] leading-relaxed text-mist/70">{p.text}</p>
                <ul className="mt-10 divide-y divide-white/10 border-t border-white/10">
                  {p.links.map((l) => (
                    <li key={l.label}>
                      <PathLink {...l} />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
