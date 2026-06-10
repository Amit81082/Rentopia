"use client"

import { useMemo } from 'react'
import { Range } from 'react-date-range'
import Button from '../Button'
import Calendar from '../Calendar'

interface ListingReservationProps {
  price: number
  totalPrice: number
  onChangeDate: (value: Range) => void
  dateRange: Range
  onSubmit: () => void
  disabled?: boolean
  disabledDates: Date[]
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center justify-between p-4 bg-white">
        <div className="text-2xl font-semibold">
          ${price}
        </div>
        <div className="font-light text-neutral-600">
          per night
        </div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) =>
          onChangeDate(value.selection)
        }
      />
      <hr />
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between text-lg font-semibold">
          <div>Total</div>
          <div>${totalPrice}</div>
        </div>
        <Button
          disabled={disabled}
          label="Reserve"
          onClick={onSubmit}
        />
      </div>
    </div>
  )
}

export default ListingReservation
