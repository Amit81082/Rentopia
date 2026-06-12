// app/properties/PropertiesClient.tsx

"use client";

import axios from "axios";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

import { Listing, User } from "@prisma/client";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

interface PropertiesClientProps {
  listings: Listing[];
  currentUser?: User | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();

  const [deletingId, setDeletingId] = useState("");

  const onDelete = useCallback(
    async (id: string) => {
      try {
        setDeletingId(id);

        await axios.delete(`/api/listings/${id}`);

        toast.success("Property deleted");

        router.refresh();
      } catch (error: any) {
        toast.error( error?.response?.data?.error || error.message || "Something went wrong");
      } finally {
        setDeletingId("");
      }
    },
    [router],
  );

  return (
    <Container>
      <Heading title="Properties" subtitle="Manage your properties" />

      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
            actionId={listing.id}
            actionLabel="Delete property"
            onAction={onDelete}
            disabled={deletingId === listing.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
