import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth, hasRole } from "@/lib/use-auth";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FileText, FolderTree, Tag, Briefcase, Users, Image as ImageIcon, Search, ShieldCheck, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";

type NavItem = { to: string; label: string; icon: any; exact?: boolean; adminOnly?: boolean };
const NAV: NavItem[] = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/posts", label: "Posts", icon: FileText },
  { to: "/admin/categorias", label: "Categorias", icon: FolderTree },
  { to: "/admin/tags", label: "Tags", icon: Tag },
  { to: "/admin/profissoes", label: "Profissões", icon: Briefcase },
  { to: "/admin/autores", label: "Autores", icon: Users },
  { to: "/admin/midia", label: "Mídia", icon: ImageIcon },
  { to: "/admin/seo", label: "SEO", icon: Search },
  { to: "/admin/equipe", label: "Equipe", icon: ShieldCheck, adminOnly: true },
];

export function AdminShell() {
  const navigate = useNavigate();
  const { loading, user, roles } = useAuth();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const queryClient = useQueryClient();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isEditor = hasRole(roles, "admin", "editor");
  const isAdmin = hasRole(roles, "admin");

  useEffect(() => {
    if (!loading && user && !isEditor) {
      // Logged in but no editor role
      navigate({ to: "/auth", search: { redirect: pathname } });
    }
  }, [loading, user, isEditor, navigate, pathname]);

  useEffect(() => { setSidebarOpen(false); }, [pathname]);

  const handleSignOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  if (loading) {
    return <div className="min-h-screen grid place-items-center text-sm text-muted-foreground">Carregando…</div>;
  }
  if (!isEditor) {
    return <div className="min-h-screen grid place-items-center text-sm text-muted-foreground">Acesso restrito a editores.</div>;
  }

  return (
    <div className="min-h-screen flex bg-[hsl(0,0%,98%)]">
      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:sticky top-0 z-40 h-screen w-64 bg-[rgb(6,36,67)] text-white flex flex-col transition-transform",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="px-6 py-6 border-b border-white/10">
          <div className="font-serif text-xl">Linhares Law</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-[rgb(179,134,66)] mt-1">Painel Editorial</div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {NAV.filter((n) => !n.adminOnly || isAdmin).map((item) => {
            const Icon = item.icon;
            const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to as any}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm transition-colors",
                  active ? "bg-[rgb(179,134,66)] text-white" : "text-white/80 hover:bg-white/10"
                )}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-white/10 px-4 py-4 space-y-2">
          <div className="text-xs text-white/60 truncate">{user?.email}</div>
          <div className="flex flex-wrap gap-1">
            {roles.map((r) => (
              <span key={r} className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-white/10 text-white/80">{r}</span>
            ))}
          </div>
          <Button onClick={handleSignOut} variant="ghost" size="sm" className="w-full justify-start text-white hover:bg-white/10">
            <LogOut size={14} className="mr-2" /> Sair
          </Button>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="flex-1 min-w-0">
        <header className="lg:hidden sticky top-0 z-20 bg-background border-b border-border flex items-center justify-between px-4 h-14">
          <button onClick={() => setSidebarOpen(true)} className="p-2">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="font-serif">Linhares Law</div>
          <span className="w-9" />
        </header>
        <div className="p-6 lg:p-10 max-w-[1400px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
