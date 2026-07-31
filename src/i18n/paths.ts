import { DEFAULT_LOCALE, LOCALES, type Locale } from "./locales";
import { localeFromPath, stripLocale, withLocale } from "./useI18n";

/**
 * Segment dictionary shared across locales. Keys are canonical identifiers;
 * values are the URL segment used by each locale. Used to translate a path
 * when switching languages so we never emit a 404 (e.g. /en/areas-de-atuacao).
 */
const SEGMENTS = {
  services: { pt: "areas-de-atuacao", en: "servicos", es: "servicos" },
  category: { pt: "categoria", en: "category", es: "categoria" },
  tag: { pt: "tag", en: "tag", es: "tag" },
  author: { pt: "autor", en: "author", es: "autor" },
  profession: { pt: "profissao", en: "profession", es: "profesion" },
  search: { pt: "busca", en: "search", es: "busqueda" },
} as const satisfies Record<string, Record<Locale, string>>;

type SegmentKey = keyof typeof SEGMENTS;

const KEYS = Object.keys(SEGMENTS) as SegmentKey[];

function keyForSegment(locale: Locale, segment: string): SegmentKey | null {
  for (const key of KEYS) {
    if (SEGMENTS[key][locale] === segment) return key;
  }
  return null;
}

/** Translates a locale-less path from one locale's vocabulary to another. */
export function translateBasePath(from: Locale, to: Locale, basePath: string): string {
  const parts = basePath.split("/").filter(Boolean);
  const translated = parts.map((segment) => {
    const key = keyForSegment(from, segment);
    return key ? SEGMENTS[key][to] : segment;
  });
  return translated.length ? `/${translated.join("/")}` : "/";
}

/** Full pathname (with locale prefix) translated into the target locale. */
export function translatePath(pathname: string, to: Locale): string {
  const from = localeFromPath(pathname);
  const base = stripLocale(pathname);
  return withLocale(to, translateBasePath(from, to, base));
}

/** All locale variants of a PT-authored path, for hreflang emission. */
export function localeAlternates(ptPath: string): Array<{ locale: Locale; href: string }> {
  return LOCALES.map((l) => ({
    locale: l,
    href: withLocale(l, translateBasePath(DEFAULT_LOCALE, l, ptPath)),
  }));
}

export { SEGMENTS };
