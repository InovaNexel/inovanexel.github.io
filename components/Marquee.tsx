const items = [
  "Gestão de leilão",
  "Almoxarifado",
  "Gestão de frotas",
  "Patrimônio público",
  "Transformação digital",
  "Planejamento estratégico",
  "Captação de recursos",
  "Capacitação de equipes",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-10 pr-10 font-display text-xl font-bold tracking-[-0.01em] text-ink sm:text-2xl"
        >
          {item}
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-mint ring-4 ring-mint/20" />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section aria-label="Áreas de atuação" className="border-b border-line bg-white py-7 sm:py-8">
      <div className="marquee overflow-hidden">
        <div className="marquee__track">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
