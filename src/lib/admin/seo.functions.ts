import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const localeSchema = z.enum(["pt", "en", "es"]);

const upsert = z.object({
  id: z.string().uuid().nullable().optional(),
  route_path: z.string().min(1),
  locale: localeSchema,
  title: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  og_image_url: z.string().nullable().optional(),
  canonical: z.string().nullable().optional(),
});

export const listSeoEntries = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("seo_metadata")
      .select("*")
      .order("route_path", { ascending: true });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const upsertSeoEntry = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => upsert.parse(d))
  .handler(async ({ data, context }) => {
    const { id: _id, ...fields } = data;
    const { error } = await context.supabase
      .from("seo_metadata")
      .upsert(fields, { onConflict: "route_path,locale" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteSeoEntry = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("seo_metadata").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
