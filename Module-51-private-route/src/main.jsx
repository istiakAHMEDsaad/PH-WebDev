import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </HelmetProvider>
  </StrictMode>
);
