import { Link } from "@tanstack/react-router";
import { extractHeadings } from "@/lib/blog/tiptap-render";
import { tBlog } from "@/lib/blog/i18n-strings";
import type { Locale } from "@/i18n/locales";

interface Props { doc: unknown; locale: Locale }

export function TableOfContents({ doc, locale }: Props) {
  const headings = extractHeadings(doc);
  if (headings.length < 2) return null;
  const t = tBlog(locale);

  return (
    <nav aria-label={t.inThisArticle} className="border border-border/60 bg-card p-5">
      <div className="text-[10px] uppercase tracking-[0.25em] text-[rgb(179_134_66)]">{t.inThisArticle}</div>
      <div className="mt-3 h-px w-10 bg-[rgb(179_134_66)]" />
      <ol className="mt-4 space-y-2 text-[13px]">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-4 text-ink/60" : "text-ink/80"}>
            <Link to="." hash={h.id} className="hover:text-[rgb(6_36_67)]">{h.text}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
