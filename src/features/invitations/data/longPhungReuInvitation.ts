export type WeddingPerson = {
  role: string;
  name: string;
  parents: string;
  address: string;
  portrait: string;
};

export type WeddingEvent = {
  title: string;
  time: string;
  date: string;
  startsAt: string;
  guestStartsAt?: string;
  venue: string;
  address: string;
  mapQuery?: string;
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

export type LongPhungReuInvitationData = {
  slug: string;
  templateSlug: "long-phung-reu";
  coupleCode: string;
  bride: WeddingPerson;
  groom: WeddingPerson;
  guestName: string;
  weddingDate: string;
  lunarDate: string;
  story: string;
  events: WeddingEvent[];
  schedule: WeddingScheduleItem[];
  dressCode: DressCodeItem[];
  musicUrl: string;
  bank: BankInfo;
  sections: InvitationSectionVisibility;
  album: string[];
};

export const longPhungReuInvitation: LongPhungReuInvitationData = {
  slug: "demo",
  templateSlug: "long-phung-reu",
  coupleCode: "van-toan-to-yen",
  bride: {
    role: "Trưởng nữ / Bride",
    name: "Tố Yên",
    parents: "Ông Nguyễn Minh An & Bà Lê Thị Thu Hà",
    address: "78 Đào Duy Từ, Phường Đập Đá, Thị xã An Nhơn, Tỉnh Bình Định",
    portrait: "/images/invitation/long-phung-reu/bride-portrait.png"
  },
  groom: {
    role: "Trưởng nam / Groom",
    name: "Hữu Toàn",
    parents: "Ông Nguyễn Văn Dũng & Bà Nguyễn Thị Bích Hạnh",
    address: "32 Võ Trứ, Phường Nhơn Thành, Thị xã An Nhơn, Tỉnh Bình Định",
    portrait: "/images/invitation/long-phung-reu/groom-portrait.png"
  },
  guestName: "Anh Chị Minh - Thanh",
  weddingDate: "30 tháng 5, 2026",
  lunarDate: "14 tháng 4 năm Bính Ngọ",
  story:
    "Từ những cuộc trò chuyện bình dị, chúng mình nhận ra tình yêu đẹp nhất là cảm giác được trở về bên một người. Rất mong được đón tiếp mọi người trong ngày vui này.",
  events: [
    {
      title: "Lễ Thành Hôn",
      time: "17:30",
      date: "Thứ Bảy, 30.05.2026",
      startsAt: "2026-05-30T17:30:00+07:00",
      venue: "The Reverie Ballroom",
      address: "22 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
      mapQuery: "The Reverie Saigon Nguyễn Huệ Hồ Chí Minh"
    },
    {
      title: "Tiệc Chung Vui",
      time: "18:30",
      date: "Thứ Bảy, 30.05.2026",
      startsAt: "2026-05-30T18:30:00+07:00",
      guestStartsAt: "2026-05-11T18:00:00+07:00",
      venue: "White Palace Võ Văn Kiệt",
      address: "108 Phạm Văn Chí, Quận 6, TP. Hồ Chí Minh",
      mapQuery: "White Palace Võ Văn Kiệt Hồ Chí Minh"
    }
  ],
  schedule: [
    { time: "18:00", title: "Đón khách", icon: "welcome" },
    { time: "18:30", title: "Lễ thành hôn", icon: "ceremony" },
    { time: "19:00", title: "Khai tiệc", icon: "meal" },
    { time: "20:30", title: "After party", icon: "music" }
  ],
  dressCode: [
    { label: "Be", color: "#a09270" },
    { label: "Đen", color: "#000000" },
    { label: "Đỏ", color: "#c60000" }
  ],
  musicUrl: "/audio/cant-help-falling-in-love.mp3",
  bank: {
    accountName: "NGUYEN THANH DIEP",
    bankName: "BIDV",
    accountNumber: "5811495093",
    transferNote: "Mừng cưới Hữu Toàn - Tố Yên"
  },
  sections: {
    hero: true,
    ceremony: true,
    reception: true,
    map: true,
    album: true,
    schedule: true,
    guestbook: true,
    gift: true
  },
  album: [
    "/images/invitation/long-phung-reu/album-01.jpg",
    "/images/invitation/long-phung-reu/album-02.jpg",
    "/images/invitation/long-phung-reu/album-05.jpg",
    "/images/invitation/long-phung-reu/album-04.jpg"
  ]
};

export const customerInvitations: Record<string, LongPhungReuInvitationData> = {
  "minh-thanh": {
    ...longPhungReuInvitation,
    slug: "minh-thanh",
    guestName: "Anh Chị Minh - Thanh"
  },
  "gia-dinh-anh-khoa": {
    ...longPhungReuInvitation,
    slug: "gia-dinh-anh-khoa",
    guestName: "Gia đình Anh Khoa"
  }
};
