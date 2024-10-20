// import React from 'react';

const CountryData = (props) => {
// destruct
    const { country, handleVisitedCountries, handleVisitedFlags } = props;

  //   details object
  const { area, population, capital, cca3 } = country;
  return (
    <div>
      <p className='text-lg'>
        Area: <span className='italic text-fuchsia-500'>{area}</span>
      </p>

      <p className='text-lg'>
        Population:{' '}
        <span className='italic text-fuchsia-500'>{population}</span>
      </p>

      <p className='text-lg'>
        Capital: <span className='italic text-fuchsia-500'>{capital}</span>
      </p>

      <p>
        <small>
          Code: <span className='text-fuchsia-500'>{cca3}</span>
        </small>
      </p>
    </div>
  );
};

export default CountryData;
