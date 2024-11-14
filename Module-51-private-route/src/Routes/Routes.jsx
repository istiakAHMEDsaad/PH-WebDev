import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import ErrorPage from './error-page';
import Login from '../Components/Login';
import Register from '../Components/Register';
import PrivateRoutes from './PrivateRoutes';
import Order from '../Pages/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/orders',
        element: <PrivateRoutes><Order></Order></PrivateRoutes>
      }
    ]
  },
]);

export default router;
