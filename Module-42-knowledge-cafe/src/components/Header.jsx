import React from 'react';
// @ts-ignore
import profile from '../assets/images/profile.png';

const Header = () => {
  return (
    <header className='mb-4'>
      <div className='flex flex-row items-center justify-between border-b-2'>
        <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
        <img className='w-14 mb-2' src={profile} alt='profile image' />
      </div>
    </header>
  );
};

export default Header;
