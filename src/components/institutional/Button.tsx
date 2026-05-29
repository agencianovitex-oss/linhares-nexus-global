import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "onDark";

const base =
  "inline-flex items-center justify-center px-7 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  outline: "border border-primary text-primary hover:border-gold hover:text-gold",
  ghost: "text-primary hover:text-gold",
  onDark: "border border-primary-foreground text-primary-foreground hover:border-gold hover:text-gold",
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

export function InstitutionalButton(props: AsLinkProps | AsButtonProps) {
  const { variant = "primary", className, children } = props;
  const cls = cn(base, variants[variant], className);

  if ("to" in props && props.to) {
    const { to, variant: _v, className: _c, children: _ch, ...rest } = props;
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const { variant: _v, className: _c, children: _ch, ...rest } = props as AsButtonProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
