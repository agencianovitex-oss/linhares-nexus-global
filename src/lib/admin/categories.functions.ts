import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const localeSchema = z.enum(["pt", "en", "es"]);

const translationSchema = z.object({
  locale: localeSchema,
  name: z.string().min(1),
  description: z.string().nullable().optional(),
});

const upsertSchema = z.object({
  id: z.string().uuid().nullable().optional(),
  slug: z.string().min(1),
  parent_id: z.string().uuid().nullable().optional(),
  position: z.number().int().default(0),
  translations: z.array(translationSchema),
});

export const listCategories = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("categories")
      .select("id, slug, parent_id, position, translations:category_translations(*)")
      .order("position", { ascending: true });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const upsertCategory = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => upsertSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { id, translations, ...fields } = data;
    let catId = id ?? null;
    if (catId) {
      const { error } = await context.supabase.from("categories").update(fields).eq("id", catId);
      if (error) throw new Error(error.message);
    } else {
      const { data: inserted, error } = await context.supabase
        .from("categories")
        .insert(fields)
        .select("id")
        .single();
      if (error) throw new Error(error.message);
      catId = inserted.id;
    }
    for (const tr of translations) {
      const { error } = await context.supabase
        .from("category_translations")
        .upsert({ category_id: catId!, ...tr }, { onConflict: "category_id,locale" });
      if (error) throw new Error(error.message);
    }
    return { id: catId };
  });

export const deleteCategory = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("categories").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const reorderCategories = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({ items: z.array(z.object({ id: z.string().uuid(), position: z.number().int() })) }).parse(d)
  )
  .handler(async ({ data, context }) => {
    for (const it of data.items) {
      const { error } = await context.supabase
        .from("categories")
        .update({ position: it.position })
        .eq("id", it.id);
      if (error) throw new Error(error.message);
    }
    return { ok: true };
  });
