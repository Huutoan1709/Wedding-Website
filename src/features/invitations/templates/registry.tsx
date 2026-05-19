"use client";

import dynamic from "next/dynamic";
import type { InvitationTemplateProps } from "@/features/invitations/core/types";

const LongPhungReuExperience = dynamic(() =>
  import("@/features/invitations/templates/long-phung/reu").then((module) => module.LongPhungReuExperience)
);

export const invitationTemplateRegistry = {
  "long-phung-reu": "LongPhungReuExperience"
} as const;

export function renderInvitationTemplate({ invitation, autoOpen = false, autoScroll = true, autoScrollControls = true, autoScrollSpeed }: InvitationTemplateProps) {
  return <LongPhungReuExperience autoOpen={autoOpen} autoScroll={autoScroll} autoScrollControls={autoScrollControls} autoScrollSpeed={autoScrollSpeed} invitation={invitation} />;
}
