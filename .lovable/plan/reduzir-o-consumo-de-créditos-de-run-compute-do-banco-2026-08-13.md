# Reduzir o consumo de créditos de run (compute do banco)

## Diagnóstico

No período de 13/jul a 13/ago, o gasto de run do workspace foi praticamente todo em compute:

- Cloud compute pico: 18,81 créditos
- Cloud Worker Days: 1,83
- AI Gateway (traduções do blog): ~2,0
- Egress, storage, functions e requisições: menos de 0,03 somados

Compute é cobrado pelo tempo em que o backend fica ativo, não por consulta. E o projeto tem um job agendado no banco rodando a cada 15 minutos, 24h por dia:

```text
publish-scheduled-posts  ->  */15 * * * *
```

Ele só publica posts com data agendada, mas gera atividade contínua e impede a pausa por inatividade, mantendo o compute faturando o dia inteiro mesmo sem nenhum post agendado.

## Solução escolhida: remover o job periódico

Como publicações agendadas são raras, a publicação agendada passa a ser resolvida sob demanda, sem tarefa periódica.

1. Desativar o job `publish-scheduled-posts` (a cada 15 min).
2. A função `publish_scheduled_posts()` continua existindo e passa a ser chamada nos momentos em que o conteúdo é realmente lido ou gerenciado:
   - ao carregar as listagens públicas do blog (índice, categoria, autor, tag, busca) e a home;
   - ao abrir a lista de posts no painel administrativo.
3. Efeito prático: um post agendado é publicado assim que houver a primeira visita ao blog após o horário marcado. Sem visitas, ninguém está vendo o site de qualquer forma.
4. Nada muda no painel: o autor continua agendando com data e hora normalmente.

## Detalhes técnicos

- Remover o agendamento: `SELECT cron.unschedule('publish-scheduled-posts');` (também gerenciável em Cloud > Jobs).
- Permitir a execução sob demanda: conceder `EXECUTE` em `public.publish_scheduled_posts()` a `anon`/`authenticated`, ou (preferível) manter a função restrita e chamá-la por uma função `SECURITY DEFINER` dedicada acionada nas leituras do blog. A função já é `SECURITY DEFINER` e apenas muda `status` de `scheduled` para `published` quando `published_at <= now()`, sem risco de escrita arbitrária.
- Ponto de chamada no código: em `src/lib/blog/public.functions.ts`, executar a chamada (via RPC no cliente servidor) antes das consultas de listagem, com falha silenciosa para nunca quebrar a página; e em `src/lib/admin/posts.functions.ts` na listagem do admin.
- Nenhuma mudança de schema, nenhuma alteração visual no site.

## Observação adicional

Cada tradução automática de post (PT -> EN/ES) consome créditos de AI Gateway. Hoje é pouco, mas convém traduzir uma vez e salvar, evitando reprocessar o mesmo post.
