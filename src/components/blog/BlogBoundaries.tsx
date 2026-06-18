import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { tBlog, blogBasePath } from "@/lib/blog/i18n-strings";
import type { Locale } from "@/i18n/locales";

export function BlogNotFound({ locale }: { locale: Locale }) {
  const t = tBlog(locale);
  return (
    <section className="bg-background py-32">
      <Container width="narrow">
        <h1 className="font-display text-3xl text-[rgb(6_36_67)]">{t.notFoundTitle}</h1>
        <p className="mt-3 text-ink/70">{t.notFoundIntro}</p>
        <Link to={blogBasePath(locale)} className="mt-6 inline-block text-[rgb(179_134_66)] hover:underline">← {t.backToBlog}</Link>
      </Container>
    </section>
  );
}

export function BlogError({ locale, error }: { locale: Locale; error: Error }) {
  return (
    <section className="bg-background py-32">
      <Container width="narrow">
        <h1 className="font-display text-3xl text-[rgb(6_36_67)]">—</h1>
        <p className="mt-3 text-ink/70">{error.message}</p>
      </Container>
    </section>
  );
}
