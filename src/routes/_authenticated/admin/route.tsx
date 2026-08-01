import { createFileRoute, redirect } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { getEditorialAccess } from "@/lib/admin/access.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  beforeLoad: async () => {
    // Server-validated role gate: only admin/editor may reach the panel.
    try {
      const access = await getEditorialAccess();
      if (!access.allowed) throw redirect({ to: "/" });
      return { editorialRoles: access.roles };
    } catch (error) {
      if (error != null && typeof error === "object" && "isRedirect" in error) throw error;
      throw redirect({ to: "/" });
    }
  },
  component: AdminShell,
});
