"use client"

import { IconType } from 'react-icons'

interface ListingCategoryProps {
  icon: string
  label: string
  description: string
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
  icon,
  label,
  description
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">
            {label}
          </div>
          <div className="text-neutral-500 text-sm">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCategory
