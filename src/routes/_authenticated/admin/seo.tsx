import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listSeoEntries, upsertSeoEntry, deleteSeoEntry } from "@/lib/admin/seo.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2, Pencil } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/seo")({
  component: SeoPage,
});

function SeoPage() {
  const list = useServerFn(listSeoEntries);
  const up = useServerFn(upsertSeoEntry);
  const del = useServerFn(deleteSeoEntry);
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "seo"], queryFn: () => list() });
  const [editing, setEditing] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const reset = () => setEditing({ id: null, route_path: "", locale: "pt", title: "", description: "", og_image_url: "", canonical: "" });
  const save = useMutation({
    mutationFn: () => up({ data: editing }),
    onSuccess: () => { toast.success("Salvo."); qc.invalidateQueries({ queryKey: ["admin","seo"] }); setOpen(false); },
    onError: (e: any) => toast.error(e?.message ?? "Erro"),
  });
  const delMut = useMutation({
    mutationFn: (id: string) => del({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin","seo"] }),
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-[rgb(6,36,67)]">SEO institucional</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { reset(); setOpen(true); }} className="bg-[rgb(6,36,67)] text-white">
              <Plus size={14} className="mr-2" /> Nova entrada
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader><DialogTitle>Entrada SEO</DialogTitle></DialogHeader>
            {editing && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div><Label>Rota</Label><Input value={editing.route_path} placeholder="/quem-somos" onChange={(e) => setEditing({ ...editing, route_path: e.target.value })} /></div>
                  <div><Label>Idioma</Label>
                    <select value={editing.locale} onChange={(e) => setEditing({ ...editing, locale: e.target.value })} className="w-full border border-input h-10 px-3 bg-white">
                      <option value="pt">PT</option><option value="en">EN</option><option value="es">ES</option>
                    </select>
                  </div>
                </div>
                <div><Label>Title</Label><Input value={editing.title ?? ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} /></div>
                <div><Label>Description</Label><Textarea rows={2} value={editing.description ?? ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} /></div>
                <div><Label>OG image URL</Label><Input value={editing.og_image_url ?? ""} onChange={(e) => setEditing({ ...editing, og_image_url: e.target.value })} /></div>
                <div><Label>Canonical</Label><Input value={editing.canonical ?? ""} onChange={(e) => setEditing({ ...editing, canonical: e.target.value })} /></div>
                <Button onClick={() => save.mutate()} className="w-full bg-[rgb(6,36,67)] text-white">Salvar</Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-xs uppercase">
            <tr><th className="text-left p-3">Rota</th><th className="text-left p-3">Idioma</th><th className="text-left p-3">Title</th><th></th></tr>
          </thead>
          <tbody>
            {(data ?? []).map((e: any) => (
              <tr key={e.id} className="border-t border-border hover:bg-muted/30">
                <td className="p-3 font-mono text-xs">{e.route_path}</td>
                <td className="p-3 uppercase">{e.locale}</td>
                <td className="p-3 truncate max-w-xs">{e.title}</td>
                <td className="p-3 flex justify-end gap-1">
                  <button onClick={() => { setEditing({ ...e }); setOpen(true); }} className="p-1.5 hover:bg-muted"><Pencil size={14} /></button>
                  <button onClick={() => { if (confirm("Remover?")) delMut.mutate(e.id); }} className="p-1.5 hover:bg-destructive/10 text-destructive"><Trash2 size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
