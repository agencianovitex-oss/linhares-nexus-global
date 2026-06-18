import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listTeamMembers, setUserRole } from "@/lib/admin/users.functions";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/equipe")({
  component: TeamPage,
});

function TeamPage() {
  const list = useServerFn(listTeamMembers);
  const setRole = useServerFn(setUserRole);
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({ queryKey: ["admin", "team"], queryFn: () => list() });

  const mut = useMutation({
    mutationFn: (vars: { user_id: string; role: "admin" | "editor" | "viewer"; enabled: boolean }) =>
      setRole({ data: vars }),
    onSuccess: () => { toast.success("Atualizado."); qc.invalidateQueries({ queryKey: ["admin","team"] }); },
    onError: (e: any) => toast.error(e?.message ?? "Erro"),
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-serif text-[rgb(6,36,67)]">Equipe e papéis</h1>
      <p className="text-sm text-muted-foreground">Apenas administradores podem alterar papéis.</p>

      <div className="bg-white border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-xs uppercase">
            <tr>
              <th className="text-left p-3">Usuário</th>
              <th className="text-left p-3">E-mail</th>
              <th className="text-center p-3">Admin</th>
              <th className="text-center p-3">Editor</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <tr><td colSpan={4} className="p-6 text-center text-muted-foreground">Carregando…</td></tr>}
            {(data ?? []).map((u: any) => (
              <tr key={u.id} className="border-t border-border">
                <td className="p-3">{u.display_name ?? "—"}</td>
                <td className="p-3 text-muted-foreground">{u.email}</td>
                <td className="p-3 text-center">
                  <Switch checked={u.roles.includes("admin")}
                    onCheckedChange={(v) => mut.mutate({ user_id: u.id, role: "admin", enabled: v })} />
                </td>
                <td className="p-3 text-center">
                  <Switch checked={u.roles.includes("editor")}
                    onCheckedChange={(v) => mut.mutate({ user_id: u.id, role: "editor", enabled: v })} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
