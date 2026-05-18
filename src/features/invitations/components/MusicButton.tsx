"use client";

import { Music2, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type MusicButtonProps = {
  active: boolean;
  onClick: () => void;
};

export function MusicButton({ active, onClick }: MusicButtonProps) {
  const Icon = active ? Volume2 : VolumeX;

  return (
    <button
      aria-label={active ? "Tat nhac nen" : "Bat nhac nen"}
      aria-pressed={active}
      className={cn(
        "fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border-4 border-white text-white shadow-xl transition duration-300",
        active ? "bg-[var(--invite-primary)]" : "bg-black/45 grayscale backdrop-blur",
        active && "invite-music-active"
      )}
      onClick={onClick}
      type="button"
    >
      <Music2 className={cn("absolute opacity-25", !active && "opacity-0")} size={26} />
      <Icon size={18} />
    </button>
  );
}
