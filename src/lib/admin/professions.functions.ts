import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const localeSchema = z.enum(["pt", "en", "es"]);

const upsert = z.object({
  id: z.string().uuid().nullable().optional(),
  slug: z.string().min(1),
  position: z.number().int().default(0),
  translations: z.array(z.object({ locale: localeSchema, name: z.string().min(1) })),
});

export const listProfessions = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("professions")
      .select("id, slug, position, translations:profession_translations(*)")
      .order("position", { ascending: true });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const upsertProfession = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => upsert.parse(d))
  .handler(async ({ data, context }) => {
    const { id, translations, ...fields } = data;
    let pid = id ?? null;
    if (pid) {
      const { error } = await context.supabase.from("professions").update(fields).eq("id", pid);
      if (error) throw new Error(error.message);
    } else {
      const { data: ins, error } = await context.supabase
        .from("professions").insert(fields).select("id").single();
      if (error) throw new Error(error.message);
      pid = ins.id;
    }
    for (const tr of translations) {
      const { error } = await context.supabase
        .from("profession_translations")
        .upsert({ profession_id: pid!, ...tr }, { onConflict: "profession_id,locale" });
      if (error) throw new Error(error.message);
    }
    return { id: pid };
  });

export const deleteProfession = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("professions").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
