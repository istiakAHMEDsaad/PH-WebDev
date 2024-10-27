import Link from './Link';

const MyNav = () => {
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: './about', name: 'About' },
    { id: 3, path: './services', name: 'Services' },
    { id: 4, path: './contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' },
  ];
  return (
    <nav>
      <ul className='flex flex-col md:flex-row gap-4'>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default MyNav;
