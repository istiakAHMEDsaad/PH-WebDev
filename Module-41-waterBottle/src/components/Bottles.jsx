import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch('bottles.json')
      .then((res) => res.json())
      .then((data) => setBottles(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div>
        <h2 className='text-center text-2xl italic mb-4'>Total Bottle: {bottles.length}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {bottles.map((bottle) => (
            <Bottle key={bottle.id} bottle={bottle}></Bottle>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bottles;
