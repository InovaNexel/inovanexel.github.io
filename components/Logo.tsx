import Image from "next/image";
import { NavLink } from "./NavLink";

const LOGO_SRC = "/logo da inova.png";

type LogoProps = {
  className?: string;
  onClick?: () => void;
  textClassName?: string;
  iconSize?: number;
};

function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <Image
      src={LOGO_SRC}
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-lg object-contain"
      priority
    />
  );
}

export function Logo({
  className = "",
  onClick,
  textClassName = "text-white",
  iconSize = 40,
}: LogoProps) {
  return (
    <NavLink
      href="/#home"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Inova Nexel — Início"
    >
      <LogoMark size={iconSize} />
    </NavLink>
  );
}

export function LogoDark({ className = "" }: { className?: string }) {
  return (
    <Logo
      className={className}
      textClassName="text-white"
      iconSize={36}
    />
  );
}
