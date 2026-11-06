import type { NomeIcone } from './icones';

/**
 * Dados da empresa e conteúdo do site. Tudo o que muda com frequência fica aqui.
 */

const whatsappNumero = '5551981021579';

/** Link de WhatsApp com a mensagem já preenchida. */
export const whatsappLink = (mensagem: string) =>
  `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`;

export const mensagens = {
  geral: 'Olá! Vim pelo site da Blocomax e gostaria de pedir um orçamento.',
  construcao: 'Olá! Vim pelo site da Blocomax e gostaria de um orçamento para construir minha casa.',
  incorporacao: 'Olá! Vim pelo site da Blocomax e gostaria de saber sobre terrenos e casas prontas disponíveis.',
  projeto: (obra: string) =>
    `Olá! Vi o projeto "${obra}" no site da Blocomax e gostaria de um orçamento para algo parecido.`,
};

export const empresa = {
  nome: 'Blocomax',
  nomeCompleto: 'Blocomax Incorporadora e Construtora',
  slogan: 'Você sonha. Nós construímos!',
  descricao:
    'Incorporadora e construtora de casas em Taquara/RS. Terreno, projeto com arquiteto parceiro e obra com a mesma equipe. Peça seu orçamento pelo WhatsApp.',
  cidade: 'Taquara/RS',
  email: 'blocomax@gmail.com',
  telefoneExibicao: '(51) 9 8102-1579',
  telefoneLink: 'tel:+5551981021579',
  horario: 'Segunda a sexta, das 8h às 18h30',
  horarioSchema: { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '08:00', fecha: '18:30' },
  instagramUrl: 'https://www.instagram.com/blocomax.construtora/',
  instagramUsuario: '@blocomax.construtora',
};

/** Pendente: confirmar se estes números também atendem por WhatsApp. Por ora, só ligação. */
export const socios = [
  { nome: 'André', telefoneExibicao: '(51) 9 8531-1339', telefoneLink: 'tel:+5551985311339' },
  { nome: 'Nedir', telefoneExibicao: '(51) 9 9682-6039', telefoneLink: 'tel:+5551996826039' },
];

export const navegacao = [
  { href: '/#servicos', rotulo: 'Serviços' },
  { href: '/#como-funciona', rotulo: 'Como funciona' },
  { href: '/#obras', rotulo: 'Obras' },
  { href: '/#sobre', rotulo: 'Sobre' },
  { href: '/contato', rotulo: 'Contato' },
];

/** `texto` aceita HTML: os trechos importantes vão em <strong>. */
export const passos: { titulo: string; texto: string; icone: NomeIcone }[] = [
  {
    titulo: 'Conversa inicial',
    icone: 'conversa',
    texto: 'Você conta pelo WhatsApp <strong>o que quer construir</strong>, onde e qual é o seu momento. Ainda não tem tudo definido? Sem problema.',
  },
  {
    titulo: 'Terreno',
    icone: 'terreno',
    texto: 'Se você já tem terreno, <strong>avaliamos juntos</strong>. Se ainda não tem, <strong>mostramos as opções</strong> que a Blocomax tem à venda.',
  },
  {
    titulo: 'Projeto',
    icone: 'projeto',
    texto: 'Nosso arquiteto parceiro desenha a casa de acordo com <strong>a sua família, o terreno e o seu orçamento</strong>.',
  },
  {
    titulo: 'Orçamento e contrato',
    icone: 'contrato',
    texto: 'Você recebe os valores e o que está incluído <strong>antes de decidir</strong>. Com tudo combinado, a obra entra na agenda.',
  },
  {
    titulo: 'Obra',
    icone: 'obra',
    texto: 'A nossa equipe executa a construção, e você acompanha cada etapa com um <strong>contato direto</strong>.',
  },
  {
    titulo: 'Entrega da chave',
    icone: 'chave',
    texto: 'Vistoriamos a casa com você e <strong>entregamos a chave</strong>.',
  },
];

export interface Foto {
  /** Caminho da imagem real. Enquanto vazio, a galeria mostra um espaço reservado. A primeira foto é a capa. */
  src?: string;
  legenda: string;
  /** Descrição da imagem para leitores de tela. Sem ela, usa a legenda. */
  alt?: string;
}

export interface Projeto {
  nome: string;
  cidade: string;
  tipo: string;
  area: string;
  quartos: string;
  resumo: string;
  fotos: Foto[];
}

/** Dados fictícios: substituir pelas obras reais e remover o aviso em Obras.astro. */
export const projetos: Projeto[] = [
  {
    nome: 'Casa térrea com varanda',
    cidade: 'Taquara/RS',
    tipo: 'Casa térrea em alvenaria',
    area: '85 m²',
    quartos: '2 quartos',
    resumo: 'Telhado de cerâmica com beiral e vigas de madeira aparentes, portas e janelas venezianas de madeira e varanda coberta na lateral.',
    fotos: [
      {
        src: '/fotos/casa4.webp',
        legenda: 'Fachada concluída',
        alt: 'Casa térrea cinza com janelas e porta venezianas de madeira, telhado de cerâmica e varanda coberta na lateral',
      },
      { legenda: 'Planta do projeto' },
      { legenda: 'Obra em andamento' },
      { legenda: 'Sala e cozinha' },
    ],
  },
  {
    nome: 'Casa com platibanda',
    cidade: 'Taquara/RS',
    tipo: 'Casa térrea em alvenaria',
    area: '70 m²',
    quartos: '2 quartos',
    resumo: 'Fachada de linhas retas, com platibanda escura, coluna central revestida em pedra e porta de entrada em madeira.',
    fotos: [
      {
        src: '/fotos/casa2.webp',
        legenda: 'Fachada concluída',
        alt: 'Casa térrea moderna cinza com platibanda escura e coluna revestida em pedra',
      },
      { legenda: 'Planta do projeto' },
      { legenda: 'Obra em andamento' },
      { legenda: 'Sala' },
    ],
  },
  {
    nome: 'Sobrado em terreno estreito',
    cidade: 'Taquara/RS',
    tipo: 'Sobrado em alvenaria',
    area: '75 m²',
    quartos: '2 quartos',
    resumo: 'Dois pavimentos para aproveitar um terreno estreito, com volumes escuros na fachada e uma janela alta de vidro.',
    fotos: [
      {
        src: '/fotos/casa3.webp',
        legenda: 'Fachada concluída',
        alt: 'Sobrado moderno bege com volumes cinza-escuros, janela alta de vidro e muro de tijolos à frente',
      },
      { legenda: 'Planta do projeto' },
      { legenda: 'Obra em andamento' },
      { legenda: 'Escada e sala' },
    ],
  },
];

export const cidades = ['Taquara', 'Parobé', 'Igrejinha', 'Três Coroas', 'Rolante', 'Sapiranga'];
