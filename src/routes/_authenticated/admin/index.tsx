import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { dashboardStats } from "@/lib/admin/posts.functions";
import { FileText, Clock, FileEdit, Star } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: DashboardPage,
});

function DashboardPage() {
  const fetchStats = useServerFn(dashboardStats);
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "dashboard"],
    queryFn: () => fetchStats(),
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-[rgb(6,36,67)]">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Visão geral do conteúdo editorial.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card icon={FileText} label="Publicados" value={data?.published ?? 0} />
        <Card icon={Clock} label="Agendados" value={data?.scheduled ?? 0} />
        <Card icon={FileEdit} label="Rascunhos" value={data?.draft ?? 0} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-border p-6">
          <h2 className="font-serif text-lg mb-4">Últimos artigos</h2>
          {isLoading && <p className="text-sm text-muted-foreground">Carregando…</p>}
          <ul className="divide-y divide-border">
            {(data?.recent ?? []).map((p: any) => {
              const title = p.translations?.find((t: any) => t.locale === "pt")?.title ?? p.slug;
              return (
                <li key={p.id} className="py-3 flex items-center justify-between text-sm">
                  <Link to="/admin/posts/$id" params={{ id: p.id }} className="hover:text-[rgb(179,134,66)]">
                    {title}
                  </Link>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{p.status}</span>
                </li>
              );
            })}
            {!isLoading && data?.recent.length === 0 && (
              <li className="py-6 text-sm text-muted-foreground text-center">Nenhum post ainda.</li>
            )}
          </ul>
        </div>
        <div className="bg-white border border-border p-6">
          <h2 className="font-serif text-lg mb-4 flex items-center gap-2"><Star size={16} className="text-[rgb(179,134,66)]" /> Em destaque</h2>
          <ul className="space-y-2 text-sm">
            {(data?.featured ?? []).map((p: any) => {
              const title = p.translations?.find((t: any) => t.locale === "pt")?.title ?? p.slug;
              return (
                <li key={p.id} className="flex items-center justify-between">
                  <Link to="/admin/posts/$id" params={{ id: p.id }} className="truncate hover:text-[rgb(179,134,66)]">{title}</Link>
                  <span className="text-xs text-muted-foreground ml-2">#{p.featured_order ?? "—"}</span>
                </li>
              );
            })}
            {data?.featured.length === 0 && <li className="text-xs text-muted-foreground">Nenhum destaque definido.</li>}
          </ul>
          <Link to="/admin/posts/destaques" className="block mt-4 text-xs text-[rgb(179,134,66)] underline">Reordenar destaques →</Link>
        </div>
      </div>
    </div>
  );
}

function Card({ icon: Icon, label, value }: { icon: any; label: string; value: number }) {
  return (
    <div className="bg-white border border-border p-6 flex items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="text-3xl font-serif text-[rgb(6,36,67)] mt-2">{value}</div>
      </div>
      <Icon size={28} className="text-[rgb(179,134,66)]" />
    </div>
  );
}
