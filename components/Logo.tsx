import { NavLink } from "./NavLink";

type Tone = "light" | "dark";

// Geometria do símbolo no espaço do PNG original (261 x 238) — a mesma usada
// pela animação do hero, para o símbolo estático e o animado serem idênticos.
const BARS = [
  [27, 192, 27, 36],
  [30, 28.8, 144, 107.3],
  [144, 106.9, 224, 37.3],
  [226, 37, 226, 208],
  [29, 194.3, 95.5, 132],
  [95.5, 130.2, 226, 217.5],
] as const;

const NODES = [
  { cx: 27.5, cy: 35.5, r: 21.5, fill: "#085BC1" },
  { cx: 225, cy: 37, r: 21, fill: "#E5E5E7", soft: true },
  { cx: 144, cy: 105.5, r: 11.5, fill: "bar" },
  { cx: 95, cy: 132.5, r: 14, fill: "bar" },
  { cx: 29.5, cy: 192, r: 22, fill: "#26AE48" },
  { cx: 226, cy: 208, r: 21.5, fill: "bar" },
] as const;

export function LogoMark({
  tone = "light",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  // Sobre o navy, as barras invertem para um tom claro; o resto da marca se mantém.
  const bar = tone === "dark" ? "#E8EEF8" : "#0C205B";
  return (
    <svg viewBox="0 0 261 238" className={className} aria-hidden focusable="false">
      {BARS.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={bar} strokeWidth={15} />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={n.fill === "bar" ? bar : n.fill}
          stroke={"soft" in n && tone === "light" ? "#C9CFDA" : undefined}
          strokeWidth={"soft" in n && tone === "light" ? 2 : undefined}
        />
      ))}
    </svg>
  );
}

export function Wordmark({
  tone = "light",
  className = "",
  size = "text-[15px]",
}: {
  tone?: Tone;
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={`whitespace-nowrap font-display ${size} font-extrabold uppercase leading-none tracking-[0.14em] ${className}`}
    >
      <span className={tone === "dark" ? "text-white" : "text-ink"}>Inova</span>{" "}
      <span className={tone === "dark" ? "text-mint" : "text-mint-ink"}>Nexel</span>
    </span>
  );
}

export function Logo({
  tone = "light",
  onClick,
  className = "",
}: {
  tone?: Tone;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <NavLink
      href="/#home"
      onClick={onClick}
      className={`inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint ${className}`}
      aria-label="Inova Nexel — página inicial"
    >
      <LogoMark tone={tone} className="h-8 w-auto shrink-0" />
      <Wordmark tone={tone} />
    </NavLink>
  );
}
