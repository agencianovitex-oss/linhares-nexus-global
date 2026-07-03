
## Objetivo

Adicionar um bloco tipo mosaico/marquee com 11 fotos deslizando lentamente, com pausa no hover. Aparece em duas páginas:

1. **Home** — logo abaixo da Hero, sem título/texto (bloco puramente visual, ~600px de altura no desktop).
2. **Casos de Sucesso** (`/casos-de-sucesso`) — abaixo da grade de vídeos, com eyebrow + título curto explicando que são entregas de Green Card a clientes do Linhares Law.

## Aguardando upload

Preciso das **11 fotos** enviadas via chat antes de implementar. Ideal:
- Proporção próxima de 4:5 (480×600) — se vierem em outra proporção, corto para `object-cover`.
- Formatos JPG/PNG/WEBP.
- Você pode nomear cada uma (ex.: "green-card-cliente-1.jpg") ou eu numero na ordem enviada.

Após o upload, subo cada uma via `lovable-assets` (CDN) e crio os pointers em `src/assets/mosaic/`.

## Componente novo

`src/components/home/PhotoMosaic.tsx`
- Props: `photos: { src: string; alt: string }[]`, `caption?: ReactNode` (opcional, usado só em Casos de Sucesso).
- Estrutura: container full-bleed com `overflow-hidden`, altura fixa `h-[600px]` desktop / `h-[380px]` mobile.
- Trilha horizontal com as 11 fotos **duplicadas** (22 no total) para loop contínuo perfeito.
- Cada foto: `w-[480px] h-[600px]` (desktop) / `w-[280px] h-[360px]` (mobile), `object-cover`, gap de ~16px entre elas.
- Animação: keyframe CSS `translateX(0 → -50%)` em ~90s linear infinite (velocidade lenta, ajustável).
- `hover:[animation-play-state:paused]` para pausar ao passar o mouse (mesmo comportamento em touch: pausa no `:active`).
- Sem setas/dots — é um marquee visual, não um carrossel navegável.
- `loading="lazy"` + `decoding="async"` nas imagens; primeiras 3 com `fetchpriority="high"`.

Keyframe adicionado em `src/styles.css`:
```css
@keyframes marquee-x { to { transform: translateX(-50%); } }
```

## Integração

**Home** (`src/components/home/Home.tsx`): inserir `<PhotoMosaic photos={mosaicPhotos} />` logo após o bloco Hero, antes de "Nossa Prática". Sem `SectionBlock` — full-bleed, fundo `bg-surface-2` para respirar entre Hero e o próximo bloco.

**Casos de Sucesso** (`src/routes/_site.casos-de-sucesso.tsx`): adicionar após o `SectionBlock` dos vídeos e antes do CTA final:
```
<SectionBlock>
  <div className="max-w-3xl mb-10">
    <span className="rule-gold" />
    <p className="mt-6 eyebrow">Entregas de Green Card</p>
    <h2 className="mt-4">Momentos de conquista dos nossos clientes.</h2>
    <p className="mt-4 lead">
      Registros do Dr. André Linhares ao lado de clientes do Linhares Law
      no momento da entrega de seus Green Cards.
    </p>
  </div>
  <PhotoMosaic photos={mosaicPhotos} />
</SectionBlock>
```

Fonte única das fotos: `src/data/mosaic.ts` exportando `mosaicPhotos`, importado nos dois lugares.

## Fora de escopo

- Versões `/en/` e `/es/` de casos de sucesso continuam como placeholder (já estão assim hoje).
- Sem lightbox/clique ampliar — bloco puramente decorativo.
- Sem mudanças no restante da Home ou da página.

## Próximo passo

Aprovar o plano e enviar as 11 fotos no próximo turno.
