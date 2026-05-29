import { Container } from "./Container";
import { InstitutionalHero } from "@/components/institutional/Hero";
import { useI18n } from "@/i18n/useI18n";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
}

export function Placeholder({ eyebrow, title, intro }: Props) {
  const { t } = useI18n();
  return (
    <>
      <InstitutionalHero
        eyebrow={eyebrow ?? t.brand}
        title={title}
        intro={intro}
        meta={
          <>
            <span>Orlando</span>
            <span>Miami</span>
            <span>New York</span>
            <span>Salt Lake City</span>
          </>
        }
      />

      <section className="section-y bg-background">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="rule-gold" />
              <p className="mt-5 eyebrow">{t.comingSoon}</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-xl leading-[1.7] text-ink-soft">{t.comingSoonBody}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
