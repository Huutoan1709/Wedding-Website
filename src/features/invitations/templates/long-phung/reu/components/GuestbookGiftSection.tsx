import type { WeddingInvitationTemplate } from "@/features/invitations/core/types";
import { Guestbook } from "@/features/invitations/components/Guestbook";
import { WeddingGiftBox } from "@/features/invitations/components/WeddingGiftBox";

type LongPhungReuGuestbookGiftSectionProps = {
  bank: WeddingInvitationTemplate["bank"];
  showGift: boolean;
  showGuestbook: boolean;
};

const creamPatternStyle = {
  backgroundImage: 'url("/images/invitation/double-dragon.webp")',
  backgroundPositionY: "20%",
  backgroundSize: "360px"
};

export function LongPhungReuGuestbookGiftSection({ bank, showGift, showGuestbook }: LongPhungReuGuestbookGiftSectionProps) {
  if (!showGift && !showGuestbook) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[var(--lp-cream)] px-5 py-8 text-[var(--lp-surface)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-multiply" style={creamPatternStyle} />
      <div className="relative z-10 mx-auto max-w-[390px]">
        {showGuestbook && <Guestbook variant="green" showSampleEntries />}
        {showGift && <WeddingGiftBox bank={bank} variant="green" />}
      </div>
    </section>
  );
}
