import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='flex flex-col w-full h-screen items-center justify-center gap-y-2'>
      <h1 className='font-bold lg:text-5xl md:text-4xl text-3xl'>404 Page not found!</h1>
      <p className='text-gray-500'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='text-red-500'>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
