import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const localeSchema = z.enum(["pt", "en", "es"]);

const tagUpsert = z.object({
  id: z.string().uuid().nullable().optional(),
  slug: z.string().min(1),
  translations: z.array(z.object({ locale: localeSchema, name: z.string().min(1) })),
});

export const listTags = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("tags")
      .select("id, slug, translations:tag_translations(*)")
      .order("slug", { ascending: true });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const upsertTag = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => tagUpsert.parse(d))
  .handler(async ({ data, context }) => {
    const { id, translations, ...fields } = data;
    let tagId = id ?? null;
    if (tagId) {
      const { error } = await context.supabase.from("tags").update(fields).eq("id", tagId);
      if (error) throw new Error(error.message);
    } else {
      const { data: inserted, error } = await context.supabase
        .from("tags").insert(fields).select("id").single();
      if (error) throw new Error(error.message);
      tagId = inserted.id;
    }
    for (const tr of translations) {
      const { error } = await context.supabase
        .from("tag_translations")
        .upsert({ tag_id: tagId!, ...tr }, { onConflict: "tag_id,locale" });
      if (error) throw new Error(error.message);
    }
    return { id: tagId };
  });

export const deleteTag = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("tags").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
