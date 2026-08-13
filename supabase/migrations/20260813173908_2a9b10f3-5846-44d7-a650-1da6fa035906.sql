DO $$ BEGIN PERFORM cron.unschedule('publish-scheduled-posts'); EXCEPTION WHEN OTHERS THEN NULL; END $$;

CREATE OR REPLACE FUNCTION public.publish_due_posts()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  UPDATE public.posts SET status = 'published'
  WHERE status::text = 'scheduled' AND published_at IS NOT NULL AND published_at <= now();
$function$;

REVOKE ALL ON FUNCTION public.publish_due_posts() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.publish_due_posts() TO anon, authenticated, service_role;