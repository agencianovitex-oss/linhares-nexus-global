import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const locale = z.enum(["pt", "en", "es"]);
const Locale = locale;

function client() {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
  );
}

const NOW = () => new Date().toISOString();

export type PublicAuthor = {
  id: string;
  slug: string;
  name: string;
  photo_url: string | null;
  linkedin_url: string | null;
  role_title: string | null;
  short_bio: string | null;
};

export type PublicCategory = {
  id: string;
  slug: string;
  parent_id: string | null;
  position: number | null;
  name: string;
  description: string | null;
};

export type PublicTag = { id: string; slug: string; name: string };
export type PublicProfession = { id: string; slug: string; name: string };

export type PublicPostListItem = {
  id: string;
  slug: string;
  cover_image_url: string | null;
  published_at: string | null;
  reading_time_minutes: number | null;
  is_featured: boolean;
  featured_order: number | null;
  is_pillar_content: boolean;
  title: string;
  excerpt: string | null;
  category: { slug: string; name: string } | null;
  author: { slug: string; name: string; photo_url: string | null } | null;
};

export type PublicPostDetail = PublicPostListItem & {
  body: any;
  meta_title: string | null;
  meta_description: string | null;
  faq: Array<{ question: string; answer: string }>;
  updated_at: string;
  category_id: string | null;
  author_id: string | null;
  category_full: PublicCategory | null;
  author_full: PublicAuthor | null;
  tags: PublicTag[];
  professions: PublicProfession[];
  cta: {
    cta_type: string | null;
    cta_title: string | null;
    cta_description: string | null;
    cta_button_text: string | null;
    cta_url: string | null;
  };
};

type PostRow = {
  id: string;
  slug: string;
  cover_image_url: string | null;
  published_at: string | null;
  reading_time_minutes: number | null;
  is_featured: boolean | null;
  featured_order: number | null;
  is_pillar_content: boolean | null;
  category_id: string | null;
  author_id: string | null;
  updated_at: string;
  cta_type: string | null;
  cta_title: string | null;
  cta_description: string | null;
  cta_button_text: string | null;
  cta_url: string | null;
  translations: Array<{
    locale: "pt" | "en" | "es";
    title: string;
    excerpt: string | null;
    body: unknown;
    meta_title: string | null;
    meta_description: string | null;
    faq: unknown;
  }>;
  category: { id: string; slug: string; parent_id: string | null; position: number | null; translations: Array<{ locale: string; name: string; description: string | null }> } | null;
  author: { id: string; slug: string; name: string; photo_url: string | null; linkedin_url: string | null; translations: Array<{ locale: string; role_title: string | null; short_bio: string | null }> } | null;
};

function pickTr(arr: any[] | null | undefined, loc: string): any {
  if (!arr || arr.length === 0) return null;
  return arr.find((t: any) => t.locale === loc) ?? arr.find((t: any) => t.locale === "pt") ?? arr[0];
}

function rowToListItem(row: PostRow, loc: string): PublicPostListItem | null {
  const tr = pickTr(row.translations, loc);
  if (!tr) return null;
  const catTr = row.category ? pickTr(row.category.translations, loc) : null;
  const authorTr = row.author ? pickTr(row.author.translations, loc) : null;
  return {
    id: row.id,
    slug: row.slug,
    cover_image_url: row.cover_image_url,
    published_at: row.published_at,
    reading_time_minutes: row.reading_time_minutes,
    is_featured: !!row.is_featured,
    featured_order: row.featured_order,
    is_pillar_content: !!row.is_pillar_content,
    title: tr.title,
    excerpt: tr.excerpt,
    category: row.category && catTr ? { slug: row.category.slug, name: catTr.name } : null,
    author: row.author ? { slug: row.author.slug, name: row.author.name, photo_url: row.author.photo_url } : (authorTr ? { slug: "", name: "", photo_url: null } : null),
  };
}

const baseSelect = `
  id, slug, cover_image_url, published_at, reading_time_minutes,
  is_featured, featured_order, is_pillar_content, category_id, author_id, updated_at,
  cta_type, cta_title, cta_description, cta_button_text, cta_url,
  translations:post_translations(locale, title, excerpt, body, meta_title, meta_description, faq),
  category:categories(id, slug, parent_id, position, translations:category_translations(locale, name, description)),
  author:authors(id, slug, name, photo_url, linkedin_url, translations:author_translations(locale, role_title, short_bio))
`;

/* ---------------- Lists & filters ---------------- */

export const listPublishedPosts = createServerFn({ method: "GET" })
  .inputValidator((d: {
    locale: "pt" | "en" | "es";
    page?: number;
    pageSize?: number;
    categorySlug?: string;
    tagSlug?: string;
    authorSlug?: string;
    professionSlug?: string;
    q?: string;
    excludeIds?: string[];
  }) =>
    z.object({
      locale: Locale,
      page: z.number().int().min(1).default(1),
      pageSize: z.number().int().min(1).max(50).default(12),
      categorySlug: z.string().optional(),
      tagSlug: z.string().optional(),
      authorSlug: z.string().optional(),
      professionSlug: z.string().optional(),
      q: z.string().optional(),
      excludeIds: z.array(z.string()).optional(),
    }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    let q = sb.from("posts").select(baseSelect, { count: "exact" })
      .eq("status", "published")
      .lte("published_at", NOW())
      .order("published_at", { ascending: false, nullsFirst: false });

    if (data.categorySlug) {
      const { data: cat } = await sb.from("categories").select("id").eq("slug", data.categorySlug).maybeSingle();
      if (!cat) return { items: [], total: 0 };
      const { data: children } = await sb.from("categories").select("id").eq("parent_id", cat.id);
      const ids = [cat.id, ...(children?.map((c) => c.id) ?? [])];
      q = q.in("category_id", ids);
    }
    if (data.authorSlug) {
      const { data: a } = await sb.from("authors").select("id").eq("slug", data.authorSlug).maybeSingle();
      if (!a) return { items: [], total: 0 };
      q = q.eq("author_id", a.id);
    }
    if (data.tagSlug) {
      const { data: t } = await sb.from("tags").select("id").eq("slug", data.tagSlug).maybeSingle();
      if (!t) return { items: [], total: 0 };
      const { data: pt } = await sb.from("post_tags").select("post_id").eq("tag_id", t.id);
      const ids = pt?.map((r) => r.post_id) ?? [];
      if (ids.length === 0) return { items: [], total: 0 };
      q = q.in("id", ids);
    }
    if (data.professionSlug) {
      const { data: p } = await sb.from("professions").select("id").eq("slug", data.professionSlug).maybeSingle();
      if (!p) return { items: [], total: 0 };
      const { data: pp } = await sb.from("post_professions").select("post_id").eq("profession_id", p.id);
      const ids = pp?.map((r) => r.post_id) ?? [];
      if (ids.length === 0) return { items: [], total: 0 };
      q = q.in("id", ids);
    }
    if (data.excludeIds?.length) q = q.not("id", "in", `(${data.excludeIds.join(",")})`);

    const from = (data.page - 1) * data.pageSize;
    q = q.range(from, from + data.pageSize - 1);

    const { data: rows, error, count } = await q;
    if (error) throw new Error(error.message);
    let items = (rows as unknown as PostRow[] | null ?? [])
      .map((r) => rowToListItem(r, data.locale))
      .filter((x): x is PublicPostListItem => x !== null);

    if (data.q) {
      const needle = data.q.toLowerCase();
      items = items.filter((i) =>
        i.title.toLowerCase().includes(needle) ||
        (i.excerpt ?? "").toLowerCase().includes(needle));
    }

    return { items, total: count ?? items.length };
  });

/* ---------------- Featured ---------------- */

export const getFeaturedPosts = createServerFn({ method: "GET" })
  .inputValidator((d: { locale: "pt" | "en" | "es"; limit?: number }) =>
    z.object({ locale: Locale, limit: z.number().int().min(1).max(10).default(3) }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    const { data: feat } = await sb.from("posts").select(baseSelect)
      .eq("status", "published").lte("published_at", NOW())
      .eq("is_featured", true)
      .order("featured_order", { ascending: true, nullsFirst: false })
      .order("published_at", { ascending: false })
      .limit(data.limit);

    let items = ((feat as unknown as PostRow[]) ?? [])
      .map((r) => rowToListItem(r, data.locale))
      .filter((x): x is PublicPostListItem => x !== null);

    if (items.length < data.limit) {
      const remain = data.limit - items.length;
      const exclude = items.map((i) => i.id);
      let fb = sb.from("posts").select(baseSelect)
        .eq("status", "published").lte("published_at", NOW())
        .order("published_at", { ascending: false }).limit(remain);
      if (exclude.length) fb = fb.not("id", "in", `(${exclude.join(",")})`);
      const { data: more } = await fb;
      const moreItems = ((more as unknown as PostRow[]) ?? [])
        .map((r) => rowToListItem(r, data.locale))
        .filter((x): x is PublicPostListItem => x !== null);
      items = [...items, ...moreItems];
    }
    return items;
  });

/* ---------------- Article detail ---------------- */

export const getPostBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string; locale: "pt" | "en" | "es" }) =>
    z.object({ slug: z.string().min(1), locale: Locale }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    const { data: row, error } = await sb.from("posts").select(baseSelect)
      .eq("slug", data.slug).eq("status", "published").lte("published_at", NOW())
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;

    const r = row as unknown as PostRow;
    const tr = pickTr(r.translations, data.locale);
    if (!tr) return null;

    const { data: tagRows } = await sb.from("post_tags").select("tag_id, tags(id, slug, translations:tag_translations(locale, name))").eq("post_id", r.id);
    const tags: PublicTag[] = (tagRows ?? []).flatMap((t: any) => {
      const tag = t.tags;
      if (!tag) return [];
      const trr = pickTr(tag.translations ?? [], data.locale);
      return [{ id: tag.id, slug: tag.slug, name: trr?.name ?? tag.slug }];
    });

    const { data: profRows } = await sb.from("post_professions").select("profession_id, professions(id, slug, translations:profession_translations(locale, name))").eq("post_id", r.id);
    const professions: PublicProfession[] = (profRows ?? []).flatMap((p: any) => {
      const pr = p.professions;
      if (!pr) return [];
      const trr = pickTr(pr.translations ?? [], data.locale);
      return [{ id: pr.id, slug: pr.slug, name: trr?.name ?? pr.slug }];
    });

    const catTr = r.category ? pickTr(r.category.translations, data.locale) : null;
    const authorTr = r.author ? pickTr(r.author.translations, data.locale) : null;

    const faqRaw = Array.isArray(tr.faq) ? tr.faq : [];
    const faq = (faqRaw as Array<any>).filter((f) => f && typeof f.question === "string" && typeof f.answer === "string")
      .map((f) => ({ question: f.question as string, answer: f.answer as string }));

    const detail: PublicPostDetail = {
      id: r.id, slug: r.slug,
      cover_image_url: r.cover_image_url, published_at: r.published_at,
      reading_time_minutes: r.reading_time_minutes,
      is_featured: !!r.is_featured, featured_order: r.featured_order,
      is_pillar_content: !!r.is_pillar_content,
      title: tr.title, excerpt: tr.excerpt,
      category: r.category && catTr ? { slug: r.category.slug, name: catTr.name } : null,
      author: r.author ? { slug: r.author.slug, name: r.author.name, photo_url: r.author.photo_url } : null,
      body: tr.body, meta_title: tr.meta_title, meta_description: tr.meta_description,
      faq, updated_at: r.updated_at,
      category_id: r.category_id, author_id: r.author_id,
      category_full: r.category && catTr ? {
        id: r.category.id, slug: r.category.slug, parent_id: r.category.parent_id, position: r.category.position,
        name: catTr.name, description: catTr.description,
      } : null,
      author_full: r.author ? {
        id: r.author.id, slug: r.author.slug, name: r.author.name,
        photo_url: r.author.photo_url, linkedin_url: r.author.linkedin_url,
        role_title: authorTr?.role_title ?? null, short_bio: authorTr?.short_bio ?? null,
      } : null,
      tags, professions,
      cta: {
        cta_type: r.cta_type, cta_title: r.cta_title, cta_description: r.cta_description,
        cta_button_text: r.cta_button_text, cta_url: r.cta_url,
      },
    };
    return detail;
  });

/* ---------------- Related ---------------- */

export const getRelatedPosts = createServerFn({ method: "GET" })
  .inputValidator((d: { postId: string; locale: "pt" | "en" | "es"; categoryId?: string | null; limit?: number }) =>
    z.object({ postId: z.string(), locale: Locale, categoryId: z.string().nullable().optional(), limit: z.number().int().min(1).max(6).default(3) }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    const exclude = [data.postId];
    let pool: PublicPostListItem[] = [];

    if (data.categoryId) {
      const { data: same } = await sb.from("posts").select(baseSelect)
        .eq("status", "published").lte("published_at", NOW())
        .eq("category_id", data.categoryId)
        .not("id", "eq", data.postId)
        .order("is_pillar_content", { ascending: false })
        .order("published_at", { ascending: false })
        .limit(data.limit);
      pool = ((same as unknown as PostRow[]) ?? [])
        .map((r) => rowToListItem(r, data.locale))
        .filter((x): x is PublicPostListItem => x !== null);
      exclude.push(...pool.map((p) => p.id));
    }
    if (pool.length < data.limit) {
      const need = data.limit - pool.length;
      let fb = sb.from("posts").select(baseSelect)
        .eq("status", "published").lte("published_at", NOW())
        .not("id", "in", `(${exclude.join(",")})`)
        .order("published_at", { ascending: false }).limit(need);
      const { data: more } = await fb;
      const moreItems = ((more as unknown as PostRow[]) ?? [])
        .map((r) => rowToListItem(r, data.locale))
        .filter((x): x is PublicPostListItem => x !== null);
      pool = [...pool, ...moreItems];
    }
    return pool.slice(0, data.limit);
  });

/* ---------------- Taxonomies ---------------- */

export const getCategoryTree = createServerFn({ method: "GET" })
  .inputValidator((d: { locale: "pt" | "en" | "es" }) => z.object({ locale: Locale }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    const { data: cats } = await sb.from("categories")
      .select("id, slug, parent_id, position, translations:category_translations(locale, name, description)")
      .order("position", { ascending: true, nullsFirst: false });
    const list: PublicCategory[] = (cats ?? []).map((c: any) => {
      const tr = pickTr(c.translations ?? [], data.locale);
      return { id: c.id, slug: c.slug, parent_id: c.parent_id, position: c.position, name: tr?.name ?? c.slug, description: tr?.description ?? null };
    });
    const roots = list.filter((c) => !c.parent_id);
    const children = (id: string) => list.filter((c) => c.parent_id === id);
    return { all: list, roots, children: Object.fromEntries(roots.map((r) => [r.id, children(r.id)])) };
  });

export const getCategoryBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string; locale: "pt" | "en" | "es" }) => z.object({ slug: z.string(), locale: Locale }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    const { data: row } = await sb.from("categories")
      .select("id, slug, parent_id, position, translations:category_translations(locale, name, description)")
      .eq("slug", data.slug).maybeSingle();
    if (!row) return null;
    const tr = pickTr((row as any).translations ?? [], data.locale);
    return { id: row.id, slug: row.slug, parent_id: row.parent_id, position: row.position, name: tr?.name ?? row.slug, description: tr?.description ?? null } as PublicCategory;
  });

export const getTagBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string; locale: "pt" | "en" | "es" }) => z.object({ slug: z.string(), locale: Locale }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    const { data: row } = await sb.from("tags").select("id, slug, translations:tag_translations(locale, name)").eq("slug", data.slug).maybeSingle();
    if (!row) return null;
    const tr = pickTr((row as any).translations ?? [], data.locale);
    return { id: row.id, slug: row.slug, name: tr?.name ?? row.slug } as PublicTag;
  });

export const getAuthorBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string; locale: "pt" | "en" | "es" }) => z.object({ slug: z.string(), locale: Locale }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    const { data: row } = await sb.from("authors")
      .select("id, slug, name, photo_url, linkedin_url, is_active, translations:author_translations(locale, role_title, short_bio)")
      .eq("slug", data.slug).maybeSingle();
    if (!row) return null;
    const tr = pickTr((row as any).translations ?? [], data.locale);
    return {
      id: row.id, slug: row.slug, name: row.name, photo_url: row.photo_url, linkedin_url: row.linkedin_url,
      role_title: tr?.role_title ?? null, short_bio: tr?.short_bio ?? null,
    } as PublicAuthor;
  });

export const getProfessionBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string; locale: "pt" | "en" | "es" }) => z.object({ slug: z.string(), locale: Locale }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    const { data: row } = await sb.from("professions")
      .select("id, slug, translations:profession_translations(locale, name)")
      .eq("slug", data.slug).maybeSingle();
    if (!row) return null;
    const tr = pickTr((row as any).translations ?? [], data.locale);
    return { id: row.id, slug: row.slug, name: tr?.name ?? row.slug } as PublicProfession;
  });

/* ---------------- Search ---------------- */

export const searchPosts = createServerFn({ method: "GET" })
  .inputValidator((d: { q: string; locale: "pt" | "en" | "es"; limit?: number }) =>
    z.object({ q: z.string().min(1), locale: Locale, limit: z.number().int().min(1).max(30).default(20) }).parse(d))
  .handler(async ({ data }) => {
    const sb = client();
    const { data: rows } = await sb.from("posts").select(baseSelect)
      .eq("status", "published").lte("published_at", NOW())
      .order("published_at", { ascending: false }).limit(100);
    const items = ((rows as unknown as PostRow[]) ?? [])
      .map((r) => rowToListItem(r, data.locale))
      .filter((x): x is PublicPostListItem => x !== null);
    const needle = data.q.toLowerCase().trim();
    return items.filter((i) =>
      i.title.toLowerCase().includes(needle) ||
      (i.excerpt ?? "").toLowerCase().includes(needle) ||
      (i.category?.name ?? "").toLowerCase().includes(needle)
    ).slice(0, data.limit);
  });

/* ---------------- Sitemap ---------------- */

export const listAllPublishedSlugs = createServerFn({ method: "GET" })
  .handler(async () => {
    const sb = client();
    const { data: rows } = await sb.from("posts")
      .select("slug, updated_at, published_at, translations:post_translations(locale)")
      .eq("status", "published").lte("published_at", NOW());
    return (rows ?? []).map((r: any) => ({
      slug: r.slug as string,
      updated_at: (r.updated_at as string) ?? (r.published_at as string),
      locales: ((r.translations ?? []) as Array<{ locale: string }>).map((t) => t.locale),
    }));
  });
