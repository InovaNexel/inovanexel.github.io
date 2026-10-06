import type { ReactNode } from "react";

/*
 * Ícones de traço em 24x24. O traço principal usa `currentColor`; o detalhe usa
 * `--icon-accent` (cai para currentColor), dando o duo navy/menta da marca.
 */
const A = "var(--icon-accent, currentColor)";

const paths = {
  gavel: (
    <>
      <path d="M3 21h8M7 21v-6" />
      <path d="M12.5 3.5l6 6M15.5 6.5l-9 9-3-3 9-9z" stroke={A} />
    </>
  ),
  box: (
    <>
      <path d="M3 8l9-4 9 4v10l-9 4-9-4V8z" />
      <path d="M3 8l9 4 9-4M12 12v10" stroke={A} />
    </>
  ),
  truck: (
    <>
      <path d="M3 13l2-5h9l3 5h4v4H3v-4z" />
      <circle cx="7.5" cy="17.5" r="1.8" stroke={A} />
      <circle cx="17" cy="17.5" r="1.8" stroke={A} />
    </>
  ),
  building: (
    <>
      <path d="M4 10h16M5 10V7l7-4 7 4v3" />
      <path d="M7 10v7M12 10v7M17 10v7M4 20h16" stroke={A} />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 9h8M8 13h5" stroke={A} />
    </>
  ),
  digital: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <circle cx="12" cy="12" r="4" stroke={A} />
    </>
  ),
  chart: (
    <>
      <path d="M4 18V8l4-2 4 2 4-2 4 2v10" />
      <path d="M8 16v-6M12 18V8M16 14v4" stroke={A} />
    </>
  ),
  funding: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M9 11h6" stroke={A} />
    </>
  ),
  consult: (
    <>
      <path d="M9 18l-4-4 4-4M15 6l4 4-4 4" />
      <path d="M5 14h14" stroke={A} />
    </>
  ),
  education: (
    <>
      <path d="M4 8l8-4 8 4-8 4-8-4z" />
      <path d="M6 10v6c0 2 2.5 4 6 4s6-2 6-4v-6" stroke={A} />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4-3 6.5-7 9-4-2.5-7-5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" stroke={A} />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 12l2.5 2.5 4.5-5" stroke={A} />
    </>
  ),
  package: (
    <>
      <path d="M4 7h16v13H4zM4 7l2-3h12l2 3" />
      <path d="M9 12l2 2 4-4" stroke={A} />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9.5" cy="7" r="3.5" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke={A} />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" stroke={A} />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" stroke={A} />
      <circle cx="12" cy="12" r="1.2" stroke={A} />
    </>
  ),
  leaf: <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />,
  mission: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" stroke={A} />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" stroke={A} />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 018 0v2.5" stroke={A} />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" stroke={A} />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" stroke={A} />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-3.9A8 8 0 1112 20a8 8 0 01-3.9-1L4 20z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 01-1.8-1.8l.8-1-1-2L9 9.5z" stroke={A} />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  size = 24,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
