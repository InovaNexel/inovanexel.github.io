import type { IconName } from "@/components/Icon";
import { site } from "./site";

export type Sistema = {
  sigla: string;
  nome: string;
  descricao: string;
  icon: IconName;
  /** Destaques derivados da descrição oficial. */
  recursos: string[];
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
    recursos: ["Avaliação e reavaliação", "Depreciação automática", "Loteamento", "Prestação de contas"],
    href: "/sigel",
    loginHref: site.sigelLoginHref,
  },
  {
    sigla: "SIGAL",
    nome: "Sistema Integrado de Gestão de Almoxarifado",
    descricao:
      "Sistema de organização e gestão de almoxarifado com aplicação completa para prefeituras e governos.",
    icon: "box",
    recursos: ["Organização do almoxarifado", "Gestão completa", "Para prefeituras e governos"],
  },
  {
    sigla: "SIGEFROT",
    nome: "Sistema Integrado de Gestão de Frotas",
    descricao:
      "Sistema de gestão de frotas de veículos oficiais, controle de abastecimento, viagens, manutenção e motoristas.",
    icon: "truck",
    recursos: ["Veículos oficiais", "Abastecimento", "Viagens e motoristas", "Manutenção"],
  },
  {
    sigla: "SIGEP",
    nome: "Sistema Integrado de Gestão de Patrimônio",
    descricao:
      "Gestão completa de patrimônio público, desde a entrada até o desfazimento e depreciação do bem.",
    icon: "building",
    recursos: ["Entrada do bem", "Depreciação", "Desfazimento"],
  },
];

// Etapas do SIGEL, tiradas da descrição oficial do sistema.
export const sigelEtapas = [
  { nome: "Cadastro", texto: "Registro de cada bem com seus dados e documentos." },
  { nome: "Avaliação", texto: "Definição do valor de referência para o leilão." },
  { nome: "Reavaliação", texto: "Atualização do valor sempre que o bem for revisto." },
  { nome: "Depreciação automática", texto: "O cálculo acontece no sistema, sem planilha paralela." },
  { nome: "Loteamento", texto: "Organização dos bens em lotes prontos para o leilão." },
  { nome: "Prestação de contas", texto: "Todo o processo registrado para prestar contas." },
];
