import { NavLink } from 'react-router-dom';

const Header = () => {
  const navBar = (
    <>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isActive ? 'btn btn-info' : isPending ? 'pending' : 'btn  btn-ghost'
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive, isPending }) =>
          isActive ? 'btn btn-info' : isPending ? 'pending' : 'btn  btn-ghost'
        }
      >
        Login
      </NavLink>
      <NavLink
        to='/register'
        className={({ isActive, isPending }) =>
          isActive ? 'btn btn-info' : isPending ? 'pending' : 'btn  btn-ghost'
        }
      >
        Register
      </NavLink>
      <NavLink
        to='/signup'
        className={({ isActive, isPending }) =>
          isActive ? 'btn btn-info' : isPending ? 'pending' : 'btn  btn-ghost'
        }
      >
        Sign Up
      </NavLink>
    </>
  );

  return (
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
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            {navBar}
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>Login Form</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navBar}</ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>Button</a>
      </div>
    </div>
  );
};

export default Header;
