ALTER TABLE public.post_translations ADD COLUMN IF NOT EXISTS slug text;

UPDATE public.post_translations pt
SET slug = p.slug
FROM public.posts p
WHERE pt.post_id = p.id AND (pt.slug IS NULL OR pt.slug = '');

-- de-duplicate any collisions within the same locale before adding the constraint
WITH d AS (
  SELECT id, slug, locale,
         row_number() OVER (PARTITION BY locale, slug ORDER BY created_at) AS rn
  FROM public.post_translations
  WHERE slug IS NOT NULL
)
UPDATE public.post_translations pt
SET slug = pt.slug || '-' || d.rn
FROM d
WHERE pt.id = d.id AND d.rn > 1;

CREATE UNIQUE INDEX IF NOT EXISTS post_translations_locale_slug_key
  ON public.post_translations (locale, slug);