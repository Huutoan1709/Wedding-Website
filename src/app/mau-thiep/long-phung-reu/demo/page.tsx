import type { Metadata } from "next";
import { LongPhungReuInvitation } from "@/features/invitations/templates/long-phung/reu";
import { longPhungReuInvitation } from "@/features/invitations/data/longPhungReuInvitation";

export const metadata: Metadata = {
  title: "Long Phụng - Rêu | Demo Long Phụng - Rêu",
  description: "Demo Long Phụng - Rêu online."
};

type LongPhungReuDemoPageProps = {
  searchParams?: Promise<{
    preview?: string;
    scroll?: string;
  }>;
};

export default async function LongPhungReuDemoPage({ searchParams }: LongPhungReuDemoPageProps) {
  const params = await searchParams;
  const autoOpen = params?.preview === "1";
  const isPreview = params?.preview === "1";
  const autoScroll = !isPreview || params?.scroll === "1";
  const autoScrollSpeed = isPreview ? 1 : undefined;

  return <LongPhungReuInvitation autoOpen={autoOpen} autoScroll={autoScroll} autoScrollSpeed={autoScrollSpeed} invitation={longPhungReuInvitation} />;
}
