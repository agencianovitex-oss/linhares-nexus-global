import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n, withLocale } from "@/i18n/useI18n";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-horizontal-white.png.asset.json";
import logoBlack from "@/assets/logo-horizontal-black.png.asset.json";

interface Props {
  transparentOverHero?: boolean;
}

const VISA_SUBMENU = [
  { code: "EB-2 NIW", slug: "eb2-niw" },
  { code: "EB-1", slug: "eb1" },
  { code: "E-2", slug: "e2" },
  { code: "L-1", slug: "l1" },
  { code: "O-1", slug: "o1" },
  { code: "H-1B", slug: "h1b" },
  { code: "EB-5", slug: "eb5" },
  { code: "EB-3", slug: "eb3" },
  { code: "I-130", slug: "i130" },
  { code: "VAWA", slug: "vawa" },
];

export function Header({ transparentOverHero = false }: Props) {
  const { locale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onDark = transparentOverHero && !scrolled;
  const visasBase = locale === "pt" ? "/areas-de-atuacao" : "/servicos";

  const links: Array<{ label: string; to: string; hasSubmenu?: boolean }> = [
    { label: t.nav.about, to: "/quem-somos" },
    { label: t.nav.services, to: visasBase, hasSubmenu: true },
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
      <Container className="flex h-24 items-center justify-between gap-6 lg:h-28 xl:gap-8">
        <Link to={withLocale(locale, "/")} aria-label={t.brand} className="flex shrink-0 items-center">
          <img
            src={onDark ? logoWhite.url : logoBlack.url}
            alt={t.brand}
            width="640"
            height="180"
            decoding="async"
            className="block h-12 w-auto max-w-none shrink-0 object-contain [image-rendering:auto] md:h-16 lg:h-20 xl:h-24"
          />
        </Link>

        <nav
          aria-label="Primary"
          className={cn(
            "hidden flex-nowrap items-center gap-x-6 whitespace-nowrap text-[12px] font-medium tracking-[0.06em] xl:flex 2xl:gap-x-9",
            onDark ? "text-primary-foreground/85" : "text-primary/85",
          )}
        >
          {links.map((l) =>
            l.hasSubmenu ? (
              <div key={l.to} className="group relative">
                <Link
                  to={withLocale(locale, l.to)}
                  className={cn(
                    "inline-flex items-center gap-1.5 whitespace-nowrap transition-colors",
                    onDark ? "hover:text-gold" : "hover:text-primary",
                  )}
                  activeProps={{ className: onDark ? "text-gold" : "text-primary" }}
                  activeOptions={{ exact: false }}
                >
                  {l.label}
                  <span aria-hidden className="text-[9px] mt-px transition-transform duration-300 group-hover:rotate-180">
                    ▾
                  </span>
                </Link>

                {/* Submenu */}
                <div
                  className="invisible opacity-0 translate-y-1 pointer-events-none absolute left-1/2 -translate-x-1/2 top-full pt-5 transition-[opacity,transform,visibility] duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                >
                  <div className="min-w-[240px] bg-background border border-border shadow-[0_30px_80px_-30px_rgb(6_36_67/0.25)]">
                    <div className="px-6 py-4 border-b border-border">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
                        Vistos Imigratórios
                      </span>
                    </div>
                    <ul className="py-2">
                      {VISA_SUBMENU.map((v) => (
                        <li key={v.slug}>
                          <Link
                            to={`${visasBase}/$slug`}
                            params={{ slug: v.slug }}
                            className="flex items-center justify-between gap-4 px-6 py-3 text-[12.5px] font-medium tracking-[0.08em] text-primary hover:bg-surface hover:text-gold transition-colors"
                          >
                            <span className="font-display text-[15px] font-semibold tracking-tight">{v.code}</span>
                            <span aria-hidden className="text-[10px] opacity-40 group-hover:opacity-100">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border">
                      <Link
                        to={visasBase}
                        className="block px-6 py-3 text-[10.5px] font-semibold uppercase tracking-[0.28em] text-primary hover:text-gold transition-colors"
                      >
                        Ver todos os vistos →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.to}
                to={withLocale(locale, l.to)}
                className={cn("whitespace-nowrap transition-colors", onDark ? "hover:text-gold" : "hover:text-primary")}
                activeProps={{ className: onDark ? "text-gold" : "text-primary" }}
                activeOptions={{ exact: false }}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-4 lg:gap-6">
          <Link
            to={withLocale(locale, "/contato")}
            className={cn(
              "hidden items-center justify-center whitespace-nowrap px-5 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors md:inline-flex xl:hidden",
              onDark
                ? "border border-primary-foreground/70 text-primary-foreground hover:border-gold hover:text-gold"
                : "border border-primary text-primary hover:border-gold hover:text-gold",
            )}
          >
            {t.cta}
          </Link>
          <LanguageSwitcher onDark={onDark} />
          <button
            type="button"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center xl:hidden transition-colors",
              onDark ? "text-primary-foreground hover:text-gold" : "text-primary hover:text-gold",
            )}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "xl:hidden fixed inset-x-0 top-24 bottom-0 z-40 bg-background border-t border-border overflow-y-auto transition-[opacity,transform] duration-300",
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <Container className="py-6">
          <nav aria-label="Mobile" className="flex flex-col divide-y divide-border">
            {links.map((l) => (
              <Link
                key={l.to}
                to={withLocale(locale, l.to)}
                className="py-4 text-[14px] font-medium tracking-[0.06em] text-primary hover:text-gold transition-colors"
                activeProps={{ className: "py-4 text-[14px] font-medium tracking-[0.06em] text-gold" }}
                activeOptions={{ exact: false }}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold mb-3">
              Vistos Imigratórios
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {VISA_SUBMENU.map((v) => (
                <li key={v.slug}>
                  <Link
                    to={`${visasBase}/$slug`}
                    params={{ slug: v.slug }}
                    className="block px-3 py-2 text-[13px] font-semibold text-primary border border-border hover:border-gold hover:text-gold transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {v.code}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to={withLocale(locale, "/contato")}
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center whitespace-nowrap px-5 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase border border-primary text-primary hover:border-gold hover:text-gold transition-colors"
          >
            {t.cta}
          </Link>
        </Container>
      </div>
    </header>
  );
}
