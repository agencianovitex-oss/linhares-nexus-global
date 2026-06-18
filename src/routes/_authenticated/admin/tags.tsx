import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listTags, upsertTag, deleteTag } from "@/lib/admin/tags.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2, Pencil } from "lucide-react";
import { slugify } from "@/lib/admin/slugify";

export const Route = createFileRoute("/_authenticated/admin/tags")({
  component: TagsPage,
});

function TagsPage() {
  const list = useServerFn(listTags);
  const up = useServerFn(upsertTag);
  const del = useServerFn(deleteTag);
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "tags"], queryFn: () => list() });
  const [editing, setEditing] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const reset = () => setEditing({ id: null, slug: "",
    translations: [{ locale: "pt", name: "" }, { locale: "en", name: "" }, { locale: "es", name: "" }] });

  const startEdit = (tag: any) => {
    const tr: any = { pt: "", en: "", es: "" };
    for (const t of tag.translations ?? []) tr[t.locale] = t.name;
    setEditing({ id: tag.id, slug: tag.slug,
      translations: ["pt","en","es"].map((l: any) => ({ locale: l, name: tr[l] })) });
    setOpen(true);
  };

  const save = useMutation({
    mutationFn: () => up({ data: editing }),
    onSuccess: () => { toast.success("Salvo."); qc.invalidateQueries({ queryKey: ["admin","tags"] }); setOpen(false); },
    onError: (e: any) => toast.error(e?.message ?? "Erro"),
  });
  const delMut = useMutation({
    mutationFn: (id: string) => del({ data: { id } }),
    onSuccess: () => { toast.success("Removida."); qc.invalidateQueries({ queryKey: ["admin","tags"] }); },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-[rgb(6,36,67)]">Tags</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { reset(); setOpen(true); }} className="bg-[rgb(6,36,67)] text-white">
              <Plus size={14} className="mr-2" /> Nova tag
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>{editing?.id ? "Editar tag" : "Nova tag"}</DialogTitle></DialogHeader>
            {editing && (
              <div className="space-y-4">
                <div><Label>Slug</Label><Input value={editing.slug} onChange={(e) => setEditing({ ...editing, slug: slugify(e.target.value) })} /></div>
                <Tabs defaultValue="pt">
                  <TabsList><TabsTrigger value="pt">PT</TabsTrigger><TabsTrigger value="en">EN</TabsTrigger><TabsTrigger value="es">ES</TabsTrigger></TabsList>
                  {editing.translations.map((tr: any, idx: number) => (
                    <TabsContent key={tr.locale} value={tr.locale} className="pt-3">
                      <Label>Nome</Label>
                      <Input value={tr.name} onChange={(e) => { const t = [...editing.translations]; t[idx] = { ...tr, name: e.target.value }; setEditing({ ...editing, translations: t }); }} />
                    </TabsContent>
                  ))}
                </Tabs>
                <Button onClick={() => save.mutate()} className="w-full bg-[rgb(6,36,67)] text-white">Salvar</Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white border border-border">
        {(data ?? []).map((t: any) => {
          const name = t.translations?.find((x: any) => x.locale === "pt")?.name ?? t.slug;
          return (
            <div key={t.id} className="flex items-center justify-between border-b border-border p-3">
              <div><div className="font-medium">{name}</div><div className="text-xs text-muted-foreground">{t.slug}</div></div>
              <div className="flex gap-1">
                <button onClick={() => startEdit(t)} className="p-2 hover:bg-muted"><Pencil size={14} /></button>
                <button onClick={() => { if (confirm("Remover?")) delMut.mutate(t.id); }} className="p-2 hover:bg-destructive/10 text-destructive"><Trash2 size={14} /></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
