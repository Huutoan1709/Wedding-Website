"use client";

import type { WeddingInvitationTemplate } from "@/features/invitations/data/invitationTemplates";
import { renderInvitationTemplate } from "@/features/invitations/templates/registry";

type Props = {
  invitation: WeddingInvitationTemplate;
  autoOpen?: boolean;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
};

export function WeddingInvitationExperience({ invitation, autoOpen = false, autoScroll = true, autoScrollSpeed }: Props) {
  return renderInvitationTemplate({ autoOpen, autoScroll, autoScrollSpeed, invitation });
}
