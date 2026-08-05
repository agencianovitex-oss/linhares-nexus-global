-- Restrict media object updates/deletes to the uploader (editors) or admins
DROP POLICY IF EXISTS "Editors delete blog-media" ON storage.objects;
DROP POLICY IF EXISTS "Editors update blog-media" ON storage.objects;
DROP POLICY IF EXISTS "Editors delete private-media" ON storage.objects;
DROP POLICY IF EXISTS "Editors update private-media" ON storage.objects;

CREATE POLICY "Media owners or admins delete blog-media"
ON storage.objects FOR DELETE TO authenticated
USING (
  bucket_id = 'blog-media'
  AND (
    private.has_role(auth.uid(), 'admin'::app_role)
    OR (private.has_role(auth.uid(), 'editor'::app_role) AND owner = auth.uid())
  )
);

CREATE POLICY "Media owners or admins update blog-media"
ON storage.objects FOR UPDATE TO authenticated
USING (
  bucket_id = 'blog-media'
  AND (
    private.has_role(auth.uid(), 'admin'::app_role)
    OR (private.has_role(auth.uid(), 'editor'::app_role) AND owner = auth.uid())
  )
)
WITH CHECK (
  bucket_id = 'blog-media'
  AND (
    private.has_role(auth.uid(), 'admin'::app_role)
    OR (private.has_role(auth.uid(), 'editor'::app_role) AND owner = auth.uid())
  )
);

CREATE POLICY "Media owners or admins delete private-media"
ON storage.objects FOR DELETE TO authenticated
USING (
  bucket_id = 'private-media'
  AND (
    private.has_role(auth.uid(), 'admin'::app_role)
    OR (private.has_role(auth.uid(), 'editor'::app_role) AND owner = auth.uid())
  )
);

CREATE POLICY "Media owners or admins update private-media"
ON storage.objects FOR UPDATE TO authenticated
USING (
  bucket_id = 'private-media'
  AND (
    private.has_role(auth.uid(), 'admin'::app_role)
    OR (private.has_role(auth.uid(), 'editor'::app_role) AND owner = auth.uid())
  )
)
WITH CHECK (
  bucket_id = 'private-media'
  AND (
    private.has_role(auth.uid(), 'admin'::app_role)
    OR (private.has_role(auth.uid(), 'editor'::app_role) AND owner = auth.uid())
  )
);