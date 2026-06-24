import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { upsertPost, getPost } from "@/lib/admin/posts.functions";
import { listCategories } from "@/lib/admin/categories.functions";
import { listTags } from "@/lib/admin/tags.functions";
import { listProfessions } from "@/lib/admin/professions.functions";
import { listAuthors } from "@/lib/admin/authors.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { TipTapEditor } from "@/components/admin/TipTapEditor";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { slugify } from "@/lib/admin/slugify";
import { readingTimeMinutes } from "@/lib/admin/reading-time";
import { toast } from "sonner";
import { Save, Send, CalendarClock, Archive, Plus, Trash2, RefreshCw } from "lucide-react";

type Locale = "pt" | "en" | "es";
type Status = "draft" | "scheduled" | "published" | "archived";

interface FaqItem { question: string; answer: string }
interface Translation {
  locale: Locale;
  title: string;
  excerpt: string;
  body: any;
  meta_title: string;
  meta_description: string;
  faq: FaqItem[];
}

interface FormState {
  id: string | null;
  slug: string;
  status: Status;
  published_at: string | null;
  cover_image_url: string | null;
  category_id: string | null;
  author_id: string | null;
  reading_time_minutes: number | null;
  is_pillar_content: boolean;
  is_featured: boolean;
  featured_order: number | null;
  cta_type: string | null;
  cta_title: string;
  cta_description: string;
  cta_button_text: string;
  cta_url: string;
  translations: Record<Locale, Translation>;
  tag_ids: string[];
  profession_ids: string[];
}

const emptyTranslation = (locale: Locale): Translation => ({
  locale, title: "", excerpt: "", body: { type: "doc", content: [{ type: "paragraph" }] },
  meta_title: "", meta_description: "", faq: [],
});

const initialForm = (): FormState => ({
  id: null, slug: "", status: "draft", published_at: null,
  cover_image_url: null, category_id: null, author_id: null,
  reading_time_minutes: null, is_pillar_content: false,
  is_featured: false, featured_order: null,
  cta_type: null, cta_title: "", cta_description: "", cta_button_text: "", cta_url: "",
  translations: { pt: emptyTranslation("pt"), en: emptyTranslation("en"), es: emptyTranslation("es") },
  tag_ids: [], profession_ids: [],
});

export function PostEditorContent({ postId }: { postId?: string }) {
  const routeId = postId;
  const navigate = useNavigate();
  const qc = useQueryClient();
  const getOne = useServerFn(getPost);
  const upsert = useServerFn(upsertPost);
  const fetchCats = useServerFn(listCategories);
  const fetchTags = useServerFn(listTags);
  const fetchProfs = useServerFn(listProfessions);
  const fetchAuthors = useServerFn(listAuthors);

  const cats = useQuery({ queryKey: ["admin", "categories"], queryFn: () => fetchCats() });
  const tags = useQuery({ queryKey: ["admin", "tags"], queryFn: () => fetchTags() });
  const profs = useQuery({ queryKey: ["admin", "professions"], queryFn: () => fetchProfs() });
  const authors = useQuery({ queryKey: ["admin", "authors"], queryFn: () => fetchAuthors() });

  const existing = useQuery({
    queryKey: ["admin", "post", routeId],
    queryFn: () => getOne({ data: { id: routeId! } }),
    enabled: !!routeId,
  });

  const [form, setForm] = useState<FormState>(initialForm());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (existing.data && !loaded) {
      const p = existing.data as any;
      const trMap: Record<Locale, Translation> = {
        pt: emptyTranslation("pt"), en: emptyTranslation("en"), es: emptyTranslation("es"),
      };
      for (const t of p.translations) {
        trMap[t.locale as Locale] = {
          locale: t.locale, title: t.title ?? "", excerpt: t.excerpt ?? "",
          body: t.body ?? { type: "doc", content: [{ type: "paragraph" }] },
          meta_title: t.meta_title ?? "", meta_description: t.meta_description ?? "",
          faq: Array.isArray(t.faq) ? t.faq : [],
        };
      }
      setForm({
        id: p.id, slug: p.slug, status: p.status, published_at: p.published_at,
        cover_image_url: p.cover_image_url, category_id: p.category_id, author_id: p.author_id,
        reading_time_minutes: p.reading_time_minutes, is_pillar_content: !!p.is_pillar_content,
        is_featured: !!p.is_featured, featured_order: p.featured_order,
        cta_type: p.cta_type, cta_title: p.cta_title ?? "", cta_description: p.cta_description ?? "",
        cta_button_text: p.cta_button_text ?? "", cta_url: p.cta_url ?? "",
        translations: trMap,
        tag_ids: p.tag_ids ?? [], profession_ids: p.profession_ids ?? [],
      });
      setLoaded(true);
    }
  }, [existing.data, loaded]);

  const save = useMutation({
    mutationFn: (override?: Partial<FormState>) => {
      const merged = { ...form, ...override };
      const reading = readingTimeMinutes(merged.translations.pt.body);
      const payload = {
        id: merged.id,
        slug: merged.slug || slugify(merged.translations.pt.title || "sem-titulo"),
        status: merged.status,
        published_at: merged.published_at,
        cover_image_url: merged.cover_image_url,
        category_id: merged.category_id,
        author_id: merged.author_id,
        reading_time_minutes: reading,
        is_pillar_content: merged.is_pillar_content,
        is_featured: merged.is_featured,
        featured_order: merged.featured_order,
        cta_type: merged.cta_type,
        cta_title: merged.cta_title || null,
        cta_description: merged.cta_description || null,
        cta_button_text: merged.cta_button_text || null,
        cta_url: merged.cta_url || null,
        translations: (["pt","en","es"] as Locale[])
          .map((l) => merged.translations[l])
          .filter((t) => t.title.trim().length > 0),
        tag_ids: merged.tag_ids,
        profession_ids: merged.profession_ids,
      };
      return upsert({ data: payload });
    },
    onSuccess: (res: any) => {
      toast.success("Salvo.");
      qc.invalidateQueries({ queryKey: ["admin", "posts"] });
      qc.invalidateQueries({ queryKey: ["admin", "dashboard"] });
      if (!form.id && res?.id) {
        setForm((f) => ({ ...f, id: res.id }));
        navigate({ to: "/admin/posts/$id", params: { id: res.id } });
      }
    },
    onError: (e: any) => toast.error(e?.message ?? "Erro ao salvar"),
  });

  const updateTr = (l: Locale, patch: Partial<Translation>) =>
    setForm((f) => ({ ...f, translations: { ...f.translations, [l]: { ...f.translations[l], ...patch } } }));

  const readingTime = useMemo(() => readingTimeMinutes(form.translations.pt.body), [form.translations.pt.body]);

  const validateBeforePublish = (target: Status): boolean => {
    if (!form.translations.pt.title) { toast.error("Título PT é obrigatório."); return false; }
    if ((target === "published" || target === "scheduled") && !form.cover_image_url) {
      toast.error("Imagem de capa é obrigatória para publicar."); return false;
    }
    if ((target === "published" || target === "scheduled") && !form.author_id) {
      toast.error("Selecione um autor para publicar."); return false;
    }
    if (target === "scheduled" && !form.published_at) {
      toast.error("Defina a data de publicação para agendar."); return false;
    }
    return true;
  };

  const doSave = () => save.mutate(undefined);
  const doPublish = () => {
    if (!validateBeforePublish("published")) return;
    save.mutate({ status: "published", published_at: new Date().toISOString() });
  };
  const doSchedule = () => {
    if (!validateBeforePublish("scheduled")) return;
    save.mutate({ status: "scheduled" });
  };
  const doUnpublish = () => save.mutate({ status: "draft" });
  const doArchive = () => save.mutate({ status: "archived" });

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-serif text-[rgb(6,36,67)]">
            {form.id ? "Editar artigo" : "Novo artigo"}
          </h1>
          <p className="text-xs text-muted-foreground">
            Tempo de leitura estimado: <strong>{readingTime} min</strong>
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" onClick={doSave} disabled={save.isPending}><Save size={14} className="mr-2" />Salvar rascunho</Button>
          <Button variant="outline" onClick={doSchedule} disabled={save.isPending}><CalendarClock size={14} className="mr-2" />Agendar</Button>
          <Button onClick={doPublish} disabled={save.isPending} className="bg-[rgb(6,36,67)] text-white"><Send size={14} className="mr-2" />Publicar</Button>
          {form.status === "published" && <Button variant="outline" onClick={doUnpublish}>Despublicar</Button>}
          {form.status !== "archived" && <Button variant="outline" onClick={doArchive}><Archive size={14} className="mr-2" />Arquivar</Button>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Conteúdo">
            <Tabs defaultValue="pt">
              <TabsList>
                <TabsTrigger value="pt">PT</TabsTrigger>
                <TabsTrigger value="en">EN</TabsTrigger>
                <TabsTrigger value="es">ES</TabsTrigger>
              </TabsList>
              {(["pt","en","es"] as Locale[]).map((l) => (
                <TabsContent key={l} value={l} className="space-y-4 pt-4">
                  <div>
                    <Label>Título</Label>
                    <Input
                      value={form.translations[l].title}
                      onChange={(e) => {
                        updateTr(l, { title: e.target.value });
                        if (l === "pt" && (!form.slug || form.slug === slugify(form.translations.pt.title))) {
                          setForm((f) => ({ ...f, slug: slugify(e.target.value) }));
                        }
                      }}
                    />
                  </div>
                  <div>
                    <Label>Resumo</Label>
                    <Textarea rows={2} value={form.translations[l].excerpt}
                      onChange={(e) => updateTr(l, { excerpt: e.target.value })} />
                  </div>
                  <div>
                    <Label>Corpo</Label>
                    <TipTapEditor
                      value={form.translations[l].body}
                      onChange={(v) => updateTr(l, { body: v })}
                      placeholder="Escreva o artigo…"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <Label>Meta title (SEO)</Label>
                      <Input value={form.translations[l].meta_title}
                        onChange={(e) => updateTr(l, { meta_title: e.target.value })}
                        placeholder={form.translations[l].title} />
                    </div>
                    <div>
                      <Label>Meta description (SEO)</Label>
                      <Input value={form.translations[l].meta_description}
                        onChange={(e) => updateTr(l, { meta_description: e.target.value })}
                        placeholder={form.translations[l].excerpt} />
                    </div>
                  </div>
                  <FaqEditor faq={form.translations[l].faq} onChange={(faq) => updateTr(l, { faq })} />
                </TabsContent>
              ))}
            </Tabs>
          </Card>

          <Card title="CTA do artigo (opcional)">
            <p className="text-xs text-muted-foreground">Deixe vazio para usar o CTA padrão do site.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              <div>
                <Label>Tipo</Label>
                <select value={form.cta_type ?? ""}
                  onChange={(e) => setForm((f) => ({ ...f, cta_type: e.target.value || null }))}
                  className="w-full border border-input px-3 h-10 text-sm bg-white">
                  <option value="">— Padrão —</option>
                  <option value="agendar_consulta">Agendar Consulta</option>
                  <option value="avaliacao_elegibilidade">Avaliação de Elegibilidade</option>
                  <option value="falar_especialista">Falar com Especialista</option>
                  <option value="download_guia">Download de Guia</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="personalizado">Personalizado</option>
                </select>
              </div>
              <div>
                <Label>Texto do botão</Label>
                <Input value={form.cta_button_text} onChange={(e) => setForm((f) => ({ ...f, cta_button_text: e.target.value }))} />
              </div>
              <div className="sm:col-span-2">
                <Label>Título do CTA</Label>
                <Input value={form.cta_title} onChange={(e) => setForm((f) => ({ ...f, cta_title: e.target.value }))} />
              </div>
              <div className="sm:col-span-2">
                <Label>Descrição</Label>
                <Textarea rows={2} value={form.cta_description} onChange={(e) => setForm((f) => ({ ...f, cta_description: e.target.value }))} />
              </div>
              <div className="sm:col-span-2">
                <Label>URL</Label>
                <Input value={form.cta_url} onChange={(e) => setForm((f) => ({ ...f, cta_url: e.target.value }))} placeholder="https://…" />
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Publicação">
            <div className="space-y-3 text-sm">
              <div><Label>Slug</Label>
                <Input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: slugify(e.target.value) }))} /></div>
              <div><Label>Status</Label>
                <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as Status }))}
                  className="w-full border border-input px-3 h-10 bg-white">
                  <option value="draft">Rascunho</option>
                  <option value="scheduled">Agendado</option>
                  <option value="published">Publicado</option>
                  <option value="archived">Arquivado</option>
                </select></div>
              <div><Label>Data de publicação</Label>
                <Input type="datetime-local"
                  value={form.published_at ? form.published_at.slice(0,16) : ""}
                  onChange={(e) => setForm((f) => ({ ...f, published_at: e.target.value ? new Date(e.target.value).toISOString() : null }))} /></div>
              <div className="flex items-center justify-between">
                <Label>Tempo de leitura (min)</Label>
                <div className="flex gap-2">
                  <Input className="w-20" type="number" value={form.reading_time_minutes ?? readingTime}
                    onChange={(e) => setForm((f) => ({ ...f, reading_time_minutes: parseInt(e.target.value) || null }))} />
                  <button type="button" onClick={() => setForm((f) => ({ ...f, reading_time_minutes: readingTime }))}
                    className="p-2 border border-input"><RefreshCw size={14} /></button>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Capa">
            <ImageUploader bucket="blog-media" value={form.cover_image_url}
              onChange={(url) => setForm((f) => ({ ...f, cover_image_url: url }))} />
          </Card>

          <Card title="Classificação">
            <div className="space-y-3 text-sm">
              <div><Label>Categoria</Label>
                <select value={form.category_id ?? ""} onChange={(e) => setForm((f) => ({ ...f, category_id: e.target.value || null }))}
                  className="w-full border border-input px-3 h-10 bg-white">
                  <option value="">—</option>
                  {(cats.data ?? []).map((c: any) => (
                    <option key={c.id} value={c.id}>
                      {c.parent_id ? "↳ " : ""}{c.translations?.find((t: any) => t.locale === "pt")?.name ?? c.slug}
                    </option>
                  ))}
                </select></div>
              <div><Label>Autor</Label>
                <select value={form.author_id ?? ""} onChange={(e) => setForm((f) => ({ ...f, author_id: e.target.value || null }))}
                  className="w-full border border-input px-3 h-10 bg-white">
                  <option value="">—</option>
                  {(authors.data ?? []).map((a: any) => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select></div>
              <div>
                <Label>Tags</Label>
                <MultiPick items={(tags.data ?? []).map((t: any) => ({ id: t.id, label: t.translations?.find((x: any) => x.locale === "pt")?.name ?? t.slug }))}
                  selected={form.tag_ids} onChange={(tag_ids) => setForm((f) => ({ ...f, tag_ids }))} />
              </div>
              <div>
                <Label>Profissões</Label>
                <MultiPick items={(profs.data ?? []).map((p: any) => ({ id: p.id, label: p.translations?.find((x: any) => x.locale === "pt")?.name ?? p.slug }))}
                  selected={form.profession_ids} onChange={(profession_ids) => setForm((f) => ({ ...f, profession_ids }))} />
              </div>
            </div>
          </Card>

          <Card title="Estratégia SEO">
            <div className="space-y-3 text-sm">
              <label className="flex items-center justify-between">
                <span>Artigo pilar</span>
                <Switch checked={form.is_pillar_content} onCheckedChange={(v) => setForm((f) => ({ ...f, is_pillar_content: v }))} />
              </label>
              <label className="flex items-center justify-between">
                <span>Em destaque na home</span>
                <Switch checked={form.is_featured} onCheckedChange={(v) => setForm((f) => ({ ...f, is_featured: v }))} />
              </label>
              {form.is_featured && (
                <div><Label>Ordem do destaque</Label>
                  <Input type="number" value={form.featured_order ?? ""} placeholder="1, 2, 3…"
                    onChange={(e) => setForm((f) => ({ ...f, featured_order: parseInt(e.target.value) || null }))} /></div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white border border-border p-6">
      <h3 className="font-serif text-base mb-3 text-[rgb(6,36,67)]">{title}</h3>
      {children}
    </section>
  );
}

function MultiPick({ items, selected, onChange }: {
  items: { id: string; label: string }[]; selected: string[]; onChange: (s: string[]) => void;
}) {
  return (
    <div className="border border-input p-2 max-h-40 overflow-y-auto bg-white space-y-1">
      {items.length === 0 && <p className="text-xs text-muted-foreground p-1">Nenhum item.</p>}
      {items.map((it) => (
        <label key={it.id} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-muted p-1">
          <input type="checkbox" checked={selected.includes(it.id)}
            onChange={(e) => onChange(e.target.checked ? [...selected, it.id] : selected.filter((x) => x !== it.id))} />
          {it.label}
        </label>
      ))}
    </div>
  );
}

function FaqEditor({ faq, onChange }: { faq: { question: string; answer: string }[]; onChange: (f: any[]) => void }) {
  return (
    <div>
      <Label>FAQ (perguntas e respostas)</Label>
      <div className="space-y-3 mt-2">
        {faq.map((item, idx) => (
          <div key={idx} className="border border-border p-3 space-y-2 bg-muted/30">
            <Input value={item.question} placeholder="Pergunta"
              onChange={(e) => { const copy = [...faq]; copy[idx] = { ...item, question: e.target.value }; onChange(copy); }} />
            <Textarea rows={2} value={item.answer} placeholder="Resposta"
              onChange={(e) => { const copy = [...faq]; copy[idx] = { ...item, answer: e.target.value }; onChange(copy); }} />
            <Button type="button" variant="ghost" size="sm" onClick={() => onChange(faq.filter((_, i) => i !== idx))}>
              <Trash2 size={12} className="mr-2" /> Remover
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" size="sm" onClick={() => onChange([...faq, { question: "", answer: "" }])}>
          <Plus size={12} className="mr-2" /> Adicionar pergunta
        </Button>
      </div>
    </div>
  );
}
