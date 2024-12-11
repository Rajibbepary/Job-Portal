import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router/router.jsx'
import "./index.css";
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import AuthProvider from './context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ToastContainer />
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </StrictMode>,
)
