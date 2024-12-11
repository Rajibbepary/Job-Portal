import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router/router.jsx'
import "./index.css";
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ToastContainer />
        <RouterProvider router={router} />
  </StrictMode>,
)
