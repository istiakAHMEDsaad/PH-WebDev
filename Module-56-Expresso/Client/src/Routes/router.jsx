import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import MainLayout from '../Layout/MainLayout';
import AddCoffee from '../Pages/AddCoffee';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/add-coffee",
          element: <AddCoffee></AddCoffee>,
        },
      ]
    },
    
  ]);

export default router;
