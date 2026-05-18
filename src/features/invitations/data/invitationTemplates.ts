export type ParentInfo = {
  father: string;
  mother: string;
  address: string;
};

export type InvitationPerson = {
  name: string;
  role: string;
  parents: ParentInfo;
  portrait: string;
};

export type InvitationEvent = {
  title: string;
  startsAt: string;
  guestStartsAt?: string;
  venue: string;
  address: string;
  mapQuery: string;
};

export type InvitationTheme = {
  slug: string;
  name: string;
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  muted: string;
  motif: "longphung";
};

export type WeddingScheduleItem = {
  time: string;
  title: string;
  icon?: "welcome" | "ceremony" | "toast" | "party" | "meal" | "music";
};

export type DressCodeItem = {
  label: string;
  color: string;
};

export type InvitationSectionVisibility = {
  hero: boolean;
  ceremony: boolean;
  reception: boolean;
  map: boolean;
  album: boolean;
  schedule: boolean;
  guestbook: boolean;
  gift: boolean;
};

export type BankInfo = {
  accountName: string;
  bankName: string;
  accountNumber: string;
  qrImage?: string;
  transferNote?: string;
};

export type WeddingInvitationTemplate = {
  slug: string;
  guestName: string;
  bride: InvitationPerson;
  groom: InvitationPerson;
  story: string;
  invitationText: string;
  lunarDate?: string;
  event: InvitationEvent;
  receptionEvent?: InvitationEvent;
  schedule?: WeddingScheduleItem[];
  dressCode?: DressCodeItem[];
  musicUrl?: string;
  sections?: InvitationSectionVisibility;
  album: string[];
  bank: BankInfo;
  theme: InvitationTheme;
};

const commonBride: InvitationPerson = {
  name: "Tố Yên",
  role: "Cô dâu",
  parents: {
    father: "Ông Nguyễn Minh An",
    mother: "Bà Lê Thu Hà",
    address: "Quận 7, TP. Hồ Chí Minh"
  },
  portrait: "/images/invitation/long-phung-reu/bride-portrait.jpg"
};

const commonGroom: InvitationPerson = {
  name: "Hữu Toàn",
  role: "Chú rể",
  parents: {
    father: "Ông Trần Quốc Việt",
    mother: "Bà Phạm Ngọc Lan",
    address: "Quận 1, TP. Hồ Chí Minh"
  },
  portrait: "/images/invitation/long-phung-reu/groom-portrait.jpeg"
};

const baseEvent: InvitationEvent = {
  title: "Lễ Thành Hôn",
  startsAt: "2026-12-24T17:30:00+07:00",
  venue: "The Reverie Ballroom",
  address: "22 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
  mapQuery: "The Reverie Saigon Nguyễn Huệ Hồ Chí Minh"
};

const baseAlbum = [
  "/images/invitation/long-phung-reu/album-01.jpg",
  "/images/invitation/long-phung-reu/album-02.jpg",
  "/images/invitation/long-phung-reu/bride-portrait.jpg",
  "/images/invitation/long-phung-reu/album-04.jpg"
];

const baseTemplate = {
  guestName: "Anh Chi Minh - Thanh",
  bride: commonBride,
  groom: commonGroom,
  story:
    "Từ những điều bình dị, chúng mình tìm thấy một người để đồng hành, yêu thương và trở về. Rất mong được đón tiếp mọi người trong ngày vui này.",
  invitationText:
    "Trân trọng kính mời quý khách đến tham dự lễ cưới và chung vui cùng gia đình hai bên.",
  event: baseEvent,
  album: baseAlbum,
  bank: {
    accountName: "NGUYEN THANH DIEP",
    bankName: "Vietcombank",
    accountNumber: "0123 456 789"
  }
};

export const weddingInvitationTemplates: Record<string, WeddingInvitationTemplate> = {
  "long-phung-reu": {
    ...baseTemplate,
    slug: "long-phung-reu",
    theme: {
      slug: "long-phung-reu",
      name: "Long Phụng - Rêu",
      background: "#eef6f0",
      surface: "#fbfbfa",
      primary: "#365b25",
      secondary: "#173314",
      accent: "#c8d9c3",
      text: "#31422a",
      muted: "#6d8064",
      motif: "longphung"
    }
  }
};

export const defaultInvitationTemplate = weddingInvitationTemplates["long-phung-reu"];
