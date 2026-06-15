
-- 1) Move has_role into a private schema so it is no longer exposed via PostgREST
CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO anon, authenticated, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO anon, authenticated, service_role;

-- 2) Recreate all policies to reference private.has_role and drop public.has_role

-- user_roles
DROP POLICY IF EXISTS "Admins manage roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Admins manage roles" ON public.user_roles FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin'))
  WITH CHECK (private.has_role(auth.uid(),'admin'));
CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR private.has_role(auth.uid(),'admin'));

-- pages
DROP POLICY IF EXISTS "Editors manage pages" ON public.pages;
DROP POLICY IF EXISTS "Public can read published pages" ON public.pages;
CREATE POLICY "Editors manage pages" ON public.pages FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public can read published pages" ON public.pages FOR SELECT TO public
  USING (status = 'published'::content_status OR private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));

-- page_translations (require parent published)
DROP POLICY IF EXISTS "Editors manage page translations" ON public.page_translations;
DROP POLICY IF EXISTS "Public reads page translations" ON public.page_translations;
CREATE POLICY "Editors manage page translations" ON public.page_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public reads published page translations" ON public.page_translations FOR SELECT TO public
  USING (
    private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')
    OR EXISTS (SELECT 1 FROM public.pages p WHERE p.id = page_translations.page_id AND p.status = 'published'::content_status)
  );

-- post_translations
DROP POLICY IF EXISTS "Editors write post_tr" ON public.post_translations;
DROP POLICY IF EXISTS "Public read post_tr" ON public.post_translations;
CREATE POLICY "Editors write post_tr" ON public.post_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read published post_tr" ON public.post_translations FOR SELECT TO public
  USING (
    private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')
    OR EXISTS (SELECT 1 FROM public.posts p WHERE p.id = post_translations.post_id AND p.status = 'published'::content_status)
  );

-- post_tags
DROP POLICY IF EXISTS "Editors write post_tags" ON public.post_tags;
DROP POLICY IF EXISTS "Public read post_tags" ON public.post_tags;
CREATE POLICY "Editors write post_tags" ON public.post_tags FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read post_tags" ON public.post_tags FOR SELECT TO public USING (true);

-- categories
DROP POLICY IF EXISTS "Editors write categories" ON public.categories;
DROP POLICY IF EXISTS "Public read categories" ON public.categories;
CREATE POLICY "Editors write categories" ON public.categories FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read categories" ON public.categories FOR SELECT TO public USING (true);

-- category_translations
DROP POLICY IF EXISTS "Editors write category_tr" ON public.category_translations;
DROP POLICY IF EXISTS "Public read category_tr" ON public.category_translations;
CREATE POLICY "Editors write category_tr" ON public.category_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read category_tr" ON public.category_translations FOR SELECT TO public USING (true);

-- tags
DROP POLICY IF EXISTS "Editors write tags" ON public.tags;
DROP POLICY IF EXISTS "Public read tags" ON public.tags;
CREATE POLICY "Editors write tags" ON public.tags FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read tags" ON public.tags FOR SELECT TO public USING (true);

-- tag_translations
DROP POLICY IF EXISTS "Editors write tag_tr" ON public.tag_translations;
DROP POLICY IF EXISTS "Public read tag_tr" ON public.tag_translations;
CREATE POLICY "Editors write tag_tr" ON public.tag_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read tag_tr" ON public.tag_translations FOR SELECT TO public USING (true);

-- posts
DROP POLICY IF EXISTS "Editors write posts" ON public.posts;
DROP POLICY IF EXISTS "Public read published posts" ON public.posts;
CREATE POLICY "Editors write posts" ON public.posts FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read published posts" ON public.posts FOR SELECT TO public
  USING (status = 'published'::content_status OR private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));

-- success_case_translations
DROP POLICY IF EXISTS "Editors write success_case_tr" ON public.success_case_translations;
DROP POLICY IF EXISTS "Public read success_case_tr" ON public.success_case_translations;
CREATE POLICY "Editors write success_case_tr" ON public.success_case_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read published success_case_tr" ON public.success_case_translations FOR SELECT TO public
  USING (
    private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')
    OR EXISTS (SELECT 1 FROM public.success_cases sc WHERE sc.id = success_case_translations.success_case_id AND sc.status = 'published'::content_status)
  );

-- offices (strip email/phone from public)
DROP POLICY IF EXISTS "Editors write offices" ON public.offices;
DROP POLICY IF EXISTS "Public read offices" ON public.offices;
CREATE POLICY "Editors write offices" ON public.offices FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read offices" ON public.offices FOR SELECT TO public USING (true);

REVOKE SELECT ON public.offices FROM anon, authenticated;
GRANT SELECT (id, city, state, address, hours, google_maps_url, office_images, display_order, lat, lng, created_at, updated_at) ON public.offices TO anon, authenticated;

-- team_members (strip email from public)
DROP POLICY IF EXISTS "Editors write team" ON public.team_members;
DROP POLICY IF EXISTS "Public read team" ON public.team_members;
CREATE POLICY "Editors write team" ON public.team_members FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read team" ON public.team_members FOR SELECT TO public
  USING (is_active = true OR private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));

REVOKE SELECT ON public.team_members FROM anon, authenticated;
GRANT SELECT (id, slug, photo_url, linkedin_url, is_active, display_order, created_at, updated_at) ON public.team_members TO anon, authenticated;

-- team_member_translations
DROP POLICY IF EXISTS "Editors write team_tr" ON public.team_member_translations;
DROP POLICY IF EXISTS "Public read team_tr" ON public.team_member_translations;
CREATE POLICY "Editors write team_tr" ON public.team_member_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read team_tr" ON public.team_member_translations FOR SELECT TO public USING (true);

-- awards
DROP POLICY IF EXISTS "Editors write awards" ON public.awards;
DROP POLICY IF EXISTS "Public read awards" ON public.awards;
CREATE POLICY "Editors write awards" ON public.awards FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read awards" ON public.awards FOR SELECT TO public USING (true);

-- award_translations
DROP POLICY IF EXISTS "Editors write award_tr" ON public.award_translations;
DROP POLICY IF EXISTS "Public read award_tr" ON public.award_translations;
CREATE POLICY "Editors write award_tr" ON public.award_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read award_tr" ON public.award_translations FOR SELECT TO public USING (true);

-- success_cases
DROP POLICY IF EXISTS "Editors write success cases" ON public.success_cases;
DROP POLICY IF EXISTS "Public read success cases" ON public.success_cases;
CREATE POLICY "Editors write success cases" ON public.success_cases FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read success cases" ON public.success_cases FOR SELECT TO public
  USING (status = 'published'::content_status OR private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));

-- media_appearance_translations
DROP POLICY IF EXISTS "Editors write media_tr" ON public.media_appearance_translations;
DROP POLICY IF EXISTS "Public read media_tr" ON public.media_appearance_translations;
CREATE POLICY "Editors write media_tr" ON public.media_appearance_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read media_tr" ON public.media_appearance_translations FOR SELECT TO public USING (true);

-- expertise_pages
DROP POLICY IF EXISTS "Editors write expertise" ON public.expertise_pages;
DROP POLICY IF EXISTS "Public read expertise" ON public.expertise_pages;
CREATE POLICY "Editors write expertise" ON public.expertise_pages FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read expertise" ON public.expertise_pages FOR SELECT TO public
  USING (status = 'published'::content_status OR private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));

-- expertise_page_translations
DROP POLICY IF EXISTS "Editors write expertise_tr" ON public.expertise_page_translations;
DROP POLICY IF EXISTS "Public read expertise_tr" ON public.expertise_page_translations;
CREATE POLICY "Editors write expertise_tr" ON public.expertise_page_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read published expertise_tr" ON public.expertise_page_translations FOR SELECT TO public
  USING (
    private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')
    OR EXISTS (SELECT 1 FROM public.expertise_pages ep WHERE ep.id = expertise_page_translations.expertise_page_id AND ep.status = 'published'::content_status)
  );

-- media_assets
DROP POLICY IF EXISTS "Editors write media_assets" ON public.media_assets;
DROP POLICY IF EXISTS "Public read media_assets" ON public.media_assets;
CREATE POLICY "Editors write media_assets" ON public.media_assets FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read media_assets" ON public.media_assets FOR SELECT TO public USING (true);

-- office_translations
DROP POLICY IF EXISTS "Editors write office_tr" ON public.office_translations;
DROP POLICY IF EXISTS "Public read office_tr" ON public.office_translations;
CREATE POLICY "Editors write office_tr" ON public.office_translations FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read office_tr" ON public.office_translations FOR SELECT TO public USING (true);

-- media_appearances
DROP POLICY IF EXISTS "Editors write media" ON public.media_appearances;
DROP POLICY IF EXISTS "Public read media" ON public.media_appearances;
CREATE POLICY "Editors write media" ON public.media_appearances FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read media" ON public.media_appearances FOR SELECT TO public USING (true);

-- seo_metadata
DROP POLICY IF EXISTS "Editors write seo" ON public.seo_metadata;
DROP POLICY IF EXISTS "Public read seo" ON public.seo_metadata;
CREATE POLICY "Editors write seo" ON public.seo_metadata FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'))
  WITH CHECK (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));
CREATE POLICY "Public read seo" ON public.seo_metadata FOR SELECT TO public USING (true);

-- settings
DROP POLICY IF EXISTS "Admins write settings" ON public.settings;
DROP POLICY IF EXISTS "Public read public settings" ON public.settings;
CREATE POLICY "Admins write settings" ON public.settings FOR ALL TO authenticated
  USING (private.has_role(auth.uid(),'admin'))
  WITH CHECK (private.has_role(auth.uid(),'admin'));
CREATE POLICY "Public read public settings" ON public.settings FOR SELECT TO public
  USING (is_public = true OR private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor'));

-- Drop the publicly-exposed has_role; private.has_role is the replacement
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);
