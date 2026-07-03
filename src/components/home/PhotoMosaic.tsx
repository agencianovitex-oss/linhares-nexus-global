import type { MosaicPhoto } from "@/data/mosaic";

interface Props {
  photos: MosaicPhoto[];
  /** Loop duration in seconds. Higher = slower. */
  durationSec?: number;
}

/**
 * Full-bleed marquee of portrait photos. Duplicates the list to create a
 * seamless loop, translating -50% of the doubled track. Pauses on hover.
 */
export function PhotoMosaic({ photos, durationSec = 90 }: Props) {
  const track = [...photos, ...photos];

  return (
    <section
      aria-label="Entregas de Green Card a clientes do Linhares Law"
      className="relative w-full overflow-hidden bg-surface-2 group"
    >
      <div
        className="flex gap-3 md:gap-4 py-6 md:py-8 w-max animate-[marquee-x_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${durationSec}s` }}
      >
        {track.map((photo, i) => (
          <div
            key={i}
            className="relative shrink-0 h-[360px] w-[288px] md:h-[600px] md:w-[480px] overflow-hidden bg-background"
          >
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
