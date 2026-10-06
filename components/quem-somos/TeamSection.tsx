import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/ui";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Pedro Lima",
    role: "Sócio fundador - Diretor de Inovação. Especialista em inovação",
    image: "/pedro perfil.png",
  },
  {
    name: "Valter Gonçalves",
    role: "Sócio Fundador - Diretor de Operações",
    image: "/valter perfil.png",
  },
  {
    name: "Paulo Emanoel",
    role: "Sócio Fundador Administrador - Diretor Financeiro e Administrativo",
    image: "/paulo perfil.png",
  },
  {
    name: "Daniel Carvalho",
    role: "Sócio Fundador - Diretor de Tecnologia",
    image: "/daniel perfil.png",
  },
  {
    name: "Vitor de Melo",
    role: "Coordenador de desenvolvimento e T.I",
    image: "/vitor perfil.png",
  },
  {
    name: "Arthur Leite",
    role: "Colaborador de T.I. Desenvolvedor web",
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

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-6">
          {team.map((member, i) => (
            <Reveal as="li" key={member.name} delay={i * 50}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-line">
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="img-zoom object-cover object-top"
                    sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 220px"
                  />
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
