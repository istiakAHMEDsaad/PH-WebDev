import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { element } from "prop-types";
import ErrorPage from "./error-page";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Test from "./components/Test.jsx";
import Users from './components/Users.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/test',
        element: <Test></Test>
      },
    ]
  },
  {
    path: '/test',
    element: <Test></Test>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/test/test1',
        element: <p>Test 1</p>,
      },
      {
        path: '/test/test2',
        element: <p>Test 2</p>
      }
    ]
  },
  {
    path: "header",
    element: <Header></Header>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
