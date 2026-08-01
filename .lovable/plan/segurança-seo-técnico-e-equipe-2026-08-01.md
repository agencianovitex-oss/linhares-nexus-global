# Segurança, SEO técnico e equipe

Plano único cobrindo os três blocos de segurança, as nove correções de SEO/usabilidade e as atualizações da equipe.

## A. Equipe (fotos e nova colaboradora)

- Heitor (III. Paralegals): adicionar a foto enviada (hoje sem retrato).
- Renata Liberman: substituir o retrato atual pela nova foto.
- Andressa Hughes: novo registro em IV. Legal Assistants, cargo "Legal Assistant".
- As três imagens entram como assets de CDN otimizados (WebP, largura máxima do slot exibido).

## B. Segurança

### B1. Fechar cadastro público e blindar o painel
- Remover o modo "Criar nova conta" da tela de login (`/auth`): sobra e-mail/senha e "Continuar com Google". O fluxo de recuperação de senha continua.
- O portão do painel passa a validar **cargo no servidor**: uma função de servidor autenticada consulta `user_roles` e só libera quem tiver `admin` ou `editor`. Sem papel válido → redireciona para a home. Continua valendo o portão de sessão já existente.
- Desativar o cadastro público de e-mail no backend de autenticação (feito por ferramenta, não manual).

### B2. Cabeçalhos de segurança
- Middleware de requisição adiciona a todas as respostas de página, exatamente como especificado: `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options: DENY`, `Content-Security-Policy: frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'` e `Permissions-Policy`. Sem restrições de `default-src`/`script-src`/`connect-src`.

### B3. Auditoria de RLS para a chave pública
- Auditoria de todas as tabelas do schema public; migração que:
  - confirma RLS habilitado em todas;
  - deixa para `anon` apenas SELECT das linhas públicas (`posts` só `status = 'published'`; traduções, categorias, autores, profissões, tags, vínculos, páginas e prêmios apenas linhas publicadas/ativas);
  - remove qualquer política de escrita para `anon` e executa `revoke insert, update, delete ... from anon` nas tabelas de conteúdo;
  - confirma `user_roles`, `profiles` e `team_members` sem nenhum acesso `anon`.
- Toda escrita continua pelo painel autenticado (funções de servidor).
- Entrego a lista final de políticas por tabela.

## C. SEO técnico

1. **Domínio único em www** — constante `SITE_ORIGIN = https://www.linhareslaw.com` como fonte única para canonical, og:url, hreflang, sitemap, robots.txt, llms.txt e todos os campos de URL do JSON-LD. Nenhuma URL escrita à mão. Canonical auto-referente em toda URL do sitemap.
2. **WhatsApp, telefone e e-mail clicáveis** — bloco de WhatsApp do contato com número visível e link `https://wa.me/14077254988` (mensagem pré-preenchida por idioma), `tel:+14077254988` no rodapé e no contato nos 3 idiomas, `mailto:info@linhareslaw.com` onde faltar.
3. **Peso das imagens** — conversão para WebP com redimensionamento ao tamanho real exibido, alvo ≤150 KB por imagem de conteúdo (gc-104…gc-114) e ≤250 KB nos retratos; `loading="lazy"` + `decoding="async"` abaixo da dobra, hero eager; largura/altura ou aspect-ratio em todas para eliminar CLS. Meta: home abaixo de 2 MB.
4. **og:image padronizada** — mesma peça institucional 1200x630 (≤300 KB) nos 3 idiomas; posts usam a capa em versão 1200x630 otimizada; sempre URL absoluta; acrescenta `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:card=summary_large_image` e `og:locale` nos posts.
5. **JSON-LD corrigido** — ZIP de New York `10022` e Salt Lake City `84111`, `addressRegion` `NY` e `UT`; `logo` e `image` do LegalService passam a apontar para a logo institucional PNG (≥600px) em URL absoluta.
6. **x-default nos posts** — hreflang `x-default` apontando para a versão PT em todos os posts, gerado automaticamente para posts futuros.
7. **favicon.ico** — arquivo multi-resolução (16/32/48) na raiz, mantendo as declarações PNG atuais.
8. **Títulos longos** — varredura de todas as rotas e redução dos títulos acima de 60 caracteres, com o termo de busca no início e a marca no fim quando couber.
9. **Slugs por idioma (aprovado com 301)** — campo de slug próprio para EN e ES no CMS, tradução dos slugs dos posts existentes, e rota de redirect 301 do slug antigo para o novo (tabela de aliases por post), com sitemap e hreflang atualizados.

## D. Redirects de domínio (limite da plataforma)

Os 301 de `linhareslaw.com`, `http://…` e `linhares-nexus-global.lovable.app` para `https://www.linhareslaw.com` **não são configuráveis por código** — o app só recebe requisições no host que o roteamento da plataforma entrega. O que farei:
- deixar `www` como fonte única de verdade no código (elimina a contradição atual);
- adicionar, no próprio app, um redirect 301 para o host canônico quando a requisição chegar com outro host que o app efetivamente atenda (cobre o domínio do preview publicado);
- indicar no fim o passo manual: marcar `www.linhareslaw.com` como domínio **Primary** nas configurações de domínio do projeto, para que o não-www redirecione permanentemente.

## E. Teste de validação

Executo contra o site publicado e devolvo a saída:
1. Cada URL do sitemap: status HTTP, canonical auto-referente com www, canonical/og:url/hreflang em `www.linhareslaw.com`, e as 4 tags hreflang. Total, aprovadas e lista das que falharem.
2. Código de status dos redirects dos hosts alternativos (reportando o que for limitação de plataforma).
3. `/favicon.ico` respondendo 200.
4. Peso total das imagens da home antes e depois.
5. Validação do JSON-LD (LegalService, FAQPage, Article, Service, BreadcrumbList).
6. Presença dos links `wa.me` e `tel:` nos 3 idiomas.

Nada será reportado como corrigido sem passar por esse teste; o que não passar volta com o motivo.

## Detalhes técnicos

- `src/lib/site.ts`: `SITE_ORIGIN` para `https://www.linhareslaw.com`; auditoria com busca por qualquer URL literal remanescente.
- `src/lib/seo.ts` e `src/lib/blog/article-head.ts`: og:image dimensionada/alt, `og:locale`, x-default nos posts.
- `src/start.ts`: middleware de cabeçalhos de segurança + redirect de host canônico.
- Novo `src/lib/admin/require-role.ts` (ou equivalente) e ajuste em `src/routes/_authenticated/admin/route.tsx` para o portão por cargo no servidor.
- Migração SQL única para o bloco RLS/grants.
- Slugs por idioma: coluna de slug em `post_translations` (ou tabela de aliases) + rota de redirect 301 por slug legado.
- Imagens: reprocessamento local (WebP/redimensionamento) e republicação como assets de CDN, mantendo os mesmos pontos de importação.
