# Correções do Blog: imagens, destaques na home e abertura dos posts

Investiguei os três problemas e confirmei a causa de cada um.

## 1. Imagens dos posts não aparecem

O bucket de mídia do blog está configurado como privado, mas o editor gera links públicos ao subir a imagem. O link salvo no post existe, porém o arquivo não pode ser lido por visitantes, então a imagem fica em branco.

Correção: tornar o bucket de mídia do blog público (leitura pública, upload continua restrito a administradores autenticados). Os posts já publicados voltam a exibir as capas sem precisar subir nada de novo.

## 2. Post marcado como destaque não aparece na home

O bloco "Publicações" da home hoje é conteúdo fixo de exemplo (três cartões escritos no código, com imagens estáticas). Ele nunca consultou o banco, por isso os posts reais em destaque nunca apareciam.

Correção: passar esse bloco a buscar os posts reais publicados e marcados como destaque, no idioma da página (PT/EN/ES), mostrando capa, categoria, título e tempo de leitura, com link direto para cada publicação. Se não houver destaques suficientes, completa com os mais recentes. O visual do bloco (fundo dourado, cartões, tipografia) permanece igual.

## 3. Clicar em uma publicação não abre o artigo

Os cartões de artigo montam o link como um texto pronto (ex.: `/blog/meu-slug`). O roteador do site espera a rota com o parâmetro (`/blog/$slug`) mais o valor do slug; recebendo só o texto, ele troca a URL mas não carrega a página do artigo, deixando o usuário na listagem.

Correção: criar um componente de link de artigo que usa a rota correta com parâmetro para cada idioma e usá-lo em todos os lugares que apontam para um artigo, categoria, tag, autor ou profissão (cartões, destaques, relacionados, busca). Isso corrige a navegação em PT, EN e ES.

## Detalhes técnicos

- Storage: `supabase--storage_update_bucket(name: "blog-media", public: true)`; manter policies de escrita restritas a autenticados.
- Novo helper `src/components/blog/BlogLink.tsx` mapeando locale → `to`/`params` (`/_site/blog/$slug`, `/_site/en/blog/$slug`, `/_site/es/blog/$slug` e equivalentes de taxonomia), substituindo `to={blogArticlePath(...)}` em `ArticleCard.tsx`, `RelatedArticles.tsx`, `CategoryNav.tsx`, `ArticleGrid.tsx`, `Breadcrumb.tsx` e páginas de busca/taxonomia. `blogArticlePath` continua sendo usado apenas para URLs absolutas (canonical, share, sitemap).
- Home: `PublicationsSection` em `src/components/home/Home.tsx` passa a receber dados de `getFeaturedPosts` (server fn pública já existente) via loader/`useSuspenseQuery` nas rotas `_site.index`, `_site.en.index`, `_site.es.index`, com fallback para o conteúdo estático atual caso não haja posts publicados.
- Verificação: abrir /blog no preview, clicar num card e confirmar que o artigo abre com a capa carregada, e conferir a home exibindo os posts em destaque.
