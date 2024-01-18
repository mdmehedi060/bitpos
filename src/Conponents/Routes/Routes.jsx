import Login from '../Pages/Login/Login';
import Main from './../../Layouts/Main';

import {createBrowserRouter} from "react-router-dom";
import Registation from './../Pages/Registation/Registation';
import Home from '../Pages/Home/Home';
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: () => fetch("/menu.json"),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
  
        {
          path: "/register",
          element: <Registation></Registation>,
        },
      ]
    },
  ]);

