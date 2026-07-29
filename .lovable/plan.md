## Objetivo

Sim, dá para fazer. No editor de posts, dentro das abas EN e ES, entra um botão **"Traduzir do português com IA"** que preenche automaticamente todos os campos daquele idioma a partir do conteúdo em PT.

## O que o botão traduz

Para o idioma da aba ativa (EN ou ES):
- Título
- Resumo (excerpt)
- Corpo do artigo, preservando toda a formatação (títulos, listas, links, citações, imagens e legendas)
- Meta title e meta description (SEO)
- Perguntas e respostas do FAQ

O que **não** é traduzido: slug, categorias, tags, profissões, autor, imagem de capa e CTA (continuam como estão hoje).

## Como vai funcionar na prática

1. Você escreve o post completo em PT.
2. Abre a aba EN (ou ES) e clica em "Traduzir do português com IA".
3. Os campos são preenchidos em alguns segundos, com aviso de carregamento.
4. Se a aba já tiver conteúdo, aparece uma confirmação antes de sobrescrever.
5. Você revisa, ajusta o que quiser e salva normalmente. Nada é gravado no banco antes de você salvar.

Também incluo um botão "Traduzir para EN e ES" no topo, para gerar os dois idiomas de uma vez.

## Qualidade da tradução

A IA recebe instrução de atuar como tradutora jurídica institucional: manter o tom formal do escritório, preservar termos técnicos de imigração americana em inglês (EB-2 NIW, Green Card, USCIS, RFE), não inventar conteúdo e não alterar números, datas nem nomes próprios.

## Detalhes técnicos

- Nova server function `translatePost` em `src/lib/admin/translate.functions.ts`, protegida por autenticação de admin/editor.
- Usa Lovable AI (`openai/gpt-5.6-sol`) com saída estruturada (schema Zod) para devolver título, excerpt, meta, FAQ e o documento TipTap traduzido com a mesma árvore de nós.
- O corpo é traduzido preservando a estrutura JSON do TipTap: só os nós de texto mudam; marcas, atributos e URLs permanecem.
- Alterações de UI em `src/components/admin/PostEditorContent.tsx` (botões, estado de carregamento, confirmação de sobrescrita, tratamento de erro 429/402 com mensagem clara).
- Sem mudanças de schema, rotas ou banco de dados.
