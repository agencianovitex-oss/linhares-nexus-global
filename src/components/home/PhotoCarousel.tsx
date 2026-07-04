import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { MosaicPhoto } from "@/data/mosaic";

interface Props {
  photos: MosaicPhoto[];
}

/**
 * Manual carousel of green-card delivery photos. Used on the Casos de Sucesso
 * page. Navigable with left/right arrows; shows multiple slides at once.
 */
export function PhotoCarousel({ photos }: Props) {
  return (
    <div className="relative">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-3 md:-ml-4">
          {photos.map((photo, i) => (
            <CarouselItem
              key={i}
              className="pl-3 md:pl-4 basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-2">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={i < 4 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="left-2 md:-left-4 h-11 w-11 rounded-full border-border bg-background/95 text-primary hover:border-gold hover:text-gold hover:bg-background disabled:opacity-40"
        />
        <CarouselNext
          className="right-2 md:-right-4 h-11 w-11 rounded-full border-border bg-background/95 text-primary hover:border-gold hover:text-gold hover:bg-background disabled:opacity-40"
        />
      </Carousel>
    </div>
  );
}
