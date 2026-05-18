import type { InvitationEvent, WeddingInvitationTemplate } from "@/features/invitations/core/types";

export function addHours(startsAt: string, hours: number) {
  return new Date(new Date(startsAt).getTime() + hours * 60 * 60 * 1000);
}

export function toGoogleCalendarDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

export function buildCalendarHref(invitation: WeddingInvitationTemplate, event: InvitationEvent = invitation.event) {
  const start = new Date(event.startsAt);
  const end = addHours(event.startsAt, 3);
  const dates = `${toGoogleCalendarDate(start)}/${toGoogleCalendarDate(end)}`;
  const text = encodeURIComponent(`${event.title} - ${invitation.groom.name} & ${invitation.bride.name}`);
  const details = encodeURIComponent(invitation.invitationText);
  const location = encodeURIComponent(`${event.venue}, ${event.address}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}

