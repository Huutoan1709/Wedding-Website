"use client";

import Image from "next/image";
import type { WeddingInvitationTemplate } from "@/features/invitations/data/invitationTemplates";
import { FallingDecorations, RingEmblem } from "@/features/invitations/components/InvitationEffects";
import { cn } from "@/lib/utils";

type InvitationCoverProps = {
  invitation: WeddingInvitationTemplate;
  open: boolean;
  onOpen: () => void;
};

const longPhungCoverPatternStyle = {
  backgroundImage: 'url("/images/invitation/double-dragon.webp")',
  backgroundPosition: "top center",
  backgroundSize: "360px"
};

function formatCoverDate(startsAt: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric"
  }).format(new Date(startsAt));
}

export function GreenInviteCover({ invitation, open, onOpen }: InvitationCoverProps) {
  const coverDate = formatCoverDate(invitation.event.startsAt);

  return (
    <section className={cn("invite-cover-stage fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#f2eddb] px-4 py-6 text-[#e8d19a]", open && "invite-cover-stage-open")}>
      <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply" style={longPhungCoverPatternStyle} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,42,20,0.08),transparent_34%)]" />
      <FallingDecorations tone="green" />
      <div className="invite-floating-hy absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[13rem] font-black leading-none text-[#102a14]/[0.035]">
        {"\u56cd"}
      </div>
      <div
        className={cn(
          "invite-envelope green-invite-card relative grid h-[640px] max-h-[calc(100dvh-48px)] w-[360px] max-w-[calc(100vw-32px)] place-items-center overflow-hidden rounded-lg border border-[#6b7651] bg-[#102a14] px-5 py-8 text-center shadow-[0_34px_120px_rgba(13,42,20,0.28)] transition duration-1000",
          open && "invite-envelope-open"
        )}
      >
        <Image
          alt="Họa tiết rồng"
          className="absolute left-[-70px] top-[10px] h-[450px] w-[250px] object-contain opacity-[0.25]"
          height={600}
          src="/images/invitation/rong.webp"
          width={350}
        />
        <Image
          alt="Họa tiết phượng"
          className="absolute bottom-[-25px] right-[-100px] h-[450px] w-[250px] object-contain opacity-[0.25]"
          height={600}
          src="/images/invitation/phuong.webp"
          width={350}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(215,184,115,0.12),transparent_26%)]" />
        <div className="invite-envelope-top absolute inset-x-0 top-0 z-20 h-1/2 origin-top bg-[#102a14]" />
        <div className="invite-envelope-bottom absolute inset-x-0 bottom-0 z-20 h-1/2 origin-bottom bg-[#102a14]" />
        <div className="invite-envelope-letter relative z-10 flex h-full w-full flex-col items-center justify-center">
          <RingEmblem className="mb-4 w-28" />
          <h1 className="green-couple-names mt-4 text-[48px] leading-[1.12] text-[#efd39b]">
            {invitation.groom.name}
            <span className="invite-ampersand block py-1 text-[24px] text-[#d7b873]">&</span>
            {invitation.bride.name}
          </h1>
          <div className="mx-auto my-6 flex w-32 items-center justify-center gap-4 text-[#d7b873]">
            <span className="h-px flex-1 bg-current" />
            <span className="text-sm">{"\u2766"}</span>
            <span className="h-px flex-1 bg-current" />
          </div>
          <p className="green-cover-date text-[24px] font-semibold leading-none text-[#d7b873]">{coverDate}</p>
          <p className="mt-7 text-[22px] font-semibold leading-none text-[#e8d19a]">Thân mời</p>
          <button
            className="green-open-button relative isolate mt-8 inline-flex h-14 min-w-36 items-center justify-center overflow-hidden rounded-full bg-[#efd39b] px-8 text-[18px] font-semibold text-[#171006] shadow-[0_14px_34px_rgba(239,211,155,0.28)] transition hover:scale-[1.02]"
            onClick={onOpen}
            type="button"
          >
            Open
          </button>
        </div>
      </div>
    </section>
  );
}

export function EnvelopeStage(props: InvitationCoverProps) {
  if (props.invitation.theme.slug === "long-phung-reu") {
    return <GreenInviteCover {...props} />;
  }

  return (
    <section className={cn("invite-cover-stage fixed inset-0 z-50 grid place-items-center overflow-hidden px-4 py-10 text-[var(--invite-text)]", props.open && "invite-cover-stage-open")}>
      <div className="invite-particles absolute inset-0" />
      <FallingDecorations tone="soft" />
      <div
        className={cn(
          "invite-envelope relative grid min-h-[620px] w-full max-w-[420px] place-items-center overflow-hidden rounded-[30px] px-6 py-10 text-center shadow-[0_32px_100px_rgba(0,0,0,0.32)] transition duration-1000 md:max-w-[760px]",
          props.open && "invite-envelope-open"
        )}
      >
        <div className="invite-envelope-top absolute inset-x-0 top-0 z-20 h-1/2 origin-top bg-[linear-gradient(180deg,var(--invite-accent),var(--invite-surface))]" />
        <div className="invite-envelope-bottom absolute inset-x-0 bottom-0 z-20 h-1/2 origin-bottom bg-[linear-gradient(0deg,var(--invite-accent),var(--invite-surface))]" />
        <div className="invite-envelope-letter relative z-10">
          <RingEmblem className="mb-8 w-36" />
          <p className="invite-kicker text-xs font-bold uppercase tracking-[0.36em] text-[var(--invite-muted)]">Wedding invitation</p>
          <h1 className="invite-couple-names mt-6 text-5xl leading-tight md:text-7xl">
            {props.invitation.groom.name}
            <span className="invite-ampersand block text-2xl">&</span>
            {props.invitation.bride.name}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[var(--invite-muted)]">{props.invitation.invitationText}</p>
          <p className="mt-7 rounded-full bg-black/5 px-5 py-3 text-lg font-bold">{props.invitation.guestName}</p>
          <button
            className="mt-8 inline-flex h-14 items-center rounded-full bg-[var(--invite-primary)] px-8 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02]"
            onClick={props.onOpen}
            type="button"
          >
            Mở thiệp mời
          </button>
        </div>
      </div>
    </section>
  );
}
