import type { CoupleProfile, WeddingTemplate } from "@/types/wedding";

export const couplePreview: CoupleProfile = {
  brideName: "Minh Anh",
  groomName: "Gia Huy",
  weddingDate: "24.12.2026",
  ceremonyTime: "17:30",
  venueName: "The Reverie Ballroom",
  venueAddress: "22 Nguyen Hue, Quan 1, TP. Ho Chi Minh",
  story: "Một thiệp cưới online được cá nhân hóa theo câu chuyện, màu sắc và lịch trình của từng cặp đôi."
};

export const templates: WeddingTemplate[] = [
  {
    id: "long-phung-reu",
    name: "Long Phụng - Rêu",
    slug: "long-phung-reu",
    demoPath: "/mau-thiep/long-phung-reu/demo",
    customerExamplePath: "/thiep/minh-thanh",
    style: "botanical",
    price: 1490000,
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    palette: ["#102a14", "#ead39a", "#f7f6f1"],
    features: ["Mở thiệp động", "Album 3D", "Lịch trình", "Dress code"],
    estimatedDelivery: "Trong ngày",
    isFeatured: true
  }
];
