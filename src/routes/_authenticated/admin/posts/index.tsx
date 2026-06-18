import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listPosts, deletePost } from "@/lib/admin/posts.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Plus, Trash2, Star, ListOrdered } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/posts/")({
  component: PostsList,
});

function PostsList() {
  const fetchList = useServerFn(listPosts);
  const del = useServerFn(deletePost);
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({ queryKey: ["admin", "posts"], queryFn: () => fetchList() });
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const deleteMut = useMutation({
    mutationFn: (id: string) => del({ data: { id } }),
    onSuccess: () => {
      toast.success("Post removido.");
      qc.invalidateQueries({ queryKey: ["admin", "posts"] });
      qc.invalidateQueries({ queryKey: ["admin", "dashboard"] });
    },
    onError: (e: any) => toast.error(e?.message ?? "Erro"),
  });

  const filtered = (data ?? []).filter((p: any) => {
    if (statusFilter !== "all" && p.status !== statusFilter) return false;
    if (q) {
      const title = p.translations?.find((t: any) => t.locale === "pt")?.title ?? p.slug;
      return title.toLowerCase().includes(q.toLowerCase()) || p.slug.toLowerCase().includes(q.toLowerCase());
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-serif text-[rgb(6,36,67)]">Posts</h1>
          <p className="text-sm text-muted-foreground">Gerencie todos os artigos do blog.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline"><Link to="/admin/posts/destaques"><ListOrdered size={14} className="mr-2" /> Destaques</Link></Button>
          <Button asChild className="bg-[rgb(6,36,67)] text-white"><Link to="/admin/posts/novo"><Plus size={14} className="mr-2" /> Novo post</Link></Button>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Input placeholder="Buscar por título ou slug…" value={q} onChange={(e) => setQ(e.target.value)} className="max-w-sm" />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-input px-3 text-sm bg-white">
          <option value="all">Todos os status</option>
          <option value="draft">Rascunho</option>
          <option value="scheduled">Agendado</option>
          <option value="published">Publicado</option>
          <option value="archived">Arquivado</option>
        </select>
      </div>

      <div className="bg-white border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left p-3">Título</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Categoria</th>
              <th className="text-left p-3">Autor</th>
              <th className="text-left p-3">Atualizado</th>
              <th className="text-right p-3"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <tr><td colSpan={6} className="p-6 text-center text-muted-foreground">Carregando…</td></tr>}
            {!isLoading && filtered.length === 0 && <tr><td colSpan={6} className="p-6 text-center text-muted-foreground">Nenhum post.</td></tr>}
            {filtered.map((p: any) => {
              const title = p.translations?.find((t: any) => t.locale === "pt")?.title ?? p.slug;
              return (
                <tr key={p.id} className="border-t border-border hover:bg-muted/30">
                  <td className="p-3">
                    <Link to="/admin/posts/$id" params={{ id: p.id }} className="font-medium hover:text-[rgb(179,134,66)]">
                      {title}
                    </Link>
                    {p.is_featured && <Star size={12} className="inline ml-2 text-[rgb(179,134,66)]" />}
                    <div className="text-xs text-muted-foreground">{p.slug}</div>
                  </td>
                  <td className="p-3"><StatusBadge status={p.status} /></td>
                  <td className="p-3 text-muted-foreground">{p.category?.slug ?? "—"}</td>
                  <td className="p-3 text-muted-foreground">{p.author?.name ?? "—"}</td>
                  <td className="p-3 text-xs text-muted-foreground">{new Date(p.updated_at).toLocaleDateString("pt-BR")}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => { if (confirm("Remover este post?")) deleteMut.mutate(p.id); }}
                      className="text-destructive hover:bg-destructive/10 p-1.5"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    draft: "bg-muted text-muted-foreground",
    scheduled: "bg-amber-100 text-amber-900",
    published: "bg-emerald-100 text-emerald-900",
    archived: "bg-rose-100 text-rose-900",
  };
  const labels: Record<string, string> = { draft: "Rascunho", scheduled: "Agendado", published: "Publicado", archived: "Arquivado" };
  return <span className={`text-[10px] uppercase tracking-wider px-2 py-1 ${map[status] ?? "bg-muted"}`}>{labels[status] ?? status}</span>;
}
