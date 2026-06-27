import { ScrollReveal } from "./ScrollReveal";

const partners = [
  "SEBRAE",
  "BID",
  "Finep",
  "ABEP",
  "Google for Startups",
  "AWS",
];

export function Partners() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-site">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#03152F] sm:text-4xl">
            Nossos Parceiros
          </h2>
        </ScrollReveal>

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
      </div>
    </section>
  );
}
