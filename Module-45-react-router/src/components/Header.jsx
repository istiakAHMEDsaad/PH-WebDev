import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaX } from 'react-icons/fa6';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=''>
      <div onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-xl'>
        {menuOpen === true ? <FaX></FaX> : <FaBars></FaBars> }
      </div>

      {/* md:static md:block */}
      <nav className={`${menuOpen ? '' : 'hidden md:block'} text-xl md:static flex flex-col md:flex-row space-y-1 md:space-x-2 md:items-center`}>
        <Link className='hover:text-rose-500' to={'/home'}>
          Home
        </Link>
        <Link className='hover:text-rose-500' to={'/users'}>
          Users
        </Link>
        <Link className='hover:text-rose-500' to={'/drinks'}>
          Drinks
        </Link>
        <Link className='hover:text-rose-500' to={'/about'}>
          About
        </Link>
        <Link className='hover:text-rose-500' to={'/contact'}>
          Contact
        </Link>
        <Link className='hover:text-rose-500' to={'/test'}>
          Test
        </Link>
      </nav>
    </div>
  );
};

export default Header;
