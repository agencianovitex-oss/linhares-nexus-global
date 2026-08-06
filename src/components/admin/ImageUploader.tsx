import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Upload, Link as LinkIcon } from "lucide-react";
import { ImageCropDialog, type CropRatio } from "@/components/admin/ImageCropDialog";

interface Props {
  bucket: "blog-media" | "private-media";
  value: string | null;
  onChange: (url: string | null) => void;
  ratios?: CropRatio[];
}

export function ImageUploader({ bucket, value, onChange, ratios = ["16:9"] }: Props) {
  const [uploading, setUploading] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [pending, setPending] = useState<File | null>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() ?? "bin";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from(bucket).upload(path, file, { upsert: false, contentType: file.type });
      if (error) throw error;
      if (bucket === "blog-media") {
        onChange(`/api/public/blog-media/${path}`);
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
          <img src={value} alt="" className="aspect-[16/9] w-full border border-border object-cover" />
          <button type="button" onClick={() => onChange(null)} className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1">
            Remover
          </button>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-2">
        <label className="flex-1 border border-dashed border-input p-3 text-center text-sm cursor-pointer hover:bg-muted">
          <Upload size={14} className="inline mr-2" />
          {uploading ? "Enviando…" : "Fazer upload"}
          <input type="file" accept="image/*" className="hidden" onChange={(e) => {
            const f = e.target.files?.[0];
            e.target.value = "";
            if (f) setPending(f);
          }} />
        </label>
        <div className="flex gap-1 flex-1">
          <Input placeholder="ou cole uma URL" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
          <Button type="button" variant="outline" onClick={() => { if (urlInput) { onChange(urlInput); setUrlInput(""); }}}>
            <LinkIcon size={14} />
          </Button>
        </div>
      </div>
      <p className="text-[11px] text-muted-foreground">
        A imagem é recortada em proporção fixa antes do envio, garantindo o mesmo enquadramento em todas as publicações.
      </p>

      <ImageCropDialog
        file={pending}
        ratios={ratios}
        onCancel={() => setPending(null)}
        onCropped={(f) => { setPending(null); handleFile(f); }}
      />
    </div>
  );
}
