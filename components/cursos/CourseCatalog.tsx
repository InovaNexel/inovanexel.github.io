"use client";

import { Icon } from "@/components/Icon";
import { Arrow, buttonClass } from "@/components/ui";
import {
  duracoes,
  segmentos,
  trilhas,
  type Curso,
  type Duracao,
  type Segmento,
  type Trilha,
  whatsappCurso,
} from "@/lib/cursos";
import { useDeferredValue, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type Selecionado = { curso: Curso; trilha: Trilha };

const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();


const chip =
  "btn inline-flex h-9 shrink-0 items-center gap-2 rounded-full px-3.5 text-[13px] font-semibold ring-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
const chipOn = "bg-ink text-white ring-ink";
const chipOff = "bg-white text-ink/70 ring-line hover:text-ink hover:ring-ink/30";

function DuracaoTag({ d }: { d: Duracao }) {
  const tone =
    d === "longo"
      ? "bg-ink text-white"
      : d === "medio"
        ? "bg-mist text-ink"
        : "bg-mint/25 text-mint-ink";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] ${tone}`}
    >
      {duracoes[d].horas}
    </span>
  );
}

export function CourseCatalog() {
  const [segmento, setSegmento] = useState<Segmento | "todos">("todos");
  const [duracao, setDuracao] = useState<Duracao | "todas">("todas");
  const [busca, setBusca] = useState("");
  const termo = useDeferredValue(norm(busca.trim()));
  const [sel, setSel] = useState<Selecionado | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const grupos = useMemo(
    () =>
      trilhas
        .filter((t) => segmento === "todos" || t.segmento === segmento)
        .map((t) => ({
          trilha: t,
          cursos: t.cursos.filter(
            (c) =>
              (duracao === "todas" || c.duracao === duracao) &&
              (!termo ||
                norm(`${c.titulo} ${t.titulo} ${c.publico ?? ""} ${c.contexto ?? ""}`).includes(termo)),
          ),
        }))
        .filter((g) => g.cursos.length > 0),
    [segmento, duracao, termo],
  );

  const total = grupos.reduce((n, g) => n + g.cursos.length, 0);

  useEffect(() => {
    if (sel && !dialogRef.current?.open) {
      dialogRef.current?.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, [sel]);

  const abrir = (curso: Curso, trilha: Trilha) => setSel({ curso, trilha });
  const fechar = () => dialogRef.current?.close();
  const limpar = () => {
    setSegmento("todos");
    setDuracao("todas");
    setBusca("");
  };

  return (
    <>
      {/* Filtros: grudam no topo para a pessoa refinar sem voltar a rolar. */}
      <div className="sticky top-[var(--header-h)] z-20 -mx-5 border-b border-line bg-paper/90 px-5 py-4 backdrop-blur-md md:-mx-8 md:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block lg:w-[340px]">
            <span className="sr-only">Buscar curso</span>
            <svg
              aria-hidden
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por tema, lei, público…"
              className="h-11 w-full rounded-full bg-white pl-11 pr-4 text-base text-ink ring-1 ring-line transition-shadow duration-200 placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-ink sm:text-[15px]"
            />
          </label>

          <div className="snap-row -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
            <div role="group" aria-label="Público" className="flex gap-2">
              {(["todos", "publico", "empresarial"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={segmento === s}
                  onClick={() => setSegmento(s)}
                  className={`${chip} ${segmento === s ? chipOn : chipOff}`}
                >
                  {s === "todos" ? "Todos" : segmentos[s]}
                </button>
              ))}
            </div>
            <span aria-hidden className="mx-1 w-px shrink-0 self-stretch bg-line" />
            <div role="group" aria-label="Duração" className="flex gap-2">
              {(["todas", "curto", "medio", "longo"] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  aria-pressed={duracao === d}
                  onClick={() => setDuracao(d)}
                  className={`${chip} ${duracao === d ? chipOn : chipOff}`}
                >
                  {d === "todas" ? "Qualquer duração" : duracoes[d].label.replace(" duração", "")}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p aria-live="polite" className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/45">
          {total} {total === 1 ? "curso encontrado" : "cursos encontrados"} · {grupos.length}{" "}
          {grupos.length === 1 ? "trilha" : "trilhas"}
        </p>
      </div>

      {grupos.length === 0 ? (
        <div className="mt-14 rounded-[28px] border border-dashed border-ink/15 bg-white px-6 py-16 text-center">
          <p className="font-display text-xl font-bold text-ink">Nenhum curso com esses filtros.</p>
          <p className="mx-auto mt-2 max-w-md text-[15px] text-ink/60">
            Montamos turmas sob medida — conte o que sua equipe precisa.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={limpar} className={buttonClass("ghost", "sm")}>
              Limpar filtros
            </button>
            <a href={whatsappCurso()} target="_blank" rel="noopener noreferrer" className={buttonClass("dark", "sm")}>
              Pedir curso sob medida
              <Arrow />
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-12 space-y-16">
          {grupos.map(({ trilha, cursos }) => (
            <section key={trilha.id} aria-labelledby={`t-${trilha.id}`}>
              <header className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-ink ring-1 ring-line [--icon-accent:var(--color-mint-ink)]">
                  <Icon name={trilha.icon} size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
                    Trilha · {segmentos[trilha.segmento]}
                  </p>
                  <h3
                    id={`t-${trilha.id}`}
                    className="font-display text-xl font-bold tracking-tight text-ink text-balance sm:text-2xl"
                  >
                    {trilha.titulo}
                    {trilha.destaque && (
                      <span className="ml-3 inline-flex translate-y-[-3px] items-center rounded-full bg-mint px-2.5 py-0.5 align-middle font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink">
                        {trilha.destaque}
                      </span>
                    )}
                  </h3>
                </div>
              </header>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {cursos.map((curso) => (
                  <li key={curso.id}>
                    <button
                      type="button"
                      onClick={() => abrir(curso, trilha)}
                      aria-haspopup="dialog"
                      className="course-card group flex h-full w-full flex-col rounded-2xl border border-line bg-white p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <DuracaoTag d={curso.duracao} />
                      <span className="mt-4 font-display text-[17px] font-bold leading-snug tracking-tight text-ink text-pretty">
                        {curso.titulo}
                      </span>
                      {curso.publico && (
                        <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/55">
                          Para {curso.publico.charAt(0).toLowerCase() + curso.publico.slice(1)}
                        </span>
                      )}
                      <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-mint-ink">
                        Ver detalhes e inscrever-se
                        <Arrow />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="curso-titulo"
        onClick={(e) => e.target === e.currentTarget && fechar()}
        // `sel` continua preenchido para o conteúdo não sumir durante a saída.
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        className="sheet bg-white p-0 text-ink"
      >
        {sel && (
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 pb-5 pt-6 sm:px-8">
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
                  {sel.trilha.titulo}
                </p>
                <h2 id="curso-titulo" className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-[-0.02em] text-balance">
                  {sel.curso.titulo}
                </h2>
              </div>
              <button
                type="button"
                onClick={fechar}
                aria-label="Fechar"
                className="btn -mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink/60 hover:bg-ink/[0.05] hover:text-ink focus-visible:outline-2 focus-visible:outline-ink"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
              <dl className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-paper p-4 ring-1 ring-line">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/45">Carga horária</dt>
                  <dd className="mt-1 font-display text-lg font-bold">{duracoes[sel.curso.duracao].horas}</dd>
                </div>
                <div className="rounded-2xl bg-paper p-4 ring-1 ring-line">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/45">Formato</dt>
                  <dd className="mt-1 font-display text-lg font-bold">{duracoes[sel.curso.duracao].label}</dd>
                </div>
              </dl>

              {sel.curso.contexto ? (
                <div className="mt-8 space-y-7">
                  <Bloco titulo="Sobre o curso">{sel.curso.contexto}</Bloco>
                  {sel.curso.importancia && <Bloco titulo="Por que fazer">{sel.curso.importancia}</Bloco>}
                  {sel.curso.publico && <Bloco titulo="Para quem é">{sel.curso.publico}</Bloco>}
                </div>
              ) : (
                <div className="mt-8">
                  <Bloco titulo="Sobre o curso">
                    {duracoes[sel.curso.duracao].resumo}, parte da trilha de {sel.trilha.titulo.toLowerCase()} da
                    capacitação empresarial Inova Nexel. Fale com a equipe para receber a ementa completa.
                  </Bloco>
                </div>
              )}

              {sel.trilha.responsaveis && (
                <p className="mt-7 text-sm text-ink/55">
                  <span className="font-semibold text-ink/75">Equipe da trilha:</span> {sel.trilha.responsaveis}
                </p>
              )}

              <ul className="mt-8 space-y-2.5 border-t border-line pt-6">
                {["Certificado por carga horária", "Aulas práticas com estudos de caso reais", "Turmas abertas ou in company para sua instituição"].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-ink/70">
                    <span className="mt-0.5 text-mint-ink">
                      <Icon name="check" size={18} strokeWidth={2} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line bg-white px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 sm:px-8">
              <a
                href={whatsappCurso(sel.curso, sel.trilha)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonClass("primary")} w-full`}
              >
                <Icon name="whatsapp" size={18} />
                Quero me inscrever
                <span className="sr-only">(abre o WhatsApp em nova aba)</span>
              </a>
              <p className="mt-2.5 text-center text-xs text-ink/45">
                Você fala direto com a equipe — a mensagem já vai com o nome do curso.
              </p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

function Bloco({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="eyebrow text-mint-ink">{titulo}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-ink/75 text-pretty">{children}</p>
    </section>
  );
}
