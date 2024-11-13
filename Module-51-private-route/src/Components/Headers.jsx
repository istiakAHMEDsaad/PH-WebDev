import { NavLink } from 'react-router-dom';

const Headers = () => {
  const links = <>
    <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isActive
                  ? 'btn btn-accent'
                  : isPending
                  ? 'pending'
                  : 'btn btn-ghost'
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/login'
              className={({ isActive, isPending }) =>
                isActive
                  ? 'btn btn-accent'
                  : isPending
                  ? 'pending'
                  : 'btn btn-ghost'
              }
            >
              Login
            </NavLink>
            <NavLink
              to='/register'
              className={({ isActive, isPending }) =>
                isActive
                  ? 'btn btn-accent'
                  : isPending
                  ? 'pending'
                  : 'btn btn-ghost'
              }
            >
              Register
            </NavLink>
  </>

  return (
    <div className='navbar bg-base-100'>
      {/* ---------- Navbar Start ---------- */}
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
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            {links}
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>Custom Routes</a>
      </div>

      {/* ---------- Navbar Center ---------- */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 lg:space-x-1'>
        {links}
        </ul>
      </div>

      {/* ---------- Navbar End ---------- */}
      <div className='navbar-end'>
        <img
          className='w-10'
          src='https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png'
          alt='firebase logo'
        />
      </div>
    </div>
  );
};

export default Headers;
