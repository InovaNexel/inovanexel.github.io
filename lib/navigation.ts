export type NavItem = {
  label: string;
  href: string;
};

export const sectionIds = {
  home: "home",
  solucoes: "solucoes",
  noticias: "noticias",
  contato: "contato",
} as const;

export const mainNav: NavItem[] = [
  { label: "Início", href: "/#home" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Notícias", href: "/#noticias" },
  { label: "Fale Conosco", href: "/#contato" },
];

export const contactHref = "/#contato";
export const contactLabel = "Fale Conosco";

export const footerEmpresaLinks: NavItem[] = [
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Notícias", href: "/#noticias" },
  { label: "Fale Conosco", href: "/#contato" },
];

export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/" || href === "/#home") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function parseHashHref(href: string): { path: string; hash: string | null } {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return { path: href, hash: null };
  const path = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex + 1);
  return { path, hash: hash || null };
}
