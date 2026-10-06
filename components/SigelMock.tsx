/*
 * Ilustração da interface do SIGEL em HTML/CSS (não é captura de tela).
 * Mostra o fluxo de lotes com os status do ciclo, nas cores da marca.
 * Pode ser trocada por um print real em /public quando houver um liberado.
 */

const lotes = [
  { lote: "001", bem: "Veículo de passeio", etapa: "Avaliado", tone: "sky" },
  { lote: "002", bem: "Mobiliário de escritório", etapa: "Em loteamento", tone: "amber" },
  { lote: "003", bem: "Equipamentos de informática", etapa: "Em leilão", tone: "mint" },
  { lote: "004", bem: "Máquina pesada", etapa: "Reavaliação", tone: "sky" },
  { lote: "005", bem: "Sucata metálica", etapa: "Prestação de contas", tone: "ink" },
] as const;

const toneClass = {
  sky: "bg-sky/12 text-[#1d4ed8]",
  amber: "bg-[#f59e0b]/14 text-[#92400e]",
  mint: "bg-mint/25 text-mint-ink",
  ink: "bg-ink/[0.07] text-ink/70",
} as const;

export function SigelMock({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <div
        aria-hidden
        className="overflow-hidden rounded-2xl bg-white text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
      >
        {/* Barra do navegador */}
        <div className="flex h-8 items-center gap-1.5 border-b border-line bg-paper px-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="ml-3 flex h-5 flex-1 items-center rounded-md bg-white px-2 font-mono text-[10px] text-ink/45 ring-1 ring-line">
            sigel.inovanexel.com
          </span>
        </div>

        <div className="flex">
          {/* Barra lateral */}
          <div className="hidden w-[72px] shrink-0 flex-col items-center gap-3 bg-ink py-4 sm:flex">
            <span className="h-7 w-7 rounded-lg bg-mint/90" />
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`h-1.5 w-7 rounded-full ${i === 1 ? "bg-white/70" : "bg-white/20"}`} />
            ))}
          </div>

          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45">Leilão</p>
                <p className="font-display text-[15px] font-bold tracking-tight">Lotes do processo</p>
              </div>
              <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-white">+ Novo bem</span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ["Cadastrados", "bg-sky"],
                ["Em leilão", "bg-mint"],
                ["Contas prestadas", "bg-ink"],
              ].map(([label, bar]) => (
                <div key={label} className="rounded-lg border border-line p-2.5">
                  <p className="truncate text-[9px] text-ink/50">{label}</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/[0.06]">
                    <div className={`h-full w-2/3 rounded-full ${bar}`} />
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-4 divide-y divide-line rounded-lg border border-line">
              {lotes.map((l) => (
                <li key={l.lote} className="flex items-center gap-3 px-3 py-2.5">
                  <span className="font-mono text-[10px] text-ink/40">{l.lote}</span>
                  <span className="min-w-0 flex-1 truncate text-[11px] font-medium">{l.bem}</span>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold ${toneClass[l.tone]}`}>
                    {l.etapa}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
        Ilustração da interface
      </figcaption>
    </figure>
  );
}
