# Blog: nova estrutura de leitura, recorte de imagem e slugs traduzidos

## 1. Nova estrutura da página de publicação

Modelo inspirado no exemplo enviado:

```text
+--------------------------------------------------------------+
| [categoria]                          |  imagem de capa       |
| Título da publicação                 |  (proporção 16:9,     |
| autor · data · tempo de leitura      |   altura limitada)    |
+--------------------------------------------------------------+
| SIDEBAR (fixa)        |  CORPO DO ARTIGO                     |
| Últimas Publicações   |  resumo + texto + FAQ                |
| Neste artigo (índice) |  autor no fim                        |
| CTA "Fale Conosco"    |  Continue lendo (relacionados)       |
+--------------------------------------------------------------+
```

Mudanças:
- Cabeçalho em duas colunas: à esquerda categoria, título, autor/data/leitura; à direita a capa dentro de um contêiner com proporção fixa (16:9) e altura máxima, nunca mais ocupando a tela inteira. No mobile a capa vem acima do título, também com proporção fixa.
- Fundo do cabeçalho claro (como no exemplo), mantendo a paleta institucional (azul #062443 nos títulos, dourado rgb(179,134,66) nos rótulos).
- Sidebar à esquerda, fixa (sticky) durante a rolagem, com: "Últimas Publicações" (3 a 4 posts com miniatura e data), índice "Neste artigo" e o card de CTA. Ou seja, CTA e últimas publicações passam a acompanhar a leitura, não só no fim.
- O índice deixa de exigir 1.500 palavras: aparece sempre que houver 2 ou mais títulos.
- Corpo do texto com largura de leitura confortável, tipografia e espaçamento revistos (parágrafos, subtítulos, listas, citações, imagens internas com proporção limitada).
- CTA e bloco do autor permanecem no fim do texto, seguidos de "Continue lendo".
- Vale para as três línguas (PT, EN, ES), com os mesmos componentes.

## 2. Recorte de imagem no CMS

- No upload da capa, abre um modal de recorte com proporção pré-definida 16:9 (a mesma usada na exibição), com zoom e arraste.
- O recorte é aplicado no navegador antes do envio: redimensiona para 1600x900, converte para WebP com compressão, e só então sobe para o storage. Isso resolve peso e proporção de uma vez.
- Mesma ferramenta disponível para imagens inseridas dentro do texto (proporções 16:9 e 4:3) e para fotos de autor (1:1).

## 3. Slugs traduzidos

Hoje existe um único slug (português) usado nas três línguas.

- Passa a existir um slug por idioma, gravado junto com a tradução do post.
- No editor, cada aba de idioma ganha o campo de slug, preenchido automaticamente a partir do título daquele idioma (e editável). A tradução por IA também gera o slug em inglês/espanhol.
- Posts já existentes recebem, na migração, o slug atual como valor inicial dos três idiomas; ao traduzir/salvar, os novos slugs assumem.
- Leitura pública passa a buscar por (idioma, slug); URLs antigas continuam funcionando com redirecionamento permanente para o slug do idioma.
- Canonical, hreflang, sitemap, links internos, posts relacionados e destaques na home passam a usar o slug do idioma correto.

## Detalhes técnicos

- `src/components/blog/pages/BlogArticlePage.tsx`: novo layout `grid lg:grid-cols-[280px_minmax(0,1fr)]`, sidebar `sticky top-24`; capa em `aspect-[16/9] max-h-[420px] object-cover`.
- Componentes: reescrever `ArticleHeader` (duas colunas), `TableOfContents` (limiar reduzido), novo `SidebarLatestPosts`, `ArticleCTA` em variante compacta para sidebar; ajustes de tipografia em `ArticleBody`/`tiptap-render`.
- Nova função pública `getLatestPosts(locale, limit, excludeId)` em `src/lib/blog/public.functions.ts`, carregada no loader das rotas de artigo (PT/EN/ES).
- Recorte: dependência `react-easy-crop` + canvas para exportar WebP; novo `src/components/admin/ImageCropDialog.tsx` usado por `ImageUploader` e pelo `TipTapEditor`.
- Migração: coluna `slug` em `post_translations` com `unique (locale, slug)`, backfill a partir de `posts.slug`; `posts.slug` mantido como slug canônico/legado. Atualizar `posts.functions.ts`, `translate.server.ts`, `public.functions.ts` (`getPostBySlug` por locale+slug com fallback), `links.ts`, `article-head.ts`, `sitemap[.]xml.tsx`, `home-posts.ts` e `PostEditorContent.tsx`.
