# SEO e GEO: correção completa do site

Auditoria confirmada no código. Abaixo o que será corrigido, incluindo problemas equivalentes encontrados na varredura além dos apontados no relatório.

## 1. Domínio canônico errado (crítico)

Hoje o código fixa `https://linhares-nexus-global.lovable.app` em:
- `src/lib/blog/i18n-strings.ts` (`siteOrigin`) — usado no canonical, og:url e JSON-LD de todos os posts
- `src/components/blog/ShareButtons.tsx` — links de WhatsApp/LinkedIn
- `src/routes/sitemap[.]xml.tsx` (`BASE_URL`)
- `src/lib/blog/tiptap-render.tsx` (detecção de link interno)
- `src/routes/__root.tsx` (og:image apontando para screenshot de preview)

Correção: um único helper `SITE_ORIGIN = "https://linhareslaw.com"` usado por todos esses pontos, e og:image institucional próprio (imagem da marca) no lugar do screenshot de preview.

Além disso, as páginas institucionais usam canonical/og:url **relativos** (`src/lib/seo.ts`), o que enfraquece o sinal. Passarão a ser URLs absolutas em linhareslaw.com, com hreflang absoluto também.

## 2. Rotas de serviços quebradas em EN/ES (404)

- PT: `/areas-de-atuacao/...` · EN/ES: `/servicos/...`
- O troca-idioma (`LanguageSwitcher`) apenas prefixa o idioma no caminho atual, gerando `/en/areas-de-atuacao/eb2-niw` → 404
- O CTA do hero (`Home.tsx`, "Explore our strategies") usa `/areas-de-atuacao` fixo em todos os idiomas → 404 em EN/ES

Correção: mapa de equivalência de caminhos entre idiomas (`/areas-de-atuacao` ↔ `/servicos`, e também os caminhos de blog já divergentes: `busca`/`search`/`busqueda`, `categoria`/`category`, `autor`/`author`, `profissao`/`profession`/`profesion`). O switcher e todos os links passam a traduzir o caminho antes de trocar o idioma. O CTA do hero passa a usar o helper `servicesHref(locale)` que já existe.

Preventivo: redirecionamentos de `/en/areas-de-atuacao/*` e `/es/areas-de-atuacao/*` para o caminho correto, para não perder links já divulgados.

## 3. Dados estruturados (JSON-LD)

Hoje existe apenas um `LegalService` genérico na raiz e FAQPage nas páginas de visto. Será adicionado:
- **LegalService/LocalBusiness** completo na home: endereços dos 4 escritórios, telefone, idiomas atendidos, áreas de atuação, sameAs (redes sociais)
- **Attorney/Person** em cada perfil da equipe, vinculado à organização
- **Service** em cada página de visto (EB-2 NIW, EB-3, L-1, etc.)
- **BreadcrumbList** em todas as páginas internas (hoje só no artigo do blog)
- **FAQPage** também nas páginas onde há FAQ sem schema
- **WebSite + SearchAction** na raiz
- Artigos do blog: manter `Article`, acrescentando `inLanguage`, `wordCount` e autor com `url`

## 4. FAQ invisível para o crawler

Os accordions (páginas de visto, hub de serviços e FAQ de artigos) só montam a resposta ao clicar. Correção: renderizar todas as respostas no HTML (accordion com conteúdo sempre presente no DOM, apenas visualmente colapsado), preservando o comportamento visual atual.

## 5. Favicon e ícones

Hoje só existe `public/favicon.ico` padrão. Será gerado a partir da marca Linhares Law: `favicon.png` (32/192/512), `apple-touch-icon.png` e `site.webmanifest`, referenciados no `__root.tsx` — portanto válidos em todas as páginas.

## 6. Outros itens encontrados na varredura

- **H1 da home sem termo de busca**: reescrever o H1 (PT/EN/ES) incorporando "advogado de imigração americana" / "U.S. immigration lawyer" / "abogado de inmigración" sem quebrar o tom institucional
- **`<html lang="en">` fixo** no root, mesmo em páginas PT/ES: passará a refletir o idioma da rota
- **og:image ausente** na maioria das páginas institucionais e de visto: imagem institucional padrão + imagem própria onde já existe hero relevante
- **Alt text**: revisão das imagens decorativas e de conteúdo (equipe, prêmios, mídia)
- **Sitemap**: base URL corrigida, inclusão das páginas de visto por idioma (hoje ausentes) e das taxonomias do blog
- **robots.txt**: `Sitemap:` apontando para linhareslaw.com
- **llms.txt** (GEO): atualização com o domínio correto, estrutura de serviços e idiomas, para leitura por LLMs
- **Títulos/descrições**: varredura de duplicados e de comprimento fora do ideal em todas as rotas

## Detalhes técnicos

- Novo módulo `src/lib/site.ts` com `SITE_ORIGIN` e `absUrl(path)`; `siteOrigin()` do blog passa a reexportá-lo
- Novo módulo `src/i18n/paths.ts` com o mapa de caminhos por idioma e `translatePath(from, to, pathname)`
- `src/lib/seo.ts` passa a emitir canonical/og:url/hreflang absolutos e aceita blocos JSON-LD por rota
- Novo `src/lib/schema.ts` centralizando os geradores de JSON-LD (organização, pessoa, serviço, breadcrumb, FAQ)
- Accordions: usar as props do Radix que mantêm o conteúdo montado, com `hidden`/altura zero via CSS
- Rotas de redirecionamento para os caminhos legados EN/ES
