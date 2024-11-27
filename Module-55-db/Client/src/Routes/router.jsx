import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from './error-page';
import Home from '../Pages/Home';
import Users from '../Pages/Users';
import UpdateUsers from '../Pages/UpdateUsers';

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
        path: '/users',
        element: <Users></Users>,
      },
      {
        path: '/users/:id',
        element: <UpdateUsers></UpdateUsers>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
      },
    ],
  },
]);

export default router;
