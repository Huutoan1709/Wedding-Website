import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.displayName} | Template thiep cuoi online`,
    template: `%s | ${siteConfig.displayName}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.displayName,
  openGraph: {
    title: `${siteConfig.displayName} | Template thiep cuoi online`,
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
