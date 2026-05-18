import type { Metadata } from "next";
import { LongPhungReuInvitation } from "@/features/invitations/templates/long-phung/reu";
import { longPhungReuInvitation } from "@/features/invitations/data/longPhungReuInvitation";

export const metadata: Metadata = {
  title: "Long Phụng - Rêu | Demo Long Phụng - Rêu",
  description: "Demo Long Phụng - Rêu online."
};

export default function LongPhungReuDemoPage() {
  return <LongPhungReuInvitation invitation={longPhungReuInvitation} />;
}
