import { InstitutionalHero, InstitutionalButton, InstitutionalCard, EditorialImage } from "@/components/institutional";
import { SectionBlock } from "@/components/institutional/SectionBlock";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { useI18n, withLocale } from "@/i18n/useI18n";
import { getProfile, profileLabels } from "@/i18n/content/team-profiles";

export function AttorneyProfilePage({ slug }: { slug: string }) {
  const { locale } = useI18n();
  const labels = profileLabels[locale];
  const p = getProfile(locale, slug);

  if (!p) {
    return (
      <SectionBlock>
        <h1 className="text-primary">{labels.notFound}</h1>
      </SectionBlock>
    );
  }

  return (
    <>
      <InstitutionalHero
        eyebrow={labels.heroEyebrow}
        title={p.name}
        intro={p.shortBio}
        meta={
          <>
            <span>{p.title}</span>
            {p.bars.slice(0, 2).map((b) => (
              <span key={b}>{b}</span>
            ))}
          </>
        }
      />

      <SectionBlock>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <EditorialImage src={p.hero} ratio="portrait" alt={p.name} className="editorial-frame" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionTitle eyebrow={labels.bio} title={p.title} />
            <div className="mt-8 space-y-6 lead">
              {p.longBio.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
            {p.mission && (
              <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-2xl text-primary leading-snug">
                “{p.mission}”
              </blockquote>
            )}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="surface">
        <div className="grid gap-px bg-border border border-border md:grid-cols-2">
          <div className="bg-background p-10">
            <span className="eyebrow">{labels.bars}</span>
            <ul className="mt-6 space-y-3">
              {p.bars.map((b) => (
                <li key={b} className="flex gap-3 text-ink">
                  <span className="text-gold">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-10">
            <span className="eyebrow">{labels.education}</span>
            <ul className="mt-6 space-y-3">
              {p.education.map((e) => (
                <li key={e.school} className="flex gap-3 text-ink">
                  <span className="text-gold">—</span>
                  <span>
                    {e.school}
                    {e.detail && (
                      <span className="block text-sm text-muted-foreground mt-1">{e.detail}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle eyebrow={labels.experienceEyebrow} title={labels.experienceTitle} />
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-5">
              {p.experience.map((e) => (
                <li key={e} className="flex gap-4 border-b border-border pb-5 text-ink">
                  <span className="text-gold">—</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock tone="dark">
        <SectionTitle eyebrow={labels.practiceEyebrow} title={labels.practiceTitle} onDark />
        <div className="mt-12 grid gap-px bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3 border border-primary-foreground/15">
          {p.practice.map((s) => (
            <div key={s} className="bg-primary p-8">
              <div className="font-display text-3xl text-gold">{s}</div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {p.recognition && (
        <SectionBlock>
          <SectionTitle eyebrow={labels.recognitionEyebrow} title={labels.recognitionTitle} />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 border border-border">
            {p.recognition.map((r) => (
              <InstitutionalCard key={r} variant="light" className="border-0 p-10 bg-background editorial-card">
                <span className="rule-gold" />
                <h3 className="mt-5 text-primary">{r}</h3>
              </InstitutionalCard>
            ))}
          </div>
        </SectionBlock>
      )}

      {p.gallery && p.gallery.length > 0 && (
        <SectionBlock tone="surface">
          <SectionTitle eyebrow={labels.galleryEyebrow} title={labels.galleryTitle} />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {p.gallery.map((g) => (
              <EditorialImage key={g.src} src={g.src} caption={g.caption} ratio="landscape" className="editorial-frame" />
            ))}
          </div>
        </SectionBlock>
      )}

      <SectionBlock tone="dark">
        <div className="max-w-3xl">
          <span className="rule-gold" />
          <h2 className="mt-8 text-primary-foreground">{labels.ctaTitle}</h2>
          <p className="mt-6 lead text-primary-foreground/80">{labels.ctaIntro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <InstitutionalButton to={withLocale(locale, "/contato")}>{labels.ctaPrimary}</InstitutionalButton>
            <InstitutionalButton to={withLocale(locale, "/equipe")} variant="onDark">
              {labels.ctaSecondary}
            </InstitutionalButton>
          </div>
        </div>
      </SectionBlock>
    </>
  );
}
