import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../Home/Home";
import Annotation from "../Annotation.js"
import Form from "../Form/Form";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/home",
      element: <Home/>,
    },
    {
        path:"/annotation",
        element:<Annotation></Annotation>
    },
    {
      path:"/form",
      element:<Form></Form>
    }
    
  ]);
  
  export default routes;