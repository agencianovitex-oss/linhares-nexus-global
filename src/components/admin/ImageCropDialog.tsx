import { useCallback, useEffect, useMemo, useState } from "react";
import Cropper from "react-easy-crop";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";

export type CropRatio = "16:9" | "4:3" | "1:1";

const RATIOS: Record<CropRatio, { value: number; width: number; label: string }> = {
  "16:9": { value: 16 / 9, width: 1600, label: "16:9 (capa e corpo do artigo)" },
  "4:3": { value: 4 / 3, width: 1400, label: "4:3 (imagem no corpo)" },
  "1:1": { value: 1, width: 1000, label: "1:1 (retrato / autor)" },
};

interface Props {
  file: File | null;
  ratios?: CropRatio[];
  defaultRatio?: CropRatio;
  onCancel: () => void;
  onCropped: (file: File) => void;
}

interface Area { x: number; y: number; width: number; height: number }

export function ImageCropDialog({ file, ratios = ["16:9"], defaultRatio, onCancel, onCropped }: Props) {
  const [src, setSrc] = useState<string | null>(null);
  const [ratio, setRatio] = useState<CropRatio>(defaultRatio ?? ratios[0]);
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [area, setArea] = useState<Area | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!file) { setSrc(null); return; }
    const url = URL.createObjectURL(file);
    setSrc(url);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setRatio(defaultRatio ?? ratios[0]);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const aspect = useMemo(() => RATIOS[ratio].value, [ratio]);

  const onCropComplete = useCallback((_: Area, pixels: Area) => setArea(pixels), []);

  const confirm = async () => {
    if (!file || !src || !area) return;
    setBusy(true);
    try {
      const out = await renderCrop(src, area, RATIOS[ratio], file.name);
      onCropped(out);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={!!file} onOpenChange={(o) => { if (!o) onCancel(); }}>
      <DialogContent className="max-w-2xl">
        <DialogHeader><DialogTitle>Recortar imagem</DialogTitle></DialogHeader>

        {ratios.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {ratios.map((r) => (
              <button key={r} type="button" onClick={() => setRatio(r)}
                className={`border px-3 py-1.5 text-xs ${r === ratio ? "border-[rgb(6,36,67)] bg-[rgb(6,36,67)] text-white" : "border-input"}`}>
                {RATIOS[r].label}
              </button>
            ))}
          </div>
        )}

        <div className="relative h-[360px] w-full bg-muted">
          {src && (
            <Cropper
              image={src}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              restrictPosition
              zoomWithScroll
            />
          )}
        </div>

        <div className="space-y-2">
          <div className="text-xs text-muted-foreground">Zoom</div>
          <Slider value={[zoom]} min={1} max={4} step={0.01} onValueChange={(v) => setZoom(v[0])} />
          <p className="text-[11px] text-muted-foreground">
            A imagem é exportada em {RATIOS[ratio].width}px de largura, no formato WebP otimizado.
          </p>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={onCancel} disabled={busy}>Cancelar</Button>
          <Button type="button" onClick={confirm} disabled={busy || !area} className="bg-[rgb(6,36,67)] text-white">
            {busy ? "Processando…" : "Recortar e enviar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

async function renderCrop(src: string, area: Area, target: { value: number; width: number }, name: string): Promise<File> {
  const img = await loadImage(src);
  const width = target.width;
  const height = Math.round(width / target.value);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingQuality = "high";
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, area.x, area.y, area.width, area.height, 0, 0, width, height);

  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/webp", 0.86));
  if (!blob) throw new Error("Falha ao processar a imagem.");
  const base = name.replace(/\.[^.]+$/, "") || "imagem";
  return new File([blob], `${base}.webp`, { type: "image/webp" });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
