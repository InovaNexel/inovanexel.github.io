import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  /**
   * Enquadramento por foto, para todas ficarem no mesmo busto sem editar os
   * arquivos: `zoom` amplia a partir de `focus` (ponto do rosto, em %).
   */
  zoom?: number;
  focus?: string;
};

const team: TeamMember[] = [
  {
    name: "Pedro Lima",
    role: "Sócio-fundador – Diretor de Inovação",
    image: "/pedro perfil.png",
    zoom: 1.85,
    focus: "50% 14%",
  },
  {
    name: "Valter Gonçalves",
    role: "Sócio-fundador – Diretor de Operações",
    image: "/valter perfil.png",
  },
  {
    name: "Paulo Emanoel",
    role: "Sócio-fundador e Administrador – Diretor Financeiro e Administrativo",
    image: "/paulo perfil.png",
  },
  {
    name: "Daniel Carvalho",
    role: "Sócio-fundador – Diretor de Tecnologia",
    image: "/daniel perfil.png",
  },
  {
    name: "Vitor de Melo",
    role: "Coordenador de Desenvolvimento e TI",
    image: "/vitor perfil.png",
  },
  {
    name: "Arthur Leite",
    role: "Desenvolvedor Web – TI",
    image: "/arthur perfil.webp",
  },
];

export function TeamSection() {
  return (
    <section aria-labelledby="equipe-titulo" className="bg-paper py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          id="equipe-titulo"
          eyebrow="Equipe"
          title="Conheça nossa equipe."
          description="Profissionais apaixonados por inovação, tecnologia e transformação."
        />

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 lg:grid-cols-3 xl:grid-cols-6">
          {team.map((member, i) => (
            <Reveal as="li" key={member.name} delay={i * 50}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-ink">
                  <div
                    className="absolute inset-0"
                    style={
                      member.zoom
                        ? { transform: `scale(${member.zoom})`, transformOrigin: member.focus }
                        : undefined
                    }
                  >
                    <Image
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      fill
                      className="img-zoom object-cover object-[50%_20%] contrast-[1.04] grayscale-[15%]"
                      sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 220px"
                    />
                  </div>
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/35 to-transparent" />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-bold tracking-tight text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm leading-snug text-ink/60">{member.role}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
