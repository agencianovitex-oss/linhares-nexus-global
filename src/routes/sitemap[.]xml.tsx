import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { listAllPublishedSlugs } from "@/lib/blog/public.functions";
import { LOCALES, LOCALE_HREFLANG, type Locale } from "@/i18n/locales";
import { blogArticlePath } from "@/lib/blog/i18n-strings";

const BASE_URL = "https://linhares-nexus-global.lovable.app";

const STATIC_PATHS = [
  "/", "/quem-somos", "/servicos", "/equipe", "/premiacoes", "/na-midia",
  "/casos-de-sucesso", "/blog", "/contato",
];

function localizedPath(locale: Locale, path: string): string {
  if (locale === "pt") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

function urlBlock(loc: string, lastmod?: string, alternates?: Array<{ hreflang: string; href: string }>, priority?: string) {
  const xhtml = (alternates ?? []).map(a =>
    `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join("\n");
  return [
    `  <url>`,
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    priority ? `    <priority>${priority}</priority>` : null,
    xhtml || null,
    `  </url>`,
  ].filter(Boolean).join("\n");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const posts = await listAllPublishedSlugs();
        const blocks: string[] = [];

        // Institutional pages: each path emitted per locale with hreflang alternates
        for (const path of STATIC_PATHS) {
          for (const l of LOCALES) {
            const loc = `${BASE_URL}${localizedPath(l, path)}`;
            const alts = LOCALES.map(other => ({
              hreflang: LOCALE_HREFLANG[other],
              href: `${BASE_URL}${localizedPath(other, path)}`,
            }));
            alts.push({ hreflang: "x-default", href: `${BASE_URL}${localizedPath("pt", path)}` });
            blocks.push(urlBlock(loc, undefined, alts, path === "/" ? "1.0" : "0.7"));
          }
        }

        // Blog articles
        for (const post of posts) {
          for (const l of LOCALES) {
            if (!post.locales.includes(l)) continue;
            const loc = `${BASE_URL}${blogArticlePath(l, post.slug)}`;
            const alts = post.locales.map(other => ({
              hreflang: LOCALE_HREFLANG[other as Locale],
              href: `${BASE_URL}${blogArticlePath(other as Locale, post.slug)}`,
            }));
            if (post.locales.includes("pt")) alts.push({ hreflang: "x-default", href: `${BASE_URL}${blogArticlePath("pt", post.slug)}` });
            blocks.push(urlBlock(loc, post.updated_at, alts, "0.8"));
          }
        }

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...blocks,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
