import { renderTipTap } from "@/lib/blog/tiptap-render";

interface Props { doc: unknown }

export function ArticleBody({ doc }: Props) {
  return (
    <div className="prose prose-lg max-w-none font-serif prose-headings:font-display prose-headings:text-[rgb(6_36_67)] prose-h2:mt-12 prose-h2:text-3xl prose-h3:mt-8 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-ink/80 prose-a:text-[rgb(179_134_66)] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[rgb(179_134_66)] prose-blockquote:text-[rgb(6_36_67)] prose-blockquote:not-italic prose-img:rounded-lg prose-figure:my-8 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-ink/60">
      {renderTipTap(doc)}
    </div>
  );
}
