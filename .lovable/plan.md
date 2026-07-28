## Resposta curta

Quase tudo está traduzido, mas **não está 100%**. Faltam duas áreas reais (páginas de vistos e o blog), e há partes do backend que nunca foram ligadas ao site.

## 1. O que já está traduzido (verificado)

Home, Quem Somos, Equipe (índice e perfis), Premiações, Na Mídia, Depoimentos e Contato têm conteúdo por idioma (PT/EN/ES), com rotas `/en/...` e `/es/...`, títulos e descrições próprios e hreflang no sitemap. O conteúdo dos vistos (textos de cada visto em `src/data/visas.ts`) também está nos 3 idiomas.

## 2. O que ainda está em português nas versões EN/ES

**Páginas de Áreas de Atuação / Services (o maior gap).**
Em `/en/servicos` e `/es/servicos`, o corpo do visto está traduzido, mas toda a moldura da página continua em português:
- Hub: título e introdução do topo, "Categorias Migratórias", "Conhecer Estratégia", bloco "Planejamento Migratório" inteiro (4 pilares), CTA final "Agende uma consulta estratégica" / "Agendar Consulta".
- Página de cada visto: "Visão Geral", "Elegibilidade", "Benefícios", "Processo", "Perfis Profissionais", "Perguntas Frequentes", "Áreas Relacionadas", botões "Agendar Consulta", "Ver todas as áreas", "Fale com nossa equipe", "Comparar áreas", assinatura "Advogado Fundador".
- SEO do hub (`hubHead`): título e descrição em português nos 3 idiomas.
- FAQ estruturado (JSON-LD) do hub e legenda dos pilares: só em português.

**Detalhes menores.** Rótulo do menu mobile ("Abrir menu"/"Fechar menu") fixo em PT.

## 3. Backend x Front: o que não foi finalizado

- **Blog sem conteúdo:** existe 1 post, **nenhum publicado**, e **zero traduções EN/ES**. Ou seja, `/blog`, `/en/blog` e `/es/blog` estão vazios em produção. O CMS está pronto (editor com abas PT/EN/ES, autores, categorias, tags, profissões, mídia).
- **Tabelas criadas e nunca usadas pelo site:** `awards`, `offices`, `media_appearances`, `success_cases`, `expertise_pages`, `pages`, `settings`, `team_members`/`team_member_translations`. Hoje essas seções são conteúdo fixo no código (premiações, escritórios, mídia, depoimentos, equipe). Não é um erro, mas significa que essas páginas não são editáveis pelo painel.
- **`seo_metadata` vazia:** há tela de SEO no admin, mas o site não lê essa tabela; o SEO vem do código.
- **Admin em português apenas** (não precisa tradução, é uso interno).

## 4. Plano proposto

**Etapa A, fechar a tradução (necessária para dizer que o site está pronto)**
1. Criar um dicionário localizado para o hub de serviços e para a página de visto (PT/EN/ES) com todos os rótulos, eyebrows, botões, bloco de planejamento e FAQ do hub.
2. Passar `locale` para esses textos em `ServicesHub` e `VisaPage`, sem alterar o conteúdo jurídico já traduzido.
3. Localizar `hubHead` (título/descrição/SEO) por idioma.
4. Traduzir os 4 pilares de planejamento e o FAQ do hub.
5. Localizar os rótulos de acessibilidade do menu mobile.

**Etapa B, decisões suas (não faço sem sua confirmação)**
- Blog: publicar o primeiro post e definir se as versões EN/ES saem no lançamento ou depois.
- Migrar premiações, escritórios, mídia, depoimentos e equipe para o backend (editáveis pelo painel) ou manter fixo no código por enquanto.

**Conclusão:** com a Etapa A concluída, o site institucional pode ser considerado pronto para publicação. O blog só ficará "pronto" quando houver ao menos um post publicado.

### Detalhes técnicos
Arquivos afetados na Etapa A: `src/components/visa/ServicesHub.tsx`, `src/components/visa/VisaPage.tsx`, `src/lib/servicos.ts`, `src/data/visas.ts` (PLANNING_PILLARS por locale), `src/components/layout/Header.tsx`. Nenhuma mudança de rota, schema ou banco.
