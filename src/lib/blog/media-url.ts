/**
 * Blog media is stored in a private bucket, so Supabase "public" object URLs
 * do not resolve for visitors. Rewrite them to our public proxy route.
 */
const MARKERS = [
  "/storage/v1/object/public/blog-media/",
  "/storage/v1/object/sign/blog-media/",
  "/storage/v1/object/blog-media/",
];

export function mediaUrl(url: string | null | undefined): string | undefined {
  if (!url) return undefined;
  for (const marker of MARKERS) {
    const i = url.indexOf(marker);
    if (i !== -1) {
      const path = url.slice(i + marker.length).split("?")[0];
      return `/api/public/blog-media/${path}`;
    }
  }
  return url;
}
