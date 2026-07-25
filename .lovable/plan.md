# Plano — Internacionalização Fase 1 (EN + ES)

## Escopo
Elevar as versões `/en/*` e `/es/*` ao mesmo nível editorial da versão PT (Master). Somente camada de conteúdo + tradução — sem mexer em layout, componentes, cores, CMS, blog engine, ou SEO técnico já implementado. Estrutura de rotas multilíngue já existe (rotas `_site.en.*` e `_site.es.*` estão presentes, hoje renderizando `Placeholder`), então não há criação de arquitetura nova — só troca de conteúdo dessas rotas.

## Estado atual (verificado)
- Rotas EN/ES existem para: home, quem-somos, servicos, equipe (index + $slug), premiacoes, na-midia, casos-de-sucesso, contato, blog (index, $slug, taxonomias, busca).
- Todas as rotas EN/ES não-blog renderizam `<Placeholder>` com strings genéricas de `dict[locale].pages.*`.
- Dicionário base já existe em `src/i18n/locales.ts` (chrome: nav, footer, slogan, CTAs) mas com cobertura mínima.
- Blog admin/CMS já tem colunas i18n implementadas (fase anterior). Interface pública do blog em EN/ES precisa apenas de strings de UI — já parcialmente em `src/lib/blog/i18n-strings.ts`.
- Header/Footer/LanguageSwitcher já reagem ao locale corrente.

## Blocos de entrega

### 1. Home (`/en`, `/es`)
Portar o `Home.tsx` completo para renderizar todos os blocos (Hero + AuthorityPanel, sub-hero, Liderança Jurídica, Nossa Prática, Vistos em destaque, mosaico, CTA final) com conteúdo adaptado por idioma. Textos vêm de um novo módulo de conteúdo por locale (`src/i18n/content/home.ts`), consumido pelo mesmo componente. Nenhuma mudança visual.

### 2. Páginas institucionais dedicadas
Para cada página abaixo: substituir `Placeholder` pelo mesmo componente da versão PT, alimentado por conteúdo localizado:
- Quem Somos
- Serviços/Áreas de Atuação (hub + páginas por visto — traduzir também `src/data/visas.ts` incluindo nomes de visto quando aplicável, deixando siglas oficiais em inglês: EB-2 NIW, O-1, EB-3, I-130, VAWA, etc.)
- Equipe (index + perfis individuais — bios adaptadas, cargos traduzidos, credenciais preservadas)
- Reconhecimentos / Recognition / Reconocimientos
- Na Mídia / In the Press / En los Medios (mesmos vídeos e logos)
- Depoimentos / Testimonials / Testimonios
- Contato / Contact / Contacto (Zoho Forms iframe idem; labels do card e do botão traduzidos; iframe do Zoho Forms permanece — Zoho Forms tem locale próprio, não intervimos nele)

### 3. Chrome + microcopy
- Expandir `src/i18n/locales.ts` (ou dividir em módulos por seção) para cobrir: nav completa, footer, CTAs, mensagens "coming soon", labels do LanguageSwitcher, aria-labels, e strings compartilhadas.
- Header/Footer já lêem do dict — só ampliar cobertura, sem alterar markup.

### 4. Blog (interface pública)
- Completar `src/lib/blog/i18n-strings.ts` onde faltar.
- Rotas EN/ES do blog já existem; garantir que todas as strings de UI (breadcrumbs, "Sobre o autor", CTAs, paginação, busca, vazio, share) usem `tBlog(locale)`.
- Artigos: usar campos i18n já existentes no CMS (title_en, excerpt_en, body_en, etc.). Não traduzir artigos automaticamente — deixar cair no idioma padrão quando a versão localizada não existir (fallback já é padrão do backend).

### 5. SEO por idioma
Para cada rota EN/ES: `head()` com title, description, `og:title`, `og:description`, `og:locale` (`en_US` / `es_ES`), e `<link rel="alternate" hreflang>` cruzando PT/EN/ES + `x-default` apontando para PT. `canonical` self-referencial na URL localizada. Sitemap (`src/routes/sitemap[.]xml.tsx`): adicionar entradas EN/ES para todas as rotas públicas + `<xhtml:link rel="alternate" hreflang>` por URL.

### 6. Tom e qualidade editorial
- **EN**: registro de escritório boutique de imigração dos EUA — direto, credível, sem regionalismos brasileiros. Siglas oficiais USCIS preservadas. "Dr." vira "Mr." só quando não for advogado; advogados usam "Esq." ou apenas o nome + credencial (ex.: "André Linhares, Esq."). Datas em formato americano (Month DD, YYYY).
- **ES**: español neutro (LatAm profissional). Evitar "vosotros", evitar vocabulário rioplatense ou peninsular. Termos de imigração em inglês onde são oficiais (EB-2 NIW, Green Card), com glosa em ES na primeira menção.
- Nunca tradução literal. Reescrever para soar nativo. Preservar autoridade e sofisticação do PT Master.

## Fora de escopo (explicitamente)
- Nenhuma mudança em cores, tipografia, grid, animações, componentes, CMS backend, blog engine, políticas RLS.
- Não traduzir automaticamente artigos existentes do blog (só a interface).
- Não alterar Zoho Forms/Bookings (locale gerenciado no painel do Zoho pelo cliente).
- Vídeos e imagens permanecem os mesmos.

## Ordem de execução sugerida
1. Expandir dicionários (`src/i18n/locales.ts` + novo `src/i18n/content/*.ts` por página).
2. Home EN + ES.
3. Institucionais (quem-somos, equipe, premiações, na-mídia, depoimentos, contato).
4. Serviços/Áreas de atuação (hub + $slug) — o maior bloco de conteúdo jurídico.
5. Blog UI strings + head/SEO.
6. Sitemap + hreflang.

## Como confirmar
Ao final, `/`, `/en`, `/es` e cada rota localizada devem exibir conteúdo 100% no idioma correto, com paridade estrutural ao PT, sem nenhuma alteração visual detectável em relação ao estado atual da versão PT.

## Pergunta antes de executar
Este é um volume grande de copy jurídico. Posso seguir gerando o conteúdo EN/ES diretamente (adaptado, não literal, seguindo o tom acima), ou você prefere revisar o texto EN e ES **página a página** antes de eu aplicar? Se quiser revisar, começo entregando Home + Quem Somos primeiro para aprovação e sigo a partir daí.
