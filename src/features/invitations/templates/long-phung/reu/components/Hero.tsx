import Image from "next/image";
import type { InvitationPerson, WeddingInvitationTemplate } from "@/features/invitations/core/types";
import { getOptimizedWeddingImage } from "@/features/invitations/core/optimizedImages";

type LongPhungReuHeroProps = {
  invitation: WeddingInvitationTemplate;
};

type PortraitBlockProps = {
  person: InvitationPerson;
  role: string;
};

const dragonPatternStyle = {
  backgroundImage: 'url("/images/invitation/double-dragon.webp")',
  backgroundPositionX: "-15%",
  backgroundSize: "360px"
};

const dragonStripeStyle = {
  backgroundImage: 'url("/images/invitation/double-dragon.webp")',
  backgroundPositionY: "15%",
  backgroundSize: "360px"
};

function PortraitBlock({ person, role }: PortraitBlockProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center">
      <div className="relative size-[120px] overflow-hidden rounded-full bg-[#d9d3b9] shadow-[0_12px_28px_rgba(16,42,20,0.16)]">
        <Image
          alt={person.name}
          className="object-cover"
          fill
          quality={90}
          sizes="120px"
          src={getOptimizedWeddingImage(person.portrait, "medium")}
          unoptimized
        />
      </div>
      <div className="mt-2 text-center text-[12px] font-light leading-none text-[#5f6458]">
        <span>{role}</span>
      </div>
      <div className="mt-1 max-w-full truncate whitespace-nowrap text-center font-[family-name:var(--lp-font)] text-[24px] font-light leading-none text-[var(--lp-surface)]">
        {person.name}
      </div>
    </div>
  );
}

export function LongPhungReuHero({ invitation }: LongPhungReuHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--lp-cream)] text-[var(--lp-surface)]">
      <div className="relative h-12 overflow-hidden bg-[var(--lp-surface)]">
        <div className="absolute inset-0 opacity-45" style={dragonPatternStyle} />
      </div>

      <div className="relative overflow-hidden px-2 py-6">
        <div className="absolute inset-0 opacity-[0.16] mix-blend-multiply" style={dragonPatternStyle} />

        <div className="absolute left-0 right-0 top-[66px] z-10 h-10 bg-[var(--lp-surface)]">
          <div className="absolute inset-0 opacity-35" style={dragonStripeStyle} />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[86px] z-30 grid size-[52px] -translate-x-1/2 -translate-y-1/2 place-items-center bg-[var(--lp-cream)] text-[40px] font-black leading-none text-[var(--lp-surface)] shadow-[0_0_0_4px_var(--lp-cream)]">
          囍
        </div>

        <div className="pointer-events-none relative z-20 flex items-start justify-between gap-2">
          <div className="pointer-events-auto flex flex-1 justify-center">
            <PortraitBlock person={invitation.groom} role="Groom" />
          </div>
          <div className="pointer-events-auto flex flex-1 justify-center">
            <PortraitBlock person={invitation.bride} role="Bride" />
          </div>
        </div>
      </div>
    </section>
  );
}
