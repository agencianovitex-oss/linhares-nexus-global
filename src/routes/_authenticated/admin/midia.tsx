import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { listMedia, registerMediaAsset, deleteMediaAsset } from "@/lib/admin/media.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Trash2, Upload, Copy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/midia")({
  component: MediaPage,
});

function MediaPage() {
  const list = useServerFn(listMedia);
  const reg = useServerFn(registerMediaAsset);
  const del = useServerFn(deleteMediaAsset);
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ["admin", "media"], queryFn: () => list() });
  const [extUrl, setExtUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const register = useMutation({
    mutationFn: (vars: { url: string; alt?: string }) => reg({ data: { url: vars.url, alt: vars.alt ?? null, type: "image" } }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["admin","media"] }); toast.success("Adicionado."); },
  });

  const delMut = useMutation({
    mutationFn: (id: string) => del({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin","media"] }),
  });

  const handleUpload = async (file: File, bucket: "blog-media" | "private-media") => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() ?? "bin";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from(bucket).upload(path, file);
      if (error) throw error;
      let url: string;
      if (bucket === "blog-media") {
        url = supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
      } else {
        const { data: signed } = await supabase.storage.from(bucket).createSignedUrl(path, 60 * 60 * 24 * 365);
        url = signed!.signedUrl;
      }
      register.mutate({ url, alt: file.name });
    } catch (e: any) {
      toast.error(e?.message ?? "Erro no upload");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-serif text-[rgb(6,36,67)]">Mídia</h1>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white border border-border p-4">
          <h3 className="font-serif mb-3">Upload público (blog-media)</h3>
          <label className="block border border-dashed border-border p-6 text-center cursor-pointer hover:bg-muted">
            <Upload size={20} className="mx-auto mb-2 text-[rgb(179,134,66)]" />
            <span className="text-sm">{uploading ? "Enviando…" : "Selecionar imagem"}</span>
            <input type="file" accept="image/*" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f, "blog-media"); }} />
          </label>
        </div>
        <div className="bg-white border border-border p-4">
          <h3 className="font-serif mb-3">Upload privado (private-media)</h3>
          <label className="block border border-dashed border-border p-6 text-center cursor-pointer hover:bg-muted">
            <Upload size={20} className="mx-auto mb-2 text-[rgb(179,134,66)]" />
            <span className="text-sm">{uploading ? "Enviando…" : "Selecionar arquivo"}</span>
            <input type="file" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f, "private-media"); }} />
          </label>
        </div>
      </div>

      <div className="bg-white border border-border p-4">
        <Label>URL externa</Label>
        <div className="flex gap-2 mt-1">
          <Input placeholder="https://…" value={extUrl} onChange={(e) => setExtUrl(e.target.value)} />
          <Button onClick={() => { if (extUrl) { register.mutate({ url: extUrl }); setExtUrl(""); } }}
            className="bg-[rgb(6,36,67)] text-white">Adicionar</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {(data ?? []).map((m: any) => (
          <div key={m.id} className="group relative bg-white border border-border overflow-hidden">
            <img src={m.url} alt={m.alt ?? ""} className="w-full aspect-square object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white p-1 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => { navigator.clipboard.writeText(m.url); toast.success("URL copiada"); }} className="p-1"><Copy size={12} /></button>
              <button onClick={() => { if (confirm("Remover?")) delMut.mutate(m.id); }} className="p-1"><Trash2 size={12} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
