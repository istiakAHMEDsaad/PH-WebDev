import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Signup from '../Components/Signup';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
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
          path: '/signup',
          element: <Signup></Signup>
        }
    ]
  },
]);

export default router;
