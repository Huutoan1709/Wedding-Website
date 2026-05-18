"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const fallingDecorations = Array.from({ length: 22 }, (_, index) => ({
  delay: `${(index % 9) * 0.72}s`,
  duration: `${10 + (index % 7) * 1.35}s`,
  left: `${(index * 13) % 100}%`,
  size: `${10 + (index % 5) * 4}px`,
  swing: `${index % 2 === 0 ? 34 : -34}px`
}));

export function FallingDecorations({ tone = "green" }: { tone?: "green" | "soft" }) {
  return (
    <div className={cn("invite-falling-decor pointer-events-none absolute inset-0 overflow-hidden", tone === "green" ? "invite-falling-decor-green" : "invite-falling-decor-soft")} aria-hidden="true">
      {fallingDecorations.map((item, index) => (
        <span
          className={cn(index % 3 === 0 ? "invite-falling-flower" : "invite-falling-leaf")}
          key={`${item.left}-${index}`}
          style={
            {
              "--fall-delay": item.delay,
              "--fall-duration": item.duration,
              "--fall-left": item.left,
              "--fall-size": item.size,
              "--fall-swing": item.swing
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function RingEmblem({ className }: { className?: string }) {
  return (
    <div className={cn("invite-ring-emblem relative mx-auto", className)}>
      <Image
        alt="Cap nhan cuoi"
        className="h-auto w-full object-contain"
        height={118}
        priority
        src="/images/invitation/rings.png"
        width={180}
      />
    </div>
  );
}

const snowflakes = Array.from({ length: 34 }, (_, index) => ({
  delay: `${(index % 11) * 0.55}s`,
  duration: `${8 + (index % 6) * 1.4}s`,
  left: `${(index * 17) % 100}%`,
  size: `${4 + (index % 5) * 2}px`
}));

export function Snowfall() {
  return (
    <div className="invite-snowfall pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {snowflakes.map((flake, index) => (
        <span
          key={`${flake.left}-${index}`}
          style={
            {
              "--snow-delay": flake.delay,
              "--snow-duration": flake.duration,
              "--snow-left": flake.left,
              "--snow-size": flake.size
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
