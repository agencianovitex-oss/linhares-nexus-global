REVOKE EXECUTE ON FUNCTION public.publish_due_posts() FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION public.publish_due_posts() TO service_role;