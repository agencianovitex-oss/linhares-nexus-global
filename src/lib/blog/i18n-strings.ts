import type { Locale } from "@/i18n/locales";

export const blogStrings = {
  pt: {
    hero: "Publicações Linhares Law",
    intro: "Análises jurídicas, atualizações regulatórias e perspectivas institucionais sobre imigração americana.",
    featured: "Em destaque",
    recent: "Publicações recentes",
    categories: "Categorias",
    readingTime: (n: number) => `Leitura de ${n} min`,
    minutes: "min",
    continueReading: "Continue lendo",
    share: "Compartilhar",
    searchArticles: "Buscar publicações",
    searchPlaceholder: "Buscar por título, tema ou categoria…",
    searchResultsFor: (q: string) => `Resultados para "${q}"`,
    noResults: "Nenhuma publicação encontrada.",
    author: "Autor",
    aboutAuthor: "Sobre o autor",
    profession: "Profissão",
    publishedOn: "Publicado em",
    updatedOn: "Atualizado em",
    breadcrumbHome: "Início",
    breadcrumbBlog: "Publicações",
    category: "Categoria",
    tag: "Tag",
    inThisArticle: "Neste artigo",
    archive: "Arquivo",
    by: "por",
    contentHubFor: (n: string) => `Central de conteúdo para ${n}`,
    next: "Próxima",
    prev: "Anterior",
    page: "Página",
    of: "de",
    copyLink: "Copiar link",
    linkCopied: "Link copiado",
    notFoundTitle: "Publicação não encontrada",
    notFoundIntro: "O conteúdo que você procura não está disponível.",
    backToBlog: "Voltar para Publicações",
  },
  en: {
    hero: "Linhares Law Insights",
    intro: "Legal analyses, regulatory updates and institutional perspectives on U.S. immigration.",
    featured: "Featured",
    recent: "Recent insights",
    categories: "Categories",
    readingTime: (n: number) => `${n} min read`,
    minutes: "min",
    continueReading: "Continue reading",
    share: "Share",
    searchArticles: "Search insights",
    searchPlaceholder: "Search by title, topic or category…",
    searchResultsFor: (q: string) => `Results for "${q}"`,
    noResults: "No insights found.",
    author: "Author",
    aboutAuthor: "About the author",
    profession: "Profession",
    publishedOn: "Published on",
    updatedOn: "Updated on",
    breadcrumbHome: "Home",
    breadcrumbBlog: "Insights",
    category: "Category",
    tag: "Tag",
    inThisArticle: "In this article",
    archive: "Archive",
    by: "by",
    contentHubFor: (n: string) => `Content hub for ${n}`,
    next: "Next",
    prev: "Previous",
    page: "Page",
    of: "of",
    copyLink: "Copy link",
    linkCopied: "Link copied",
    notFoundTitle: "Insight not found",
    notFoundIntro: "The content you are looking for is not available.",
    backToBlog: "Back to Insights",
  },
  es: {
    hero: "Publicaciones Linhares Law",
    intro: "Análisis jurídicos, actualizaciones regulatorias y perspectivas institucionales sobre inmigración a EE. UU.",
    featured: "Destacados",
    recent: "Publicaciones recientes",
    categories: "Categorías",
    readingTime: (n: number) => `Lectura de ${n} min`,
    minutes: "min",
    continueReading: "Continuar leyendo",
    share: "Compartir",
    searchArticles: "Buscar publicaciones",
    searchPlaceholder: "Buscar por título, tema o categoría…",
    searchResultsFor: (q: string) => `Resultados para "${q}"`,
    noResults: "No se encontraron publicaciones.",
    author: "Autor",
    aboutAuthor: "Sobre el autor",
    profession: "Profesión",
    publishedOn: "Publicado el",
    updatedOn: "Actualizado el",
    breadcrumbHome: "Inicio",
    breadcrumbBlog: "Publicaciones",
    category: "Categoría",
    tag: "Etiqueta",
    inThisArticle: "En este artículo",
    archive: "Archivo",
    by: "por",
    contentHubFor: (n: string) => `Centro de contenido para ${n}`,
    next: "Siguiente",
    prev: "Anterior",
    page: "Página",
    of: "de",
    copyLink: "Copiar enlace",
    linkCopied: "Enlace copiado",
    notFoundTitle: "Publicación no encontrada",
    notFoundIntro: "El contenido que busca no está disponible.",
    backToBlog: "Volver a Publicaciones",
  },
} as const;

export function tBlog(locale: Locale) {
  return blogStrings[locale];
}

export function blogBasePath(locale: Locale): string {
  return locale === "pt" ? "/blog" : `/${locale}/blog`;
}

export function blogTaxonomyPath(locale: Locale, kind: "category" | "tag" | "author" | "profession", slug: string): string {
  const map = {
    pt: { category: "categoria", tag: "tag", author: "autor", profession: "profissao" },
    en: { category: "category", tag: "tag", author: "author", profession: "profession" },
    es: { category: "categoria", tag: "tag", author: "autor", profession: "profesion" },
  } as const;
  return `${blogBasePath(locale)}/${map[locale][kind]}/${slug}`;
}

export function blogSearchPath(locale: Locale): string {
  const seg = locale === "en" ? "search" : locale === "es" ? "busqueda" : "busca";
  return `${blogBasePath(locale)}/${seg}`;
}

export function blogArticlePath(locale: Locale, slug: string): string {
  return `${blogBasePath(locale)}/${slug}`;
}

export function siteOrigin(): string {
  return "https://linhares-nexus-global.lovable.app";
}
