type Node = { type?: string; text?: string; attrs?: Record<string, any>; content?: Node[] };

/** Collect all translatable strings from a TipTap doc, in stable order. */
export function collectDocStrings(doc: unknown): string[] {
  const out: string[] = [];
  const walk = (n: Node | undefined) => {
    if (!n || typeof n !== "object") return;
    if (typeof n.text === "string") out.push(n.text);
    if (n.attrs) {
      for (const key of ["alt", "title", "caption"]) {
        const v = n.attrs[key];
        if (typeof v === "string" && v.trim()) out.push(v);
      }
    }
    if (Array.isArray(n.content)) n.content.forEach(walk);
  };
  walk(doc as Node);
  return out;
}

/** Rebuild a TipTap doc replacing translatable strings in the same order. */
export function applyDocStrings(doc: unknown, values: string[]): unknown {
  let i = 0;
  const next = () => (i < values.length ? values[i++] : undefined);
  const walk = (n: Node): Node => {
    const clone: Node = { ...n };
    if (typeof clone.text === "string") {
      const v = next();
      if (typeof v === "string") clone.text = v;
    }
    if (clone.attrs) {
      const attrs = { ...clone.attrs };
      for (const key of ["alt", "title", "caption"]) {
        const cur = attrs[key];
        if (typeof cur === "string" && cur.trim()) {
          const v = next();
          if (typeof v === "string") attrs[key] = v;
        }
      }
      clone.attrs = attrs;
    }
    if (Array.isArray(clone.content)) clone.content = clone.content.map(walk);
    return clone;
  };
  return walk(doc as Node);
}
