
# Linhares Law — Editorial Institutional Foundation

**Action required:** click **Implement plan** so I can write the frontend files. The database is already provisioned.

## ✅ Already done — database (Lovable Cloud)

Full multilingual content backend with PT / EN / ES translations, role-based access (`admin`, `editor`, `viewer`), and grants:

- `pages` + `page_translations`
- `posts` + `post_translations`, `categories` (+tr), `tags` (+tr), `post_tags`
- `team_members` + `team_member_translations`
- `awards` + `award_translations` — **issuer, certificate_url, featured**
- `success_cases` + `success_case_translations` — **industry, country_origin, featured, video_url**
- `offices` + `office_translations` — **google_maps_url, office_images[]**
- `media_appearances` + `media_appearance_translations` (Na Mídia)
- `expertise_pages` + `expertise_page_translations` (profession-based clusters, with `related_visa_types[]`)
- `media_assets`, `seo_metadata`, `settings`
- `user_roles` + `has_role()` security-definer + enums (`app_role`, `content_status`, `locale_code`, `visa_type`)

Access in plain language:
- Visitors read published content; editors manage all content; admins also manage roles and settings.

## 🔜 To build — editorial frontend foundation

### Design constraints (locked, baked into the system)

- **No** SaaS, agency, startup, generic-firm, or landing-page patterns
- **No** gradients, glassmorphism, decorative animation, or flashy effects
- **Yes** boutique American law firm / private banking / family office register
- Strong typographic hierarchy, generous whitespace, sharp corners, hairline borders
- Dark navy luxury sections alternating with light editorial sections
- Large image containers, photography-led, minimal iconography
- Restrained motion — only slow image scale on hover and color transitions
- Subtle warm gold used **only as 1px rules and hover accents**, never as fills

### 1. `src/styles.css`
Editorial token system in `oklch`:
- `--primary` #062443 navy · `--secondary` #232323 charcoal · `--background` #FFFFFF · `--surface` #F8F9FB · `--border` #EAECEF · `--gold` (hairline-only)
- Montserrat (300 / 400 / 500 / 600) with editorial display sizes (`h1` up to 5rem, weight 300, tight tracking)
- Rhythm utilities: `.container-institutional` (max 1320px), `.container-narrow` (920px), `.section-y` (7rem), `.section-y-lg` (10rem), `.eyebrow`, `.rule-gold`, `.link-editorial`
- `--radius` = 2px (effectively sharp)

### 2. i18n — `src/i18n/`
- `locales.ts` — PT/EN/ES dictionaries (brand, slogan, nav, CTA, footer, "Em preparação" copy in institutional register)
- `useI18n.ts` — `useLocale()`, `useI18n()`, `withLocale()`, `stripLocale()` derived from URL prefix

### 3. SEO helper — `src/lib/seo.ts`
`buildLocaleHead({ path, locale, title, description, ogImage? })` emits per-route meta + canonical (leaf only) + hreflang trio + `x-default`.

### 4. Layout primitives — `src/components/layout/`
- `Container` (wide / narrow)
- `SectionTitle` (eyebrow + gold rule + display heading + optional intro)
- `LanguageSwitcher` (PT · EN · ES, dark/light aware)
- `Header` — transparent navy over hero, solid white on scroll, full nav, language switcher, outlined CTA. Hover = gold hairline + color shift only.
- `Footer` — full-bleed navy section with brand, slogan, attribution rule, navigation, 4 offices (city + state set), contact, language switcher, copyright
- `Placeholder` — editorial coming-soon pattern used across every route

### 5. Institutional primitives — `src/components/institutional/`
- `InstitutionalButton` (primary / outline / ghost / onDark) — sharp, uppercase tracking, never rounded pills
- `InstitutionalCard` (light / dark / outline) — hairline borders, generous padding, no shadows
- `EditorialImage` — large container with aspect ratios (portrait / landscape / wide / square), 1.2s slow zoom on hover, optional eyebrow caption
- `InstitutionalHero` — dark-or-light editorial hero used by inner pages

### 6. Routing — `src/routes/`
- `_site.tsx` pathless layout (Header + `<Outlet/>` + Footer). Home gets transparent header.
- PT (no prefix), EN (`/en/*`), ES (`/es/*`) mirrors of every route, each rendering `<Placeholder>` with localized hero copy + `buildLocaleHead`:
  - `/`, `/quem-somos`, `/equipe`, `/equipe/andre-linhares`, `/equipe/nicholas-perry`, `/premiacoes`, `/na-midia`, `/casos-de-sucesso`, `/escritorios`, `/contato`
  - `/servicos` + `/servicos/{eb2-niw, eb1, e2, l1, h1b, o1, eb5}`
  - `/blog`, `/blog/$slug`
- Admin scaffolding: `_authenticated.tsx` route guard, `/login`, `/admin` shell + `admin.{pages,posts,team,awards,media,cases,offices,expertise,media-assets,seo,settings}` placeholders. `noindex` on all admin routes.

### 7. `src/routes/__root.tsx`
- Preconnect + Montserrat stylesheet
- Sitewide defaults only: viewport, charSet, `og:site_name`, `og:type=website`
- JSON-LD `LegalService` Organization (slogan, 4 offices as `location`)
- Keep current error + notFound components

## Not in scope (deferred)

- Real institutional copy, photography, final logo asset
- Live CMS UI (only protected routes + shells)
- Login provider wiring (scaffold only until you ask to enable it)
- Sitemap entries (placeholder only — no project URL baked in)

---

**Click "Implement plan" to let me write the files.** Tooling is currently rejecting every `code--write` because the session is still in Plan mode.
