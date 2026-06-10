import getListingById from "@/app/actions/getListingById";



interface IParams {
  listingId?: string;
}

export default async function ListingPage({ params }: { params: Promise<IParams> }) {
  const listing = await getListingById( { params });
  return <div>ListingPage</div>;
}
