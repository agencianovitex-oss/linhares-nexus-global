import { useRouterState } from "@tanstack/react-router";
import { DEFAULT_LOCALE, dict, type Dict, type Locale } from "./locales";

export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "en") return "en";
  if (seg === "es") return "es";
  return DEFAULT_LOCALE;
}

export function stripLocale(pathname: string): string {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "en" || seg === "es") {
    const rest = pathname.replace(/^\/(en|es)/, "");
    return rest || "/";
  }
  return pathname || "/";
}

export function withLocale(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean === "" ? "/" : clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

export function useLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return localeFromPath(pathname);
}

export function useI18n(): { locale: Locale; t: Dict } {
  const locale = useLocale();
  return { locale, t: dict[locale] };
}
