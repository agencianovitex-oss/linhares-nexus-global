import type { CSSProperties } from "react";
import type { MosaicPhoto } from "@/data/mosaic";

interface Props {
  photos: MosaicPhoto[];
  /** Loop duration in seconds. Higher = slower. */
  durationSec?: number;
  /** Reduces the block height by half for tighter layouts (home page). */
  compact?: boolean;
}

/**
 * Full-bleed marquee of portrait photos. Duplicates the list to create a
 * seamless loop, translating -50% of the doubled track. Pauses on hover.
 */
export function PhotoMosaic({ photos, durationSec = 90, compact = false }: Props) {
  const track = [...photos, ...photos];

  const itemClass = compact
    ? "relative shrink-0 h-[180px] w-[144px] md:h-[300px] md:w-[240px] overflow-hidden bg-background"
    : "relative shrink-0 h-[360px] w-[288px] md:h-[600px] md:w-[480px] overflow-hidden bg-background";

  const trackStyle = {
    ["--marquee-duration" as string]: `${durationSec}s`,
  } as CSSProperties;

  return (
    <section
      aria-label="Entregas de Green Card a clientes do Linhares Law"
      className="relative w-full overflow-hidden bg-surface-2 group"
    >
      <div
        className="flex gap-3 md:gap-4 py-6 md:py-8 w-max animate-marquee-x group-hover:[animation-play-state:paused]"
        style={trackStyle}
      >
        {track.map((photo, i) => (
          <div key={i} className={itemClass}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading={i < 3 ? "eager" : "lazy"}
              decoding="async"
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
