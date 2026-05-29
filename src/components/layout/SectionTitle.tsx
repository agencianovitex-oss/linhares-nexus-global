import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-4", align === "center" && "justify-center")}>
          <span className="rule-gold" />
          <span className={cn("eyebrow", onDark && "eyebrow-on-dark")}>{eyebrow}</span>
        </div>
      )}
      <h2 className={cn("mt-7 text-balance", onDark ? "text-primary-foreground" : "text-primary")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-7 text-lg leading-relaxed", onDark ? "text-primary-foreground/75" : "text-ink-soft")}>
          {description}
        </p>
      )}
    </div>
  );
}
