import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCustomerInvitationSlugs, resolveCustomerInvitation } from "@/features/invitations/core/resolveInvitation";
import { LongPhungReuInvitation } from "@/features/invitations/templates/long-phung/reu";

type CustomerInvitationPageProps = {
  params: Promise<{
    customerSlug: string;
  }>;
};

export function generateStaticParams() {
  return getCustomerInvitationSlugs().map((customerSlug) => ({ customerSlug }));
}

export async function generateMetadata({ params }: CustomerInvitationPageProps): Promise<Metadata> {
  const { customerSlug } = await params;
  const invitation = resolveCustomerInvitation(customerSlug);

  if (!invitation) {
    return {
      title: "Khong tim thay thiep"
    };
  }

  return {
    title: `${invitation.groom.name} & ${invitation.bride.name} | ${invitation.guestName}`,
    description: `Thiep cuoi online gui rieng den ${invitation.guestName}.`
  };
}

export default async function CustomerInvitationPage({ params }: CustomerInvitationPageProps) {
  const { customerSlug } = await params;
  const invitation = resolveCustomerInvitation(customerSlug);

  if (!invitation) {
    notFound();
  }

  return <LongPhungReuInvitation autoOpen invitation={invitation} />;
}
