import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const localeSchema = z.enum(["pt", "en", "es"]);
const statusSchema = z.enum(["draft", "published", "scheduled", "archived"]);

const faqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const translationSchema = z.object({
  locale: localeSchema,
  title: z.string().min(1),
  excerpt: z.string().nullable().optional(),
  body: z.any(),
  meta_title: z.string().nullable().optional(),
  meta_description: z.string().nullable().optional(),
  faq: z.array(faqItemSchema).default([]),
});

const upsertPostSchema = z.object({
  id: z.string().uuid().nullable().optional(),
  slug: z.string().min(1),
  status: statusSchema,
  published_at: z.string().nullable().optional(),
  cover_image_url: z.string().nullable().optional(),
  category_id: z.string().uuid().nullable().optional(),
  author_id: z.string().uuid().nullable().optional(),
  reading_time_minutes: z.number().int().nullable().optional(),
  is_pillar_content: z.boolean().default(false),
  is_featured: z.boolean().default(false),
  featured_order: z.number().int().nullable().optional(),
  cta_type: z.string().nullable().optional(),
  cta_title: z.string().nullable().optional(),
  cta_description: z.string().nullable().optional(),
  cta_button_text: z.string().nullable().optional(),
  cta_url: z.string().nullable().optional(),
  translations: z.array(translationSchema),
  tag_ids: z.array(z.string().uuid()).default([]),
  profession_ids: z.array(z.string().uuid()).default([]),
});

export const listPosts = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("posts")
      .select(`
        id, slug, status, published_at, cover_image_url, is_featured, featured_order,
        is_pillar_content, reading_time_minutes, updated_at, created_at,
        category:categories(id, slug),
        author:authors(id, name, slug),
        translations:post_translations(locale, title)
      `)
      .order("updated_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const getPost = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { data: post, error } = await context.supabase
      .from("posts")
      .select(`
        *,
        translations:post_translations(*),
        tag_ids:post_tags(tag_id),
        profession_ids:post_professions(profession_id)
      `)
      .eq("id", data.id)
      .single();
    if (error) throw new Error(error.message);
    return {
      ...post,
      tag_ids: (post.tag_ids as Array<{ tag_id: string }>).map((t) => t.tag_id),
      profession_ids: (post.profession_ids as Array<{ profession_id: string }>).map((p) => p.profession_id),
    };
  });

export const upsertPost = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => upsertPostSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { translations, tag_ids, profession_ids, id, ...postFields } = data;
    let postId = id ?? null;

    if (postId) {
      const { error } = await context.supabase
        .from("posts")
        .update(postFields)
        .eq("id", postId);
      if (error) throw new Error(error.message);
    } else {
      const { data: inserted, error } = await context.supabase
        .from("posts")
        .insert(postFields)
        .select("id")
        .single();
      if (error) throw new Error(error.message);
      postId = inserted.id;
    }

    // Upsert translations
    for (const tr of translations) {
      const { error } = await context.supabase
        .from("post_translations")
        .upsert(
          { post_id: postId!, ...tr },
          { onConflict: "post_id,locale" }
        );
      if (error) throw new Error(error.message);
    }

    // Replace tags
    await context.supabase.from("post_tags").delete().eq("post_id", postId!);
    if (tag_ids.length) {
      const { error } = await context.supabase
        .from("post_tags")
        .insert(tag_ids.map((tag_id) => ({ post_id: postId!, tag_id })));
      if (error) throw new Error(error.message);
    }

    // Replace professions
    await context.supabase.from("post_professions").delete().eq("post_id", postId!);
    if (profession_ids.length) {
      const { error } = await context.supabase
        .from("post_professions")
        .insert(profession_ids.map((profession_id) => ({ post_id: postId!, profession_id })));
      if (error) throw new Error(error.message);
    }

    return { id: postId };
  });

export const deletePost = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("posts").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const updateFeaturedOrder = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({ items: z.array(z.object({ id: z.string().uuid(), featured_order: z.number().int() })) }).parse(d)
  )
  .handler(async ({ data, context }) => {
    for (const item of data.items) {
      const { error } = await context.supabase
        .from("posts")
        .update({ featured_order: item.featured_order })
        .eq("id", item.id);
      if (error) throw new Error(error.message);
    }
    return { ok: true };
  });

export const dashboardStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const [pub, sch, drf, recent, byCat, featured] = await Promise.all([
      context.supabase.from("posts").select("id", { count: "exact", head: true }).eq("status", "published"),
      context.supabase.from("posts").select("id", { count: "exact", head: true }).eq("status", "scheduled"),
      context.supabase.from("posts").select("id", { count: "exact", head: true }).eq("status", "draft"),
      context.supabase
        .from("posts")
        .select("id, slug, status, published_at, updated_at, translations:post_translations(locale,title)")
        .order("updated_at", { ascending: false })
        .limit(8),
      context.supabase
        .from("posts")
        .select("category_id, category:categories(slug, translations:category_translations(locale,name))")
        .not("category_id", "is", null),
      context.supabase
        .from("posts")
        .select("id, slug, is_featured, featured_order, translations:post_translations(locale,title)")
        .eq("is_featured", true)
        .order("featured_order", { ascending: true, nullsFirst: false }),
    ]);

    return {
      published: pub.count ?? 0,
      scheduled: sch.count ?? 0,
      draft: drf.count ?? 0,
      recent: recent.data ?? [],
      byCategory: byCat.data ?? [],
      featured: featured.data ?? [],
    };
  });
