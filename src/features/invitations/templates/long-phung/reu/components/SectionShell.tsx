import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GreenLeafPattern } from "@/features/invitations/templates/long-phung/reu/components/Decor";

type GreenSectionShellProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function GreenSectionShell({ children, className, innerClassName }: GreenSectionShellProps) {
  return (
    <section className={cn("relative flex min-h-0 items-center overflow-hidden bg-[var(--lp-surface)] px-5 text-center text-[var(--lp-text)]", className)}>
      <GreenLeafPattern />
      <div className={cn("relative z-10 mx-auto w-full max-w-[560px]", innerClassName)}>{children}</div>
    </section>
  );
}
