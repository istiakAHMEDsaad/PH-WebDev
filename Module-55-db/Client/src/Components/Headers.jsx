import { NavLink } from 'react-router-dom';

const Headers = () => {
  const nav = (
    <>
      <li>
        <NavLink
          to={'/'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-success'
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
          to={'/users'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-success'
              : isPending
              ? 'pending'
              : 'btn btn-ghost'
          }
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/about-us'}
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-success'
              : isPending
              ? 'pending'
              : 'btn btn-ghost'
          }
        >
          About Us
        </NavLink>
      </li>
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
            {nav}
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>Client Server</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{nav}</ul>
      </div>
      <div className='navbar-end'>
        <a className='btn btn-ghost' href='https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/' target='_blank'>
          <img
            className='w-10'
            src='https://www.svgrepo.com/show/331488/mongodb.svg'
            alt='mongodb logo'
          />
        </a>
      </div>
    </div>
  );
};

export default Headers;
