"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const NETWORK_NODES = [
  [10, 20], [25, 15], [40, 25], [55, 12], [70, 22], [85, 18], [95, 35],
  [75, 45], [55, 55], [35, 48], [20, 60], [12, 75], [30, 80], [50, 70],
  [68, 65], [88, 55],
] as const;

// Pontos do cenário que viajam até formar o logo. Coordenadas finais no
// espaço do PNG do logo (261 x 238), medidas a partir da própria imagem.
// `t` escalona a partida (o mais distante sai primeiro) e `lead` diz qual
// eixo sai na frente — o outro atrasa e a trajetória vira uma curva.
// `swing` é o desvio máximo (unidades do logo), perpendicular à rota e sempre
// no sentido horário, para os pontos convergirem em redemoinho.
type LogoNode = {
  x: number;
  y: number;
  d: number;
  color: string;
  t: number;
  lead: "x" | "y";
  swing: [number, number];
};

const LOGO_NODES: Record<number, LogoNode> = {
  4: { x: 27.5, y: 35.5, d: 43, color: "rgb(8, 91, 193)", t: 0.38, lead: "y", swing: [-45, -7] },
  5: { x: 225, y: 37, d: 42, color: "rgb(229, 229, 231)", t: 0.54, lead: "x", swing: [-50, 0] },
  7: { x: 144, y: 105.5, d: 23, color: "rgb(12, 32, 91)", t: 0.7, lead: "y", swing: [-24, 17] },
  14: { x: 95, y: 132.5, d: 28, color: "rgb(12, 32, 91)", t: 0.62, lead: "x", swing: [17, 28] },
  13: { x: 29.5, y: 192, d: 44, color: "rgb(38, 174, 72)", t: 0.3, lead: "y", swing: [4, 66] },
  15: { x: 226, y: 208, d: 43, color: "rgb(12, 32, 91)", t: 0.46, lead: "x", swing: [-39, -14] },
};

const AXIS_LAG = 0.16;

// Segmentos do logo, agrupados em dois traços (o "M" e a diagonal de baixo)
// e orientados no sentido do desenho. Cada segmento começa quando o anterior
// termina, com velocidade constante — como uma caneta.
const LOGO_STROKES = [
  {
    start: 1.25,
    segments: [
      [27, 192, 27, 36],
      [30, 28.8, 144, 107.3],
      [144, 106.9, 224, 37.3],
      [226, 37, 226, 208],
    ],
  },
  {
    start: 1.55,
    segments: [
      [29, 194.3, 95.5, 132],
      [95.5, 130.2, 226, 217.5],
    ],
  },
] as const;

const PEN_SPEED = 640; // unidades do logo por segundo

const LOGO_LINES = LOGO_STROKES.flatMap(({ start, segments }) => {
  let at = start;
  return segments.map(([x1, y1, x2, y2]) => {
    const duration = Math.hypot(x2 - x1, y2 - y1) / PEN_SPEED;
    const line = { x1, y1, x2, y2, delay: at, duration };
    at += duration;
    return line;
  });
});

function HeroNetwork() {
  const nodes = NETWORK_NODES;
  return (
    <div className="hero-logo absolute inset-0" aria-hidden>
      <svg className="absolute inset-0 h-full w-full opacity-60">
        {nodes.map(([x1, y1], i) => {
          if (i === 0) return null;
          const [x0, y0] = nodes[i - 1]!;
          const moving = i in LOGO_NODES || i - 1 in LOGO_NODES;
          return (
            <line
              key={`l-${i}`}
              className={moving ? "hero-net-line--fade" : undefined}
              x1={`${x0}%`}
              y1={`${y0}%`}
              x2={`${x1}%`}
              y2={`${y1}%`}
              stroke="#60A5FA"
              strokeWidth="0.5"
              strokeOpacity="0.35"
            />
          );
        })}
      </svg>

      <div className="hero-logo__box hero-logo__glow" />

      {nodes.map(([cx, cy], i) =>
        i in LOGO_NODES ? null : (
          <span
            key={`n-${i}`}
            className="hero-dot"
            style={{ "--x0": `${cx}%`, "--y0": `${cy}%` } as React.CSSProperties}
          />
        ),
      )}

      {/* Barras e pontos do logo num único grupo: o brilho contorna a peça inteira. */}
      <div className="hero-logo__piece absolute inset-0">
        <svg className="hero-logo__box hero-logo__lines" viewBox="0 0 261 238">
          {LOGO_LINES.map(({ x1, y1, x2, y2, delay, duration }, i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              pathLength={1}
              stroke="rgb(12, 32, 91)"
              strokeWidth={15}
              style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
            />
          ))}
        </svg>

        {Object.entries(LOGO_NODES).map(([i, target]) => {
          const [cx, cy] = nodes[Number(i)]!;
          return (
            <span
              key={`n-${i}`}
              className="hero-fly"
              style={
                {
                  "--x0": `${cx}%`,
                  "--y0": `${cy}%`,
                  "--fx": target.x,
                  "--fy": target.y,
                  "--t": `${target.t}s`,
                  "--lag-x": target.lead === "x" ? "0s" : `${AXIS_LAG}s`,
                  "--lag-y": target.lead === "y" ? "0s" : `${AXIS_LAG}s`,
                } as React.CSSProperties
              }
            >
              <span
                className="hero-dot hero-dot--move"
                style={
                  {
                    "--fd": target.d,
                    "--sx": target.swing[0],
                    "--sy": target.swing[1],
                    "--fc": target.color,
                  } as React.CSSProperties
                }
              />
            </span>
          );
        })}
      </div>

      <p className="hero-logo__wordmark">
        <span>Inova</span> <span className="text-[#8FD18F]">Nexel</span>
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[min(750px,100svh)] min-h-[600px] w-full scroll-mt-[90px] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#03152F] via-[#08244A] to-[#0B2E5A]"
        aria-hidden
      />
      <Image
        src="https://images.unsplash.com/photo-1564760059415-884a737d0637?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        className="object-cover object-right opacity-50"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#03152F]/95 via-[#03152F]/75 to-[#03152F]/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(59,130,246,0.15),transparent_55%)]"
        aria-hidden
      />
      <HeroNetwork />

      <div className="container-site relative z-10 flex h-full items-center pt-[90px]">
        <div className="max-w-[640px]">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-white"
          >
            Inovação que transforma a gestão pública.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[450px] text-base leading-relaxed text-[#D9E5F4] sm:text-lg"
          >
            Soluções tecnológicas para governos inteligentes, eficientes e
            conectados com a sociedade.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#8FD18F] px-7 py-3.5 text-sm font-semibold text-[#03152F] transition-colors hover:bg-[#7bc47d]"
            >
              Conheça nossas soluções
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Fale com um especialista
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
