import { Link } from "@tanstack/react-router";
import { blogTaxonomyPath, tBlog } from "@/lib/blog/i18n-strings";
import type { PublicAuthor } from "@/lib/blog/public.functions";
import type { Locale } from "@/i18n/locales";

interface Props { author: PublicAuthor; locale: Locale }

export function AuthorCard({ author, locale }: Props) {
  const t = tBlog(locale);
  return (
    <section className="my-12 flex flex-col gap-5 rounded-xl border border-border/50 bg-card p-6 sm:flex-row sm:items-start sm:p-8">
      {author.photo_url ? (
        <img src={author.photo_url} alt="" className="h-20 w-20 flex-shrink-0 rounded-full object-cover" />
      ) : <div className="h-20 w-20 flex-shrink-0 rounded-full bg-[rgb(6_36_67)]/10" />}
      <div className="space-y-2">
        <div className="text-[10px] uppercase tracking-[0.25em] text-[rgb(179_134_66)]">{t.aboutAuthor}</div>
        <Link to={blogTaxonomyPath(locale, "author", author.slug)} className="block font-display text-xl text-[rgb(6_36_67)] hover:underline">
          {author.name}
        </Link>
        {author.role_title && <div className="text-sm text-ink/60">{author.role_title}</div>}
        {author.short_bio && <p className="text-sm leading-relaxed text-ink/75">{author.short_bio}</p>}
        {author.linkedin_url && (
          <a href={author.linkedin_url} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-[rgb(179_134_66)] hover:underline">
            LinkedIn →
          </a>
        )}
      </div>
    </section>
  );
}
