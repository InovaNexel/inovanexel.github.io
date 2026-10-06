// O deslocamento do header fixo vem do `scroll-margin-top` das seções (globals.css).
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  element.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  return true;
}
