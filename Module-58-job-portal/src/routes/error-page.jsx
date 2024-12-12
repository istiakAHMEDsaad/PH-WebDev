import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="lg:text-6xl md:text-4xl text-3xl">404 Page not found!</h1>
      <p className="lg:text-2xl text-gray-500">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-600">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
