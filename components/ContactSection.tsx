import { site } from "@/lib/site";
import { Icon, type IconName } from "./Icon";
import { LogoMark } from "./Logo";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

type Channel = {
  icon: IconName;
  title: string;
  description: string;
  info: string;
  href: string;
  external: boolean;
  primary?: boolean;
};

const channels: Channel[] = [
  {
    icon: "whatsapp",
    title: "WhatsApp",
    description: "Converse rapidamente com nossa equipe de atendimento.",
    info: site.whatsappLabel,
    href: site.whatsappHref,
    external: true,
    primary: true,
  },
  {
    icon: "mail",
    title: "E-mail",
    description: "Envie sua dúvida, proposta ou solicitação diretamente para nossa equipe.",
    info: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: "instagram",
    title: "Instagram",
    description: "Acompanhe novidades, conteúdos e projetos da Inova Nexel.",
    info: site.instagramLabel,
    href: site.instagramHref,
    external: true,
  },
];

/** `flush`: sem respiro no topo, quando a seção anterior já termina em `bg-paper`. */
export function ContactSection({ flush = false }: { flush?: boolean }) {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className={`bg-paper pb-24 sm:pb-32 ${flush ? "pt-0" : "pt-24 sm:pt-32"}`}
    >
      <div className="container-site">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[32px] bg-ink px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="bg-grid absolute inset-0" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_100%,rgba(143,209,143,0.14),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_0%,rgba(59,130,246,0.22),transparent_70%)]" />
            </div>
            <LogoMark
              tone="dark"
              className="pointer-events-none absolute -right-16 -top-10 -z-10 hidden w-[420px] opacity-[0.05] lg:block"
            />

            <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
              <div>
                <Eyebrow tone="dark">Fale conosco</Eyebrow>
                <h2
                  id="contato-titulo"
                  className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance"
                >
                  Vamos levar inovação para a sua gestão?
                </h2>
                <p className="mt-6 max-w-md text-[17px] leading-relaxed text-mist/75">
                  Estamos prontos para ajudar sua organização a transformar desafios em
                  oportunidades. Fale com a nossa equipe para conhecer os serviços,
                  solicitar propostas ou conversar sobre parcerias.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {channels.map((c) => (
                  <li key={c.title}>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className={`btn group flex items-center gap-5 rounded-[20px] border p-5 sm:p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${
                        c.primary
                          ? "border-mint bg-mint text-ink hover:bg-mint-hover"
                          : "border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.07]"
                      }`}
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                          c.primary
                            ? "bg-ink text-white [--icon-accent:var(--color-mint)]"
                            : "bg-white/[0.06] text-white ring-1 ring-white/10 [--icon-accent:var(--color-mint)]"
                        }`}
                      >
                        <Icon name={c.icon} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-lg font-bold tracking-tight">{c.title}</span>
                        <span className={`mt-0.5 block truncate text-[15px] font-medium ${c.primary ? "text-ink/80" : "text-mist/80"}`}>
                          {c.info}
                        </span>
                        <span className={`mt-1 hidden text-sm sm:block ${c.primary ? "text-ink/65" : "text-mist/55"}`}>
                          {c.description}
                        </span>
                      </span>
                      <Icon name="arrowUpRight" size={20} className="arrow shrink-0" />
                      {c.external && <span className="sr-only">(abre em nova aba)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
