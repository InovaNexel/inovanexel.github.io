"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function HeroNetwork() {
  const nodes = [
    [10, 20], [25, 15], [40, 25], [55, 12], [70, 22], [85, 18], [95, 35],
    [75, 45], [55, 55], [35, 48], [20, 60], [12, 75], [30, 80], [50, 70],
    [68, 65], [88, 55],
  ];
  return (
    <svg className="absolute inset-0 h-full w-full opacity-60" aria-hidden>
      {nodes.map(([x1, y1], i) => {
        if (i === 0) return null;
        const [x0, y0] = nodes[i - 1]!;
        return (
          <line
            key={`l-${i}`}
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
      {nodes.map(([cx, cy], i) => (
        <circle key={`n-${i}`} cx={`${cx}%`} cy={`${cy}%`} r="2.5" fill="#7DD3FC" fillOpacity="0.7" />
      ))}
    </svg>
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
      <HeroNetwork />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(59,130,246,0.15),transparent_55%)]"
        aria-hidden
      />

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
