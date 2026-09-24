export type NoticiaMidia = {
  src: string;
  alt: string;
  legenda: string;
  largura: number;
  altura: number;
};

export type NoticiaBloco =
  | { tipo: "paragrafo"; texto: string }
  | { tipo: "subtitulo"; texto: string }
  | { tipo: "citacao"; texto: string }
  | { tipo: "midia"; midia: NoticiaMidia }
  | { tipo: "galeria"; midias: NoticiaMidia[] }
  | { tipo: "destaques"; itens: { valor: string; rotulo: string }[] }
  | { tipo: "inova"; titulo: string; texto: string };

export type Noticia = {
  slug: string;
  categoria: string;
  titulo: string;
  resumo: string;
  data: string;
  dataISO: string;
  capa: NoticiaMidia;
  corpo: NoticiaBloco[];
};

const pasta = "/noticias/charles-one-punch";

export const noticias: Noticia[] = [
  {
    slug: "charles-one-punch-lutador-do-norte",
    categoria: "Esporte",
    titulo: 'Conheça o lutador premiado conhecido do Norte, Charles "One Punch"',
    resumo:
      "Natural de Porto Velho, o peso meio-médio construiu na base do nocaute um dos cartéis mais respeitados do MMA rondoniense.",
    data: "8 de abril de 2026",
    dataISO: "2026-04-08",
    capa: {
      src: `${pasta}/vitoria-bandeira.webp`,
      alt: 'Charles "One Punch" comemora vitória com os braços erguidos e a bandeira sobre os ombros dentro do cage',
      legenda: 'Charles "One Punch" celebra mais uma vitória dentro do cage.',
      largura: 970,
      altura: 1280,
    },
    corpo: [
      {
        tipo: "paragrafo",
        texto:
          'Charles "One Punch" Oliveira é de Porto Velho, Rondônia, e carrega um apelido que explica sozinho o seu estilo de luta. Dos seus 12 triunfos como profissional, 9 vieram por nocaute ou nocaute técnico — três em cada quatro vitórias terminam antes dos cartões de pontuação entrarem em cena.',
      },
      {
        tipo: "destaques",
        itens: [
          { valor: "12", rotulo: "vitórias como profissional" },
          { valor: "9", rotulo: "por nocaute ou nocaute técnico" },
          { valor: "3", rotulo: "por finalização" },
        ],
      },
      {
        tipo: "subtitulo",
        texto: "Um cartel construído longe dos grandes centros",
      },
      {
        tipo: "paragrafo",
        texto:
          "Competindo no peso meio-médio pela equipe Round by Round, ele soma 12 vitórias na carreira, sendo as outras 3 por finalização. É um cartel construído longe dos grandes centros, em eventos que projetaram o nome do atleta para além da região Norte.",
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pasta}/pesagem-cfc.webp`,
            alt: "Charles flexiona os braços e grita na balança durante a pesagem oficial do CFC",
            legenda: "Na pesagem oficial do CFC, a intensidade já anuncia a luta.",
            largura: 1079,
            altura: 1280,
          },
          {
            src: `${pasta}/luta-no-chao.webp`,
            alt: "Dois lutadores em disputa no chão do cage, um por cima pressionando o adversário",
            legenda: "Pressão no chão: o jogo agarrado também faz parte do repertório.",
            largura: 1072,
            altura: 1280,
          },
        ],
      },
      {
        tipo: "inova",
        titulo: "Talento se revela com estratégia — na luta e na gestão",
        texto:
          'Assim como um atleta de alto rendimento, uma gestão pública eficiente depende de preparo, dados e as ferramentas certas. A Inova Nexel desenvolve soluções GovTech que ajudam governos a decidir melhor e entregar mais para a população.',
      },
      {
        tipo: "subtitulo",
        texto: "Resultados que marcaram a trajetória",
      },
      {
        tipo: "paragrafo",
        texto:
          "Entre os resultados de destaque estão a finalização sobre Marco Antônio, por guilhotina, no SFT 48, e o nocaute técnico logo no primeiro minuto do primeiro round contra Almir Lima, no BRTL 8.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pasta}/coletiva-sft.webp`,
          alt: "Atletas sentados à mesa em coletiva de imprensa diante do painel de patrocinadores do SFT Combat",
          legenda: "Coletiva de imprensa do SFT Combat, evento em que Charles finalizou Marco Antônio.",
          largura: 1200,
          altura: 1600,
        },
      },
      {
        tipo: "paragrafo",
        texto:
          'Mais recentemente, venceu Isaac Toledo Dull por nocaute técnico no segundo round do CFC 28 — mais um capítulo da trajetória que fez de "One Punch" um nome conhecido do MMA no Norte do país.',
      },
      {
        tipo: "midia",
        midia: {
          src: `${pasta}/nocaute-cfc-28.gif`,
          alt: "Sequência do nocaute técnico de Charles Oliveira sobre Isaac Dull no CFC 28",
          legenda: "O momento do nocaute técnico sobre Isaac Toledo Dull, no segundo round do CFC 28.",
          largura: 360,
          altura: 218,
        },
      },
      {
        tipo: "citacao",
        texto:
          "Três em cada quatro vitórias terminam antes dos cartões de pontuação entrarem em cena.",
      },
    ],
  },
];

export function getNoticia(slug: string) {
  return noticias.find((n) => n.slug === slug);
}
