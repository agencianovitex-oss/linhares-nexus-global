
-- Storage policies for blog-media (public read, editor write)
DROP POLICY IF EXISTS "Public read blog-media" ON storage.objects;
CREATE POLICY "Public read blog-media" ON storage.objects FOR SELECT USING (bucket_id = 'blog-media');
DROP POLICY IF EXISTS "Editors write blog-media" ON storage.objects;
CREATE POLICY "Editors write blog-media" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'blog-media' AND (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')));
DROP POLICY IF EXISTS "Editors update blog-media" ON storage.objects;
CREATE POLICY "Editors update blog-media" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'blog-media' AND (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')));
DROP POLICY IF EXISTS "Editors delete blog-media" ON storage.objects;
CREATE POLICY "Editors delete blog-media" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'blog-media' AND (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')));

DROP POLICY IF EXISTS "Editors read private-media" ON storage.objects;
CREATE POLICY "Editors read private-media" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'private-media' AND (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')));
DROP POLICY IF EXISTS "Editors write private-media" ON storage.objects;
CREATE POLICY "Editors write private-media" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'private-media' AND (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')));
DROP POLICY IF EXISTS "Editors update private-media" ON storage.objects;
CREATE POLICY "Editors update private-media" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'private-media' AND (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')));
DROP POLICY IF EXISTS "Editors delete private-media" ON storage.objects;
CREATE POLICY "Editors delete private-media" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'private-media' AND (private.has_role(auth.uid(),'admin') OR private.has_role(auth.uid(),'editor')));

-- Cron
CREATE EXTENSION IF NOT EXISTS pg_cron;
DO $$ BEGIN PERFORM cron.unschedule('publish-scheduled-posts'); EXCEPTION WHEN OTHERS THEN NULL; END $$;
SELECT cron.schedule('publish-scheduled-posts','*/15 * * * *',$$SELECT public.publish_scheduled_posts();$$);

-- Seed categories
WITH inserted AS (
  INSERT INTO public.categories (slug, position) VALUES
    ('eb-2-niw',1),('eb-1',2),('empresarios-investidores',3),('trabalho-eua',4),
    ('planejamento-imigratorio',5),('atualizacoes-imigracao',6),('dentistas-eua',7),('medicos-eua',8)
  ON CONFLICT (slug) DO UPDATE SET position = EXCLUDED.position
  RETURNING id, slug
)
INSERT INTO public.category_translations (category_id, locale, name, description)
SELECT i.id, l.locale::public.locale_code, l.name, l.description
FROM inserted i
JOIN (VALUES
  ('eb-2-niw','pt','EB-2 NIW','Visto EB-2 com isenção de oferta de trabalho'),
  ('eb-2-niw','en','EB-2 NIW','EB-2 National Interest Waiver'),
  ('eb-2-niw','es','EB-2 NIW','Visa EB-2 con exención de interés nacional'),
  ('eb-1','pt','EB-1','Visto para profissionais de habilidade extraordinária'),
  ('eb-1','en','EB-1','Extraordinary Ability green card'),
  ('eb-1','es','EB-1','Visa para profesionales con habilidad extraordinaria'),
  ('empresarios-investidores','pt','Empresários e Investidores','Vistos para empreendedores e investidores'),
  ('empresarios-investidores','en','Entrepreneurs & Investors','Visas for founders and investors'),
  ('empresarios-investidores','es','Empresarios e Inversionistas','Visas para emprendedores e inversionistas'),
  ('trabalho-eua','pt','Trabalho nos EUA','Vistos de trabalho temporário e permanente'),
  ('trabalho-eua','en','Work in the USA','Temporary and permanent work visas'),
  ('trabalho-eua','es','Trabajo en EE.UU.','Visas de trabajo temporal y permanente'),
  ('planejamento-imigratorio','pt','Planejamento Imigratório','Estratégias e planejamento para imigração'),
  ('planejamento-imigratorio','en','Immigration Planning','Strategy and roadmap for immigration'),
  ('planejamento-imigratorio','es','Planificación Migratoria','Estrategia y planificación migratoria'),
  ('atualizacoes-imigracao','pt','Atualizações de Imigração','Notícias e mudanças nas políticas'),
  ('atualizacoes-imigracao','en','Immigration Updates','News and policy changes'),
  ('atualizacoes-imigracao','es','Actualizaciones Migratorias','Noticias y cambios en las políticas'),
  ('dentistas-eua','pt','Dentistas nos EUA','Imigração para profissionais de odontologia'),
  ('dentistas-eua','en','Dentists in the USA','Immigration for dental professionals'),
  ('dentistas-eua','es','Dentistas en EE.UU.','Inmigración para profesionales de odontología'),
  ('medicos-eua','pt','Médicos nos EUA','Imigração para profissionais da medicina'),
  ('medicos-eua','en','Doctors in the USA','Immigration for medical professionals'),
  ('medicos-eua','es','Médicos en EE.UU.','Inmigración para profesionales de medicina')
) AS l(slug, locale, name, description) ON l.slug = i.slug
ON CONFLICT (category_id, locale) DO NOTHING;

-- Seed professions
WITH inserted AS (
  INSERT INTO public.professions (slug, position) VALUES
    ('dentista',1),('medico',2),('enfermeiro',3),('engenheiro',4),
    ('arquiteto',5),('veterinario',6),('empresario',7),('pesquisador',8),('professor',9)
  ON CONFLICT (slug) DO UPDATE SET position = EXCLUDED.position
  RETURNING id, slug
)
INSERT INTO public.profession_translations (profession_id, locale, name)
SELECT i.id, l.locale::public.locale_code, l.name
FROM inserted i
JOIN (VALUES
  ('dentista','pt','Dentista'),('dentista','en','Dentist'),('dentista','es','Dentista'),
  ('medico','pt','Médico'),('medico','en','Doctor'),('medico','es','Médico'),
  ('enfermeiro','pt','Enfermeiro'),('enfermeiro','en','Nurse'),('enfermeiro','es','Enfermero'),
  ('engenheiro','pt','Engenheiro'),('engenheiro','en','Engineer'),('engenheiro','es','Ingeniero'),
  ('arquiteto','pt','Arquiteto'),('arquiteto','en','Architect'),('arquiteto','es','Arquitecto'),
  ('veterinario','pt','Veterinário'),('veterinario','en','Veterinarian'),('veterinario','es','Veterinario'),
  ('empresario','pt','Empresário'),('empresario','en','Entrepreneur'),('empresario','es','Empresario'),
  ('pesquisador','pt','Pesquisador'),('pesquisador','en','Researcher'),('pesquisador','es','Investigador'),
  ('professor','pt','Professor'),('professor','en','Professor'),('professor','es','Profesor')
) AS l(slug, locale, name) ON l.slug = i.slug
ON CONFLICT (profession_id, locale) DO NOTHING;

-- Seed authors
WITH inserted AS (
  INSERT INTO public.authors (slug, name, is_active, position) VALUES
    ('andre-linhares','André Linhares', true, 1),
    ('nicholas-perry','Nicholas Perry', true, 2),
    ('juliana-mosquera','Juliana Mosquera', true, 3),
    ('equipe-editorial','Equipe Editorial Linhares Law', true, 4)
  ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, position = EXCLUDED.position
  RETURNING id, slug
)
INSERT INTO public.author_translations (author_id, locale, role_title, short_bio)
SELECT i.id, l.locale::public.locale_code, l.role_title, l.short_bio
FROM inserted i
JOIN (VALUES
  ('andre-linhares','pt','Sócio-Fundador','Advogado imigratório com mais de 15 anos representando profissionais, executivos e investidores internacionais.'),
  ('andre-linhares','en','Founding Partner','U.S. immigration attorney with 15+ years representing international professionals, executives and investors.'),
  ('andre-linhares','es','Socio Fundador','Abogado de inmigración con más de 15 años representando profesionales, ejecutivos e inversionistas internacionales.'),
  ('nicholas-perry','pt','Advogado','Especialista em vistos de trabalho e green cards baseados em emprego.'),
  ('nicholas-perry','en','Attorney','Specialist in employment-based visas and green cards.'),
  ('nicholas-perry','es','Abogado','Especialista en visas de trabajo y residencias basadas en empleo.'),
  ('juliana-mosquera','pt','Advogada','Foco em vistos para profissionais de saúde e mobilidade global.'),
  ('juliana-mosquera','en','Attorney','Focused on healthcare professionals and global mobility.'),
  ('juliana-mosquera','es','Abogada','Enfoque en profesionales de salud y movilidad global.'),
  ('equipe-editorial','pt','Equipe Editorial','Conteúdo produzido pela equipe editorial da Linhares Law.'),
  ('equipe-editorial','en','Editorial Team','Content produced by the Linhares Law editorial team.'),
  ('equipe-editorial','es','Equipo Editorial','Contenido producido por el equipo editorial de Linhares Law.')
) AS l(slug, locale, role_title, short_bio) ON l.slug = i.slug
ON CONFLICT (author_id, locale) DO NOTHING;
