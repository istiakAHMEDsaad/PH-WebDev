// @ts-nocheck
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isActive ? 'btn bg-blue-500 text-white' : isPending ? 'pending' : 'btn btn-ghost'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={'/findJob'}
        className={({ isActive, isPending }) =>
            isActive ? 'btn bg-blue-500 text-white' : isPending ? 'pending' : 'btn btn-ghost'
          }
        >Find a Job</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow'
            >
              {navLink}
            </ul>
          </div>
          <img src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/template/jobhub-logo.svg" className='lg:w-28 w-20 object-cover' alt="" />
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLink}</ul>
        </div>
        <div className='navbar-end'>
          <button className='btn btn-ghost underline'>Register</button>
          <Link to={'/login'} className='btn bg-blue-500 text-white'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
