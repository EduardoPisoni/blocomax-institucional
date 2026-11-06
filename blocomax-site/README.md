# Site Blocomax

Site institucional da Blocomax Incorporadora e Construtora (Taquara/RS), com página inicial e página de contato.
Feita com Astro: as seções são componentes `.astro`, e o Vue entra só no menu mobile e na galeria.

## Comandos

| Comando           | O que faz                                |
| ----------------- | ---------------------------------------- |
| `npm install`     | Instala as dependências                  |
| `npm run dev`     | Abre o site em `http://localhost:4321`   |
| `npm run check`   | Verifica os tipos dos arquivos `.astro`  |
| `npm run build`   | Gera o site final em `dist/`             |
| `npm run preview` | Serve o conteúdo de `dist/` localmente   |

Requer Node 22.23.4 ou superior.

## Onde editar

- `src/data/site.ts`: contatos, mensagens do WhatsApp, etapas, projetos e cidades.
- `src/components/`: uma seção por arquivo. A ordem das seções está em `src/pages/index.astro` e `src/pages/contato.astro`.
- `src/styles/global.css`: cores, espaçamentos e estilos compartilhados.

## Referência de estilos

A página `/estilos` mostra cores, tipografia, raios, sombras e os componentes com suas variações.
Ela usa os componentes reais e lê os tokens de `global.css`, então acompanha as mudanças sem manutenção.
Fica fora do menu e marcada como `noindex`, mas é publicada junto com o site. Para deixá-la fora da
publicação, remova `src/pages/estilos.astro`.

## Antes de publicar

Estes itens são provisórios e estão visíveis no site:

- **Experiência dos sócios e prêmios:** marcadores em `src/components/Sobre.astro`.
- **Projetos:** os dados dos 3 são fictícios. Depois de trocar pelos reais, remova o aviso e as etiquetas em `src/components/Obras.astro`.
- **Fotos:** coloque os arquivos em `public/fotos/` e preencha `src` em cada foto em `src/data/site.ts`. A primeira foto da lista é a capa. Falta a capa do Sobrado, as fotos internas das galerias e a foto da seção Sobre, que usa `EspacoFoto.astro`.
- **Instagram:** os 3 espaços de publicação em `src/components/ContatoInstagram.astro` são provisórios.
- **Telefones de André e Nedir:** aparecem como ligação até confirmar se também atendem por WhatsApp.
- **Logo:** recortado do PNG original, sem os telefones. Trocar `src/assets/logo.png`, `public/favicon.png`, `public/apple-touch-icon.png` e `public/og.png` quando houver a versão limpa.
- **Domínio:** o endereço em `astro.config.mjs` é provisório.

Para achar os marcadores, busque por `Pendente` em `src/`.

## Publicação

Cada push na `main` gera o site e publica no Firebase Hosting, pelo arquivo
`.github/workflows/deploy-testes.yml` na raiz do repositório.

Por enquanto é um ambiente de testes, em https://blocomax-site.web.app. O cabeçalho
`X-Robots-Tag: noindex` em `firebase.json` o mantém fora dos buscadores: remova-o na publicação oficial.

Antes de ativar o Google Analytics, publique a política de privacidade e o aviso de cookies (LGPD).
