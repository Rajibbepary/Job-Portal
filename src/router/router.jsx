import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout/>,
      errorElement: <h2>Route is not found</h2>,
       children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"register",
            element: <Register></Register>
        }
       ]
    },
  ]);
  export default router;