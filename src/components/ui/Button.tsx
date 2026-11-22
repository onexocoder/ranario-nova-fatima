import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "light" | "dark" | "outline";
};

export function Button({ children, tone = "dark", className = "", ...props }: Props) {
  return <a className={`button button--${tone} ${className}`} {...props}><span>{children}</span><i aria-hidden="true" /></a>;
}
