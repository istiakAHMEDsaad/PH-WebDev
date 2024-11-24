import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import MainLayout from '../Layout/MainLayout';
import Home from '../Components/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        }
      ]
    },
  ]);
export default router;
