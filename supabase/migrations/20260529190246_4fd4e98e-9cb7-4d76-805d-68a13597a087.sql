
-- =========================================================
-- ENUMS
-- =========================================================
create type public.app_role as enum ('admin', 'editor', 'viewer');
create type public.content_status as enum ('draft', 'published', 'archived');
create type public.locale_code as enum ('pt', 'en', 'es');
create type public.visa_type as enum ('eb2_niw','eb1','e2','l1','h1b','o1','eb5','other');

-- =========================================================
-- UPDATED_AT helper
-- =========================================================
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- =========================================================
-- USER ROLES
-- =========================================================
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Users can view their own roles"
on public.user_roles for select to authenticated
using (auth.uid() = user_id or public.has_role(auth.uid(), 'admin'));

create policy "Admins manage roles"
on public.user_roles for all to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

-- =========================================================
-- Generic helpers for policies
-- =========================================================
-- "anyone can read published, editors+admins can write"
-- expressed inline per table below.

-- =========================================================
-- PAGES
-- =========================================================
create table public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  type text not null default 'static',
  status public.content_status not null default 'draft',
  cover_image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.pages to anon, authenticated;
grant all on public.pages to service_role;
grant insert, update, delete on public.pages to authenticated;
alter table public.pages enable row level security;
create policy "Public can read published pages" on public.pages for select
using (status = 'published' or public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Editors manage pages" on public.pages for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create trigger trg_pages_updated before update on public.pages
for each row execute function public.set_updated_at();

create table public.page_translations (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  locale public.locale_code not null,
  title text not null,
  meta_title text,
  meta_description text,
  body jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (page_id, locale)
);
grant select on public.page_translations to anon, authenticated;
grant all on public.page_translations to service_role;
grant insert, update, delete on public.page_translations to authenticated;
alter table public.page_translations enable row level security;
create policy "Public reads page translations" on public.page_translations for select using (true);
create policy "Editors manage page translations" on public.page_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create trigger trg_page_tr_updated before update on public.page_translations
for each row execute function public.set_updated_at();

-- =========================================================
-- CATEGORIES + TAGS
-- =========================================================
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.category_translations (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories(id) on delete cascade,
  locale public.locale_code not null,
  name text not null,
  description text,
  unique (category_id, locale)
);
create table public.tags (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  created_at timestamptz not null default now()
);
create table public.tag_translations (
  id uuid primary key default gen_random_uuid(),
  tag_id uuid not null references public.tags(id) on delete cascade,
  locale public.locale_code not null,
  name text not null,
  unique (tag_id, locale)
);

-- =========================================================
-- POSTS
-- =========================================================
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  status public.content_status not null default 'draft',
  published_at timestamptz,
  cover_image_url text,
  category_id uuid references public.categories(id) on delete set null,
  author_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.post_translations (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  locale public.locale_code not null,
  title text not null,
  excerpt text,
  body jsonb not null default '{}'::jsonb,
  meta_title text,
  meta_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (post_id, locale)
);
create table public.post_tags (
  post_id uuid not null references public.posts(id) on delete cascade,
  tag_id uuid not null references public.tags(id) on delete cascade,
  primary key (post_id, tag_id)
);

-- =========================================================
-- TEAM
-- =========================================================
create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  photo_url text,
  email text,
  linkedin_url text,
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.team_member_translations (
  id uuid primary key default gen_random_uuid(),
  team_member_id uuid not null references public.team_members(id) on delete cascade,
  locale public.locale_code not null,
  name text not null,
  role_title text,
  bio text,
  short_bio text,
  unique (team_member_id, locale)
);

-- =========================================================
-- AWARDS  (expanded)
-- =========================================================
create table public.awards (
  id uuid primary key default gen_random_uuid(),
  year int,
  image_url text,
  issuer text,
  certificate_url text,
  featured boolean not null default false,
  display_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.award_translations (
  id uuid primary key default gen_random_uuid(),
  award_id uuid not null references public.awards(id) on delete cascade,
  locale public.locale_code not null,
  title text not null,
  description text,
  unique (award_id, locale)
);

-- =========================================================
-- SUCCESS CASES  (expanded)
-- =========================================================
create table public.success_cases (
  id uuid primary key default gen_random_uuid(),
  visa_type public.visa_type,
  industry text,
  country_origin text,
  year int,
  featured boolean not null default false,
  video_url text,
  cover_image_url text,
  display_order int not null default 0,
  status public.content_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.success_case_translations (
  id uuid primary key default gen_random_uuid(),
  success_case_id uuid not null references public.success_cases(id) on delete cascade,
  locale public.locale_code not null,
  title text not null,
  summary text,
  body jsonb not null default '{}'::jsonb,
  unique (success_case_id, locale)
);

-- =========================================================
-- OFFICES  (expanded)
-- =========================================================
create table public.offices (
  id uuid primary key default gen_random_uuid(),
  city text not null,
  state text,
  address text,
  phone text,
  email text,
  lat numeric,
  lng numeric,
  hours text,
  google_maps_url text,
  office_images text[] not null default '{}',
  display_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.office_translations (
  id uuid primary key default gen_random_uuid(),
  office_id uuid not null references public.offices(id) on delete cascade,
  locale public.locale_code not null,
  description text,
  directions text,
  unique (office_id, locale)
);

-- =========================================================
-- MEDIA APPEARANCES  (Na Mídia)
-- =========================================================
create table public.media_appearances (
  id uuid primary key default gen_random_uuid(),
  outlet text not null,
  outlet_logo_url text,
  url text,
  thumbnail_url text,
  published_at date,
  featured boolean not null default false,
  display_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.media_appearance_translations (
  id uuid primary key default gen_random_uuid(),
  media_appearance_id uuid not null references public.media_appearances(id) on delete cascade,
  locale public.locale_code not null,
  title text not null,
  excerpt text,
  unique (media_appearance_id, locale)
);

-- =========================================================
-- EXPERTISE PAGES  (profession-based clusters)
-- =========================================================
create table public.expertise_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  profession_key text not null,
  cover_image_url text,
  status public.content_status not null default 'draft',
  display_order int not null default 0,
  related_visa_types public.visa_type[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.expertise_page_translations (
  id uuid primary key default gen_random_uuid(),
  expertise_page_id uuid not null references public.expertise_pages(id) on delete cascade,
  locale public.locale_code not null,
  title text not null,
  subtitle text,
  intro text,
  body jsonb not null default '{}'::jsonb,
  meta_title text,
  meta_description text,
  unique (expertise_page_id, locale)
);

-- =========================================================
-- MEDIA ASSETS
-- =========================================================
create table public.media_assets (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  type text not null default 'image',
  alt text,
  width int,
  height int,
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

-- =========================================================
-- SEO METADATA
-- =========================================================
create table public.seo_metadata (
  id uuid primary key default gen_random_uuid(),
  route_path text not null,
  locale public.locale_code not null,
  title text,
  description text,
  og_image_url text,
  canonical text,
  jsonld jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (route_path, locale)
);

-- =========================================================
-- SETTINGS
-- =========================================================
create table public.settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  is_public boolean not null default false,
  updated_at timestamptz not null default now()
);

-- =========================================================
-- GRANTS + RLS for all content tables (loop-like, written out)
-- =========================================================
do $$
declare
  t text;
  content_tables text[] := array[
    'categories','category_translations','tags','tag_translations',
    'posts','post_translations','post_tags',
    'team_members','team_member_translations',
    'awards','award_translations',
    'success_cases','success_case_translations',
    'offices','office_translations',
    'media_appearances','media_appearance_translations',
    'expertise_pages','expertise_page_translations',
    'media_assets','seo_metadata','settings'
  ];
begin
  foreach t in array content_tables loop
    execute format('grant select on public.%I to anon, authenticated;', t);
    execute format('grant insert, update, delete on public.%I to authenticated;', t);
    execute format('grant all on public.%I to service_role;', t);
    execute format('alter table public.%I enable row level security;', t);
  end loop;
end $$;

-- updated_at triggers (where applicable)
do $$
declare
  t text;
  ts_tables text[] := array[
    'categories','posts','post_translations',
    'team_members','awards','award_translations',
    'success_cases','success_case_translations',
    'offices','office_translations',
    'media_appearances','media_appearance_translations',
    'expertise_pages','expertise_page_translations',
    'seo_metadata','settings'
  ];
begin
  foreach t in array ts_tables loop
    execute format(
      'create trigger trg_%I_updated before update on public.%I for each row execute function public.set_updated_at();',
      t, t);
  end loop;
end $$;

-- Public read / editor write policies for content tables
-- Categories / tags: public read all, editors write
create policy "Public read categories" on public.categories for select using (true);
create policy "Editors write categories" on public.categories for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

create policy "Public read category_tr" on public.category_translations for select using (true);
create policy "Editors write category_tr" on public.category_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

create policy "Public read tags" on public.tags for select using (true);
create policy "Editors write tags" on public.tags for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

create policy "Public read tag_tr" on public.tag_translations for select using (true);
create policy "Editors write tag_tr" on public.tag_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- Posts: published readable, editors all
create policy "Public read published posts" on public.posts for select
using (status='published' or public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Editors write posts" on public.posts for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

create policy "Public read post_tr" on public.post_translations for select using (true);
create policy "Editors write post_tr" on public.post_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

create policy "Public read post_tags" on public.post_tags for select using (true);
create policy "Editors write post_tags" on public.post_tags for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- Team
create policy "Public read team" on public.team_members for select using (is_active = true or public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Editors write team" on public.team_members for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Public read team_tr" on public.team_member_translations for select using (true);
create policy "Editors write team_tr" on public.team_member_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- Awards
create policy "Public read awards" on public.awards for select using (true);
create policy "Editors write awards" on public.awards for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Public read award_tr" on public.award_translations for select using (true);
create policy "Editors write award_tr" on public.award_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- Success cases
create policy "Public read success cases" on public.success_cases for select
using (status='published' or public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Editors write success cases" on public.success_cases for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Public read success_case_tr" on public.success_case_translations for select using (true);
create policy "Editors write success_case_tr" on public.success_case_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- Offices
create policy "Public read offices" on public.offices for select using (true);
create policy "Editors write offices" on public.offices for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Public read office_tr" on public.office_translations for select using (true);
create policy "Editors write office_tr" on public.office_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- Media appearances
create policy "Public read media" on public.media_appearances for select using (true);
create policy "Editors write media" on public.media_appearances for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Public read media_tr" on public.media_appearance_translations for select using (true);
create policy "Editors write media_tr" on public.media_appearance_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- Expertise pages
create policy "Public read expertise" on public.expertise_pages for select
using (status='published' or public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Editors write expertise" on public.expertise_pages for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Public read expertise_tr" on public.expertise_page_translations for select using (true);
create policy "Editors write expertise_tr" on public.expertise_page_translations for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- Media assets
create policy "Public read media_assets" on public.media_assets for select using (true);
create policy "Editors write media_assets" on public.media_assets for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- SEO metadata
create policy "Public read seo" on public.seo_metadata for select using (true);
create policy "Editors write seo" on public.seo_metadata for all to authenticated
using (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'))
with check (public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));

-- Settings: only is_public rows readable by anon; admins can write
create policy "Public read public settings" on public.settings for select
using (is_public = true or public.has_role(auth.uid(),'admin') or public.has_role(auth.uid(),'editor'));
create policy "Admins write settings" on public.settings for all to authenticated
using (public.has_role(auth.uid(),'admin'))
with check (public.has_role(auth.uid(),'admin'));
