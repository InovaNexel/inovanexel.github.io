import Image from "next/image";
import { NetworkBackground } from "./NetworkBackground";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#050b18] pt-16 font-sans text-white"
    >
      <NetworkBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl flex-1 items-center gap-12 px-6 pb-16 pt-8 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-4">
        <div className="flex flex-col justify-center lg:py-12">
          <h1 className="hero-animate-fade-up hero-delay-400 max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-white opacity-0 sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            Inovação que transforma a gestão pública.
          </h1>
          <p className="hero-animate-fade-up hero-delay-550 mt-6 max-w-lg text-base leading-relaxed text-slate-300 opacity-0 sm:text-lg">
          Soluções tecnológicas para governos inteligentes, eficientes e conectados com a sociedade.
          </p>
          <div className="hero-animate-fade-up hero-delay-700 mt-10 flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center">
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center rounded-md bg-[#86efac] px-6 py-3.5 text-sm font-semibold text-[#050b18] transition-colors hover:bg-[#6ee7a0]"
            >
              Conheça nossas soluções
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/80 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Fale com um especialista
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="hero-animate-fade-in-right hero-delay-550 relative mx-auto w-full max-w-xl opacity-0 lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg sm:aspect-[16/11] lg:aspect-auto lg:h-[min(72vh,560px)] lg:rounded-none">
            <div
              className="absolute inset-0 z-10 bg-gradient-to-r from-[#050b18] via-[#050b18]/60 to-transparent lg:via-[#050b18]/40"
              aria-hidden
            />
            <div
              className="absolute inset-0 z-10 bg-gradient-to-t from-[#050b18]/80 via-transparent to-[#050b18]/30 lg:hidden"
              aria-hidden
            />

            <Image
              src=""
              alt="Edifício governamental iluminado à noite com overlay digital"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            <div
              className="absolute inset-0 z-[5] mix-blend-screen opacity-70"
              aria-hidden
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 400 300"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient
                    id="lineGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                    <stop
                      offset="100%"
                      stopColor="#3B82F6"
                      stopOpacity="0.3"
                    />
                  </linearGradient>
                </defs>
                {[
                  [80, 120, 160, 80],
                  [160, 80, 240, 140],
                  [240, 140, 320, 90],
                  [120, 180, 200, 200],
                  [200, 200, 280, 160],
                  [160, 80, 120, 180],
                  [240, 140, 200, 200],
                  [80, 120, 120, 180],
                  [320, 90, 280, 160],
                  [200, 200, 320, 220],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#lineGrad)"
                    strokeWidth="1"
                  />
                ))}
                {[
                  [80, 120],
                  [160, 80],
                  [240, 140],
                  [320, 90],
                  [120, 180],
                  [200, 200],
                  [280, 160],
                  [320, 220],
                ].map(([cx, cy], i) => (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={4}
                    fill="#7DD3FC"
                    fillOpacity="0.9"
                  >
                    <animate
                      attributeName="fillOpacity"
                      values="0.5;1;0.5"
                      dur="3s"
                      begin={`${i * 0.4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </svg>
            </div>

            <div
              className="absolute inset-0 z-[4] bg-blue-900/30 mix-blend-color"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050b18] to-transparent lg:hidden"
        aria-hidden
      />
    </section>
  );
}
