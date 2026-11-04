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
const pastaRolim = "/noticias/rolim-de-moura";
const pastaGuajara = "/noticias/guajara-mirim";
const pastaCandeias = "/noticias/candeias-do-jamari";
const pastaPortoVelho = "/noticias/porto-velho";

export const noticias: Noticia[] = [
  {
    slug: "porto-velho-historia-habitantes-economia",
    categoria: "Cidades",
    titulo: "Porto Velho: a capital que nasceu de uma ferrovia e cresceu às margens do Madeira",
    resumo:
      "De canteiro de obras no meio da selva a maior cidade de Rondônia, Porto Velho reúne mais de 460 mil habitantes, duas das maiores hidrelétricas do país e uma história que mistura trilhos, rio e gente de todo o mundo.",
    data: "4 de novembro de 2026",
    dataISO: "2026-11-04",
    capa: {
      src: `${pastaPortoVelho}/vista-da-cidade.webp`,
      alt: "Vista aérea de Porto Velho com prédios ao fundo, o rio Madeira em primeiro plano e a ponte sobre o rio à esquerda",
      legenda:
        "Porto Velho vista do alto, com o rio Madeira e a ponte que liga as duas margens. Foto: Silva Júnior / MTur, via Wikimedia Commons (CC0).",
      largura: 1280,
      altura: 896,
    },
    corpo: [
      {
        tipo: "paragrafo",
        texto:
          "Pouca gente sabe, mas a capital de Rondônia nasceu como um canteiro de obras. No começo do século XX, engenheiros americanos, operários vindos de dezenas de países e milhares de toneladas de trilhos desembarcaram às margens do rio Madeira para construir uma ferrovia no coração da Amazônia. O acampamento cresceu, ganhou ruas, oficinas, hospital e cais — e nunca mais parou de crescer. Mais de um século depois, Porto Velho é a maior cidade de Rondônia e uma das principais portas de entrada da Amazônia Ocidental.",
      },
      {
        tipo: "destaques",
        itens: [
          { valor: "460 mil", rotulo: "habitantes (Censo 2022)" },
          { valor: "34 mil km²", rotulo: "a maior capital do Brasil em área" },
          { valor: "1914", rotulo: "ano de criação do município" },
        ],
      },
      {
        tipo: "subtitulo",
        texto: "Um porto, uma ferrovia e uma cidade improvisada",
      },
      {
        tipo: "paragrafo",
        texto:
          "A Estrada de Ferro Madeira-Mamoré deveria começar em Santo Antônio do Madeira, povoado à beira das cachoeiras do rio. Mas os construtores, liderados pela empresa do empresário americano Percival Farquhar, encontraram cerca de 7 km rio abaixo um ponto muito mais favorável para atracar os navios. Ali, em 4 de julho de 1907, a Madeira-Mamoré Railway Company instalou sua base. O lugar ficou conhecido como Porto Velho, nome que, segundo a tradição, remete a um antigo ponto de atracação usado por navegantes do Madeira.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaPortoVelho}/porto-velho-1910.webp`,
          alt: "Fotografia histórica em preto e branco de Porto Velho em 1910, com trilhos, galpões e casas ao lado do rio Madeira e a floresta ao fundo",
          legenda:
            "Porto Velho em 1910: oficinas, trilhos e casas da ferrovia entre o rio Madeira e a floresta. Foto: Dana Merrill / Acervo do Museu Paulista da USP (domínio público).",
          largura: 1280,
          altura: 855,
        },
      },
      {
        tipo: "paragrafo",
        texto:
          "A cidade foi criada oficialmente como município do Amazonas em 2 de outubro de 1914. Em 1943, com a criação do Território Federal do Guaporé, virou capital. O território passou a se chamar Rondônia em 1956, em homenagem ao Marechal Rondon, e foi elevado a estado em 4 de janeiro de 1982 — com Porto Velho, naturalmente, como sede do governo.",
      },
      {
        tipo: "citacao",
        texto:
          "Porto Velho não foi planejada para ser capital. Foi planejada para ser o ponto de partida de uma ferrovia — e acabou virando o ponto de partida de um estado inteiro.",
      },
      {
        tipo: "subtitulo",
        texto: "As Três Caixas d'Água e outros símbolos",
      },
      {
        tipo: "paragrafo",
        texto:
          "O maior símbolo da cidade vem justamente da época da ferrovia. As Três Caixas d'Água foram erguidas pelos construtores da Madeira-Mamoré com módulos metálicos trazidos dos Estados Unidos para abastecer a vila operária. Hoje, cercadas por uma praça, aparecem no brasão, em cartões-postais e no imaginário de todo porto-velhense. Perto dali, o complexo da Estrada de Ferro Madeira-Mamoré guarda locomotivas e galpões do início do século XX, e a Catedral do Sagrado Coração de Jesus marca o centro da cidade.",
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pastaPortoVelho}/tres-caixas-aerea.webp`,
            alt: "Vista aérea das Três Caixas d'Água, três reservatórios metálicos cilíndricos sobre torres, cercados por praça e árvores",
            legenda:
              "As Três Caixas d'Água vistas do alto. Foto: Silva Júnior / MTur, via Wikimedia Commons (domínio público).",
            largura: 1280,
            altura: 905,
          },
          {
            src: `${pastaPortoVelho}/tres-caixas-praca.webp`,
            alt: "As Três Caixas d'Água vistas de baixo, com um banco de praça vermelho em primeiro plano e céu azul",
            legenda:
              "Na praça, os reservatórios centenários viraram ponto de encontro. Foto: Imagens de Rondônia, via Wikimedia Commons (domínio público).",
            largura: 1280,
            altura: 960,
          },
        ],
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaPortoVelho}/catedral.webp`,
          alt: "Vista aérea da Catedral do Sagrado Coração de Jesus, de fachada branca com duas torres, cercada por ruas e praça no centro de Porto Velho",
          legenda:
            "A Catedral do Sagrado Coração de Jesus, no centro da capital. Foto: Silva Júnior / MTur, via Wikimedia Commons (domínio público).",
          largura: 1280,
          altura: 905,
        },
      },
      {
        tipo: "subtitulo",
        texto: "Uma cidade feita de muitas ondas de gente",
      },
      {
        tipo: "paragrafo",
        texto:
          "Porto Velho cresceu em ondas. Primeiro vieram os trabalhadores da ferrovia — entre eles muitos caribenhos, como os barbadianos, que deixaram descendentes na cidade — e os seringueiros nordestinos dos ciclos da borracha. Depois, nos anos 1970 e 1980, chegaram milhares de famílias do Sul, do Sudeste e do Centro-Oeste atraídas pela colonização de Rondônia. Mais recentemente, a construção das usinas do Madeira trouxe uma nova leva de trabalhadores de todo o país.",
      },
      {
        tipo: "paragrafo",
        texto:
          "O resultado é uma capital de 460.434 habitantes, segundo o Censo de 2022 — a mais populosa de Rondônia e a quarta maior da Região Norte. O município é enorme: são mais de 34 mil km², área maior que a de Alagoas ou de Sergipe, divididos em 12 distritos, como Jaci-Paraná, Abunã, Calama e Nazaré. É também a única capital brasileira que faz fronteira com outro país, a Bolívia. O IDH de 0,736 é considerado alto pelo PNUD.",
      },
      {
        tipo: "subtitulo",
        texto: "Energia, grãos e serviços: a economia da capital",
      },
      {
        tipo: "paragrafo",
        texto:
          "Se a ferrovia foi o primeiro motor de Porto Velho, o rio Madeira é o atual. No município ficam as usinas hidrelétricas de Santo Antônio e Jirau, que juntas somam mais de 7 mil megawatts de capacidade instalada e estão entre as maiores do Brasil. No auge das obras, por volta de 2011, os canteiros chegaram a empregar mais de 40 mil pessoas, mudando de vez o tamanho e o ritmo da cidade.",
      },
      {
        tipo: "destaques",
        itens: [
          { valor: "R$ 19,4 bi", rotulo: "de PIB (IBGE, 2020)" },
          { valor: "+7 mil MW", rotulo: "nas usinas de Santo Antônio e Jirau" },
          { valor: "R$ 36 mil", rotulo: "de PIB per capita" },
        ],
      },
      {
        tipo: "paragrafo",
        texto:
          "O rio também é estrada. Pelo porto graneleiro de Porto Velho passa a soja produzida em Rondônia e no Mato Grosso, embarcada em comboios de balsas que descem o Madeira até Itacoatiara, no Amazonas, de onde segue para o exterior. Completam a economia o comércio, que atende todo o estado, e o setor público: como capital, a cidade concentra órgãos federais, estaduais e municipais e um grande número de servidores.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaPortoVelho}/porto-graneleiro.webp`,
          alt: "Vista aérea de Porto Velho com silos de grãos e estrutura portuária à beira do rio Madeira, e a cidade se estendendo ao fundo",
          legenda:
            "Silos e estrutura portuária à beira do Madeira: por aqui a produção de grãos ganha o rio. Foto: Wilson Dias / Agência Brasil, via Wikimedia Commons (CC BY 3.0 BR).",
          largura: 1280,
          altura: 720,
        },
      },
      {
        tipo: "inova",
        titulo: "Uma capital do tamanho de um país pede gestão inteligente",
        texto:
          "Com 460 mil habitantes, 12 distritos espalhados por mais de 34 mil km² e uma economia que vai das hidrelétricas aos serviços, Porto Velho mostra o desafio de administrar uma capital amazônica. A Inova Nexel desenvolve soluções GovTech que ajudam a gestão pública a planejar, integrar dados e atender melhor a população.",
      },
      {
        tipo: "subtitulo",
        texto: "Festa no arraial, na rua e na beira do rio",
      },
      {
        tipo: "paragrafo",
        texto:
          "Porto Velho também sabe se divertir. Em junho, o Arraial Flor do Maracujá, realizado há mais de três décadas, reúne quadrilhas, bois-bumbás e comidas típicas e é considerado um dos maiores arraiais do país. No Carnaval, a Banda do Vai Quem Quer arrasta multidões pelas ruas do centro, em um dos blocos mais tradicionais da Amazônia. E todo fim de tarde, a orla do Madeira vira programa obrigatório para ver o pôr do sol.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaPortoVelho}/ponte-rio-madeira.webp`,
          alt: "Vista aérea da ponte de concreto sobre o rio Madeira, de águas barrentas, com a cidade de Porto Velho ao fundo",
          legenda:
            "A ponte sobre o rio Madeira, que conecta a capital às estradas rumo ao Acre e ao Amazonas. Foto: Silva Júnior / MTur, via Wikimedia Commons (CC0).",
          largura: 1280,
          altura: 905,
        },
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pastaPortoVelho}/balsa-rio-madeira.webp`,
            alt: "Balsa carregada atravessando o largo rio Madeira sob céu nublado",
            legenda:
              "Balsa no rio Madeira, a grande estrada líquida da região. Foto: Cleber Rech / Wikimedia Commons (CC BY 2.0).",
            largura: 1280,
            altura: 960,
          },
          {
            src: `${pastaPortoVelho}/por-do-sol-madeira.webp`,
            alt: "Pôr do sol dourado sobre o rio Madeira, com árvores em silhueta",
            legenda:
              "O pôr do sol no Madeira, cartão-postal diário da capital. Foto: Luiz Alexandre / Wikimedia Commons (CC BY 2.0).",
            largura: 1280,
            altura: 960,
          },
        ],
      },
      {
        tipo: "paragrafo",
        texto:
          "Porto Velho é uma cidade que se reinventa a cada ciclo — da ferrovia à borracha, da colonização às hidrelétricas. O que não muda é o rio Madeira correndo largo diante dela, lembrando que tudo começou com um porto improvisado na beira da floresta. Para quem chega, a dica é simples: comece pelas Três Caixas d'Água, passe pelos trilhos da Madeira-Mamoré e termine o dia olhando o sol se pôr sobre o rio.",
      },
    ],
  },
  {
    slug: "candeias-do-jamari-historia-habitantes-economia",
    categoria: "Cidades",
    titulo: "Candeias do Jamari: a vizinha da capital que guarda praias de rio e a primeira grande usina de Rondônia",
    resumo:
      "A 20 km de Porto Velho, Candeias do Jamari nasceu na beira da BR-364, cresceu com a hidrelétrica de Samuel e hoje vive entre o campo, o comércio e os balneários que lotam nos fins de semana.",
    data: "4 de novembro de 2026",
    dataISO: "2026-11-04",
    capa: {
      src: `${pastaCandeias}/praia-rio-preto.webp`,
      alt: "Ilha de areia clara no meio do rio Preto, cercada de floresta, com banhistas na água",
      legenda:
        "A ilha de areia do balneário do Rio Preto, em Candeias do Jamari. Foto: Guilherme Jofili / Wikimedia Commons (CC BY 2.0).",
      largura: 1024,
      altura: 681,
    },
    corpo: [
      {
        tipo: "paragrafo",
        texto:
          "Basta atravessar a ponte sobre o rio Candeias, a cerca de 20 km do centro de Porto Velho, para mudar de cidade. Do lado de lá está Candeias do Jamari, município que muita gente conhece de passagem pela BR-364 ou dos fins de semana nos balneários, mas que tem uma história própria — feita de estrada, de rio e de energia.",
      },
      {
        tipo: "destaques",
        itens: [
          { valor: "22,3 mil", rotulo: "habitantes (Censo 2022)" },
          { valor: "1992", rotulo: "ano da emancipação" },
          { valor: "20 km", rotulo: "de distância de Porto Velho" },
        ],
      },
      {
        tipo: "subtitulo",
        texto: "Uma vila nascida na beira da estrada",
      },
      {
        tipo: "paragrafo",
        texto:
          "Candeias começou como um pequeno povoado no ponto em que a antiga BR-29 — hoje BR-364 — cruzava o rio Candeias, afluente do Jamari. Por causa do rio, o lugar ficou conhecido como Vila Candeias. Com a abertura da rodovia e a chegada de migrantes a Rondônia, a vila foi ganhando moradores, comércio e escolas, sempre muito ligada à capital ali ao lado.",
      },
      {
        tipo: "paragrafo",
        texto:
          "A autonomia veio em 13 de fevereiro de 1992, quando a Lei estadual nº 363 criou o município de Candeias do Jamari, desmembrado de Porto Velho. O nome junta os dois rios que definem a região: o Candeias, que deu origem à vila, e o Jamari, o grande rio que corta o município e deságua no Madeira.",
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pastaCandeias}/balneario.webp`,
            alt: "Praia de areia clara à beira de um rio de águas escuras, com barracas e guarda-sol e floresta ao fundo",
            legenda:
              "Praia de rio em Candeias do Jamari: os balneários atraem visitantes da capital. Foto: Guilherme Jofili / Wikimedia Commons (CC BY 2.0).",
            largura: 1024,
            altura: 681,
          },
          {
            src: `${pastaCandeias}/ponte-de-madeira.webp`,
            alt: "Ponte de madeira sobre um rio com pedras, cercada de floresta, com um carro ao fundo",
            legenda:
              "Ponte de madeira no interior do município. Foto: Guilherme Jofili / Wikimedia Commons (CC BY 2.0).",
            largura: 1024,
            altura: 681,
          },
        ],
      },
      {
        tipo: "subtitulo",
        texto: "Samuel, a usina que mudou a região",
      },
      {
        tipo: "paragrafo",
        texto:
          "O grande marco da história recente do município está no rio Jamari: a Usina Hidrelétrica de Samuel. As obras começaram em 1982 para abastecer Porto Velho e o entorno, e o projeto, previsto para ser concluído em poucos anos, se arrastou por mais de uma década por falta de recursos. Com 216 megawatts de potência instalada, Samuel foi a primeira grande hidrelétrica de Rondônia e trouxe para Candeias trabalhadores, estradas e uma nova paisagem: o lago formado pela barragem.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaCandeias}/usina-samuel.webp`,
          alt: "Barragem e casa de força de concreto da Usina Hidrelétrica de Samuel sobre o rio Jamari, com torres de transmissão à direita",
          legenda:
            "A Usina Hidrelétrica de Samuel, no rio Jamari. Foto: Povo do Rio / Wikimedia Commons (CC BY-SA 3.0).",
          largura: 1280,
          altura: 960,
        },
      },
      {
        tipo: "citacao",
        texto:
          "Antes das gigantes do Madeira, foi no rio Jamari que Rondônia aprendeu a gerar energia com a força da água.",
      },
      {
        tipo: "subtitulo",
        texto: "Quem vive em Candeias",
      },
      {
        tipo: "paragrafo",
        texto:
          "Candeias do Jamari tem 22.310 habitantes, segundo o Censo de 2022, e cresce de forma constante: eram cerca de 13 mil em 2000 e quase 20 mil em 2010. Boa parte da população veio de outros estados durante a colonização de Rondônia, e a proximidade com a capital faz com que muitos moradores trabalhem ou estudem em Porto Velho e voltem para casa no fim do dia. O município tem ainda o distrito de Triunfo, a cerca de 120 km da sede, com aproximadamente 4 mil moradores e vida própria, mais ligada ao campo.",
      },
      {
        tipo: "paragrafo",
        texto:
          "O IDH de 0,649 é classificado como médio pelo PNUD, e o município ainda enfrenta desafios conhecidos da Amazônia: em 2023, entrou na lista federal de municípios prioritários para o combate ao desmatamento na Amazônia — um sinal de que conciliar crescimento e floresta é uma das grandes tarefas da próxima geração de candeienses.",
      },
      {
        tipo: "subtitulo",
        texto: "Campo, estrada e turismo: a economia candeiense",
      },
      {
        tipo: "paragrafo",
        texto:
          "A economia de Candeias combina três vocações. A primeira é o campo: a pecuária e a agricultura ocupam grandes áreas do município, sobretudo ao longo das estradas vicinais e no distrito de Triunfo. A segunda é a estrada: cortado pela BR-364, principal ligação de Rondônia com o restante do país, o município tem comércio e serviços voltados para quem passa e para quem mora. A terceira é a energia, com a usina de Samuel e as atividades que gravitam em torno dela.",
      },
      {
        tipo: "destaques",
        itens: [
          { valor: "R$ 548 mi", rotulo: "de PIB (IBGE, 2019)" },
          { valor: "216 MW", rotulo: "de potência na usina de Samuel" },
          { valor: "6,8 mil km²", rotulo: "de território" },
        ],
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaCandeias}/pastagem.webp`,
          alt: "Campo aberto de pastagem com algumas árvores altas isoladas sob céu azul com nuvens",
          legenda:
            "Área de pastagem no município, onde antes havia floresta. Foto: Guilherme Jofili / Wikimedia Commons (CC BY 2.0).",
          largura: 1024,
          altura: 681,
        },
      },
      {
        tipo: "paragrafo",
        texto:
          "O turismo de fim de semana completa o quadro. Os balneários dos rios Candeias e Preto, frequentados desde os anos 1970, recebem famílias de Porto Velho que buscam praias de areia branca, corredeiras e água fresca a poucos minutos de carro da capital. Na seca, quando o nível dos rios baixa, surgem ilhas de areia que viram o point da região.",
      },
      {
        tipo: "inova",
        titulo: "Municípios vizinhos, desafios conectados",
        texto:
          "Cidades como Candeias do Jamari, que vivem em sintonia com a capital, precisam de gestão integrada para lidar com mobilidade, saúde, educação e meio ambiente. A Inova Nexel desenvolve soluções GovTech que ajudam prefeituras a organizar dados e tomar decisões melhores para a população.",
      },
      {
        tipo: "subtitulo",
        texto: "Natureza a um passo da capital",
      },
      {
        tipo: "paragrafo",
        texto:
          "Mesmo com a expansão das pastagens, Candeias guarda trechos de floresta ricos em vida. Observadores de aves registram no município espécies como a tiriba-do-madeira e o beija-flor asa-de-sabre-cinza, e as corredeiras do rio Preto, entre lajes de pedra e mata fechada, mostram por que tanta gente atravessa a ponte em busca de sossego.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaCandeias}/corredeiras-rio-preto.webp`,
          alt: "Corredeiras do rio Preto passando entre lajes de pedra, com floresta ao fundo",
          legenda:
            "As corredeiras do rio Preto. Foto: clsbezerra / Wikimedia Commons (CC BY-SA 3.0).",
          largura: 1280,
          altura: 719,
        },
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pastaCandeias}/periquito-do-madeira.webp`,
            alt: "Periquito de peito alaranjado e asas verdes pousado em um galho fino contra o céu azul",
            legenda:
              "Tiriba-do-madeira fotografada em Candeias do Jamari. Foto: Hector Bottai / Wikimedia Commons (CC BY-SA 4.0).",
            largura: 1280,
            altura: 960,
          },
          {
            src: `${pastaCandeias}/beija-flor.webp`,
            alt: "Beija-flor de bico longo e peito acinzentado pousado em um galho fino",
            legenda:
              "Asa-de-sabre-cinza, outra espécie registrada no município. Foto: Hector Bottai / Wikimedia Commons (CC BY-SA 4.0).",
            largura: 957,
            altura: 718,
          },
        ],
      },
      {
        tipo: "paragrafo",
        texto:
          "Candeias do Jamari ainda vive à sombra da capital vizinha, mas tem identidade própria: a vila de beira de estrada que viu nascer a primeira grande usina de Rondônia e que, todo fim de semana, recebe quem procura um rio limpo para mergulhar. Para conhecer, basta pegar a BR-364, cruzar a ponte do Candeias e seguir as placas dos balneários.",
      },
    ],
  },
  {
    slug: "guajara-mirim-historia-habitantes-economia",
    categoria: "Cidades",
    titulo: "Guajará-Mirim: a Pérola do Mamoré, onde a ferrovia terminou e a fronteira começa",
    resumo:
      "Ponto final da lendária Madeira-Mamoré, vizinha da Bolívia e guardiã de um território quase todo protegido, Guajará-Mirim vive do comércio, do rio e de uma cultura que mistura indígenas, bolivianos e migrantes de todo o país.",
    data: "4 de novembro de 2026",
    dataISO: "2026-11-04",
    capa: {
      src: `${pastaGuajara}/locomotiva.webp`,
      alt: "Locomotiva a vapor preta, branca e vermelha da Estrada de Ferro Madeira-Mamoré exposta como monumento em Guajará-Mirim",
      legenda:
        "Locomotiva da Madeira-Mamoré preservada como monumento em Guajará-Mirim. Foto: Filzstift / Wikimedia Commons (CC BY-SA 3.0).",
      largura: 1280,
      altura: 851,
    },
    corpo: [
      {
        tipo: "paragrafo",
        texto:
          "Há cidades que nascem de um rio, outras de uma estrada. Guajará-Mirim nasceu das duas coisas ao mesmo tempo. Foi aqui, na margem brasileira do rio Mamoré, que terminaram os trilhos da Estrada de Ferro Madeira-Mamoré, uma das obras mais ousadas — e mais trágicas — da história da Amazônia. Do outro lado da água, a poucos minutos de barco, está a Bolívia. Entre a ferrovia, o rio e a fronteira, cresceu a cidade que os moradores chamam com orgulho de Pérola do Mamoré.",
      },
      {
        tipo: "destaques",
        itens: [
          { valor: "39,4 mil", rotulo: "habitantes (Censo 2022)" },
          { valor: "24,8 mil km²", rotulo: "de território, maior que Sergipe" },
          { valor: "93%", rotulo: "da área em unidades de conservação e terras indígenas" },
        ],
      },
      {
        tipo: "subtitulo",
        texto: "A ferrovia que custou milhares de vidas",
      },
      {
        tipo: "paragrafo",
        texto:
          "A história começa com um acordo diplomático. Pelo Tratado de Petrópolis, de 1903, o Brasil ficou com o Acre e, em troca, se comprometeu a construir uma ferrovia que contornasse as cachoeiras dos rios Madeira e Mamoré, permitindo que a borracha boliviana chegasse ao Atlântico. Os trilhos sairiam de Santo Antônio do Rio Madeira, perto de onde hoje está Porto Velho, e terminariam em Guajará-Mirim.",
      },
      {
        tipo: "paragrafo",
        texto:
          "A construção virou uma epopeia. Trabalhadores de dezenas de países abriram caminho na floresta enfrentando malária, febre amarela, enchentes e acidentes. Foram tantas as mortes que a obra ganhou o apelido de Ferrovia do Diabo. A Madeira-Mamoré foi concluída em 30 de abril de 1912 e inaugurada oficialmente em 1º de agosto daquele ano — justamente quando o preço da borracha amazônica começava a despencar diante da concorrência asiática.",
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pastaGuajara}/autoridades-efmm.webp`,
            alt: "Fotografia histórica em preto e branco de autoridades sentadas em um vagão-plataforma puxado por locomotiva a vapor na floresta",
            legenda:
              "Autoridades visitam um trecho concluído da ferrovia. Foto: Dana Merrill / Acervo do Museu Paulista da USP (domínio público).",
            largura: 1280,
            altura: 883,
          },
          {
            src: `${pastaGuajara}/trem-historico.webp`,
            alt: "Fotografia histórica em preto e branco de um trem sobre uma ponte de madeira em meio à mata",
            legenda:
              "Trem sobre ponte de madeira em plena floresta. Foto: Dana Merrill / Acervo do Museu Paulista da USP (domínio público).",
            largura: 1280,
            altura: 895,
          },
        ],
      },
      {
        tipo: "paragrafo",
        texto:
          "Em volta da estação final formou-se um povoado de ferroviários, seringueiros e comerciantes. Ele foi elevado a cidade em 1926 e virou município em 12 de julho de 1928. Em 1943, passou a fazer parte do recém-criado Território Federal do Guaporé, embrião do atual estado de Rondônia. A ferrovia funcionou, com altos e baixos, até ser desativada no início dos anos 1970. Hoje, a antiga estação abriga o Museu Histórico Municipal, e locomotivas espalhadas pela cidade lembram o tempo em que tudo girava em torno do apito do trem.",
      },
      {
        tipo: "citacao",
        texto:
          "Os trilhos da Ferrovia do Diabo terminavam aqui — e foi no ponto final da linha que a cidade começou.",
      },
      {
        tipo: "subtitulo",
        texto: "Um rio no meio, dois países na mesma rua",
      },
      {
        tipo: "paragrafo",
        texto:
          "O nome vem do tupi e, segundo a interpretação mais conhecida, significa \"cachoeira pequena\" — uma referência às corredeiras do Mamoré, em contraste com a Guajará-Açu, a \"cachoeira grande\", rio abaixo. É esse rio que separa Guajará-Mirim de Guayaramerín, na Bolívia. A travessia é feita em pequenos barcos que cruzam o Mamoré o dia inteiro, levando moradores, turistas, estudantes e mercadorias de um lado para o outro.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaGuajara}/porto-guayaramerin.webp`,
          alt: "Prédio branco e azul do terminal portuário de Guayaramerín, na Bolívia, com motos e pessoas na frente",
          legenda:
            "O terminal de passageiros de Guayaramerín, de onde partem os barcos para Guajará-Mirim. Foto: Filzstift / Wikimedia Commons (CC BY-SA 3.0).",
          largura: 1280,
          altura: 851,
        },
      },
      {
        tipo: "paragrafo",
        texto:
          "Essa vizinhança moldou a população. Segundo o Censo de 2022, Guajará-Mirim tem 39.387 habitantes, numa mistura que poucas cidades brasileiras conseguem reproduzir. A presença boliviana, sobretudo de famílias vindas do departamento de Beni, aparece no sotaque, na culinária e no comércio. No Censo de 2010, 13,6% dos moradores se declararam indígenas — uma das maiores proporções de Rondônia —, com destaque para o povo Wari', que vive nas terras indígenas do município. Somam-se a eles descendentes de seringueiros nordestinos, ferroviários e migrantes que chegaram de todo o Brasil.",
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pastaGuajara}/rio-mamore.webp`,
            alt: "Vista do alto do rio Mamoré, de águas barrentas, com uma ilha arborizada e praia de areia ao centro",
            legenda:
              "O rio Mamoré visto da cidade, com a Bolívia na outra margem. Foto: Duds Nilds / Wikimedia Commons (CC BY 3.0).",
            largura: 1280,
            altura: 960,
          },
          {
            src: `${pastaGuajara}/encontro-dos-rios.webp`,
            alt: "Encontro largo e calmo dos rios Mamoré e Beni sob céu azul, com a floresta no horizonte",
            legenda:
              "O encontro dos rios Mamoré e Beni, um dos cartões-postais do município. Foto: Edmilson Constantino / Wikimedia Commons (CC BY-SA 2.0).",
            largura: 1280,
            altura: 960,
          },
        ],
      },
      {
        tipo: "subtitulo",
        texto: "Uma economia movida pelo comércio de fronteira",
      },
      {
        tipo: "paragrafo",
        texto:
          "Se no passado o motor da economia era a borracha, hoje é o balcão. Criada pela Lei nº 8.210, de 1991, e administrada pela Suframa, a Área de Livre Comércio de Guajará-Mirim é a única de Rondônia. Os incentivos fiscais atraem compradores de toda a região e fizeram da cidade um polo de lojas de importados, eletrônicos e utilidades. Do lado boliviano, Guayaramerín também vive do comércio, e o vaivém de clientes entre as duas cidades movimenta barcos, hotéis, restaurantes e o setor de serviços.",
      },
      {
        tipo: "destaques",
        itens: [
          { valor: "88,9%", rotulo: "do PIB vem de serviços e comércio" },
          { valor: "6,8%", rotulo: "da agropecuária" },
          { valor: "4,4%", rotulo: "da indústria" },
        ],
      },
      {
        tipo: "paragrafo",
        texto:
          "Os números do IBGE mostram como a cidade depende do comércio e dos serviços, inclusive da administração pública. A indústria é pequena, e a agropecuária encontra limites naturais num município em que mais de 93% do território é protegido. Fora da área urbana, o extrativismo segue vivo: nas reservas extrativistas, famílias coletam castanha e outros produtos da floresta, pescam e mantêm uma relação com o rio que vem dos tempos dos seringais. O turismo de pesca, de natureza e de compras completa o quadro.",
      },
      {
        tipo: "inova",
        titulo: "Gestão pública também é uma questão de fronteira",
        texto:
          "Municípios como Guajará-Mirim lidam ao mesmo tempo com comércio internacional, áreas protegidas, povos indígenas e um território do tamanho de um estado. Decidir bem nesse cenário exige dados organizados e sistemas integrados. É para isso que a Inova Nexel desenvolve soluções GovTech para a gestão pública.",
      },
      {
        tipo: "subtitulo",
        texto: "Território de floresta, serra e reservas",
      },
      {
        tipo: "paragrafo",
        texto:
          "Com quase 25 mil km², Guajará-Mirim é o segundo maior município de Rondônia, atrás apenas de Porto Velho, a 372 km dali. Quase todo esse território é formado por unidades de conservação e terras indígenas — são seis terras indígenas, além de reservas extrativistas e áreas de proteção integral. Entre as paisagens mais impressionantes está a Serra dos Pacaás Novos, com paredões de rocha que se erguem sobre a floresta e abrigam algumas das nascentes mais importantes do estado.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaGuajara}/serra-pacaas-novos.webp`,
          alt: "Vista aérea da Serra dos Pacaás Novos, com paredões rochosos e floresta se estendendo até o horizonte",
          legenda:
            "Vista aérea da Serra dos Pacaás Novos, em Guajará-Mirim. Foto: Nilzomberto Leite / Wikimedia Commons (CC BY-SA 4.0).",
          largura: 1280,
          altura: 720,
        },
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pastaGuajara}/resex-barcos.webp`,
            alt: "Dois barcos pequenos navegam em um rio calmo diante de árvores altas na Reserva Extrativista Rio Pacaás Novos",
            legenda:
              "Barcos na Reserva Extrativista Rio Pacaás Novos, onde o rio é a principal estrada. Foto: Andréia Mara Costa Fortini / Wikimedia Commons (CC BY-SA 4.0).",
            largura: 1280,
            altura: 960,
          },
          {
            src: `${pastaGuajara}/resex-entardecer.webp`,
            alt: "Pôr do sol refletido nas águas escuras de um rio cercado de floresta",
            legenda:
              "Entardecer no rio Pacaás Novos. Foto: Andréia Mara Costa Fortini / Wikimedia Commons (CC BY-SA 4.0).",
            largura: 1280,
            altura: 960,
          },
        ],
      },
      {
        tipo: "subtitulo",
        texto: "O duelo que para a fronteira",
      },
      {
        tipo: "paragrafo",
        texto:
          "Todo ano, Guajará-Mirim se divide em duas cores. O Duelo na Fronteira, festival de boi-bumbá realizado desde 1995 no Bumbódromo Márcio Menacho, coloca frente a frente os bois Malhadinho e Flor do Campo, numa disputa inspirada em Parintins e julgada em 21 itens, de alegorias a toadas. A festa atrai visitantes dos dois lados do rio e foi reconhecida como patrimônio cultural imaterial de Rondônia. Em 2025, o Malhadinho conquistou o tricampeonato.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Guajará-Mirim é uma cidade que carrega mais de um século de história nos trilhos, na água e na gente. A ferrovia parou, mas a cidade seguiu em frente: virou porta de entrada para a Bolívia, vitrine do comércio de fronteira e guardiã de um dos territórios mais preservados da Amazônia. Para quem chega, o convite é sempre o mesmo — sentar na beira do Mamoré no fim da tarde e ver o sol se pôr entre dois países.",
      },
    ],
  },
  {
    slug: "rolim-de-moura-historia-habitantes-economia",
    categoria: "Cidades",
    titulo: "Rolim de Moura: a cidade que nasceu de lotes de terra e virou a capital da Zona da Mata",
    resumo:
      "Em pouco mais de quatro décadas, um projeto de colonização no meio da floresta se transformou em um polo de 56 mil habitantes que vive de leite, café, comércio e muita gente vinda de longe.",
    data: "4 de novembro de 2026",
    dataISO: "2026-11-04",
    capa: {
      src: `${pastaRolim}/casa-de-madeira-ipe.webp`,
      alt: "Ipê-amarelo florido cobre o telhado e o chão de terra em frente a uma casa de madeira em Rolim de Moura",
      legenda:
        "Ipê-amarelo em flor diante de uma casa de madeira, retrato dos primeiros tempos da cidade. Foto: Valdison Aparecido Gil / Wikimedia Commons (CC BY-SA 4.0).",
      largura: 960,
      altura: 640,
    },
    corpo: [
      {
        tipo: "paragrafo",
        texto:
          "No fim dos anos 1970, onde hoje passam avenidas largas e arborizadas, havia mata fechada, picadas abertas a facão e famílias inteiras desembarcando de caminhões com a mudança amarrada na carroceria. Elas vinham atrás de uma promessa simples e poderosa: um pedaço de terra para plantar. Dessa aposta coletiva nasceu Rolim de Moura, hoje a sexta cidade mais populosa de Rondônia e conhecida em toda a região como a capital da Zona da Mata rondoniense.",
      },
      {
        tipo: "destaques",
        itens: [
          { valor: "56,4 mil", rotulo: "habitantes (Censo 2022)" },
          { valor: "1983", rotulo: "ano da emancipação" },
          { valor: "402 km", rotulo: "de distância de Porto Velho" },
        ],
      },
      {
        tipo: "subtitulo",
        texto: "Um nome do século XVIII para uma cidade do século XX",
      },
      {
        tipo: "paragrafo",
        texto:
          "O nome da cidade é bem mais antigo que ela. Ele homenageia Dom Antônio Rolim de Moura Tavares, o Conde de Azambuja, nobre português que governou a Capitania de Mato Grosso no século XVIII. Foi ele quem fundou, em 1752, Vila Bela da Santíssima Trindade, às margens do rio Guaporé, e organizou a presença portuguesa naquela fronteira distante. Mais de dois séculos depois, quando o governo precisou batizar o novo núcleo de colonos, recorreu ao homem que primeiro administrou o Vale do Guaporé.",
      },
      {
        tipo: "paragrafo",
        texto:
          "A cidade propriamente dita começou a tomar forma em 1979, com o Projeto de Colonização Rolim de Moura, implantado pelo INCRA como uma extensão do Projeto Integrado de Colonização Gy-Paraná. Milhares de famílias receberam lotes rurais. O que era para ser um assentamento agrícola cresceu rápido demais para continuar sendo apenas isso: em 5 de agosto de 1983, pelo Decreto-Lei estadual nº 71, Rolim de Moura foi desmembrada de Cacoal e virou município.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaRolim}/rotatoria-centro.webp`,
          alt: "Rotatória gramada no centro de Rolim de Moura com prédios comerciais ao fundo e um motociclista em primeiro plano",
          legenda:
            "A rotatória do centro, com o comércio ao redor: em poucas décadas o assentamento virou cidade. Foto: Franklin Baldo / Wikimedia Commons (CC BY 2.5).",
          largura: 640,
          altura: 480,
        },
      },
      {
        tipo: "subtitulo",
        texto: "Gente de todo canto do Brasil",
      },
      {
        tipo: "paragrafo",
        texto:
          "Quem caminha por Rolim de Moura percebe logo: quase todo mundo tem um sotaque, uma receita de família ou uma história de estrada que começa em outro estado. Os pioneiros vieram principalmente do Sul e do Sudeste — paranaenses, capixabas, mineiros, paulistas — e se misturaram a nordestinos e a quem já vivia em Rondônia. Esse encontro moldou o jeito de ser do rolimourense: trabalhador, festeiro e muito ligado à terra.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Hoje são 56.406 moradores, segundo o Censo de 2022, espalhados por uma área de cerca de 1.458 km² — maior que a cidade do Rio de Janeiro. O município é formado pela sede e pelo distrito de Nova Estrela de Rondônia, e registra Índice de Desenvolvimento Humano de 0,700, considerado alto pelo PNUD. A vida social gira em torno das igrejas, das feiras livres, dos campos de futebol e das festas que marcam o calendário.",
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pastaRolim}/avenida-arborizada.webp`,
            alt: "Avenida asfaltada com canteiro central arborizado e acostamento de terra vermelha em Nova Estrela de Rondônia",
            legenda:
              "Avenida arborizada no distrito de Nova Estrela, com a terra vermelha típica da região. Foto: Aldair Sales / Wikimedia Commons (CC BY-SA 3.0).",
            largura: 1280,
            altura: 960,
          },
          {
            src: `${pastaRolim}/cine-columbia.webp`,
            alt: "Fachada azul do Cine Columbia, cinema de rua de Rolim de Moura, com cartazes de filmes na entrada",
            legenda:
              "O Cine Columbia, um dos pontos de encontro da cidade. Foto: Dudurr / Wikimedia Commons (CC BY-SA 3.0).",
            largura: 500,
            altura: 375,
          },
        ],
      },
      {
        tipo: "citacao",
        texto:
          "Em Rolim de Moura, quase todo mundo tem uma história de estrada que começa em outro estado — e termina aqui.",
      },
      {
        tipo: "subtitulo",
        texto: "Leite, café e um balcão que atende a região inteira",
      },
      {
        tipo: "paragrafo",
        texto:
          "A economia de Rolim de Moura nasceu no campo, e o campo continua sendo seu motor. A pecuária leiteira é uma das atividades mais importantes do município, que integra a bacia leiteira de Ji-Paraná e Rolim de Moura, a principal produtora de leite de Rondônia. Em volta das propriedades rurais formou-se uma cadeia de laticínios, frigorífico e indústrias que transformam a produção local. Nas lavouras, o destaque é o café — sobretudo o robusta, que fez da Zona da Mata uma das regiões cafeeiras mais relevantes do estado —, ao lado de milho, arroz, feijão, mandioca e banana.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Mas quem olha só para o pasto e para o cafezal perde metade da história. Com o crescimento, a cidade virou um entreposto regional: moradores de municípios vizinhos como Santa Luzia d'Oeste, Alta Floresta d'Oeste, Novo Horizonte do Oeste e Castanheiras vêm até Rolim de Moura para comprar, se consultar, estudar e resolver a vida. Por isso, os serviços e o comércio respondem hoje pela maior fatia de um PIB de cerca de R$ 1,4 bilhão, segundo o IBGE.",
      },
      {
        tipo: "destaques",
        itens: [
          { valor: "64%", rotulo: "do PIB vem de serviços e comércio" },
          { valor: "20%", rotulo: "da indústria" },
          { valor: "16%", rotulo: "da agropecuária" },
        ],
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaRolim}/acesso-br-364.webp`,
          alt: "Trevo de acesso na BR-364, em meio a pastagens, que leva a Rolim de Moura",
          legenda:
            "O trevo da BR-364 que leva a Rolim de Moura: é por essa ligação que a produção da Zona da Mata ganha o resto do país. Foto: Aldair Sales / Wikimedia Commons (CC BY-SA 3.0).",
          largura: 1024,
          altura: 768,
        },
      },
      {
        tipo: "inova",
        titulo: "Cidades que crescem rápido precisam de gestão à altura",
        texto:
          "Em pouco mais de 40 anos, Rolim de Moura passou de assentamento a polo regional. Municípios com essa velocidade de crescimento precisam de dados confiáveis e de sistemas que acompanhem o ritmo da população. É isso que a Inova Nexel entrega com soluções GovTech para a gestão pública.",
      },
      {
        tipo: "subtitulo",
        texto: "Cidade universitária e de festa",
      },
      {
        tipo: "paragrafo",
        texto:
          "A vocação agrícola também chegou à sala de aula. O campus da Universidade Federal de Rondônia (UNIR) em Rolim de Moura oferece cursos como Agronomia, Engenharia Florestal e Medicina Veterinária, formando profissionais que voltam para as fazendas, as agroindústrias e os órgãos públicos da região. Pesquisas feitas ali, sobre leite, café e floresta, ajudam a entender — e a melhorar — a própria economia local.",
      },
      {
        tipo: "paragrafo",
        texto:
          "Quando chega a hora de comemorar, a cidade também sabe fazer barulho. A Feira Agropecuária de Rolim de Moura reúne shows, queima de fogos e rodeio profissional, enquanto a tradicional Festa do Milho celebra a culinária herdada dos pioneiros com pamonha, curau e bolo. No futebol, o Estádio Municipal José Ângelo Cassol, o Cassolão, é o palco das grandes partidas.",
      },
      {
        tipo: "midia",
        midia: {
          src: `${pastaRolim}/estadio-cassolao.webp`,
          alt: "Gramado e arquibancada coberta do Estádio Municipal José Ângelo Cassol, o Cassolão, em Rolim de Moura",
          legenda:
            "O Cassolão, estádio municipal de Rolim de Moura. Foto: Rolim Notícias / Wikimedia Commons (CC BY 3.0).",
          largura: 1280,
          altura: 782,
        },
      },
      {
        tipo: "subtitulo",
        texto: "Natureza que pinta a paisagem de amarelo",
      },
      {
        tipo: "paragrafo",
        texto:
          "Entre agosto e setembro, no auge da estação seca, Rolim de Moura muda de cor. Os ipês-amarelos florescem nas ruas e quintais, derramam pétalas sobre telhados e calçadas e viram cenário obrigatório de fotos. Nos arredores, lagoas cercadas de palmeiras lembram que a cidade, por mais urbana que tenha ficado, ainda vive cercada pela exuberância da Amazônia.",
      },
      {
        tipo: "galeria",
        midias: [
          {
            src: `${pastaRolim}/ipe-amarelo.webp`,
            alt: "Galhos de ipê-amarelo floridos contra o céu azul, com dois ninhos de pássaro pendurados",
            legenda:
              "Ipê-amarelo florido, com ninhos de guaxe pendurados nos galhos. Foto: Valdison Aparecido Gil / Wikimedia Commons (CC BY-SA 4.0).",
            largura: 1280,
            altura: 857,
          },
          {
            src: `${pastaRolim}/lagoa-palmeiras.webp`,
            alt: "Passarela de madeira sobre uma lagoa cercada de palmeiras, levando a uma cabana de palha",
            legenda:
              "Cabana em lagoa cercada de palmeiras, no caminho para Rolim de Moura. Foto: Nilson Antônio Luz Júnior / Wikimedia Commons (CC BY-SA 3.0).",
            largura: 1280,
            altura: 848,
          },
        ],
      },
      {
        tipo: "paragrafo",
        texto:
          "A história de Rolim de Moura ainda está sendo escrita. A cidade que começou com lotes demarcados na mata é hoje um centro regional com universidade, indústria, comércio forte e uma população que não esquece de onde veio. Para quem chega, a recepção costuma vir em forma de café passado na hora — e, quase sempre, de uma boa história de estrada.",
      },
    ],
  },
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
