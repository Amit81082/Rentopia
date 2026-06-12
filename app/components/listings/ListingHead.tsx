// app/components/listings/ListingHead.tsx

"use client";

import Image from "next/image";
import { User } from "@prisma/client";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

import { useCountries } from "@/app/hooks/useCountries";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: User | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />

      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden
          rounded-xl
          relative
        "
      >
        <Image
          fill
          src={imageSrc}
          alt={title}
          className="object-cover w-full"
          sizes="100vw"
          priority
        />

        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
