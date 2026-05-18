"use client";

import { forwardRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { shouldIgnoreAutoScrollToggle, useInviteAutoScroll } from "@/features/invitations/hooks/useInviteAutoScroll";

type InviteAutoScrollProps = {
  children: ReactNode;
  className?: string;
  enabled: boolean;
  blocked?: boolean;
  restartKey?: string | number | boolean;
  speed?: number;
  startDelay?: number;
};

export const InviteAutoScroll = forwardRef<HTMLElement, InviteAutoScrollProps>(function InviteAutoScroll(
  { blocked = false, children, className, enabled, restartKey, speed, startDelay },
  ref
) {
  const { paused, toggleAutoScroll } = useInviteAutoScroll({
    blocked,
    enabled,
    restartKey,
    speed,
    startDelay
  });

  const toggleOnSurfaceClick = (event: MouseEvent<HTMLElement>) => {
    if (!shouldIgnoreAutoScrollToggle(event.target)) {
      toggleAutoScroll();
    }
  };

  return (
    <main
      ref={ref}
      className={cn("transition-opacity duration-700", className)}
      data-auto-scroll-enabled={enabled ? "true" : "false"}
      data-auto-scroll-paused={paused ? "true" : "false"}
      onClick={toggleOnSurfaceClick}
    >
      {children}
    </main>
  );
});
