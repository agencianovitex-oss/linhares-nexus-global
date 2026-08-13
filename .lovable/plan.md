# Por que o "Database" consome créditos de run e como reduzir

## O que os dados mostram

No período de 13/jul a 13/ago, o consumo de run (Cloud) deste workspace foi:

- Cloud compute pico: 18,81 créditos (praticamente todo o gasto de run)
- Cloud Worker Days: 1,83
- AI Gateway (traduções do blog com IA): ~2,0
- Egress, storage, functions, requests: menos de 0,03 no total

Ou seja: o que aparece como "Database"/"Compute" no gráfico é **compute do backend ligado**, não volume de consultas. A cobrança é por tempo em que a instância fica ativa (≈0,6 crédito/dia), não por query executada.

## Por que a instância quase nunca hiberna

O projeto tem um job agendado no banco:

```text
publish-scheduled-posts  ->  */15 * * * *  (a cada 15 minutos, 24h por dia)
```

Ele roda `public.publish_scheduled_posts()`, que só faz publicar posts com data agendada. Rodando a cada 15 minutos, ele gera atividade contínua e impede que o backend entre em pausa por inatividade, mantendo o compute faturando o dia inteiro, mesmo de madrugada e em dias sem nenhum post agendado.

## Plano de redução

1. Reduzir a frequência do job de publicação agendada de 15 minutos para 1x por hora (ou 2x ao dia, nos horários em que o escritório publica). Um post agendado é publicado com no máximo essa margem de atraso.
2. Alternativa mais econômica (e recomendável se publicações agendadas forem raras): desativar o job e fazer a publicação agendada ser resolvida na leitura/no salvamento do post, sem tarefa periódica.
3. Manter o resto como está: egress, storage, functions e requisições são residuais e não valem otimização agora.
4. Observação sobre o AI Gateway: cada tradução automática de post (PT -> EN/ES) custa créditos de token. É pequeno hoje, mas cresce com o volume de publicações; vale traduzir uma vez e salvar, evitando reprocessar o mesmo post.

## Detalhes técnicos

- O ajuste ou a desativação do agendamento é feito na área de Cloud > Jobs do projeto (não por SQL genérico), alterando o cron `publish-scheduled-posts`.
- Caso se opte pela alternativa 2, `publish_scheduled_posts()` continua existindo e passa a ser chamada apenas quando o admin salva/lista posts, ou por uma rota pública de cron chamada com frequência baixa.
- Nenhuma mudança de schema é necessária; nada muda no site público.
