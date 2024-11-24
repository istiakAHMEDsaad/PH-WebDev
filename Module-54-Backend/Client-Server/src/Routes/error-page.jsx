import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>
        404 Error, Page not found!
      </h1>
      <p
        style={{
          fontStyle: 'italic',
          color: 'gray',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i style={{ color: 'red', textAlign: 'center', display: 'block' }}>
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
