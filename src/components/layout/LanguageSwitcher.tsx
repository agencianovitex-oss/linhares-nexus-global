import { Link, useRouterState } from "@tanstack/react-router";
import { LOCALES, LOCALE_LABEL, type Locale } from "@/i18n/locales";
import { localeFromPath, stripLocale, withLocale } from "@/i18n/useI18n";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  onDark?: boolean;
}

export function LanguageSwitcher({ className, onDark = false }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = localeFromPath(pathname);
  const basePath = stripLocale(pathname);

  return (
    <div
      aria-label="Language selector"
      className={cn(
        "flex items-center text-[11px] font-semibold tracking-[0.28em] uppercase",
        className,
      )}
    >
      {LOCALES.map((l: Locale, idx) => (
        <span key={l} className="flex items-center">
          {idx > 0 && (
            <span
              aria-hidden
              className={cn(
                "mx-3 select-none",
                onDark ? "text-primary-foreground/30" : "text-border-strong",
              )}
            >
              ·
            </span>
          )}
          <Link
            to={withLocale(l, basePath)}
            className={cn(
              "transition-colors",
              current === l
                ? onDark
                  ? "text-gold"
                  : "text-primary"
                : onDark
                  ? "text-primary-foreground/65 hover:text-gold"
                  : "text-muted-foreground hover:text-primary",
            )}
          >
            {LOCALE_LABEL[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
