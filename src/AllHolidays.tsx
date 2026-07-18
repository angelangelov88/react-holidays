import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import './AllHolidays.scss';
import Fuse from 'fuse.js';

interface Country {
  code: string;
  name: string;
}

interface CountriesResponse {
  countries: Country[];
}

interface Holiday {
  name: string;
  date: string;
  uuid?: string;
}

interface HolidaysResponse {
  holidays: Holiday[];
}

const AllHolidays = () => {
  const key = `${import.meta.env.VITE_API_KEY}`;
  const urlAll = `https://holidayapi.com/v1/countries?pretty&key=${key}`;

  const [all, setAll] = useState<CountriesResponse | null>(null);
  const [data, setData] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, setIsPending] = useState(true);
  const countriesArray = all?.countries ?? [];

  //Axios request to fetch the data from the Holidays API
  useEffect(() => {
  axios.get(urlAll)
  .then(response => {      
      const sortedCountries = response.data.countries.sort((a: Country, b: Country) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      setAll(response.data);
      setData(sortedCountries);
      setIsPending(false)
  })
  .catch((err) => {
    console.log(err)
    setIsPending(false)
  }) 
  }, [urlAll])

  //Axios request to fetch the holidays per country
  const [res, setRes] = useState<Holiday[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const year = new Date().getFullYear() - 1;

  const clickHandler = (countryCode: string, countryName: string) => {
    const url = `https://holidayapi.com/v1/holidays?pretty&country=${countryCode}&year=${year}&key=${key}`;

    axios.get<HolidaysResponse>(url)
      .then((response) => {
        setSelectedCountry(countryName);
        setRes(response.data.holidays ?? []);
      })
      .catch((err) => {
        console.log(err);
        setSelectedCountry(countryName);
        setRes([]);
      });
  };

  //Function to search in the array
  //This part sets the value of the data const in order to show the countries even if empty search input is detected
  const searchData = (pattern: string) => {
    setSearchTerm(pattern);

    if (!pattern) {
      setData(countriesArray);
      return;
    }

    const fuse = new Fuse<Country>(countriesArray, {
      keys: ['name'],
      threshold: 0.3,
      ignoreLocation: true
    });

    const result = fuse.search(pattern);
    const matches: Country[] = [];

    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

  return (
    <div className="all-holidays">
      {isPending && <div className="loading">Loading countries...</div>}
      {all && (
        <div className="allCountriesContainer">
          <div className="allCountriesList">
            <h2>Find a country</h2>
            <p>Search for a country and open its holiday list.</p>
            <SearchBar
              placeholder="Search countries"
              onChange={(e) => searchData(e.target.value)}
            />
            {searchTerm && !data.length && <p className="no-country-message">No country found. Try another name.</p>}
            <div className="countries-scroll" style={{ marginTop: '1rem' }}>
              {data.map((countries) => (
                <button
                  key={countries.code}
                  onClick={() => clickHandler(countries.code, countries.name)}
                  className={"country-button" + (selectedCountry === countries.name ? ' selected' : '')}
                >
                  <div className="name">{countries.name}</div>
                </button>
              ))}
              {!searchTerm && !data.length && <p className="hint">Start typing to search for a country.</p>}
            </div>
          </div>
          <div className="holidays">
            {selectedCountry ? (
              <div className="holidays-content">
                <h3 className="holidays-title">{selectedCountry} holidays</h3>
                {res.length > 0 ? (
                  <div className="holiday-list">
                    {res.map((holiday) => (
                      <div key={holiday.uuid ?? `${holiday.name}-${holiday.date}`} className="holiday-item">
                        <div className="holiday-name">{holiday.name}</div>
                        <div className="holiday-date">{holiday.date}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="hint" style={{ margin: 0 }}>No holidays found for this country.</p>
                )}
              </div>
            ) : (
              <div className="no-selection">
                <h3 style={{ marginTop: 0 }}>Select a country</h3>
                <p>Choose a country from the list to view its public holidays.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

  export default AllHolidays