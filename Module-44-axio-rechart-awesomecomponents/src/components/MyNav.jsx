import { useState } from 'react';
import Link from './Link';
import { FaBars, FaX } from 'react-icons/fa6';

const MyNav = () => {
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: './about', name: 'About' },
    { id: 3, path: './services', name: 'Services' },
    { id: 4, path: './contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='md:container mx-auto md:py-4'>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className='md:hidden text-xl bg-amber-300 p-4 md:p-0'
      >
        {openMenu === true ? <FaX></FaX> : <FaBars></FaBars>}
      </div>

      <ul
        className={`${
          openMenu ? '' : 'hidden '
        } md:flex md:flex-row md:gap-y-0 gap-y-3 md:gap-x-4 absolute md:static bg-white/90 md:w-0 md:p-0 p-5 text-center w-full rounded-md md:bg-white`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default MyNav;
