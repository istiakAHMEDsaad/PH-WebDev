import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import MainLayout from '../Layout/MainLayout';
import AddCoffee from '../Pages/AddCoffee';
import Home from '../Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>,
      },
    ],
  },
]);

export default router;
