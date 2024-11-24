import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import './index.css';
import MyProvider from './Provider/MyProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
      <RouterProvider router={router}></RouterProvider>
    </MyProvider>
  </StrictMode>
);
