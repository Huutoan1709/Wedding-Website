"use client";

import type { WeddingInvitationTemplate } from "@/features/invitations/data/invitationTemplates";
import { renderInvitationTemplate } from "@/features/invitations/templates/registry";

type Props = {
  invitation: WeddingInvitationTemplate;
  autoOpen?: boolean;
};

export function WeddingInvitationExperience({ invitation, autoOpen = false }: Props) {
  return renderInvitationTemplate({ autoOpen, invitation });
}
