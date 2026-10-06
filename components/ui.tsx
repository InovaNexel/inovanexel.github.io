import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type ButtonVariant = "primary" | "ghost-dark" | "ghost" | "dark";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-mint text-ink hover:bg-mint-hover focus-visible:outline-mint",
  dark: "bg-ink text-white hover:bg-ink-2 focus-visible:outline-ink",
  "ghost-dark":
    "border border-white/25 text-white hover:border-white/50 hover:bg-white/[0.06] focus-visible:outline-mint",
  ghost:
    "border border-ink/15 text-ink hover:border-ink/35 hover:bg-ink/[0.03] focus-visible:outline-ink",
};

export function buttonClass(variant: ButtonVariant = "primary", size: "md" | "sm" = "md") {
  const sizing = size === "md" ? "h-12 px-6 text-[15px]" : "h-10 px-4 text-sm";
  return `btn group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${sizing} ${buttonVariants[variant]}`;
}

/** Seta que avança ao passar o mouse sobre o `group` pai. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`arrow shrink-0 ${className}`}
      aria-hidden
      focusable="false"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Eyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`eyebrow ${tone === "dark" ? "text-mint" : "text-mint-ink"} ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  action,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-6 ${centered ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"}`}
    >
      <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className={`mt-4 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.02em] text-balance ${
            tone === "dark" ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 text-[17px] leading-relaxed text-pretty ${
              tone === "dark" ? "text-mist/80" : "text-ink/65"
            }`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
