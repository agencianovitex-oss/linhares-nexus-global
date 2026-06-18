import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Upload, Link as LinkIcon } from "lucide-react";

interface Props {
  bucket: "blog-media" | "private-media";
  value: string | null;
  onChange: (url: string | null) => void;
}

export function ImageUploader({ bucket, value, onChange }: Props) {
  const [uploading, setUploading] = useState(false);
  const [urlInput, setUrlInput] = useState("");

  const handleFile = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() ?? "bin";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from(bucket).upload(path, file, { upsert: false });
      if (error) throw error;
      if (bucket === "blog-media") {
        const { data } = supabase.storage.from(bucket).getPublicUrl(path);
        onChange(data.publicUrl);
      } else {
        const { data, error: signErr } = await supabase.storage.from(bucket).createSignedUrl(path, 60 * 60 * 24 * 365);
        if (signErr) throw signErr;
        onChange(data.signedUrl);
      }
      toast.success("Imagem enviada.");
    } catch (e: any) {
      toast.error(e?.message ?? "Erro no upload");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      {value && (
        <div className="relative">
          <img src={value} alt="" className="max-h-48 w-full object-cover border border-border" />
          <button type="button" onClick={() => onChange(null)} className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1">
            Remover
          </button>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-2">
        <label className="flex-1 border border-dashed border-border p-3 text-center text-sm cursor-pointer hover:bg-muted">
          <Upload size={14} className="inline mr-2" />
          {uploading ? "Enviando…" : "Fazer upload"}
          <input type="file" accept="image/*" className="hidden" onChange={(e) => {
            const f = e.target.files?.[0]; if (f) handleFile(f);
          }} />
        </label>
        <div className="flex gap-1 flex-1">
          <Input placeholder="ou cole uma URL" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
          <Button type="button" variant="outline" onClick={() => { if (urlInput) { onChange(urlInput); setUrlInput(""); }}}>
            <LinkIcon size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}
