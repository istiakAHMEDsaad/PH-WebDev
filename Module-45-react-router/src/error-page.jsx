import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='w-screen h-screen flex flex-col items-center justify-center bg-[#242424]'
    >
      <h1 className='text-4xl font-bold text-white'>404 Not Found!</h1>
      <p className='text-xl text-gray-200'>
        Sorry, an unexpected error has occurred 😥
      </p>
      <p className='text-lg text-white'>
        <i>{error.statusText || error.message}</i>
        {
          error.status === 404 && <div>
            <h3>Page not found</h3>
            <Link to="/"><button className='bg-amber-500 px-3 py-1 rounded-[4px]'>Go home</button></Link>
          </div>
        }
      </p>
    </div>
  );
}
