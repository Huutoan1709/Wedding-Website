"use client";

import type { WeddingInvitationTemplate } from "@/features/invitations/data/invitationTemplates";
import { renderInvitationTemplate } from "@/features/invitations/templates/registry";

type Props = {
  invitation: WeddingInvitationTemplate;
  autoOpen?: boolean;
  autoScroll?: boolean;
};

export function WeddingInvitationExperience({ invitation, autoOpen = false, autoScroll = true }: Props) {
  return renderInvitationTemplate({ autoOpen, autoScroll, invitation });
}
