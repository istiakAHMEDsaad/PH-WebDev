import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import MainLayout from '../Layout/MainLayout';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
    },
  ]);

export default router;
