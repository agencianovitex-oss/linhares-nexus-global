import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listCategories, upsertCategory, deleteCategory } from "@/lib/admin/categories.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2, Pencil } from "lucide-react";
import { slugify } from "@/lib/admin/slugify";

export const Route = createFileRoute("/_authenticated/admin/categorias")({
  component: CategoriesPage,
});

type Locale = "pt" | "en" | "es";

function CategoriesPage() {
  const list = useServerFn(listCategories);
  const upsert = useServerFn(upsertCategory);
  const del = useServerFn(deleteCategory);
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "categories"], queryFn: () => list() });
  const [editing, setEditing] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const reset = () => setEditing({
    id: null, slug: "", parent_id: null, position: 0,
    translations: [
      { locale: "pt" as Locale, name: "", description: "" },
      { locale: "en" as Locale, name: "", description: "" },
      { locale: "es" as Locale, name: "", description: "" },
    ],
  });

  const startEdit = (cat: any) => {
    const tr: any = { pt: { name: "", description: "" }, en: { name: "", description: "" }, es: { name: "", description: "" } };
    for (const t of cat.translations ?? []) tr[t.locale] = { name: t.name, description: t.description ?? "" };
    setEditing({
      id: cat.id, slug: cat.slug, parent_id: cat.parent_id, position: cat.position,
      translations: (["pt","en","es"] as Locale[]).map((l) => ({ locale: l, ...tr[l] })),
    });
    setOpen(true);
  };

  const save = useMutation({
    mutationFn: () => upsert({ data: editing }),
    onSuccess: () => { toast.success("Salvo."); qc.invalidateQueries({ queryKey: ["admin", "categories"] }); setOpen(false); },
    onError: (e: any) => toast.error(e?.message ?? "Erro"),
  });

  const delMut = useMutation({
    mutationFn: (id: string) => del({ data: { id } }),
    onSuccess: () => { toast.success("Removido."); qc.invalidateQueries({ queryKey: ["admin", "categories"] }); },
  });

  const roots = (data ?? []).filter((c: any) => !c.parent_id);
  const children = (parentId: string) => (data ?? []).filter((c: any) => c.parent_id === parentId);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-[rgb(6,36,67)]">Categorias</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { reset(); setOpen(true); }} className="bg-[rgb(6,36,67)] text-white">
              <Plus size={14} className="mr-2" /> Nova categoria
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader><DialogTitle>{editing?.id ? "Editar categoria" : "Nova categoria"}</DialogTitle></DialogHeader>
            {editing && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div><Label>Slug</Label><Input value={editing.slug}
                    onChange={(e) => setEditing({ ...editing, slug: slugify(e.target.value) })} /></div>
                  <div><Label>Categoria pai</Label>
                    <select value={editing.parent_id ?? ""}
                      onChange={(e) => setEditing({ ...editing, parent_id: e.target.value || null })}
                      className="w-full border border-input h-10 px-3 bg-white">
                      <option value="">— Raiz —</option>
                      {(data ?? []).filter((c: any) => c.id !== editing.id && !c.parent_id).map((c: any) =>
                        <option key={c.id} value={c.id}>{c.translations?.find((t: any) => t.locale === "pt")?.name ?? c.slug}</option>)}
                    </select>
                  </div>
                  <div><Label>Posição</Label><Input type="number" value={editing.position}
                    onChange={(e) => setEditing({ ...editing, position: parseInt(e.target.value) || 0 })} /></div>
                </div>
                <Tabs defaultValue="pt">
                  <TabsList><TabsTrigger value="pt">PT</TabsTrigger><TabsTrigger value="en">EN</TabsTrigger><TabsTrigger value="es">ES</TabsTrigger></TabsList>
                  {editing.translations.map((tr: any, idx: number) => (
                    <TabsContent key={tr.locale} value={tr.locale} className="space-y-3 pt-3">
                      <div><Label>Nome</Label><Input value={tr.name}
                        onChange={(e) => { const t = [...editing.translations]; t[idx] = { ...tr, name: e.target.value }; setEditing({ ...editing, translations: t }); }} /></div>
                      <div><Label>Descrição</Label><Textarea rows={2} value={tr.description ?? ""}
                        onChange={(e) => { const t = [...editing.translations]; t[idx] = { ...tr, description: e.target.value }; setEditing({ ...editing, translations: t }); }} /></div>
                    </TabsContent>
                  ))}
                </Tabs>
                <Button onClick={() => save.mutate()} disabled={save.isPending} className="w-full bg-[rgb(6,36,67)] text-white">Salvar</Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white border border-border">
        {roots.map((c: any) => (
          <div key={c.id}>
            <Row cat={c} onEdit={() => startEdit(c)} onDelete={() => { if (confirm("Remover?")) delMut.mutate(c.id); }} />
            {children(c.id).map((child: any) => (
              <div key={child.id} className="pl-6 border-l-4 border-[rgb(179,134,66)]/30">
                <Row cat={child} onEdit={() => startEdit(child)} onDelete={() => { if (confirm("Remover?")) delMut.mutate(child.id); }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Row({ cat, onEdit, onDelete }: { cat: any; onEdit: () => void; onDelete: () => void }) {
  const ptName = cat.translations?.find((t: any) => t.locale === "pt")?.name ?? cat.slug;
  return (
    <div className="flex items-center justify-between border-b border-border p-3">
      <div>
        <div className="font-medium">{ptName}</div>
        <div className="text-xs text-muted-foreground">{cat.slug} · pos {cat.position}</div>
      </div>
      <div className="flex gap-1">
        <button onClick={onEdit} className="p-2 hover:bg-muted"><Pencil size={14} /></button>
        <button onClick={onDelete} className="p-2 hover:bg-destructive/10 text-destructive"><Trash2 size={14} /></button>
      </div>
    </div>
  );
}
