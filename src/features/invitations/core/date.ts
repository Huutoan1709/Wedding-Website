export const invitationTimeZone = "Asia/Ho_Chi_Minh";

export function formatEventDate(startsAt: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: invitationTimeZone
  }).format(new Date(startsAt));
}

export function formatAnnouncementDate(startsAt: string) {
  const date = new Date(startsAt);

  return {
    day: new Intl.DateTimeFormat("vi-VN", { day: "2-digit", timeZone: invitationTimeZone }).format(date),
    month: new Intl.DateTimeFormat("vi-VN", { month: "2-digit", timeZone: invitationTimeZone }).format(date),
    time: new Intl.DateTimeFormat("vi-VN", { hour: "2-digit", hour12: false, minute: "2-digit", timeZone: invitationTimeZone }).format(date),
    weekday: new Intl.DateTimeFormat("vi-VN", { weekday: "long", timeZone: invitationTimeZone }).format(date).toUpperCase(),
    year: new Intl.DateTimeFormat("vi-VN", { year: "numeric", timeZone: invitationTimeZone }).format(date)
  };
}

