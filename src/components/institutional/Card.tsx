import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "light" | "dark" | "outline";
}

export function InstitutionalCard({
  children,
  className,
  variant = "outline",
  ...rest
}: Props) {
  const v =
    variant === "dark"
      ? "bg-primary text-primary-foreground border border-primary"
      : variant === "light"
        ? "bg-surface text-ink border border-border"
        : "bg-background text-ink border border-border";
  return (
    <div
      className={cn("p-10 transition-colors duration-200 hover:border-border-strong", v, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
