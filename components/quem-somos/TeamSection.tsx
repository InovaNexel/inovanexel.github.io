import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

const team = [
  {
    name: "Leonardo Nunes",
    role: "CEO e Fundador",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Juliana Ferreira",
    role: "Diretora de Inovação",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rafael Almeida",
    role: "Especialista em Transformação Digital",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Camila Rocha",
    role: "Gestora de Projetos Estratégicos",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8 18H5v-9h3v9zM6.5 7.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM19 18h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V18h-3v-9h3v1.2c.6-.9 1.6-1.5 2.7-1.5 2 0 3.3 1.6 3.3 4.1V18z" />
    </svg>
  );
}

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
          <a
            href="#"
            className="shrink-0 text-sm font-semibold text-[#03152F] transition-colors hover:text-[#08244A]"
          >
            Ver todo o time →
          </a>
        </ScrollReveal>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.06}>
              <li>
                <article className="group overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#E5E7EB]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative p-5">
                    <h3 className="font-bold text-[#03152F]">{member.name}</h3>
                    <p className="mt-1 text-sm text-[#03152F]/55">{member.role}</p>
                    <a
                      href="#"
                      aria-label={`LinkedIn de ${member.name}`}
                      className="absolute bottom-5 right-5 text-[#3B82F6] transition-colors hover:text-[#2563EB]"
                    >
                      <LinkedInIcon />
                    </a>
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
