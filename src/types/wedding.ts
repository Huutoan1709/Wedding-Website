export type TemplateStyle =
  | "classic"
  | "modern"
  | "minimal"
  | "botanical"
  | "luxury";

export type WeddingTemplate = {
  id: string;
  name: string;
  slug: string;
  demoPath?: string;
  customerExamplePath?: string;
  style: TemplateStyle;
  price: number;
  coverImage: string;
  palette: string[];
  features: string[];
  estimatedDelivery: string;
  isFeatured?: boolean;
};

export type CoupleProfile = {
  brideName: string;
  groomName: string;
  weddingDate: string;
  ceremonyTime: string;
  venueName: string;
  venueAddress: string;
  story: string;
};
