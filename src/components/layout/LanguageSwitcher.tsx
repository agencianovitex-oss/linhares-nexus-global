import { Link, useRouterState } from "@tanstack/react-router";
import { LOCALES, type Locale } from "@/i18n/locales";
import { localeFromPath, stripLocale, withLocale } from "@/i18n/useI18n";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  onDark?: boolean;
}

const FLAG: Record<Locale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
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
      className={cn("flex items-center gap-1", className)}
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
              "inline-flex h-8 w-8 items-center justify-center rounded-full text-base leading-none transition-all",
              active
                ? onDark
                  ? "ring-1 ring-gold/80 bg-primary-foreground/5"
                  : "ring-1 ring-gold/80 bg-surface"
                : "opacity-60 hover:opacity-100",
            )}
          >
            <span aria-hidden className="text-[15px]">{FLAG[l]}</span>
          </Link>
        );
      })}
    </div>
  );
}
