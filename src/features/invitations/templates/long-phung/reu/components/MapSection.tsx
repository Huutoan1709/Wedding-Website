import type { InvitationEvent } from "@/features/invitations/core/types";
import { buildMapEmbedSrc } from "@/features/invitations/core/map";

type LongPhungReuMapSectionProps = {
  event: InvitationEvent;
};

const creamPatternStyle = {
  backgroundImage: 'url("/images/invitation/double-dragon.webp")',
  backgroundPositionY: "20%",
  backgroundSize: "360px"
};

export function LongPhungReuMapSection({ event }: LongPhungReuMapSectionProps) {
  const mapSrc = buildMapEmbedSrc(event.mapQuery);

  return (
    <section className="relative overflow-hidden bg-[var(--lp-cream)] pb-8 text-center text-[var(--lp-surface)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-multiply" style={creamPatternStyle} />

      <div className="relative z-10 bg-[var(--lp-surface)] px-4 py-4 text-[var(--lp-text)]">
        <h2 className="invite-heading text-[20px] font-semibold uppercase leading-tight tracking-[0.03em]">Địa điểm tổ chức</h2>
      </div>

      <div className="relative z-10 mx-auto max-w-[390px] px-5 pt-8">
        <p className="text-[16px] font-semibold uppercase leading-6">{event.venue}</p>
        <p className="mx-auto mt-3 max-w-[330px] text-[13px] leading-6 text-[#4e5848]">{event.address}</p>
        <div className="mx-auto mt-5 h-px max-w-[300px] bg-[var(--lp-surface)]/25" />
        <div className="mt-6 overflow-hidden rounded-[8px] border border-[var(--lp-surface)]/25 bg-[var(--lp-surface)] p-1 shadow-[0_12px_28px_rgba(16,42,20,0.18)]">
          <iframe className="h-80 w-full rounded-[6px] border-0" loading="lazy" src={mapSrc} title="Bản đồ địa điểm tiệc cưới" />
        </div>
      </div>
    </section>
  );
}
