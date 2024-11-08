import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='flex flex-col items-center justify-center w-full h-screen gap-y-5'>
      <h1 className='lg:text-5xl text-3xl '>404! Not found</h1>
      <p className='text-xl text-gray-500'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
