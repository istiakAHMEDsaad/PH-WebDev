import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
  return (
    <div className='min-h-[calc(100vh-50px)] flex flex-col gap-1 items-center justify-center'>
      <p className='text-2xl text-red-500'>Page Not Found</p>
      <Link className='inline-block py-1 px-4 bg-cyan-400 rounded-md hover:bg-cyan-500 transition-all' href={'/'}>Go Home</Link>
    </div>
  );
};

export default NotFoundPage404;
