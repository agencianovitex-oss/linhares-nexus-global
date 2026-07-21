import { Link, useRouterState } from "@tanstack/react-router";
import { LOCALES, type Locale } from "@/i18n/locales";
import { localeFromPath, stripLocale, withLocale } from "@/i18n/useI18n";
import { cn } from "@/lib/utils";
import flagBr from "@/assets/flag-br.png.asset.json";
import flagUs from "@/assets/flag-us.png.asset.json";
import flagEs from "@/assets/flag-es.png.asset.json";

interface Props {
  className?: string;
  onDark?: boolean;
}

const FLAG: Record<Locale, string> = {
  pt: flagBr.url,
  en: flagUs.url,
  es: flagEs.url,
};

const LABEL: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export function LanguageSwitcher({ className, onDark = false }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = localeFromPath(pathname);
  const basePath = stripLocale(pathname);

  return (
    <div
      aria-label="Language selector"
      className={cn("flex items-center gap-2", className)}
    >
      {LOCALES.map((l: Locale) => {
        const active = current === l;
        return (
          <Link
            key={l}
            to={withLocale(l, basePath)}
            aria-label={LABEL[l]}
            title={LABEL[l]}
            className={cn(
              "inline-flex h-7 w-7 items-center justify-center rounded-full overflow-hidden transition-all",
              active
                ? "ring-2 ring-gold ring-offset-1 " + (onDark ? "ring-offset-primary" : "ring-offset-background")
                : "opacity-70 hover:opacity-100",
            )}
          >
            <img src={FLAG[l]} alt="" aria-hidden="true" className="h-full w-full object-cover" />
          </Link>
        );
      })}
    </div>
  );
}
