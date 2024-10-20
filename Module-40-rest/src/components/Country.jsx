// import React from 'react';

const Country = ({ country }) => {
  const { name, flags } = country;
  return (
    <div className='flex flex-col py-3'>
      <div className='border border-teal-500 rounded-md p-4 space-y-2'>
        <h2 className='text-xl text-yellow-500'>
          Name: <span>{name?.common}</span>
        </h2>
        <img className='w-56 object-cover' src={flags.svg} alt='' />
      </div>
    </div>
  );
};

export default Country;
