/**
 * Extracts plain text from a TipTap JSON document and returns
 * an estimated reading time in minutes (200 wpm).
 */
export function extractText(doc: unknown): string {
  if (!doc || typeof doc !== "object") return "";
  const node = doc as { text?: string; content?: unknown[] };
  let text = "";
  if (typeof node.text === "string") text += node.text + " ";
  if (Array.isArray(node.content)) {
    for (const child of node.content) text += extractText(child) + " ";
  }
  return text;
}

export function readingTimeMinutes(doc: unknown): number {
  const text = extractText(doc).trim();
  if (!text) return 1;
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
