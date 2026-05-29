import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: "portrait" | "landscape" | "square" | "wide";
  caption?: string;
}

const ratioMap = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
  wide: "aspect-[21/9]",
} as const;

export function EditorialImage({
  ratio = "landscape",
  caption,
  className,
  alt = "",
  src,
  ...img
}: Props) {
  return (
    <figure className={cn("w-full", className)}>
      <div className={cn("w-full overflow-hidden bg-surface-2", ratioMap[ratio])}>
        {src ? (
          <img
            {...img}
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
          />
        ) : (
          <div
            aria-hidden
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent 0 14px, oklch(0.93 0.004 255) 14px 15px)",
            }}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
