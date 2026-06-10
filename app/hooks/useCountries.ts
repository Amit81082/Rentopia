import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`,
  latlng: country.latlng,
  region: country.region,
}));

export const useCountries = () => {
  const getAll = () => formattedCountries;
  const getByValue = (value: string) => formattedCountries.find((item) => item.value === value);
  return { getAll, getByValue }
};
