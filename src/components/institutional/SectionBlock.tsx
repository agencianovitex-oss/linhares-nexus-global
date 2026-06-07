import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLElement> {
  tone?: "light" | "dark" | "surface";
  size?: "default" | "lg";
  width?: "wide" | "narrow";
  children: ReactNode;
}

export function SectionBlock({
  tone = "light",
  size = "default",
  width = "wide",
  className,
  children,
  ...rest
}: Props) {
  const bg =
    tone === "dark"
      ? "surface-premium-dark texture-grain text-primary-foreground"
      : tone === "surface"
        ? "surface-premium-surface text-ink"
        : "surface-premium-light text-ink";
  return (
    <section
      className={cn(
        "relative overflow-hidden isolate",
        size === "lg" ? "section-y-lg" : "section-y",
        bg,
        className,
      )}
      {...rest}
    >
      {tone === "dark" && <span className="fade-edge-top" aria-hidden />}
      {tone !== "dark" && (
        <span className="section-seam absolute top-0 left-0 right-0" aria-hidden />
      )}
      <div className="relative z-10">
        <Container width={width}>{children}</Container>
      </div>
    </section>
  );
}
