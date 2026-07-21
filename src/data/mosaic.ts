import p104 from "@/assets/mosaic/gc-104.png.asset.json";
import p105 from "@/assets/mosaic/gc-105.png.asset.json";
import p106 from "@/assets/mosaic/gc-106.png.asset.json";
import p108 from "@/assets/mosaic/gc-108.png.asset.json";
import p109 from "@/assets/mosaic/gc-109.png.asset.json";
import p110 from "@/assets/mosaic/gc-110.png.asset.json";
import p111 from "@/assets/mosaic/gc-111.png.asset.json";
import p112 from "@/assets/mosaic/gc-112.png.asset.json";
import p113 from "@/assets/mosaic/gc-113.png.asset.json";
import p114 from "@/assets/mosaic/gc-114.png.asset.json";

export interface MosaicPhoto {
  src: string;
  alt: string;
}

export const mosaicPhotos: MosaicPhoto[] = [
  { src: p104.url, alt: "Cliente da Linhares Law recebendo seu Green Card" },
  { src: p108.url, alt: "Dr. André Linhares entregando Green Card a cliente" },
  { src: p109.url, alt: "Clientes da Linhares Law com Green Cards aprovados" },
  { src: p110.url, alt: "Dr. André Linhares com cliente aprovada no Green Card" },
  { src: p111.url, alt: "Dr. André Linhares entregando Green Cards a cliente" },
  { src: p112.url, alt: "Cliente da Linhares Law com Green Card em mãos" },
  { src: p113.url, alt: "Comemoração de aprovação de Green Card na Linhares Law" },
  { src: p114.url, alt: "Clientes da Linhares Law recebendo Green Cards" },
  { src: p105.url, alt: "Dr. André Linhares com clientes aprovados no Green Card" },
  { src: p106.url, alt: "Cliente da Linhares Law recebendo Green Cards" },
];
