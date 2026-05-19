import type { LongPhungReuInvitationData, WeddingEvent, WeddingPerson } from "@/features/invitations/data/longPhungReuInvitation";
import type { InvitationEvent, InvitationPerson, WeddingInvitationTemplate } from "@/features/invitations/data/invitationTemplates";
import { weddingInvitationTemplates } from "@/features/invitations/data/invitationTemplates";
import { WeddingInvitationExperience } from "@/features/invitations/components/WeddingInvitationExperience";

type LongPhungReuInvitationProps = {
  invitation?: LongPhungReuInvitationData;
  autoOpen?: boolean;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
};

function splitParents(parents: string) {
  const [father, ...motherParts] = parents.split(/\s*&\s*/);

  return {
    father: father?.trim() || "",
    mother: motherParts.join(" & ").trim(),
  };
}

function toInvitationPerson(person: WeddingPerson): InvitationPerson {
  return {
    name: person.name,
    role: person.role,
    parents: {
      ...splitParents(person.parents),
      address: person.address
    },
    portrait: person.portrait
  };
}

function toInvitationEvent(event: WeddingEvent, fallbackMapQuery: string): InvitationEvent {
  return {
    title: event.title,
    startsAt: event.startsAt,
    guestStartsAt: event.guestStartsAt,
    venue: event.venue,
    address: event.address,
    mapQuery: event.mapQuery || fallbackMapQuery
  };
}

function createCustomerTemplate(invitation?: LongPhungReuInvitationData): WeddingInvitationTemplate {
  const baseTemplate = invitation?.templateSlug
    ? weddingInvitationTemplates[invitation.templateSlug]
    : weddingInvitationTemplates["long-phung-reu"];

  if (!invitation) {
    return baseTemplate;
  }

  const ceremony = invitation.events[0];
  const reception = invitation.events[1] || ceremony;
  const ceremonyMapQuery = `${ceremony.venue} ${ceremony.address}`;
  const receptionMapQuery = `${reception.venue} ${reception.address}`;

  return {
    ...baseTemplate,
    slug: invitation.slug,
    guestName: invitation.guestName,
    bride: toInvitationPerson(invitation.bride),
    groom: toInvitationPerson(invitation.groom),
    story: invitation.story,
    invitationText: `Trân trọng kính mời ${invitation.guestName} đến tham dự lễ cưới và chung vui cùng gia đình hai bên.`,
    lunarDate: invitation.lunarDate,
    event: toInvitationEvent(ceremony, ceremonyMapQuery),
    receptionEvent: toInvitationEvent(reception, receptionMapQuery),
    schedule: invitation.schedule,
    dressCode: invitation.dressCode,
    musicUrl: invitation.musicUrl,
    sections: invitation.sections,
    album: invitation.album.length > 0 ? invitation.album : baseTemplate.album,
    bank: invitation.bank
  };
}

export function LongPhungReuInvitation({ invitation, autoOpen = false, autoScroll = true, autoScrollSpeed }: LongPhungReuInvitationProps) {
  const template = createCustomerTemplate(invitation);

  return <WeddingInvitationExperience autoOpen={autoOpen} autoScroll={autoScroll} autoScrollSpeed={autoScrollSpeed} invitation={template} />;
}
