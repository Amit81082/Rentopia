// app/components/listings/ListingCategory.tsx

"use client";

import { IconType } from "react-icons";
import { ComponentType } from "react";

interface ListingCategoryProps {
  icon: ComponentType<any>;
  label: string;
  description: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Icon size={40} className="text-neutral-600" />

      <div className="flex flex-col">
        <div className="font-semibold text-lg">{label}</div>

        <div className="font-light text-neutral-500">{description}</div>
      </div>
    </div>
  );
};

export default ListingCategory;
