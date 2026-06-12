// app/listings/[listingId]/page.tsx
// app/properties/page.tsx

export const dynamic =
  "force-dynamic";

import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";


interface IParams {
  listingId?: string;
}

const ListingPage = async ({
  params,
}: {
  params: Promise<{ listingId?: string }>;
}) => {
  const { listingId } = await params;

  // INPUT
  const listing = await getListingById({
    listingId,
  });
  const reservations = await getReservations({ listingId });

  const currentUser = await getCurrentUser();

  // LOGIC
  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  // UI
  return (
    <ClientOnly>
      <ListingClient reservations={reservations} listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
