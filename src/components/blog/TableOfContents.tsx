import { Link } from "@tanstack/react-router";
import { extractHeadings } from "@/lib/blog/tiptap-render";
import { tBlog } from "@/lib/blog/i18n-strings";
import type { Locale } from "@/i18n/locales";

interface Props { doc: unknown; wordCount: number; locale: Locale }

export function TableOfContents({ doc, wordCount, locale }: Props) {
  if (wordCount < 1500) return null;
  const headings = extractHeadings(doc);
  if (headings.length < 3) return null;
  const t = tBlog(locale);

  return (
    <nav aria-label={t.inThisArticle} className="rounded-lg border border-border/50 bg-card/60 p-5 lg:sticky lg:top-24">
      <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[rgb(179_134_66)]">{t.inThisArticle}</div>
      <ol className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-4 text-ink/60" : "text-ink/80"}>
            <Link to="." hash={h.id} className="hover:text-[rgb(6_36_67)]">{h.text}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
