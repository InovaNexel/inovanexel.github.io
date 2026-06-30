import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description?: string;
};

const team: TeamMember[] = [
  {
    name: "Pedro Lima",
    role: "Sócio fundador - Diretor de Inovação. Especialista em Gestão, inovação e transformação tecnológica; Experiência em inovação no ecossistema local de Rondônia; Advogado atuante em Direito da inovação",
    description: "Especialista em Gestão, inovação e transformação tecnológica; Experiência em inovação no ecossistema local de Rondônia; Advogado atuante em Direito da inovação",
    image:
      "pedro perfil.png",
  },
  {
    name: "Valter Gonçalves",
    role: "Sócio Fundador - Diretor de Operações",
    image:
      "valter perfil.png",
  },
  {
    name: "Paulo Emanoel",
    role: "Sócio Fundador Administrador - Diretor Financeiro e Administrativo",
    image:
      "paulo perfil.png",
  },
  {
    name: "Daniel Carvalho",
    role: "Gestora de Projetos Estratégicos",
    image:
      "daniel perfil.png"
  },
  {
    // Card disponível: adicione o nome, o cargo, a descrição e a foto abaixo.
    name: "Arthur Leite",
    role: "Colaborador de T.I. Desenvolvedor web",
    description: "Colaborador de T.I. Desenvolvedor web",
    image: "arthur perfil.png", 
  },
];

export function TeamSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <div className="container-site">
        <ScrollReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#03152F] sm:text-3xl">
              Conheça nossa equipe
            </h2>
            <p className="mt-2 max-w-lg text-sm text-[#03152F]/60 sm:text-base">
              Profissionais apaixonados por inovação, tecnologia e transformação.
            </p>
          </div>
        </ScrollReveal>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.06}>
              <li>
                <article className="group overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#E5E7EB]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-center text-xs text-[#03152F]/40">
                        Adicione uma foto
                      </div>
                    )}
                  </div>
                  <div className="relative p-5">
                    <h3 className="font-bold text-[#03152F]">{member.name}</h3>
                    <p className="mt-1 text-sm text-[#03152F]/55">{member.role}</p>
                    {member.description && (
                      <p className="mt-2 text-sm text-[#03152F]/60">
                        {member.description}
                      </p>
                    )}
                  </div>
                </article>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
