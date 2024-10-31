import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaX } from 'react-icons/fa6';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='mt-2'>
      <div onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-xl'>
        {menuOpen === true ? <FaX></FaX> : <FaBars></FaBars> }
      </div>

      {/* md:static md:block */}
      <nav className={`${menuOpen ? '' : 'hidden md:block'} text-xl md:static flex flex-col md:flex-row space-y-1 md:space-x-2 md:items-center`}>
        <NavLink className={`customButtonOne`} to={'/home'}>
          Home
        </NavLink>
        <NavLink className={`customButtonOne`} to={'/users'}>
          Users
        </NavLink>
        <NavLink className={`customButtonOne`} to={'/drinks'}>
          Drinks
        </NavLink>
        <NavLink className={`customButtonOne`} to={'/about'}>
          About
        </NavLink>
        <NavLink className={`customButtonOne`} to={'/contact'}>
          Contact
        </NavLink>
        <NavLink className={`customButtonOne`} to={'/test'}>
          Test
        </NavLink>
      </nav>

      <hr className='border-b border-2 border-black/60 mt-5' />

    </div>
  );
};

export default Header;
