import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const EDITORIAL_ROLES = ["admin", "editor"] as const;

/**
 * Server-side authorization for the editorial panel. Never trust a client-side
 * role check: this validates the bearer token and reads user_roles as the user.
 */
export const getEditorialAccess = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    const roles = (data ?? []).map((r) => r.role as string);
    return {
      allowed: roles.some((r) => (EDITORIAL_ROLES as readonly string[]).includes(r)),
      roles,
    };
  });
