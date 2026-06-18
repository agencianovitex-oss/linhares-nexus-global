import { Link } from "@tanstack/react-router";
import { blogTaxonomyPath } from "@/lib/blog/i18n-strings";
import type { PublicCategory } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

interface Props {
  roots: PublicCategory[];
  locale: Locale;
  activeSlug?: string;
}

export function CategoryNav({ roots, locale, activeSlug }: Props) {
  if (!roots.length) return null;
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Categories">
      {roots.map((c) => {
        const active = c.slug === activeSlug;
        return (
          <Link
            key={c.id}
            to={blogTaxonomyPath(locale, "category", c.slug)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active
                ? "border-[rgb(179_134_66)] bg-[rgb(179_134_66)] text-white"
                : "border-border/60 text-ink/70 hover:border-[rgb(179_134_66)] hover:text-[rgb(6_36_67)]"
            }`}
          >
            {c.name}
          </Link>
        );
      })}
    </nav>
  );
}
