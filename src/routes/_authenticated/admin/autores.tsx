import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listAuthors, upsertAuthor, deleteAuthor } from "@/lib/admin/authors.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2, Pencil } from "lucide-react";
import { slugify } from "@/lib/admin/slugify";

export const Route = createFileRoute("/_authenticated/admin/autores")({
  component: AuthorsPage,
});

function AuthorsPage() {
  const list = useServerFn(listAuthors);
  const up = useServerFn(upsertAuthor);
  const del = useServerFn(deleteAuthor);
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "authors"], queryFn: () => list() });
  const [editing, setEditing] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const reset = () => setEditing({
    id: null, slug: "", name: "", photo_url: null, linkedin_url: "",
    is_active: true, position: 0,
    translations: [
      { locale: "pt", role_title: "", short_bio: "" },
      { locale: "en", role_title: "", short_bio: "" },
      { locale: "es", role_title: "", short_bio: "" },
    ],
  });

  const startEdit = (a: any) => {
    const tr: any = { pt: { role_title: "", short_bio: "" }, en: { role_title: "", short_bio: "" }, es: { role_title: "", short_bio: "" } };
    for (const t of a.translations ?? []) tr[t.locale] = { role_title: t.role_title ?? "", short_bio: t.short_bio ?? "" };
    setEditing({
      id: a.id, slug: a.slug, name: a.name, photo_url: a.photo_url, linkedin_url: a.linkedin_url ?? "",
      is_active: a.is_active, position: a.position,
      translations: ["pt","en","es"].map((l: any) => ({ locale: l, ...tr[l] })),
    });
    setOpen(true);
  };

  const save = useMutation({
    mutationFn: () => up({ data: editing }),
    onSuccess: () => { toast.success("Salvo."); qc.invalidateQueries({ queryKey: ["admin","authors"] }); setOpen(false); },
    onError: (e: any) => toast.error(e?.message ?? "Erro"),
  });
  const delMut = useMutation({
    mutationFn: (id: string) => del({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin","authors"] }),
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif text-[rgb(6,36,67)]">Autores</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { reset(); setOpen(true); }} className="bg-[rgb(6,36,67)] text-white">
              <Plus size={14} className="mr-2" /> Novo autor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader><DialogTitle>{editing?.id ? "Editar autor" : "Novo autor"}</DialogTitle></DialogHeader>
            {editing && (
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div><Label>Nome</Label><Input value={editing.name}
                    onChange={(e) => setEditing({ ...editing, name: e.target.value, slug: editing.slug || slugify(e.target.value) })} /></div>
                  <div><Label>Slug</Label><Input value={editing.slug}
                    onChange={(e) => setEditing({ ...editing, slug: slugify(e.target.value) })} /></div>
                  <div><Label>LinkedIn</Label><Input value={editing.linkedin_url}
                    onChange={(e) => setEditing({ ...editing, linkedin_url: e.target.value })} /></div>
                  <div><Label>Posição</Label><Input type="number" value={editing.position}
                    onChange={(e) => setEditing({ ...editing, position: parseInt(e.target.value) || 0 })} /></div>
                </div>
                <div><Label>Foto</Label>
                  <ImageUploader bucket="blog-media" value={editing.photo_url}
                    onChange={(url) => setEditing({ ...editing, photo_url: url })} /></div>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Ativo</span>
                  <Switch checked={editing.is_active} onCheckedChange={(v) => setEditing({ ...editing, is_active: v })} />
                </label>
                <Tabs defaultValue="pt">
                  <TabsList><TabsTrigger value="pt">PT</TabsTrigger><TabsTrigger value="en">EN</TabsTrigger><TabsTrigger value="es">ES</TabsTrigger></TabsList>
                  {editing.translations.map((tr: any, idx: number) => (
                    <TabsContent key={tr.locale} value={tr.locale} className="space-y-3 pt-3">
                      <div><Label>Cargo</Label><Input value={tr.role_title}
                        onChange={(e) => { const t = [...editing.translations]; t[idx] = { ...tr, role_title: e.target.value }; setEditing({ ...editing, translations: t }); }} /></div>
                      <div><Label>Bio curta</Label><Textarea rows={3} value={tr.short_bio}
                        onChange={(e) => { const t = [...editing.translations]; t[idx] = { ...tr, short_bio: e.target.value }; setEditing({ ...editing, translations: t }); }} /></div>
                    </TabsContent>
                  ))}
                </Tabs>
                <Button onClick={() => save.mutate()} className="w-full bg-[rgb(6,36,67)] text-white">Salvar</Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(data ?? []).map((a: any) => (
          <div key={a.id} className="bg-white border border-border p-4 flex gap-4">
            {a.photo_url
              ? <img src={a.photo_url} alt="" className="w-16 h-16 object-cover rounded-full" />
              : <div className="w-16 h-16 bg-muted rounded-full grid place-items-center text-xs text-muted-foreground">—</div>}
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{a.name}</div>
              <div className="text-xs text-muted-foreground">{a.translations?.find((t: any) => t.locale === "pt")?.role_title ?? "—"}</div>
              <div className="text-[10px] uppercase tracking-wider mt-1">{a.is_active ? "Ativo" : "Inativo"}</div>
            </div>
            <div className="flex flex-col gap-1">
              <button onClick={() => startEdit(a)} className="p-1 hover:bg-muted"><Pencil size={14} /></button>
              <button onClick={() => { if (confirm("Remover?")) delMut.mutate(a.id); }} className="p-1 hover:bg-destructive/10 text-destructive"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
