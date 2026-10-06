import type { IconName } from "@/components/Icon";
import { site } from "./site";

export type Sistema = {
  sigla: string;
  nome: string;
  descricao: string;
  icon: IconName;
  /** Quando presente, o sistema tem página dedicada. */
  href?: string;
  /** Quando presente, o sistema já tem acesso online para usuários. */
  loginHref?: string;
};

export const sistemas: Sistema[] = [
  {
    sigla: "SIGEL",
    nome: "Sistema Integrado de Gestão de Leilão",
    descricao:
      "Sistema de gestão de leilão para cadastro, avaliação, reavaliação, depreciação automática, loteamento e prestação de contas completo.",
    icon: "gavel",
    href: "/sigel",
    loginHref: site.sigelLoginHref,
  },
  {
    sigla: "SIGAL",
    nome: "Sistema Integrado de Gestão de Almoxarifado",
    descricao:
      "Sistema de organização e gestão de almoxarifado com aplicação completa para prefeituras e governos.",
    icon: "box",
  },
  {
    sigla: "SIGEFROT",
    nome: "Sistema Integrado de Gestão de Frotas",
    descricao:
      "Sistema de gestão de frotas de veículos oficiais, controle de abastecimento, viagens, manutenção e motoristas.",
    icon: "truck",
  },
  {
    sigla: "SIGEP",
    nome: "Sistema Integrado de Gestão de Patrimônio",
    descricao:
      "Gestão completa de patrimônio público, desde a entrada até o desfazimento e depreciação do bem.",
    icon: "building",
  },
];

// Etapas do SIGEL, tiradas da descrição oficial do sistema.
export const sigelEtapas = [
  "Cadastro",
  "Avaliação",
  "Reavaliação",
  "Depreciação automática",
  "Loteamento",
  "Prestação de contas",
];
