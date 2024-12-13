// @ts-nocheck
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';
import { toast, Slide } from 'react-toastify';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success('Logout Successfull!', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode) {
          toast.error('Something Wrong!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
          });
        }
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn bg-blue-500 text-white'
              : isPending
              ? 'pending'
              : 'btn btn-ghost'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/findJob'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn bg-blue-500 text-white'
              : isPending
              ? 'pending'
              : 'btn btn-ghost'
          }
        >
          Find a Job
        </NavLink>
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
          <img
            src='https://jobbox-nextjs-v3.vercel.app/assets/imgs/template/jobhub-logo.svg'
            className='lg:w-28 w-20 object-cover'
            alt=''
          />
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLink}</ul>
        </div>
        <div className='navbar-end'>
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className='btn bg-blue-500 text-gray-100'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={'/register'} className='btn btn-ghost underline'>
                Register
              </Link>
              <Link to={'/login'} className='btn bg-blue-500 text-white'>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
