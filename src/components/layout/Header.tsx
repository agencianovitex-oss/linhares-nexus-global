import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n, withLocale } from "@/i18n/useI18n";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-horizontal-white.png.asset.json";
import logoBlack from "@/assets/logo-horizontal-black.png.asset.json";

interface Props {
  transparentOverHero?: boolean;
}

export function Header({ transparentOverHero = false }: Props) {
  const { locale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = transparentOverHero && !scrolled;

  const links: Array<{ label: string; to: string }> = [
    { label: t.nav.about, to: "/quem-somos" },
    { label: t.nav.services, to: locale === "pt" ? "/areas-de-atuacao" : "/servicos" },
    { label: t.nav.team, to: "/equipe" },
    { label: t.nav.awards, to: "/premiacoes" },
    { label: t.nav.media, to: "/na-midia" },
    { label: t.nav.success, to: "/casos-de-sucesso" },
    { label: t.nav.blog, to: "/blog" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-300",
        onDark
          ? "border-b border-transparent bg-transparent text-primary-foreground"
          : "border-b border-border bg-background text-secondary",
      )}
    >
      <Container className="flex h-24 items-center justify-between gap-8">
        <Link to={withLocale(locale, "/")} aria-label={t.brand} className="flex items-center">
          <img
            src={onDark ? logoWhite.url : logoBlack.url}
            alt={t.brand}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav
          aria-label="Primary"
          className={cn(
            "hidden flex-nowrap items-center gap-x-6 whitespace-nowrap text-[12px] font-medium tracking-[0.06em] xl:flex 2xl:gap-x-8",
            onDark ? "text-primary-foreground/80" : "text-secondary",
          )}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={withLocale(locale, l.to)}
              className={cn("whitespace-nowrap transition-colors", onDark ? "hover:text-gold" : "hover:text-primary")}
              activeProps={{ className: onDark ? "text-gold" : "text-primary" }}
              activeOptions={{ exact: false }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            to={withLocale(locale, "/contato")}
            className={cn(
              "hidden items-center justify-center px-6 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors md:inline-flex",
              onDark
                ? "border border-primary-foreground/70 text-primary-foreground hover:border-gold hover:text-gold"
                : "border border-primary text-primary hover:border-gold hover:text-gold",
            )}
          >
            {t.cta}
          </Link>
          <LanguageSwitcher onDark={onDark} />
        </div>
      </Container>
    </header>
  );
}
