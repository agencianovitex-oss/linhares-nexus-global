import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "onDark";

const base =
  "group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-semibold tracking-[0.26em] uppercase transition-[background-color,color,border-color,transform] duration-300 ease-out will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover hover:-translate-y-[1px]",
  outline:
    "border border-primary/80 text-primary hover:border-gold hover:text-gold hover:-translate-y-[1px]",
  ghost: "text-primary hover:text-gold",
  onDark:
    "border border-primary-foreground/80 text-primary-foreground hover:border-gold hover:text-gold hover:-translate-y-[1px]",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

interface AsLinkProps
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  to: string;
}

interface AsButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  to?: undefined;
}

function Inner({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block translate-x-0 transition-transform duration-300 ease-out group-hover/btn:translate-x-[5px]"
      >
        →
      </span>
    </>
  );
}

export function InstitutionalButton(props: AsLinkProps | AsButtonProps) {
  const { variant = "primary", className, children } = props;
  const cls = cn(base, variants[variant], className);

  if ("to" in props && props.to) {
    const { to, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <Link to={to} className={cls} {...rest}>
        <Inner>{children}</Inner>
      </Link>
    );
  }
  const { variant: _v, className: _c, children: _ch, ...rest } = props as AsButtonProps;
  return (
    <button className={cls} {...rest}>
      <Inner>{children}</Inner>
    </button>
  );
}
