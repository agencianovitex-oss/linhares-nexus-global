/**
 * Pure TipTap JSON → React renderer (no @tiptap/react in the public bundle).
 * Supports the StarterKit + Image + Link + Placeholder schema used by the CMS.
 */
import type { JSX, ReactNode } from "react";

type Node = {
  type: string;
  attrs?: Record<string, any>;
  marks?: Array<{ type: string; attrs?: Record<string, any> }>;
  content?: Node[];
  text?: string;
};

function applyMarks(text: ReactNode, marks: Node["marks"]): ReactNode {
  if (!marks || marks.length === 0) return text;
  return marks.reduce<ReactNode>((acc, m) => {
    switch (m.type) {
      case "bold": return <strong>{acc}</strong>;
      case "italic": return <em>{acc}</em>;
      case "underline": return <u>{acc}</u>;
      case "strike": return <s>{acc}</s>;
      case "code": return <code>{acc}</code>;
      case "link": {
        const href: string = m.attrs?.href ?? "#";
        const isExternal = /^https?:\/\//i.test(href) && !href.includes("linhares-nexus-global.lovable.app");
        return (
          <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
            {acc}
          </a>
        );
      }
      default: return acc;
    }
  }, text);
}

function renderNode(node: Node, key: string): ReactNode {
  if (node.type === "text") return <span key={key}>{applyMarks(node.text ?? "", node.marks)}</span>;

  const children = (node.content ?? []).map((c, i) => renderNode(c, `${key}-${i}`));

  switch (node.type) {
    case "doc": return <>{children}</>;
    case "paragraph": return <p key={key}>{children}</p>;
    case "heading": {
      const level = Math.min(Math.max(node.attrs?.level ?? 2, 1), 6);
      const Tag = `h${level}` as keyof JSX.IntrinsicElements;
      const text = (node.content ?? []).map((c) => c.text ?? "").join("");
      const id = slugifyHeading(text);
      return <Tag key={key} id={id}>{children}</Tag>;
    }
    case "bulletList": return <ul key={key}>{children}</ul>;
    case "orderedList": return <ol key={key}>{children}</ol>;
    case "listItem": return <li key={key}>{children}</li>;
    case "blockquote": return <blockquote key={key}>{children}</blockquote>;
    case "horizontalRule": return <hr key={key} />;
    case "hardBreak": return <br key={key} />;
    case "codeBlock": return <pre key={key}><code>{children}</code></pre>;
    case "image": {
      const src: string = node.attrs?.src ?? "";
      const alt: string = node.attrs?.alt ?? "";
      const title: string | undefined = node.attrs?.title ?? undefined;
      if (!src) return null;
      return (
        <figure key={key}>
          <img src={src} alt={alt} loading="lazy" decoding="async" />
          {title ? <figcaption>{title}</figcaption> : null}
        </figure>
      );
    }
    default: return <div key={key}>{children}</div>;
  }
}

export function slugifyHeading(text: string): string {
  return text
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-").replace(/-+/g, "-")
    .slice(0, 80);
}

export function renderTipTap(doc: unknown): ReactNode {
  if (!doc || typeof doc !== "object") return null;
  return renderNode(doc as Node, "root");
}

export function extractHeadings(doc: unknown): Array<{ id: string; text: string; level: number }> {
  const result: Array<{ id: string; text: string; level: number }> = [];
  function walk(n: Node) {
    if (n.type === "heading") {
      const text = (n.content ?? []).map((c) => c.text ?? "").join("").trim();
      const level = Math.min(Math.max(n.attrs?.level ?? 2, 1), 3);
      if (text && (level === 2 || level === 3)) {
        result.push({ id: slugifyHeading(text), text, level });
      }
    }
    (n.content ?? []).forEach(walk);
  }
  if (doc && typeof doc === "object") walk(doc as Node);
  return result;
}

export function countWords(doc: unknown): number {
  let n = 0;
  function walk(node: Node) {
    if (node.type === "text" && node.text) {
      n += node.text.trim().split(/\s+/).filter(Boolean).length;
    }
    (node.content ?? []).forEach(walk);
  }
  if (doc && typeof doc === "object") walk(doc as Node);
  return n;
}
