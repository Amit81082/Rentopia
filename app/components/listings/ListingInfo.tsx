"use client"

import { User } from '@prisma/client'
import { useCountries } from '@/app/hooks/useCountries'
import Avatar from '../Avatar'
import ListingCategory from './ListingCategory'
import { AiOutlineWifi, AiOutlineThunderbolt } from 'react-icons/ai'
import { BsSnow } from 'react-icons/bs'
import { FaSwimmingPool } from 'react-icons/fa'

interface ListingInfoProps {
  user: User
  category: string
  description: string
  roomCount: number
  guestCount: number
  bathroomCount: number
  locationValue: string
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue
}) => {
  const { getByValue } = useCountries()
  const location = getByValue(locationValue)

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="text-xl font-semibold flex flex-row items-center gap-2"
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <>
          <ListingCategory
            icon={category}
            label={category}
            description="This is your listing category"
          />
          <hr />
        </>
      )}
      <div className="text-lg font-light text-neutral-700">
        {description}
      </div>
      <hr />
      <div className="text-lg font-semibold flex flex-row items-center gap-4">
        <div>What this place offers</div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-row items-center gap-4">
          <AiOutlineWifi size={26} className="text-neutral-600" />
          <div className="text-sm">
            Wifi
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <BsSnow size={26} className="text-neutral-600" />
          <div className="text-sm">
            Air conditioning
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <AiOutlineThunderbolt size={26} className="text-neutral-600" />
          <div className="text-sm">
            Essentials
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <FaSwimmingPool size={26} className="text-neutral-600" />
          <div className="text-sm">
            Swimming pool
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingInfo
