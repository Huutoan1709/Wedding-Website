import { DoorOpen, Gem, Music, PartyPopper, Utensils, Wine } from "lucide-react";
import type { WeddingInvitationTemplate } from "@/features/invitations/core/types";
import { cn } from "@/lib/utils";

const defaultSchedule = [
  { time: "18:00", title: "Đón khách", icon: "welcome" },
  { time: "18:30", title: "Lễ thành hôn", icon: "ceremony" },
  { time: "19:00", title: "Khai tiệc", icon: "meal" },
  { time: "20:30", title: "After party", icon: "music" }
] as const;

const defaultDressCode = [
  { label: "Be", color: "#a09270" },
  { label: "Đen", color: "#000000" },
  { label: "Đỏ", color: "#c60000" }
] as const;

const scheduleIcons = {
  welcome: DoorOpen,
  ceremony: Gem,
  toast: Wine,
  party: PartyPopper,
  meal: Utensils,
  music: Music
};

const creamPatternStyle = {
  backgroundImage: 'url("/images/invitation/double-dragon.webp")',
  backgroundPositionY: "20%",
  backgroundSize: "360px"
};

type LongPhungReuScheduleSectionProps = {
  invitation: WeddingInvitationTemplate;
};

export function LongPhungReuScheduleSection({ invitation }: LongPhungReuScheduleSectionProps) {
  const schedule = invitation.schedule?.length ? invitation.schedule : defaultSchedule;
  const dressCode = invitation.dressCode?.length ? invitation.dressCode : defaultDressCode;

  return (
    <section className="relative overflow-hidden bg-[var(--lp-cream)] pb-8 text-[var(--lp-surface)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-multiply" style={creamPatternStyle} />

      <div className="relative z-10 bg-[var(--lp-surface)] px-4 py-4 text-center text-[var(--lp-text)]">
        <h2 className="invite-heading text-[20px] font-semibold uppercase leading-tight tracking-[0.03em]">Timeline sự kiện</h2>
      </div>

      <div className="relative z-10 mx-auto max-w-[390px] px-5 pt-8">
        <div className="relative mx-auto grid gap-y-2 py-1">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--lp-surface)]/35" aria-hidden="true" />
          {schedule.map((item, index) => {
            const Icon = scheduleIcons[item.icon || "party"];
            const contentSide = index % 2 === 0 ? "right" : "left";

            return (
              <div className="grid min-h-[92px] grid-cols-[1fr_34px_1fr] items-center gap-x-4" key={`${item.time}-${item.title}`}>
                <div className={cn("flex items-center", contentSide === "left" ? "justify-end text-right" : "justify-center")}>
                  {contentSide === "left" ? (
                    <div>
                      <p className="text-[22px] font-semibold leading-none">{item.time}</p>
                      <p className="mt-2 text-[18px] font-semibold uppercase leading-tight">{item.title}</p>
                    </div>
                  ) : (
                    <Icon className="h-11 w-11 text-[var(--lp-surface)] opacity-90" strokeWidth={1.35} />
                  )}
                </div>

                <div className="relative z-10 mx-auto size-4 rounded-full bg-[var(--lp-surface)] shadow-[0_8px_18px_rgba(16,42,20,0.18)]" aria-hidden="true" />

                <div className={cn("flex items-center", contentSide === "right" ? "justify-start text-left" : "justify-center")}>
                  {contentSide === "right" ? (
                    <div>
                      <p className="text-[22px] font-semibold leading-none">{item.time}</p>
                      <p className="mt-2 text-[18px] font-semibold uppercase leading-tight">{item.title}</p>
                    </div>
                  ) : (
                    <Icon className="h-11 w-11 text-[var(--lp-surface)] opacity-90" strokeWidth={1.35} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <h3 className="invite-heading text-[20px] font-semibold uppercase tracking-[0.03em]">Trang phục</h3>
          <div className="mt-7 flex items-start justify-center gap-8">
            {dressCode.map((item) => (
              <div className="flex w-16 flex-col items-center" key={`${item.label}-${item.color}`}>
                <span className="size-[58px] rounded-full border border-[var(--lp-surface)]/18 shadow-[0_8px_18px_rgba(16,42,20,0.12)]" style={{ backgroundColor: item.color }} />
                <span className="mt-4 text-[18px] font-semibold uppercase leading-none">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
