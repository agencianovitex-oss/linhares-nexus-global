import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  children?: ReactNode;
}

export function InstitutionalHero({
  eyebrow,
  title,
  intro,
  meta,
  tone = "dark",
  align = "left",
  children,
}: Props) {
  const isDark = tone === "dark";
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 overflow-hidden",
        isDark
          ? "surface-premium-dark texture-grain"
          : "surface-premium-light",
        !isDark && "border-b border-border",
      )}
    >
      {isDark && <span className="hero-texture-veil" aria-hidden />}
      {isDark && <span className="fade-edge-bottom" aria-hidden />}

      <Container>
        <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <div className={cn("flex items-center gap-4", align === "center" && "justify-center")}>
              <span className="rule-gold" />
              <span className={cn("eyebrow", isDark && "eyebrow-on-dark")}>{eyebrow}</span>
            </div>
          )}
          <h1 className={cn("mt-8 text-balance", isDark ? "text-primary-foreground" : "text-primary")}>
            {title}
          </h1>
          {intro && (
            <p
              className={cn(
                "mt-8 max-w-2xl text-lg leading-[1.75]",
                isDark ? "text-primary-foreground/75" : "text-ink-soft",
                align === "center" && "mx-auto",
              )}
            >
              {intro}
            </p>
          )}
          {meta && (
            <div
              className={cn(
                "mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.28em]",
                isDark ? "text-primary-foreground/55" : "text-muted-foreground",
                align === "center" && "justify-center",
              )}
            >
              {meta}
            </div>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
