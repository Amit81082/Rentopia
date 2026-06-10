"use client"

import { Listing, User } from '@prisma/client'
import Image from 'next/image'
import { useCountries } from '@/app/hooks/useCountries'
import Heading from '../Heading'
import HeartButton from '../HeartButton'

interface ListingHeadProps {
  title: string
  locationValue: string
  imageSrc: string
  id: string
  currentUser?: User | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
}) => {
  const { getByValue } = useCountries()
  const location = getByValue(locationValue)

  return (
    <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover w-full"
        priority
      />
      <div className="absolute top-5 right-5">
        <HeartButton
          listingId={id}
          currentUser={currentUser}
        />
      </div>
    </div>
  )
}

export default ListingHead
