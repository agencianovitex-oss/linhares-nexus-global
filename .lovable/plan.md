## Ajustes na Home / Sistema

### 1. Hero — reordenar e destacar o slide do André (`src/components/home/Home.tsx`)

- Remover o slide `AUTHORITY_OVERVIEW` da posição inicial. `HERO_SEQUENCE` passa a começar pelo slide `andre` (Liderança Jurídica → palestrante da AILA); o overview vira o último item da sequência (mantendo os demais slides na ordem atual).
- No slide `andre`:
  - Trocar `name: "André Linhares"` por `"André Linhares, Esq."` (sem "Dr.", com "Esq." ao final).
  - Manter `eyebrow: "Liderança Jurídica"` (já é isso hoje).
- Dar peso visual maior ao slide para competir com a copy da hero à esquerda, sem alterar o layout externo:
  - Retrato circular: aumentar de 88px para ~120px, com anel dourado mais forte (`ring-gold/70`) e sombra mais profunda.
  - Eyebrow: aumentar levemente o tamanho (12px) e reforçar o tracking dourado.
  - Nome ("André Linhares, Esq."): fonte display, maior (≈1.4rem), tratamento mais editorial.
  - Título ("Único advogado brasileiro palestrante da AILA"): aumentar para ~2rem/2.25rem lg, line-height apertado; virar o "hero" do bloco.
  - Descrição: preservar texto, com leve aumento de leading para respirar.
  - Adicionar uma sutil moldura/tratamento de destaque somente ao slide `andre` (borda dourada superior fina de 1px e leve wash radial dourado atrás do retrato) para diferenciá-lo dos demais slides, mantendo o restante do carrossel como está.

### 2. Botão "Ver todas as premiações" (`src/components/home/Home.tsx` ~L539-544)

- Substituir o link textual por um botão sólido em dourado institucional (fundo `--gold`, texto `--gold-foreground`), estilo consistente com `InstitutionalButton variant="gold"` já existente. Manter o rótulo e o destino `/premiacoes`.

### 3. Branco puro → rgb(253, 250, 243) em todo o sistema

Substituição global no design system, para não caçar cada componente:

- Em `src/styles.css`:
  - `:root { --background: oklch(1 0 0); }` → passar para `rgb(253 250 243)`.
  - `--card`, `--popover` (hoje `oklch(1 0 0)`) → também `rgb(253 250 243)` para que menus suspensos, popovers e cartões acompanhem o novo off-white.
  - Revisar `.surface-premium-light` (usa `var(--color-background)` + `oklch(0.985 …)`) — atualizar os stops para permanecer coerentes no novo tom (base off-white → surface → surface-2).
- Isso propaga automaticamente para o header/menu suspenso do scroll, dropdowns (shadcn), cards, hero light, blog, etc., por usarem tokens semânticos.
- Auditar rapidamente ocorrências de `bg-white`, `#fff`, `#ffffff`, `rgb(255,255,255)` e `oklch(1 0 0)` no código de aplicação (não nos tokens do modo dark) e trocar por `bg-background` / token equivalente onde forem fundos de superfície. Onde for necessário branco literal (ex.: `--gold-foreground` que é texto branco sobre dourado, estados de foco sobre imagens escuras), manter branco puro.
- Modo escuro: sem alterações — os tokens `dark` permanecem como estão.

### 4. Verificação

- Rodar a home no viewport atual e conferir:
  - Slide 1 do carrossel = André / AILA, com destaque visual claramente maior.
  - "Ver todas as premiações" aparece como botão dourado.
  - Header fixo, menu suspenso, cards e popovers agora usam o off-white `rgb(253,250,243)` em vez de branco puro.
- Checar que nenhuma seção clara ficou com contraste quebrado (ex.: cards sobre `bg-background` que dependiam de branco puro para separação — se necessário, ajustar `--surface`/`--surface-2` um passo).

### Detalhes técnicos

- Arquivos a editar:
  - `src/components/home/Home.tsx` — `AUTHORITY_SLIDES`, `HERO_SEQUENCE`, `AuthorityPanel` (estilo do slide `andre`), bloco de CTA das premiações.
  - `src/styles.css` — tokens `--background`, `--card`, `--popover` no `:root`; ajustar stops de `.surface-premium-light` se precisar.
- Não mexer em `src/integrations/supabase/*`, `routeTree.gen.ts`, nem no modo escuro.
