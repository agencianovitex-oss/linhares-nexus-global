DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);

DROP POLICY IF EXISTS "Profiles readable by authenticated" ON public.profiles;

CREATE POLICY "Users read own profile" ON public.profiles
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Editors and admins read all profiles" ON public.profiles
  FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::app_role) OR private.has_role(auth.uid(), 'editor'::app_role));