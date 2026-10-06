import { Reveal } from "./Reveal";

/**
 * Lista intencionalmente vazia: os parceiros apoiadores só entram aqui depois
 * que a parceria estiver formalizada por ofício. Enquanto vazia, a seção não é
 * renderizada; basta repovoar o array para a faixa de nomes aparecer.
 */
const partners: string[] = [];

export function Partners() {
  if (partners.length === 0) return null;

  return (
    <section aria-labelledby="parceiros-titulo" className="border-y border-line bg-paper py-12">
      <Reveal className="container-site flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="parceiros-titulo" className="eyebrow text-ink/55">
          Parceiros apoiadores
        </h2>
        <ul className="flex flex-wrap items-center gap-x-12 gap-y-4">
          {partners.map((name) => (
            <li key={name} className="font-display text-lg font-bold tracking-tight text-ink/45">
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
