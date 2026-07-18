import useFetch from './useFetch';

interface CountryOption {
  code: string;
  label: string;
}

interface HolidayResponse {
  holidays: Array<{
    uuid?: string;
    name: string;
    date: string;
  }>;
}

interface CountryHolidaysProps {
  countries: CountryOption[];
}

const CountryHolidays = ({ countries = [] }: CountryHolidaysProps) => {
  const key = `${import.meta.env.VITE_API_KEY}`;
  const year = new Date().getFullYear() - 1;

  const urls = countries.map(({ code }) => (
    `https://holidayapi.com/v1/holidays?pretty&country=${code}&year=${year}&key=${key}`
  ));

  const { data, isPending, error } = useFetch<HolidayResponse[]>(urls);

  return (
    <div className="CountryHolidays">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && Array.isArray(data) && data.map((countryData, index) => {
        const country = countries[index];

        if (!country || !countryData?.holidays) {
          return null;
        }

        return (
          <div key={country.code} className="country-holiday-group">
            <h2>{country.label} Holidays - {year}</h2>
            <div className="holiday-list">
              {countryData.holidays.map((holiday) => (
                <div key={holiday.uuid} className="holiday-item">
                  <p style={{ fontWeight: '600' }}>{holiday.name}</p>
                  <p>{holiday.date}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryHolidays;
