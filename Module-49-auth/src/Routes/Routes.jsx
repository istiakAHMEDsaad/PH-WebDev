import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from './error-page';
import Home from '../Pages/Home';
import About from '../Pages/About';
import ContactUs from '../Pages/ContactUs';
import Login from '../Pages/Login';

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
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact-us',
            element: <ContactUs></ContactUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
    ]
  },
]);

export default router;
