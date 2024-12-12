import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import ContexProvider from './provider/ContexProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContexProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContexProvider>
  </StrictMode>
);
