"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { WeddingInvitationTemplate } from "@/features/invitations/data/invitationTemplates";
import { CeremonyInfo, GuestbookAndGift, InviteHero, ReceptionInfo } from "@/features/invitations/components/DefaultInvitationSections";
import { InviteAutoScroll } from "@/features/invitations/components/InviteAutoScroll";
import { EnvelopeStage } from "@/features/invitations/components/InvitationCover";
import { MusicButton } from "@/features/invitations/components/MusicButton";
import { RsvpModal } from "@/features/invitations/components/RsvpModal";
import { useResetScrollOnLoad } from "@/features/invitations/hooks/useResetScrollOnLoad";
import { cn } from "@/lib/utils";

type DefaultWeddingInvitationExperienceProps = {
  invitation: WeddingInvitationTemplate;
  autoOpen?: boolean;
};

export function DefaultWeddingInvitationExperience({ invitation, autoOpen = false }: DefaultWeddingInvitationExperienceProps) {
  useResetScrollOnLoad();

  const [open, setOpen] = useState(autoOpen);
  const [coverVisible, setCoverVisible] = useState(!autoOpen);
  const [music, setMusic] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const style = {
    "--invite-background": invitation.theme.background,
    "--invite-surface": invitation.theme.surface,
    "--invite-primary": invitation.theme.primary,
    "--invite-secondary": invitation.theme.secondary,
    "--invite-accent": invitation.theme.accent,
    "--invite-text": invitation.theme.text,
    "--invite-muted": invitation.theme.muted
  } as CSSProperties;

  const handleOpen = () => {
    setOpen(true);
    setMusic(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.42;
      audio.loop = true;
      audio.play().catch(() => setMusic(false));
    }
    window.setTimeout(() => {
      document.body.classList.remove("invite-scroll-locked");
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 700);
    window.setTimeout(() => setCoverVisible(false), 1700);
  };

  useEffect(() => {
    if (!coverVisible) {
      document.body.classList.remove("invite-scroll-locked");
      return;
    }

    document.body.classList.add("invite-scroll-locked");

    return () => {
      document.body.classList.remove("invite-scroll-locked");
    };
  }, [coverVisible]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = 0.42;
    audio.loop = true;

    if (!music) {
      audio.pause();
      return;
    }

    audio.play().catch(() => {
      setMusic(false);
    });
  }, [music]);

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      audio?.pause();
    };
  }, []);

  return (
    <div className="invite-page min-h-screen bg-[var(--invite-background)] text-[var(--invite-text)]" style={style}>
      <audio ref={audioRef} preload="auto" src="/audio/cant-help-falling-in-love.mp3" />
      {coverVisible && <EnvelopeStage invitation={invitation} open={open} onOpen={handleOpen} />}
      <InviteAutoScroll
        ref={contentRef}
        blocked={rsvpOpen}
        className={cn("mx-auto w-full max-w-[430px] overflow-hidden bg-white transition-opacity duration-700 md:max-w-[900px]", open ? "opacity-100" : "opacity-70")}
        enabled={open && !coverVisible}
        restartKey={`${open}-${coverVisible}`}
        speed={0.14}
        startDelay={350}
      >
        <div data-invite-step>
          <InviteHero invitation={invitation} />
        </div>
        <div data-invite-step>
          <CeremonyInfo invitation={invitation} />
        </div>
        <div data-invite-step>
          <ReceptionInfo invitation={invitation} onRsvp={() => setRsvpOpen(true)} />
        </div>
        <div data-invite-step>
          <GuestbookAndGift invitation={invitation} onRsvp={() => setRsvpOpen(true)} />
        </div>
      </InviteAutoScroll>
      <MusicButton active={music} onClick={() => setMusic((current) => !current)} />
      <RsvpModal open={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </div>
  );
}
