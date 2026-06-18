
# Etapa A — CMS editorial Linhares Law (com preparação para escala SEO)

Esta etapa entrega o **painel administrativo completo** para gerenciar o blog e já deixa a arquitetura preparada para operar como máquina de SEO de longo prazo (autores, profissões, categorias hierárquicas, artigo pilar, FAQ estruturado, tempo de leitura, CTA por artigo, destaques editoriais). O frontend público editorial virá na **Etapa B**.

A base já existe (`posts`, `post_translations`, `categories`, `category_translations`, `tags`, `tag_translations`, `post_tags`, `seo_metadata`, `media_assets`) com RLS para `admin` / `editor`. Esta etapa monta o que falta e amplia o schema sem quebrar o que existe.

---

## 1. Autenticação e papéis

- E-mail + senha e **Google OAuth** (Lovable Cloud gerenciado).
- Rotas públicas `/auth` (login + cadastro + recuperar senha) e `/reset-password`.
- `public.user_roles` + enum `app_role` (`admin`, `editor`) + função `public.has_role` (security definer), alinhada ao `private.has_role` já usado nas policies existentes.
- Trigger: o **primeiro usuário** do projeto vira `admin` automaticamente. Depois disso, papéis só pela tela "Equipe".
- Subtree `/_authenticated/admin/*` protegida (somente `admin` ou `editor`); `admin` enxerga a aba Equipe.

## 2. Estrutura do painel `/admin`

```
/admin                  → dashboard com métricas
/admin/posts            → lista com filtros (status, categoria, idioma, autor, busca)
/admin/posts/novo
/admin/posts/:id
/admin/categorias       → CRUD + ordenação drag + hierarquia pai/filha
/admin/tags             → CRUD
/admin/profissoes       → CRUD
/admin/autores          → CRUD
/admin/midia            → biblioteca pública + privada
/admin/seo              → metadados de páginas institucionais
/admin/equipe           → (admin) gestão de papéis
```

### Dashboard

- Total publicados, agendados, rascunhos.
- Posts por categoria (gráfico simples).
- Últimos artigos publicados.
- Lista de posts em destaque atuais (com link rápido para reordenar).

## 3. Editor de artigo (TipTap)

Três sub-abas por idioma (PT / EN / ES); cada uma é uma linha em `post_translations`.

**Campos por idioma:** título, slug (gerado do título PT, editável), resumo, **corpo TipTap** (negrito, itálico, listas, H2/H3, link, blockquote, imagem, código, separador, alinhamento), meta title, meta description, **FAQ estruturado** (array repetível de `{pergunta, resposta}`).

**Campos globais do post:**
- capa (upload ou URL), categoria (com pai/filha), tags, **profissões**, **autor principal** (obrigatório para publicar).
- **is_pillar_content** (toggle) — marca conteúdo pilar.
- **is_featured** (toggle) + **featured_order** (number, opcional) — controla destaque na home do blog. Toggle ligado sem ordem entra como destaque livre; com ordem 1/2/3… vira destaque ordenado.
- **CTA do artigo** (seção opcional, com botão "usar CTA padrão"): `cta_type` (select: agendar_consulta · avaliacao_elegibilidade · falar_especialista · download_guia · whatsapp · personalizado), `cta_title`, `cta_description`, `cta_button_text`, `cta_url`. Se vazio, o front (Etapa B) usa o CTA institucional padrão.
- status (rascunho/agendado/publicado), `published_at`.
- **`reading_time_minutes`** (calculado automaticamente no salvar a partir do corpo PT, ~200 palavras/min, com botão "recalcular").

**Ações:** Salvar rascunho · Publicar agora · Agendar · Despublicar · Preview interno.

**Validação:** título PT obrigatório, slug único, capa obrigatória para publicar, autor obrigatório para publicar.

### Tela dedicada de Destaques

`/admin/posts/destaques` — lista drag-and-drop dos posts com `is_featured = true`, salvando `featured_order` em lote. Atalho a partir do dashboard.

## 4. Autores

Tabela `public.authors`:
- `name`, `slug` (único), `photo_url`, `role_title` (cargo), `short_bio`, `linkedin_url`, `is_active`.
- `author_translations` para `role_title` e `short_bio` em PT/EN/ES.
- `posts.author_id` migra para FK em `public.authors` (a FK atual aponta para `auth.users` e será substituída).
- Seed: André Linhares, Nicholas Perry, Juliana Mosquera, Equipe Editorial Linhares Law.

## 5. Categorias, tags, profissões, mídia

- **Categorias hierárquicas:** `parent_id` (self FK) + `position int`. Editor mostra árvore; filtros de listagem entendem a hierarquia. Drag dentro do mesmo nível.
- **Tags:** CRUD, traduzidas, criação inline no editor.
- **Profissões:** `public.professions` + `profession_translations` + join `post_professions`. CRUD próprio. Seed: Dentista, Médico, Enfermeiro, Engenheiro, Arquiteto, Veterinário, Empresário, Pesquisador, Professor.
- **Mídia:** buckets `blog-media-public` (público — imagens dos artigos, URL direta) e `private-media` (privado — signed URL). Upload aceita ambos; também aceita colar URL externa.

## 6. SEO e estrutura para clusters

- `meta_title` e `meta_description` por idioma editáveis (padrão = título + resumo).
- Capa = OG image padrão; sobrescrita por idioma permitida.
- `is_pillar_content` + profissões viabilizam a lógica de artigos relacionados / clusters na Etapa B.
- FAQ estruturado salvo em jsonb por tradução, pronto para Schema FAQ.
- Campos para Schema Article (autor, datas, descrição, tempo de leitura) já salvos.
- CTA por artigo permite testes editoriais sem mexer no código.
- `/admin/seo` para metadados das rotas institucionais.

## 7. Migrações de banco nesta etapa

- `ALTER TYPE content_status ADD VALUE 'scheduled'`.
- `categories`: `parent_id uuid REFERENCES categories(id)`, `position int`.
- `posts`: `reading_time_minutes int`, `is_pillar_content bool default false`, `is_featured bool default false`, `featured_order int`, `cta_type text`, `cta_title text`, `cta_description text`, `cta_button_text text`, `cta_url text`, novo `author_id uuid REFERENCES public.authors(id)` (FK antiga removida).
- `post_translations`: `faq jsonb default '[]'`.
- Novas tabelas: `authors`, `author_translations`, `professions`, `profession_translations`, `post_professions`, `user_roles`, `profiles`.
- Função `public.has_role` (security definer), trigger `handle_new_user` (cria profile + promove primeiro user a admin).
- `pg_cron` horário promovendo posts `scheduled` com `published_at <= now()` para `published`.
- Buckets `blog-media-public` (público) e `private-media` (privado) + policies (editores escrevem, leitura pública só no primeiro).
- GRANTs corretos em todas as novas tabelas.
- Seeds: categorias iniciais (EB-2 NIW, EB-1, Empresários e Investidores, Trabalho nos EUA, Planejamento Imigratório, Atualizações de Imigração, Dentistas nos EUA, Médicos nos EUA), profissões, 4 autores.

## 8. Detalhes técnicos

- TanStack Start + TanStack Query + shadcn/ui (já no projeto).
- TipTap: `@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/extension-image`, `@tiptap/extension-link`.
- Todas as escritas via `createServerFn` + `requireSupabaseAuth` + Zod.
- Uploads via signed URL direto do navegador.
- Tempo de leitura: contagem de palavras do JSON do TipTap PT, `Math.max(1, round(palavras/200))`.
- Cores oficiais (Azul `rgb(6,36,67)` / Dourado `rgb(179,134,66)`) no admin, layout funcional.
- `/admin` fora do SSR público (`ssr: false`).

## 9. Fora desta etapa (vai para Etapa B)

- Páginas públicas `/blog`, `/blog/:slug`, `/blog/categoria/:slug`, `/blog/tag/:slug`, `/blog/autor/:slug`, `/blog/profissao/:slug`.
- Busca pública, artigos relacionados (pilar + categoria + tags + profissão), Schema Article + FAQ + Breadcrumb renderizados, OG dinâmico, sitemap do blog, renderização do CTA por artigo, áreas de destaque editorial usando `featured_order`, versões `/en/blog/*` e `/es/blog/*`.

---

## Resultado ao fim da Etapa A

- Login (e-mail/senha + Google); primeiro usuário vira admin sozinho.
- Painel `/admin` para criar, editar, agendar, publicar, despublicar artigos em PT/EN/ES, com autor, categoria hierárquica, tags, profissões, FAQ, tempo de leitura automático, artigo pilar, destaque + ordem manual e CTA opcional por artigo.
- CRUD de categorias (ordenadas + hierárquicas), tags, profissões e autores.
- Biblioteca de mídia pública e privada.
- Agendamento real via cron.
- Dashboard com métricas básicas + atalho para reordenar destaques.
- Base estrutural pronta para a Etapa B montar o frontend editorial e os clusters SEO sem novas migrações.
