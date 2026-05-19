"use client";

import type { WeddingInvitationTemplate } from "@/features/invitations/data/invitationTemplates";
import { renderInvitationTemplate } from "@/features/invitations/templates/registry";

type Props = {
  invitation: WeddingInvitationTemplate;
  autoOpen?: boolean;
  autoScroll?: boolean;
  autoScrollControls?: boolean;
  autoScrollSpeed?: number;
};

export function WeddingInvitationExperience({ invitation, autoOpen = false, autoScroll = true, autoScrollControls = true, autoScrollSpeed }: Props) {
  return renderInvitationTemplate({ autoOpen, autoScroll, autoScrollControls, autoScrollSpeed, invitation });
}
