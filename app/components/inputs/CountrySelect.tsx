"use client"
import { useCountries } from '@/app/hooks/useCountries'
import Image from 'next/image'
import React from 'react'
import Select from 'react-select'

export type CountrySelectValue = {
  flag: string,
  label: string,
  latlng: number[],
  region: string,
  value: string
}

interface CountrySelectProps {
  value?: CountrySelectValue,
  onChange: (value: CountrySelectValue) => void
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange
}) => {
  const {getAll} = useCountries();
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3 cursor-pointer">
            <div>
              <Image
                src={option.flag}
                alt={option.label}
                width={24}
                height={18}
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2 cursor-pointer",
          input: () => "text-lg cursor-pointer",
          option: () => "text-lg cursor-pointer",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
}

export default CountrySelect
