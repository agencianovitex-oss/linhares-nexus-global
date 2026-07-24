## Objetivo

Reformular a página `/contato` (versão PT) para oferecer dois caminhos institucionais lado a lado:

1. **Consulta Gratuita, EB-2 NIW** — formulário Zoho Forms embutido via iframe.
2. **Consulta Paga, demais vistos** — botão institucional que abre o Zoho Bookings em nova aba (fluxo com pagamento não deve ser embutido em iframe).

O formulário genérico atual (com campos "Nome, E-mail, Estratégia de Interesse, Mensagem") será removido — os dois novos caminhos substituem essa área. As seções "Escritórios" e o bloco final "A Hora é Agora" permanecem inalteradas.

Escopo desta implementação: **somente a página PT (`/contato`)**. As páginas EN e ES continuam como estão (Placeholder). Podemos replicar depois quando você tiver os equivalentes em inglês/espanhol.

## Layout proposto

```text
┌─────────────────────────────────────────────────────────────┐
│  HERO (mantido)                                             │
├─────────────────────────────────────────────────────────────┤
│  SEÇÃO "AGENDAMENTO"                                        │
│  ┌───────────────────────────┬───────────────────────────┐  │
│  │ EYEBROW: Consulta Gratuita│ EYEBROW: Consulta Paga    │  │
│  │ TÍTULO: EB-2 NIW          │ TÍTULO: Demais Vistos     │  │
│  │ Texto curto de contexto   │ Texto curto de contexto   │  │
│  │ ─────────────────────     │ ─────────────────────     │  │
│  │ [ iframe Zoho Forms ]     │ [ Botão ouro:             │  │
│  │  altura ~600px            │   "Agendar Consulta" →    │  │
│  │  border institucional     │   abre Zoho Bookings ]    │  │
│  │                           │ Nota: pagamento seguro    │  │
│  └───────────────────────────┴───────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  CANAIS DIRETOS (e-mail, WhatsApp) — versão enxuta          │
│  (mantido, movido para uma faixa abaixo dos dois cards)     │
├─────────────────────────────────────────────────────────────┤
│  ESCRITÓRIOS (mantido)                                      │
├─────────────────────────────────────────────────────────────┤
│  BLOCO FINAL "A Hora é Agora." (mantido)                    │
└─────────────────────────────────────────────────────────────┘
```

Em mobile os dois cards empilham (um em cima do outro), o iframe do Zoho fica primeiro.

## Decisão técnica: iframe vs HTML embed do Zoho Forms

Usar **iframe**. Motivos:
- Isola CSS/JS do Zoho do nosso Tailwind e do `zoom: 0.85` global, evitando conflitos visuais.
- Qualquer edição feita no painel do Zoho reflete no site sem redeploy.
- Menos scripts externos entrando no bundle da página; melhor para SEO/CLS.
- Estilo diferente do site é compensado envolvendo o iframe num card institucional (borda, eyebrow, título acima, fundo `bg-surface`).

O iframe usará exatamente o snippet que você enviou (URL, `aria-label`, `allow="geolocation;"`), com altura responsiva (~560–620px desktop, ~700px mobile para dar folga aos campos).

## Zoho Bookings (consulta paga)

- Renderizado como **botão institucional ouro** (`InstitutionalButton variant="gold"`) que abre `https://linhareslaw.zohobookings.com/#/4689936000000037054` em nova aba (`target="_blank"`, `rel="noopener noreferrer"`).
- **Não** embutir em iframe: fluxos de checkout do Zoho costumam falhar dentro de iframes de terceiros (cookies, CSP, redirecionamentos do gateway de pagamento).
- Texto de apoio deixa claro que envolve pagamento e abre em nova janela.

## Arquivos afetados

- `src/routes/_site.contato.tsx` — reescrever o corpo da página conforme layout acima. Manter Hero, Escritórios e bloco final. Substituir o `<form>` genérico + aside "Canais Diretos" por:
  - Nova seção com dois cards (`EB-2 NIW` com iframe, `Demais Vistos` com botão Bookings).
  - Faixa enxuta abaixo com e-mail e WhatsApp institucionais (mantendo a informação que estava no aside).
- Nenhum outro arquivo é alterado. Nenhuma dependência nova. Nenhuma mudança de backend.

## Textos (rascunho, ajustáveis)

- Card esquerdo (Gratuita, EB-2 NIW):
  - Eyebrow: `Consulta Gratuita`
  - Título: `EB-2 NIW`
  - Apoio: "Se seu objetivo é a imigração pela via de Interesse Nacional (EB-2 NIW), preencha o formulário abaixo. Nossa equipe fará uma análise preliminar e retornará com os próximos passos."
- Card direito (Paga, demais vistos):
  - Eyebrow: `Consulta Estratégica`
  - Título: `Demais Vistos`
  - Apoio: "Para EB-1, E-2, L-1, O-1, EB-5, imigração familiar e demais estratégias, agende uma consulta com um de nossos advogados. O agendamento é feito de forma segura pela plataforma Zoho Bookings e envolve pagamento antecipado."
  - CTA: `Agendar Consulta` → abre Bookings em nova aba.

## Fora de escopo (posso fazer em seguida se quiser)

- Traduzir e aplicar o mesmo layout em `/en/contato` e `/es/contato`.
- Trocar o link `Agendar Consulta` do Header/Hero/Home para apontar para o Zoho Bookings (hoje aponta para `/contato`). Posso listar cada ocorrência num próximo passo.
