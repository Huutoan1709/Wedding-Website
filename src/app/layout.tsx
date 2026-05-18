import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

const defaultTitle = "Tạo thiệp cưới online miễn phí, đẹp mắt và sang trọng | thiepdoita.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.displayName}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.displayName,
  icons: {
    icon: "/images/brand/icon.png",
    shortcut: "/images/brand/icon.png",
    apple: "/images/brand/icon.png"
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.displayName,
    locale: "vi_VN",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
