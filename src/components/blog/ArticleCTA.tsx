import { resolveCTA } from "@/lib/blog/cta-defaults";
import type { Locale } from "@/i18n/locales";

interface Props {
  locale: Locale;
  categorySlug?: string | null;
  cta_title?: string | null;
  cta_description?: string | null;
  cta_button_text?: string | null;
  cta_url?: string | null;
}

export function ArticleCTA(props: Props) {
  const c = resolveCTA(props);
  return (
    <aside className="my-12 overflow-hidden rounded-xl bg-[rgb(6_36_67)] p-8 text-white sm:p-10">
      <h3 className="font-display text-2xl leading-tight sm:text-3xl">{c.title}</h3>
      <p className="mt-3 text-white/80">{c.description}</p>
      <a href={c.url} className="mt-6 inline-flex items-center gap-2 rounded-md bg-[rgb(179_134_66)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[rgb(199_154_86)]">
        {c.button} →
      </a>
    </aside>
  );
}
