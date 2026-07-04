## Ajustes solicitados

### 1. Travar a altura do bloco de autoridade na Hero
Arquivo: `src/components/home/Home.tsx` (`AuthorityPanel`, ~L173-311).

- O bloco hoje usa `minHeight: 34rem`, então o slide inicial (overview, com 5 itens) expande o container e os demais slides ficam curtos. No mobile/tablet isso empurra a imagem de fundo.
- Trocar para altura fixa responsiva: `h-[560px] md:h-[600px] lg:h-[620px]` (sem `minHeight`), com `overflow-hidden` no wrapper interno.
- Ajustar o slide overview para caber:
  - Reduzir o gap entre itens (`space-y-3.5` → `space-y-2.5`).
  - Reduzir tamanho dos itens (`text-[0.95rem]` → `text-[0.9rem]`, `leading-[1.55]` → `leading-[1.5]`).
  - Reduzir tipografia do título do overview (`text-[1.6rem] lg:text-[1.85rem]` → `text-[1.35rem] lg:text-[1.55rem]`).
  - Reduzir margem superior da lista (`mt-7` → `mt-5`).
- Resultado: bloco de altura fixa em todas as viewports; overview cabe sem estourar; slides menores não deixam “sobra”; a imagem de fundo da Hero deixa de se mexer entre slides.

### 2. Equilibrar o bloco Liderança Jurídica
Arquivo: `src/components/home/Home.tsx` (`LeadershipSection`, ~L683-761).

- Hoje: André ocupa `lg:col-span-6` com foto `max-w-[460px]` + texto abaixo; Nicholas e Juliana ficam em coluna estreita `lg:col-span-6` empilhados, deixando um vazio grande abaixo da Juliana.
- Trocar layout desktop para: André `lg:col-span-5` com foto que preenche toda a coluna (sem `max-w-[460px]`) e cresce verticalmente com o conjunto ao lado; Nicholas e Juliana em `lg:col-span-7` distribuídos verticalmente com `justify-between` e `h-full`, para preencherem toda a altura do card do André.
- Nos cards laterais: aumentar a foto (col-span 4 → 5) e usar `aspect-[4/5]` com `h-full` para acompanhar altura, garantindo que as duas fichas somadas alinhem topo com topo do André e base com base do bloco descritivo dele.
- Mobile permanece como está (empilhado).

### 3. Textura nos heros das páginas dedicadas
Arquivo: `src/components/institutional/Hero.tsx`.

- Hoje o hero escuro usa `surface-premium-dark texture-grain` — o `texture-grain` já existe em `src/styles.css`. O problema é que o gradiente azul sólido de `surface-premium-dark` cobre a textura visualmente.
- Adicionar uma camada extra decorativa dentro de `<InstitutionalHero>` (quando `tone="dark"`):
  - Um `<span aria-hidden />` posicionado atrás do título com um padrão sutil (linhas diagonais + ruído leve) usando `background-image` com `repeating-linear-gradient` e um `radial-gradient` dourado muito discreto (`rgb(200 145 70 / 0.06)`).
  - Adicionar a classe utilitária `.hero-texture-veil` em `src/styles.css` com esse padrão + `mask-image` radial para desvanecer nas bordas do bloco de texto.
- Efeito: quebra o azul sólido, dá sensação de material impresso/textura de papel de luxo, sem competir com o título.

### 4. Corrigir o mosaico que não desliza em alguns dispositivos
Arquivo: `src/components/home/PhotoMosaic.tsx` e `src/styles.css`.

- Diagnóstico provável:
  1. O override `@media (prefers-reduced-motion: reduce)` adicionado em `styles.css` desativa a animação — muitos SOs (Windows corporativo, iOS com Motion Reduzido, macOS Accessibility) têm isso ligado por padrão, e nesse caso o mosaico simplesmente não anda em nada.
  2. A classe `animate-[marquee-x_linear_infinite]` (shorthand arbitrário) + `style.animationDuration` inline: em alguns browsers a shorthand define `animation-duration: 0s` e o `style` inline pode não sobrescrever confiável.
- Correções:
  - Remover a regra `prefers-reduced-motion` que pausa o marquee (ou substituir por redução de velocidade em vez de pausa total — 90s → 180s).
  - Trocar a classe utilitária arbitrária por classe dedicada `animate-marquee-x` definida em `styles.css` com `animation: marquee-x var(--marquee-duration, 90s) linear infinite;` e passar a duração via CSS var (`style={{ ['--marquee-duration' as any]: '90s' }}`) — evita a ambiguidade da shorthand.
  - Garantir `will-change: transform` na trilha e `transform: translateZ(0)` para forçar composição em GPU (resolve travamentos em alguns Chromes/Edges corporativos).

### 5. Carrossel navegável em Casos de Sucesso
Arquivo: `src/routes/_site.casos-de-sucesso.tsx` + novo componente `src/components/home/PhotoCarousel.tsx`.

- Manter `PhotoMosaic` (auto-slide) exclusivamente na Home.
- Em Casos de Sucesso, substituir `<PhotoMosaic />` por `<PhotoCarousel photos={mosaicPhotos} />` — carrossel manual usando `@/components/ui/carousel` (Embla, já disponível):
  - Sem autoplay; navegação por setas laterais (`CarouselPrevious` / `CarouselNext`).
  - Layout: mostra ~3 fotos por vez no desktop, 2 no tablet, 1.2 no mobile (`basis-1/3 lg:basis-1/4`).
  - Fotos em `aspect-[4/5]`, `object-cover`, com hover leve (`hover:scale-[1.02] transition-transform`).
  - Setas posicionadas dentro do container, fora da área das imagens, seguindo o estilo institucional (borda dourada sutil no hover).
- Home continua com o mosaico deslizante compacto (sem mudança).

## Fora de escopo
- Não mexer nas versões `/en/` e `/es/` (permanecem placeholder como estão).
- Não alterar tipografia global nem tokens de cor.
- Não trocar as fotos do mosaico nem editar dados de equipe.
