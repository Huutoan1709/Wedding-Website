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
  }>;
};

export default async function LongPhungReuDemoPage({ searchParams }: LongPhungReuDemoPageProps) {
  const params = await searchParams;
  const autoOpen = params?.preview === "1";
  const autoScroll = params?.preview !== "1";

  return <LongPhungReuInvitation autoOpen={autoOpen} autoScroll={autoScroll} invitation={longPhungReuInvitation} />;
}
