// import React from 'react';

import { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, area, population, capital, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedCountries);
  return (
    <div className='py-3'>
      <div className={`lg:h-[425px] flex flex-col items-center justify-center border border-teal-500 rounded-md p-4 space-y-2 ${visited ? 'bg-slate-500 text-black' : ''}`}>
        <h2 className='text-xl text-yellow-500'>
          Name: <span>{name?.common}</span>
        </h2>

        <img
          className='lg:w-56 lg:h-36 md:w-auto md:h-64 object-cover'
          src={flags.svg}
          alt=''
        />

        <p className='text-lg'>
          Area: <span className='italic text-fuchsia-500'>{area}</span>
        </p>

        <p className='text-lg'>
          Population:{' '}
          <span className='italic text-fuchsia-500'>{population}</span>
        </p>

        <p className='text-lg text-center'>
          Capital: <span className='italic text-fuchsia-500'>{capital}</span>
        </p>

        <p>
          <small>
            Code: <span className='text-fuchsia-500'>{cca3}</span>
          </small>
        </p>

        <button
          onClick={handleVisited}
          className={`border border-stone-500 px-4 py-2 rounded-md hover:bg-gray-600 transition-all ${visited ? 'bg-red-500' : ''}`}
        >
          {visited ? 'Added' : 'Add to Visited'}
        </button>

        <button
          onClick={handleVisited}
          className={`border border-stone-500 px-4 py-2 rounded-md hover:bg-gray-600 transition-all ${visited ? 'bg-red-500' : ''}`}
        >
          {visited ? 'Visited' : 'Not visit'}
        </button>
        
        {visited ? 'I already visited this country' : 'I want to visit'}
      </div>
    </div>
  );
};

export default Country;
