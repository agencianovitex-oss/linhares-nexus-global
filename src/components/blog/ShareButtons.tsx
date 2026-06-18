import { useState } from "react";
import { tBlog } from "@/lib/blog/i18n-strings";
import type { Locale } from "@/i18n/locales";

interface Props { url: string; title: string; locale: Locale }

export function ShareButtons({ url, title, locale }: Props) {
  const t = tBlog(locale);
  const [copied, setCopied] = useState(false);
  const full = url.startsWith("http") ? url : `https://linhares-nexus-global.lovable.app${url}`;
  const enc = encodeURIComponent;

  return (
    <div className="my-8 flex flex-wrap items-center gap-3 border-y border-border/40 py-4">
      <span className="text-xs uppercase tracking-[0.25em] text-ink/60">{t.share}</span>
      <a href={`https://wa.me/?text=${enc(`${title} — ${full}`)}`} target="_blank" rel="noopener noreferrer"
        className="rounded border border-border/60 px-3 py-1.5 text-xs hover:border-[rgb(179_134_66)]">WhatsApp</a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(full)}`} target="_blank" rel="noopener noreferrer"
        className="rounded border border-border/60 px-3 py-1.5 text-xs hover:border-[rgb(179_134_66)]">LinkedIn</a>
      <button type="button" onClick={() => { navigator.clipboard?.writeText(full); setCopied(true); setTimeout(() => setCopied(false), 1800); }}
        className="rounded border border-border/60 px-3 py-1.5 text-xs hover:border-[rgb(179_134_66)]">
        {copied ? t.linkCopied : t.copyLink}
      </button>
    </div>
  );
}
