import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const localeSchema = z.enum(["pt", "en", "es"]);

const upsert = z.object({
  id: z.string().uuid().nullable().optional(),
  slug: z.string().min(1),
  name: z.string().min(1),
  photo_url: z.string().nullable().optional(),
  linkedin_url: z.string().nullable().optional(),
  is_active: z.boolean().default(true),
  position: z.number().int().default(0),
  translations: z.array(
    z.object({
      locale: localeSchema,
      role_title: z.string().nullable().optional(),
      short_bio: z.string().nullable().optional(),
    })
  ),
});

export const listAuthors = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("authors")
      .select("*, translations:author_translations(*)")
      .order("position", { ascending: true });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const upsertAuthor = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => upsert.parse(d))
  .handler(async ({ data, context }) => {
    const { id, translations, ...fields } = data;
    let aid = id ?? null;
    if (aid) {
      const { error } = await context.supabase.from("authors").update(fields).eq("id", aid);
      if (error) throw new Error(error.message);
    } else {
      const { data: ins, error } = await context.supabase
        .from("authors").insert(fields).select("id").single();
      if (error) throw new Error(error.message);
      aid = ins.id;
    }
    for (const tr of translations) {
      const { error } = await context.supabase
        .from("author_translations")
        .upsert({ author_id: aid!, ...tr }, { onConflict: "author_id,locale" });
      if (error) throw new Error(error.message);
    }
    return { id: aid };
  });

export const deleteAuthor = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("authors").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
