import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-4xl">404! Error</h1>
      <p className="text-lg text-gray-500">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-500">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
