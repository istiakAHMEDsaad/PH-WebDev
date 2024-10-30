import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='text-xl flex gap-4'>
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
