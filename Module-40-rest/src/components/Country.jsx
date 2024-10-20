// import React from 'react';

import { useState } from 'react';
import CountryDetails from './CountryDetails';

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  //TODO1: for Country
  const { name, flags, area, population, capital, cca3 } = country;

  //TODO2: for Countires
  const [visited, setVisited] = useState(false);

  //TODO3: for Country
  const handleVisited = () => {
    setVisited(!visited);
  };

  //TODO4: for Countires
  const passWithParams = () => {
    handleVisitedCountries(country); // () => handleVisitedCountries(country); -->pass this value
  };

  //   TODO5: return
  return (
    <div
      className={`lg:h-[430px] flex flex-col justify-center items-center border border-teal-500 rounded-md space-y-2 ${visited ? 'bg-slate-500 text-black' : ''}`}
    >
      <div>
        <h2 className='text-xl text-center text-yellow-500'>
          Name: <span>{name?.common}</span>
        </h2>

        <img
          className='lg:w-56 lg:h-36 md:w-auto md:h-64 object-cover'
          src={flags.svg}
          alt=''
        />
      </div>

      <hr className='border border-dotted w-full' />

      {/* =============== Button Section =============== */}
      <div className='flex flex-col md:flex-row'>
        <button
          onClick={passWithParams}
          className={`border border-stone-500 px-4 py-2 rounded-md hover:bg-gray-600 transition-all ${visited ? 'bg-red-500' : ''}`}
        >
          {visited ? 'Added' : 'Add to Visited'}
        </button>

        <button onClick={() => handleVisitedFlags(country.flags.png)} className={`border border-stone-500 px-4 py-2 rounded-md hover:bg-gray-600 transition-all ${visited ? 'bg-red-500' : ''}`}>Add Flag</button>

        <button
          onClick={handleVisited}
          className={`border border-stone-500 px-4 py-2 rounded-md hover:bg-gray-600 transition-all ${visited ? 'bg-red-500' : ''}`}
        >
          {visited ? 'Visited' : 'Not visit'}
        </button>
      </div>

      {visited ? 'I already visited this country' : 'I want to visit'}

        <hr className='border border-teal-400 w-full' />
      <div>
        <CountryDetails country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} ></CountryDetails>
      </div>
    </div>
  );
};

export default Country;
