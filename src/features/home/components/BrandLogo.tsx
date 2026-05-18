import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

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
  return (
    <span className={cn("inline-flex items-center", className)}>
      <span
        className={cn(
          "relative block h-12 w-[106px] overflow-hidden rounded-md sm:h-14 sm:w-[122px]",
          variant === "light" ? "shadow-[0_10px_28px_rgba(0,0,0,0.16)]" : "shadow-[0_10px_26px_rgba(44,53,95,0.12)]",
          iconClassName
        )}
      >
        <Image
          alt={siteConfig.displayName}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 640px) 106px, 122px"
          src="/images/brand/thiepdoita-logo.png"
        />
      </span>
      {showTagline ? (
        <span className={cn("sr-only", textClassName)}>
          {siteConfig.displayName} - {siteConfig.tagline}
        </span>
      ) : null}
    </span>
  );
}
