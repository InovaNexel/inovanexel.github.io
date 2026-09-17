import { ScrollReveal } from "./ScrollReveal";

/**
 * Lista intencionalmente vazia: os parceiros apoiadores só entram aqui depois
 * que a parceria estiver formalizada por ofício. Basta repovoar o array para
 * a grade voltar a aparecer no lugar do aviso de "em breve".
 */
const partners: string[] = [];

export function Partners() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-site">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#03152F] sm:text-4xl">
            Nossos Parceiros
          </h2>
        </ScrollReveal>

        {partners.length > 0 ? (
          <ScrollReveal delay={0.1}>
            <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 lg:gap-x-16">
              {partners.map((name) => (
                <li key={name}>
                  <span className="block text-lg font-bold tracking-tight text-[#03152F]/40 opacity-70 transition-opacity duration-300 hover:opacity-100 sm:text-xl">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ) : (
          <ScrollReveal className="mt-10 text-center" delay={0.1}>
            <p className="inline-block rounded-full bg-[#F8FAFC] px-5 py-2 text-sm font-medium text-[#03152F]/60 ring-1 ring-[#E5E7EB]">
              Em breve, nossos parceiros apoiadores
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
