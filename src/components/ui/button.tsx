import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acid)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink)] disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-[var(--acid)] text-[var(--ink)] hover:bg-[var(--paper)]",
        variant === "outline" && "border border-[var(--line-strong)] text-[var(--paper)] hover:border-[var(--acid)] hover:text-[var(--acid)]",
        variant === "ghost" && "text-[var(--muted)] hover:text-[var(--paper)]",
        className,
      )}
      {...props}
    />
  );
}
