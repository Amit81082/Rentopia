// components/listings/ListingReservation.tsx

"use client";

import { Range, RangeKeyDict } from "react-date-range";

import Button from "../Button";
import Calendar from "../inputs/Calendar";

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border
        border-neutral-200
        overflow-hidden
      "
    >
      {/* PRICE */}

      <div
        className="
          flex
          flex-row
          items-center
          gap-1
          p-4
        "
      >
        <div className="text-2xl font-semibold">${price}</div>

        <div className="font-light text-neutral-600">night</div>
      </div>

      <hr />

      {/* CALENDAR */}

      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value: RangeKeyDict) => onChangeDate(value.selection)}
      />

      <hr />

      {/* BUTTON */}

      <div className="p-4">
        <Button label="Reserve" disabled={disabled} onClick={onSubmit} />
      </div>

      <hr />

      {/* TOTAL */}

      <div
        className="
          p-4
          flex
          flex-row
          items-center
          justify-between
          font-semibold
          text-lg
        "
      >
        <div>Total</div>

        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
