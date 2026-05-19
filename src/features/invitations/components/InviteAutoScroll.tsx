"use client";

import { forwardRef, type ReactNode } from "react";
import { ChevronsDown, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInviteAutoScroll } from "@/features/invitations/hooks/useInviteAutoScroll";

type InviteAutoScrollProps = {
  children: ReactNode;
  className?: string;
  enabled: boolean;
  blocked?: boolean;
  restartKey?: string | number | boolean;
  showControl?: boolean;
  speed?: number;
  startDelay?: number;
};

export const InviteAutoScroll = forwardRef<HTMLElement, InviteAutoScrollProps>(function InviteAutoScroll(
  { blocked = false, children, className, enabled, restartKey, showControl = true, speed, startDelay },
  ref
) {
  const { paused, running, toggleAutoScroll } = useInviteAutoScroll({
    blocked,
    enabled,
    restartKey,
    speed,
    startDelay
  });

  const ButtonIcon = running ? Pause : ChevronsDown;

  return (
    <>
      <main
        ref={ref}
        className={cn("transition-opacity duration-700", className)}
        data-auto-scroll-enabled={enabled ? "true" : "false"}
        data-auto-scroll-paused={paused ? "true" : "false"}
      >
        {children}
      </main>
      {showControl && enabled && (
        <button
          aria-label={running ? "Tắt cuộn tự động" : "Bật cuộn tự động"}
          aria-pressed={running}
          className={cn(
            "fixed bottom-20 right-5 z-40 grid size-12 place-items-center rounded-full border-4 border-white text-white shadow-xl transition duration-300",
            running ? "bg-[var(--invite-primary)]" : "bg-black/45 grayscale backdrop-blur"
          )}
          onClick={toggleAutoScroll}
          type="button"
        >
          <ButtonIcon size={19} />
        </button>
      )}
    </>
  );
});
