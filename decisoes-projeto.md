# Decisões do projeto — Blocomax

Complementa `briefing-site-institucional.md`. Em caso de conflito, vale este arquivo.

## Stack

- Astro + Vue: seções em componentes `.astro`; Vue só nas partes interativas (galeria, menu mobile).
- Hospedagem no Firebase Hosting, com repositório privado `EduardoPisoni/blocomax-institucional` no GitHub (conta pessoal, host SSH `github-personal`). A raiz do repositório é a pasta do projeto, com o site em `blocomax-site/`.
- Por enquanto é só um ambiente de testes: cada push na `main` publica o site, e o cabeçalho `X-Robots-Tag: noindex` em `firebase.json` o mantém fora dos buscadores. Remover esse cabeçalho na publicação oficial.
- Projeto Firebase: `blocomax-institucional`.

## Escopo do MVP

- Duas páginas: inicial (`/`) e contato (`/contato`). As chamadas de orçamento levam ao WhatsApp e à página de contato.
- A página de contato tem três seções: WhatsApp principal, demais formas de contato e Instagram.
- Terrenos e casas: apenas texto informativo, sem listagem de imóveis, com chamada para orçamento.
- Portfólio: 3 projetos de casas com dados fictícios, identificados como ilustrativos. Serão substituídos pelos reais depois.
- Orçamento: somente por WhatsApp, com mensagem pronta. Sem formulário.
- Sem mapa: lista das cidades atendidas na região de Taquara/RS.
- Fotos: imagens reais em `public/fotos/`. Onde ainda não há imagem, ficam espaços reservados, estilo wireframe.

## Conteúdo

- Frase principal: "Você sonha. Nós construímos!" (presente nas imagens da marca).
- Não inventar números, prêmios ou tempo de experiência.
- Experiência deve ser atribuída aos sócios, não à empresa (que tem 3 anos).
- Sugestões de seção: "Como funciona" (do terreno à entrega da chave), cidades atendidas.

## Decisões visuais e de acessibilidade

- Números das etapas: texto preto `#141414` sobre o laranja `#FF8A00` (cerca de 7,8:1).
- Ícones e ilustrações são desenhos próprios: traço na cor do texto e detalhe em `#FF8A00`, sempre decorativos (`aria-hidden`), com o texto ao lado carregando a informação. Ícones ficam em `src/data/icones.ts`.
- O laranja `#FF8A00` fica para o logo, linhas, detalhes e texto sobre fundo escuro. Texto branco sobre ele fica em cerca de 2,4:1 e reprova.
- Faixas de destaque: gradiente laranja com o lado escuro à esquerda (`--gradiente-laranja-invertido`, de `#E8690A` a `#FF9D1F`). Nos atalhos do hero, texto preto `#141414` (contraste de 5,7:1 ou mais). Na faixa de orçamento, texto e link brancos por escolha da marca, com contraste de 2,1:1 a 3,2:1, abaixo do mínimo.
- Botões que abrem o WhatsApp: fundo `#075E54` com texto branco (cerca de 7,7:1) e ícone `#25D366`. Botão flutuante: fundo `#25D366` com ícone branco, igual ao original do WhatsApp (escolha da marca, com contraste de cerca de 2:1). O hover do flutuante usa `#128C7E`. Botões sem borda.
- Hierarquia de botões (`src/components/Botao.astro`), da maior para a menor ênfase: primário (gradiente laranja, texto branco por escolha da marca, com contraste de 2,1:1 a 3,2:1, abaixo do mínimo de 4,5:1), secundário (preto, ou branco com `inverso` sobre fundo preto), suave (`#FFF3E0` com texto `#A84C00`, 5,2:1), contorno, fantasma e link. O WhatsApp fica fora da hierarquia: verde só em botões que abrem o WhatsApp. Exceções: "Pedir orçamento" do cabeçalho e os botões dos cards de serviços abrem o WhatsApp, mas são primários e sem ícone. Um primário por bloco e nunca sobre laranja.
- Gradientes: variáveis `--gradiente-*` em `src/styles/global.css`, cada uma com a cor de texto indicada no comentário e contraste mínimo de 4,5:1 em toda a transição. `--gradiente-whatsapp` só em elementos que abrem o WhatsApp.
- Hero: a partir de 60rem de largura ocupa a primeira tela inteira, descontando o cabeçalho, com teto de 60rem de altura. A foto encolhe conforme a altura da tela para a faixa de caminhos caber. No celular a altura segue o conteúdo.
- Efeitos de mouse sobre: cards usam a classe global `.card-elevavel`, que sobe 4px e reforça a sombra; botões crescem em vez de subir. Movimento só dentro de `@media (hover: hover) and (prefers-reduced-motion: no-preference)`. Card com `.card-elevavel` não pode ter `overflow: hidden`: quem recorta os cantos é o conteúdo.
- As cores ficam em `src/styles/global.css`. Destaques em laranja: variáveis `--acao`. Botões de WhatsApp: variáveis `--whatsapp`.

## Pendências

- Logo limpo em SVG ou PNG transparente: os arquivos atuais trazem telefones ou outras informações junto.
- Fotos reais: faltam as fotos internas das galerias.
- Dados reais: número de obras e dados dos 3 projetos.
- Confirmar se os números de André e Nedir são WhatsApp ou telefone.
- Confirmar se o CNPJ pode aparecer no rodapé.
- Registrar o domínio (ex.: `blocomax.com.br`).
- Política de privacidade e aviso de cookies antes de ativar o Google Analytics (LGPD).
