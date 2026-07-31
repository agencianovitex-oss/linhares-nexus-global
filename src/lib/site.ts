/** Canonical production origin. Never use the .lovable.app staging domain here. */
export const SITE_ORIGIN = "https://linhareslaw.com";

/** Turns a site-relative path (or an already absolute URL) into an absolute URL. */
export function absUrl(path: string): string {
  if (!path) return SITE_ORIGIN;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
