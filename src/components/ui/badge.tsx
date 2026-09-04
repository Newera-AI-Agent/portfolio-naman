import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
        variant === "default" ? "border-[var(--acid)] bg-[var(--acid)] text-[var(--ink)]" : "border-[var(--line-strong)] text-[var(--muted)]",
        className,
      )}
      {...props}
    />
  );
}
