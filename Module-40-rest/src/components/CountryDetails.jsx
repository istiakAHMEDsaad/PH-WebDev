// import React from 'react';

import CountryData from './CountryData';

const CountryDetails = (props) => {
  const { country, handleVisitedCountries, handleVisitedFlags } = props;
  return (
    <div>
      <h4 className='text-xl underline text-cyan-400'>Country Details</h4>
      {/* <CountryData
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetails;
