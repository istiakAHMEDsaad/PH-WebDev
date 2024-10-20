// import React from 'react';

import { useEffect, useState } from 'react';
import Country from './Country';

//TODO1: Main Function
const Countries = () => {
  const [countries, setCountires] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  //TODO3: Fetch data by useEffect hook
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountires(data))
      .catch((error) => console.error(error));
  }, []);

  //TODO4: handle visited countries
  const handleVisitedCountries = (country) => {
    // console.log('Add this to your visited country');
    // console.log(country);
    // visitedCountries.push(country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  //TODO5: visited flags
  const handleVisitedFlags = (flag) => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };

  // Use filter to select all the elements excepts the one you want to remove

  //TODO2: Return
  return (
    // =============== Show total country ===============
    <div>
      <h3 className='text-3xl text-sky-500 text-center mb-4'>
        Total Countries: <span className='italic'>{countries.length}</span>
      </h3>

      {/* =============== Added to array =============== */}
      <div className='border border-stone-500 rounded-md py-5 md:flex mb-4'>
        <div className='md:basis-1/2 md:flex md:flex-col md:items-center md:justify-center'>
          <h4 className='text-2xl text-blue-400 underline'>
            Visited Country:{' '}
            <span className='text-orange-500'>{visitedCountries.length}</span>
          </h4>
          <ul className=''>
            {visitedCountries.map((country) => (
              <li
                className='text-lg italic underline text-pink-400'
                key={country.cca3}
              >
                {country.name.common}
              </li>
            ))}
          </ul>
        </div>

        <div className='md:basis-1/2 md:flex md:flex-col md:items-center md:justify-center'>
          <h4 className='text-2xl text-amber-400 underline'>Flag SVG</h4>
          <div className=''>
            {visitedFlags.map((flag, index) => (
              <img key={index} className='w-28 h-16 object-cover mb-2' src={flag}></img>
            ))}
          </div>
        </div>
      </div>

      {/* =============== Show all country =============== */}
      <div className='grid grid-cols-1 md:gap-4 lg:grid-cols-3 md:grid-cols-2'>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>

    </div>
  );
};

export default Countries;
