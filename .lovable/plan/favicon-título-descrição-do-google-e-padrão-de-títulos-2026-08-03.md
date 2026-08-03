# Favicon, título/descrição do Google e padrão de títulos

## 1. Novo favicon (logo enviada)

A logo `LOGO_1_BRANCA.png` (símbolo branco sobre fundo preto) passa a ser o ícone em todos os lugares onde o ícone atual aparece:

- `public/favicon.png` (32x32), `public/favicon-192.png`, `public/favicon-512.png`, `public/apple-touch-icon.png` (180x180) e `public/favicon.ico`
- Recorte quadrado centrado no símbolo da coluna (sem a palavra "LINHARES LAW", que fica ilegível em 16-32px), mantendo o fundo escuro para contraste no resultado do Google
- `public/site.webmanifest` continua apontando para os mesmos arquivos (nomes preservados, só o conteúdo muda)

Observação: o Google atualiza o ícone e o texto do resultado no próprio ritmo de rastreamento; pode levar dias após a publicação.

## 2. Título e descrição da home

Aplicados na home em português (`/`) e no fallback global do site:

- Título: `Linhares Law: Advogados Especialistas em Imigração Americana e Green Card`
- Descrição: `Escritório de advocacia dedicado exclusivamente à imigração para os EUA. Assessoramos profissionais qualificados (Vistos EB-2 NIW, EB-1), executivos (L-1), investidores (EB-5) e famílias em suas jornadas para viver legalmente na América.`

O mesmo texto alimenta `og:title`, `twitter:title`, `og:description` e `twitter:description`. O Google pode cortar o título (72 caracteres) e a descrição (~240 caracteres) na exibição; o texto será mantido exatamente como solicitado.

## 3. Padrão `Página | Linhares Law` em todos os títulos

Hoje os títulos usam vírgula (`Quem Somos, Linhares Law`). Passam a usar barra vertical:

- Páginas institucionais PT/EN/ES: Quem Somos, Equipe, Serviços, Áreas de Atuação, Depoimentos, Na Mídia, Reconhecimentos, Contato
- Blog: índice, busca, categoria, tag, autor, profissão e artigos
- Perfis de advogados (já usa `|` — será conferido para consistência)
- Páginas de sistema: Entrar, Redefinir senha
- Títulos de páginas de visto/serviço vindos do conteúdo localizado

Regra única: `<Nome da página> | Linhares Law`, sem duplicar "Linhares Law" quando o nome da página já o contém (ex.: a home mantém o título do item 2).

## Detalhes técnicos

- Ícones gerados com ImageMagick a partir de `/mnt/user-uploads/LOGO_1_BRANCA.png`, com recorte quadrado e `-extent` centrado; arquivos reais em `public/` (nunca ponteiros de asset).
- Título/descrição da home: `src/routes/_site.index.tsx` e os defaults em `src/routes/__root.tsx`.
- Padronização do sufixo: ajuste nos ~39 `title:` das rotas localizadas, mais os construtores `src/lib/blog/article-head.ts`, `src/lib/attorney-head.ts` e os `seoTitle` em `src/i18n/content/services.ts` / `src/data/visas.ts` usados por `src/lib/servicos.ts`.
- Sem mudança em `buildLocaleHead` além do que for necessário; canonical, hreflang e JSON-LD permanecem como estão.
