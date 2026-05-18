"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { WeddingInvitationTemplate } from "@/features/invitations/core/types";
import { InviteAutoScroll } from "@/features/invitations/components/InviteAutoScroll";
import { GreenInviteCover } from "@/features/invitations/components/InvitationCover";
import { MusicButton } from "@/features/invitations/components/MusicButton";
import { RsvpModal } from "@/features/invitations/components/RsvpModal";
import { useResetScrollOnLoad } from "@/features/invitations/hooks/useResetScrollOnLoad";
import { cn } from "@/lib/utils";
import { LongPhungReuAlbum3D } from "@/features/invitations/templates/long-phung/reu/components/Album3D";
import { LongPhungReuGuestbookGiftSection } from "@/features/invitations/templates/long-phung/reu/components/GuestbookGiftSection";
import { LongPhungReuHero } from "@/features/invitations/templates/long-phung/reu/components/Hero";
import { LongPhungReuCeremonyInfo, LongPhungReuReceptionInfo } from "@/features/invitations/templates/long-phung/reu/components/InfoSections";
import { LongPhungReuMapSection } from "@/features/invitations/templates/long-phung/reu/components/MapSection";
import { LongPhungReuScheduleSection } from "@/features/invitations/templates/long-phung/reu/components/ScheduleSection";

type LongPhungReuExperienceProps = {
  invitation: WeddingInvitationTemplate;
  autoOpen?: boolean;
  autoScroll?: boolean;
};

const outerPatternStyle = {
  backgroundImage: 'url("/images/invitation/double-dragon.webp")',
  backgroundPosition: "top center",
  backgroundSize: "360px"
};

export function LongPhungReuExperience({ invitation, autoOpen = false, autoScroll = true }: LongPhungReuExperienceProps) {
  useResetScrollOnLoad();

  const [open, setOpen] = useState(autoOpen);
  const [coverVisible, setCoverVisible] = useState(!autoOpen);
  const [music, setMusic] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const receptionEvent = invitation.receptionEvent || invitation.event;
  const sections = {
    hero: true,
    ceremony: true,
    reception: true,
    map: true,
    album: true,
    schedule: true,
    guestbook: true,
    gift: true,
    ...invitation.sections
  };
  const style = {
    "--lp-bg": "#f2eddb",
    "--lp-surface": "#102a14",
    "--lp-panel": "#14341a",
    "--lp-cream": "#f2eddb",
    "--lp-text": "#e9ce9e",
    "--lp-muted": "rgba(233, 206, 158, 0.72)",
    "--lp-line": "rgba(233, 206, 158, 0.28)",
    "--lp-shadow": "rgba(233, 206, 158, 0.35) 0px 4px 14px 0px",
    "--lp-font": "Lora, Times New Roman, serif",
    "--invite-background": invitation.theme.background,
    "--invite-surface": invitation.theme.surface,
    "--invite-primary": invitation.theme.primary,
    "--invite-secondary": invitation.theme.secondary,
    "--invite-accent": invitation.theme.accent,
    "--invite-text": invitation.theme.text,
    "--invite-muted": invitation.theme.muted,
    "--wedding-info-button-text": "#0a0f09",
    "--wedding-info-calendar-selected-text": "#0a0f09",
    "--wedding-info-script-font": "var(--invite-script-font)"
  } as CSSProperties;

  const openInvitation = () => {
    setOpen(true);
    setMusic(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.42;
      audio.loop = true;
      audio.play().catch(() => setMusic(false));
    }
    window.setTimeout(() => contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 700);
    window.setTimeout(() => setCoverVisible(false), 1700);
  };

  useEffect(() => {
    if (!coverVisible) {
      document.body.classList.remove("invite-scroll-locked");
      return;
    }

    document.body.classList.add("invite-scroll-locked");

    return () => document.body.classList.remove("invite-scroll-locked");
  }, [coverVisible]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.42;
    audio.loop = true;

    if (music) {
      audio.play().catch(() => setMusic(false));
    } else {
      audio.pause();
    }
  }, [music]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[var(--lp-text)]" style={style}>
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-multiply" style={outerPatternStyle} />
      <audio ref={audioRef} preload="auto" src={invitation.musicUrl || "/audio/cant-help-falling-in-love.mp3"} />
      {coverVisible && <GreenInviteCover invitation={invitation} open={open} onOpen={openInvitation} />}
      <InviteAutoScroll
        ref={contentRef}
        blocked={rsvpOpen}
        className={cn("green-template-page relative z-10 mx-auto w-full max-w-[430px] overflow-hidden bg-[var(--lp-surface)] font-[family-name:var(--lp-font)] text-[18px] font-light leading-[27px] transition-opacity duration-700", open ? "opacity-100" : "opacity-70")}
        enabled={autoScroll && open && !coverVisible}
        restartKey={`${open}-${coverVisible}`}
        speed={0.14}
        startDelay={350}
      >
        {sections.hero && <LongPhungReuHero invitation={invitation} />}
        {sections.album && <LongPhungReuAlbum3D photos={invitation.album} />}
        {sections.ceremony && <LongPhungReuCeremonyInfo invitation={invitation} />}
        {sections.reception && <LongPhungReuReceptionInfo invitation={invitation} onRsvp={() => setRsvpOpen(true)} />}
        {sections.map && <LongPhungReuMapSection event={receptionEvent} />}
        {sections.schedule && <LongPhungReuScheduleSection invitation={invitation} />}
        <LongPhungReuGuestbookGiftSection bank={invitation.bank} showGift={sections.gift} showGuestbook={sections.guestbook} />
      </InviteAutoScroll>
      <MusicButton active={music} onClick={() => setMusic((current) => !current)} />
      <RsvpModal open={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </div>
  );
}
