import { Link } from "@tanstack/react-router";
import { useI18n, withLocale } from "@/i18n/useI18n";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logoWhite from "@/assets/logo-horizontal-white.png.asset.json";

const OFFICES = [
  { city: "Orlando", state: "Florida" },
  { city: "Miami", state: "Florida" },
  { city: "New York", state: "New York" },
  { city: "Salt Lake City", state: "Utah" },
];

export function Footer() {
  const { locale, t } = useI18n();

  const quick = [
    { label: t.nav.about, to: "/quem-somos" },
    { label: t.nav.services, to: locale === "pt" ? "/areas-de-atuacao" : "/servicos" },
    { label: t.nav.team, to: "/equipe" },
    { label: t.nav.awards, to: "/premiacoes" },
    { label: t.nav.media, to: "/na-midia" },
    { label: t.nav.success, to: "/casos-de-sucesso" },
    { label: t.nav.blog, to: "/blog" },
    { label: t.nav.contact, to: "/contato" },
  ];

  return (
    <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <Container className="grid gap-16 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src={logoWhite.url}
            alt="Linhares Law"
            width="640"
            height="180"
            decoding="async"
            className="h-20 w-auto object-contain [image-rendering:auto]"
          />

          <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-primary-foreground/60">
            {t.slogan}
          </p>
          <p className="mt-10 max-w-md text-[15px] leading-[1.75] text-primary-foreground/75">
            {t.footer.about}
          </p>
          <div className="mt-10">
            <span className="rule-gold" />
            <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-primary-foreground/55">
              {t.footer.attribution}
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="eyebrow eyebrow-on-dark">{t.footer.navigation}</h4>
          <ul className="mt-7 space-y-4 text-[13.5px] text-primary-foreground/85">
            {quick.map((l) => (
              <li key={l.to}>
                <Link to={withLocale(locale, l.to)} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="eyebrow eyebrow-on-dark">{t.footer.offices}</h4>
          <ul className="mt-7 space-y-4 text-[13.5px] text-primary-foreground/85">
            {OFFICES.map((o) => (
              <li key={o.city}>
                <span className="block">{o.city}</span>
                <span className="block text-[11px] uppercase tracking-[0.22em] text-primary-foreground/45">
                  {o.state}
                </span>
              </li>
            ))}
          </ul>
        </div>


        <div className="lg:col-span-2">
          <h4 className="eyebrow eyebrow-on-dark">{t.footer.contact}</h4>
          <ul className="mt-7 space-y-3 text-[13.5px] text-primary-foreground/85">
            <li>contact@linhareslaw.com</li>
            <li>+1 (407) 000-0000</li>
          </ul>
          <div className="mt-10">
            <LanguageSwitcher onDark />
          </div>
        </div>
      </Container>

      <div className="border-t border-primary-foreground/10">
        <Container className="flex flex-col items-start justify-between gap-3 py-7 text-[11px] uppercase tracking-[0.22em] text-primary-foreground/50 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Linhares Law · {t.footer.rights}</span>
          <span>{t.tagline}</span>
        </Container>
      </div>
    </footer>
  );
}
