'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = ({ params }) => {
  const pathname = usePathname();
  const [toggle, isToggle] = useState(false);
  const isActive = (path) =>
    pathname === path
      ? 'md:bg-black md:text-white md:no-underline underline underline-offset-2 decoration-2'
      : '';

  const id = params?.id;
  console.log(id);
  if (!pathname.includes('dashboard')) {
    return (
      <>
        {/* large devices */}
        <div className='hidden md:flex items-center justify-center mt-4'>
          <ul className='flex gap-2'>
            <li>
              <Link
                href={'/'}
                className={`block border border-gray-400 rounded-md py-1 px-4 hover:bg-black/95 hover:text-white transition-colors cursor-pointer ${isActive(
                  '/'
                )}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={'/shop'}
                className={`block border border-gray-400 rounded-md py-1 px-4 hover:bg-black/95 hover:text-white transition-colors cursor-pointer ${isActive(
                  '/shop'
                )}`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={'/foods'}
                className={`block border border-gray-400 rounded-md py-1 px-4 hover:bg-black/95 hover:text-white transition-colors cursor-pointer ${isActive(
                  '/foods'
                )}`}
              >
                Foods
              </Link>
            </li>
            <li>
              <Link
                href={'/contact'}
                className={`block border border-gray-400 rounded-md py-1 px-4 hover:bg-black/95 hover:text-white transition-colors cursor-pointer ${isActive(
                  '/contact'
                )}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile devices */}
        <div className='relative md:hidden'>
          <button
            onClick={() => isToggle(!toggle)}
            className='ml-2 mt-2 border px-3 py-1 rounded-full text-2xl bg-black/90 text-white'
          >
            {toggle === false ? 'O' : 'X'}
          </button>
          <ul
            className={`absolute flex flex-col gap-1 m-2 bg-amber-100 px-10 py-4 rounded-md shadow-sm ${
              toggle === false ? '-left-40' : '-left-2'
            }`}
          >
            <Link href={`/`} className={`${isActive('/')}`}>
              Home
            </Link>
            <Link href={`/shop`} className={`${isActive('/shop')}`}>
              Shop
            </Link>
            <Link href={`/foods`} className={`${isActive('/foods')}`}>
              Foods
            </Link>
            <Link href={`/contact`} className={`${isActive('/contact')}`}>
              Contact
            </Link>
          </ul>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
