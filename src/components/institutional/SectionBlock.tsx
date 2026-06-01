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
      ? "bg-primary text-primary-foreground"
      : tone === "surface"
        ? "bg-surface text-ink"
        : "bg-background text-ink";
  return (
    <section
      className={cn(size === "lg" ? "section-y-lg" : "section-y", bg, className)}
      {...rest}
    >
      <Container width={width}>{children}</Container>
    </section>
  );
}
