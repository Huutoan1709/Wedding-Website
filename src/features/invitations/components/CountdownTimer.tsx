"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type CountdownLabels = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type CountdownTimerProps = {
  startsAt: string;
  labels?: CountdownLabels;
  padValues?: boolean;
  className?: string;
  itemClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
};

const defaultLabels: CountdownLabels = {
  days: "Ngay",
  hours: "Gio",
  minutes: "Phut",
  seconds: "Giay"
};

export function useCountdown(startsAt: string) {
  const target = useMemo(() => new Date(startsAt).getTime(), [startsAt]);
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(Math.max(0, target - Date.now())), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return { days, hours, minutes, seconds };
}

export function CountdownTimer({
  startsAt,
  labels = defaultLabels,
  padValues = true,
  className,
  itemClassName,
  valueClassName,
  labelClassName
}: CountdownTimerProps) {
  const countdown = useCountdown(startsAt);
  const items = [
    [labels.days, countdown.days],
    [labels.hours, countdown.hours],
    [labels.minutes, countdown.minutes],
    [labels.seconds, countdown.seconds]
  ] as const;

  return (
    <div className={cn("grid grid-cols-4 gap-2 text-center sm:gap-3", className)}>
      {items.map(([label, value]) => (
        <div className={cn("min-w-0", itemClassName)} key={label}>
          <div className="flex min-w-0 justify-center gap-1 sm:gap-1.5">
            {(padValues ? String(value).padStart(2, "0") : String(value)).split("").map((digit, index) => (
              <span
                className={cn(
                  "grid aspect-square min-w-0 flex-1 max-w-10 place-items-center rounded-[6px] border border-[color-mix(in_srgb,var(--invite-primary),white_58%)] bg-[color-mix(in_srgb,var(--invite-surface),white_8%)] text-xl font-bold leading-none text-[var(--invite-primary)] shadow-[0_8px_22px_rgba(0,0,0,0.08)] sm:text-2xl md:max-w-12 md:text-3xl",
                  valueClassName
                )}
                key={`${label}-${index}`}
              >
                {digit}
              </span>
            ))}
          </div>
          <p className={cn("mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--invite-muted)] sm:text-xs", labelClassName)}>{label}</p>
        </div>
      ))}
    </div>
  );
}
