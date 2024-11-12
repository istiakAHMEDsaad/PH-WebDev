import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center' id='error-page'>
      <h1 className='text-4xl font-bold'>404 page not found!</h1>
      <p className='text-gray-500'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='text-red-500'>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
