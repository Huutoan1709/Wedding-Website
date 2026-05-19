export type {
  BankInfo,
  DressCodeItem,
  InvitationEvent,
  InvitationPerson,
  InvitationSectionVisibility,
  InvitationTheme,
  ParentInfo,
  WeddingInvitationTemplate,
  WeddingScheduleItem
} from "@/features/invitations/data/invitationTemplates";

export type InvitationTemplateProps = {
  invitation: import("@/features/invitations/data/invitationTemplates").WeddingInvitationTemplate;
  autoOpen?: boolean;
  autoScroll?: boolean;
  autoScrollControls?: boolean;
  autoScrollSpeed?: number;
};
