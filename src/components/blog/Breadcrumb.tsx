import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface Crumb { label: string; href?: string }

interface Props { items: Crumb[] }

export function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-ink/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          let node: ReactNode = <span aria-current={last ? "page" : undefined} className={last ? "text-ink/80" : ""}>{c.label}</span>;
          if (c.href && !last) node = <Link to={c.href} className="hover:text-[rgb(6_36_67)]">{c.label}</Link>;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {node}
              {!last && <span aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
