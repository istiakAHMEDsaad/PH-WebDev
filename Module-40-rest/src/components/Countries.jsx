// import React from 'react';

import { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
  const [countries, setCountires] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountires(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h3 className='text-3xl text-sky-500 text-center'>
        Total Countries: <span className='italic'>{countries.length}</span>
      </h3>

      {countries.map((country) => (
        <Country key={country.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
