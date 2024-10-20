// import React from 'react';

import { useEffect, useState } from 'react';
import Country from './Country';

//TODO1: Main Function
const Countries = () => {
  const [countries, setCountires] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])

  //TODO3: Fetch data by useEffect hook
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountires(data))
      .catch((error) => console.error(error));
  }, []);

  //TODO4: handle visited countries
  const handleVisitedCountries = (country) => {
    console.log('Add this to your visited country');
    console.log(country);
  }

  //TODO2: Return
  return (
    <div>
      <h3 className='text-3xl text-sky-500 text-center'>
        Total Countries: <span className='italic'>{countries.length}</span>
      </h3>

      <div>
        <h4>Visited Country</h4>
        <ul></ul>
      </div>

      <div className='grid grid-cols-1 md:gap-x-4 lg:grid-cols-3 md:grid-cols-2'>
        {countries.map((country) => (
          <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
