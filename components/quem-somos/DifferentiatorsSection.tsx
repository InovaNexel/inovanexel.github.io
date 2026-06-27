import { ScrollReveal } from "@/components/ScrollReveal";

const items = [
  {
    title: "Especialistas em inovação e transformação digital.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9.5" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Metodologias modernas orientadas a resultados.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Tecnologia aplicada para resolver problemas reais.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Compromisso com impacto positivo e desenvolvimento sustentável.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="bg-gradient-to-br from-[#03152F] via-[#08244A] to-[#0B2E5A] py-16 sm:py-20">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-center text-2xl font-bold text-white sm:text-left sm:text-3xl">
            Por que escolher a Inova Nexel?
          </h2>
        </ScrollReveal>

        <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <li className="text-center sm:text-left">
                <div className="mb-5 inline-flex text-[#8FD18F] sm:block">{item.icon}</div>
                <p className="text-sm font-semibold leading-relaxed text-white sm:text-[15px]">
                  {item.title}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
