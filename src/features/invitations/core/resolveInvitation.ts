import { customerInvitations } from "@/features/invitations/data/longPhungReuInvitation";

export function resolveCustomerInvitation(customerSlug: string) {
  return customerInvitations[customerSlug] || null;
}

export function getCustomerInvitationSlugs() {
  return Object.keys(customerInvitations);
}

