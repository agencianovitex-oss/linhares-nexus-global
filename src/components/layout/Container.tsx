import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: "wide" | "narrow";
}

export function Container({ className, width = "wide", ...props }: Props) {
  return (
    <div
      className={cn(
        width === "narrow" ? "container-narrow" : "container-institutional",
        className,
      )}
      {...props}
    />
  );
}
