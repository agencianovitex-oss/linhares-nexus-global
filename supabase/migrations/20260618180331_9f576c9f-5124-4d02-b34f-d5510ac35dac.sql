
-- 1. PROFILES
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Profiles readable by authenticated" ON public.profiles;
CREATE POLICY "Profiles readable by authenticated" ON public.profiles
  FOR SELECT TO authenticated USING (true);
DROP POLICY IF EXISTS "Users update own profile" ON public.profiles;
CREATE POLICY "Users update own profile" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
DROP TRIGGER IF EXISTS trg_profiles_updated ON public.profiles;
CREATE TRIGGER trg_profiles_updated BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE existing_count int;
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email,'@',1)),
    NEW.raw_user_meta_data->>'avatar_url'
  ) ON CONFLICT (id) DO NOTHING;
  SELECT count(*) INTO existing_count FROM public.user_roles;
  IF existing_count = 0 THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 2. AUTHORS
CREATE TABLE IF NOT EXISTS public.authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  photo_url text,
  linkedin_url text,
  is_active boolean NOT NULL DEFAULT true,
  position int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.authors TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.authors TO authenticated;
GRANT ALL ON public.authors TO service_role;
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read active authors" ON public.authors;
CREATE POLICY "Public read active authors" ON public.authors
  FOR SELECT USING (is_active OR private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
DROP POLICY IF EXISTS "Editors write authors" ON public.authors;
CREATE POLICY "Editors write authors" ON public.authors
  FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
DROP TRIGGER IF EXISTS trg_authors_updated ON public.authors;
CREATE TRIGGER trg_authors_updated BEFORE UPDATE ON public.authors
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE IF NOT EXISTS public.author_translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL REFERENCES public.authors(id) ON DELETE CASCADE,
  locale public.locale_code NOT NULL,
  role_title text,
  short_bio text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (author_id, locale)
);
GRANT SELECT ON public.author_translations TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.author_translations TO authenticated;
GRANT ALL ON public.author_translations TO service_role;
ALTER TABLE public.author_translations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read author translations" ON public.author_translations;
CREATE POLICY "Public read author translations" ON public.author_translations FOR SELECT USING (true);
DROP POLICY IF EXISTS "Editors write author translations" ON public.author_translations;
CREATE POLICY "Editors write author translations" ON public.author_translations
  FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
DROP TRIGGER IF EXISTS trg_author_translations_updated ON public.author_translations;
CREATE TRIGGER trg_author_translations_updated BEFORE UPDATE ON public.author_translations
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 3. PROFESSIONS
CREATE TABLE IF NOT EXISTS public.professions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  position int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.professions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.professions TO authenticated;
GRANT ALL ON public.professions TO service_role;
ALTER TABLE public.professions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read professions" ON public.professions;
CREATE POLICY "Public read professions" ON public.professions FOR SELECT USING (true);
DROP POLICY IF EXISTS "Editors write professions" ON public.professions;
CREATE POLICY "Editors write professions" ON public.professions
  FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
DROP TRIGGER IF EXISTS trg_professions_updated ON public.professions;
CREATE TRIGGER trg_professions_updated BEFORE UPDATE ON public.professions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE IF NOT EXISTS public.profession_translations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profession_id uuid NOT NULL REFERENCES public.professions(id) ON DELETE CASCADE,
  locale public.locale_code NOT NULL,
  name text NOT NULL,
  UNIQUE (profession_id, locale)
);
GRANT SELECT ON public.profession_translations TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profession_translations TO authenticated;
GRANT ALL ON public.profession_translations TO service_role;
ALTER TABLE public.profession_translations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read profession translations" ON public.profession_translations;
CREATE POLICY "Public read profession translations" ON public.profession_translations FOR SELECT USING (true);
DROP POLICY IF EXISTS "Editors write profession translations" ON public.profession_translations;
CREATE POLICY "Editors write profession translations" ON public.profession_translations
  FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));

CREATE TABLE IF NOT EXISTS public.post_professions (
  post_id uuid NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  profession_id uuid NOT NULL REFERENCES public.professions(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, profession_id)
);
GRANT SELECT ON public.post_professions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.post_professions TO authenticated;
GRANT ALL ON public.post_professions TO service_role;
ALTER TABLE public.post_professions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read post professions" ON public.post_professions;
CREATE POLICY "Public read post professions" ON public.post_professions FOR SELECT USING (true);
DROP POLICY IF EXISTS "Editors write post professions" ON public.post_professions;
CREATE POLICY "Editors write post professions" ON public.post_professions
  FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));

-- 4. CATEGORIES hierarchy
ALTER TABLE public.categories
  ADD COLUMN IF NOT EXISTS parent_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS position int NOT NULL DEFAULT 0;

GRANT SELECT ON public.categories TO anon;
GRANT SELECT ON public.category_translations TO anon;
GRANT SELECT ON public.tags TO anon;
GRANT SELECT ON public.tag_translations TO anon;
GRANT SELECT ON public.post_tags TO anon;
GRANT SELECT ON public.media_assets TO anon;
GRANT SELECT ON public.posts TO anon;
GRANT SELECT ON public.post_translations TO anon;
GRANT SELECT ON public.seo_metadata TO anon;

-- 5. POSTS new columns + author FK swap
ALTER TABLE public.posts DROP CONSTRAINT IF EXISTS posts_author_id_fkey;
ALTER TABLE public.posts
  ADD COLUMN IF NOT EXISTS reading_time_minutes int,
  ADD COLUMN IF NOT EXISTS is_pillar_content boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS is_featured boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS featured_order int,
  ADD COLUMN IF NOT EXISTS cta_type text,
  ADD COLUMN IF NOT EXISTS cta_title text,
  ADD COLUMN IF NOT EXISTS cta_description text,
  ADD COLUMN IF NOT EXISTS cta_button_text text,
  ADD COLUMN IF NOT EXISTS cta_url text;

UPDATE public.posts SET author_id = NULL WHERE author_id IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM public.authors WHERE id = posts.author_id);
ALTER TABLE public.posts
  ADD CONSTRAINT posts_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.authors(id) ON DELETE SET NULL;

ALTER TABLE public.post_translations
  ADD COLUMN IF NOT EXISTS faq jsonb NOT NULL DEFAULT '[]'::jsonb;

-- 6. Auto-publish scheduled posts function
CREATE OR REPLACE FUNCTION public.publish_scheduled_posts()
RETURNS void LANGUAGE sql SECURITY DEFINER SET search_path = public
AS $$
  UPDATE public.posts SET status = 'published'
  WHERE status::text = 'scheduled' AND published_at IS NOT NULL AND published_at <= now();
$$;
