import { Flower2 } from "lucide-react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showTagline?: boolean;
  variant?: "light" | "dark";
};

export function BrandLogo({
  className,
  iconClassName,
  textClassName,
  showTagline = true,
  variant = "light"
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative grid size-10 place-items-center rounded-md",
          isLight
            ? "bg-[linear-gradient(135deg,#ff0a6c,#d90032)] text-white shadow-[0_10px_24px_rgba(248,0,100,0.28)]"
            : "bg-[linear-gradient(135deg,#ff0a6c,#d90032)] text-white shadow-[0_10px_24px_rgba(248,0,100,0.28)]",
          iconClassName
        )}
        aria-hidden="true"
      >
        <Flower2 size={20} />
        <span className="absolute left-2 top-2 size-2 rounded-full bg-white/80" />
        <span className="absolute right-2 top-3 size-2 rounded-full bg-[#ffe4ad]" />
        <span className="absolute bottom-2 h-3 w-px rotate-[-28deg] bg-current opacity-70" />
        <span className="absolute bottom-2 h-3 w-px rotate-[28deg] bg-current opacity-70" />
      </span>
      <span className={cn("leading-tight", textClassName)}>
        <span className="block text-lg font-black tracking-[-0.02em]">songhy</span>
        {showTagline ? (
          <span className={cn("block text-xs font-medium", isLight ? "text-black/52" : "text-[var(--muted)]")}>
            Thiệp cưới online Song Hỷ
          </span>
        ) : null}
      </span>
    </span>
  );
}
