import React from 'react';
import "./App.css"
import { RouterProvider } from 'react-router-dom';
import routes from './components/routes/routes';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div  >
      <Toaster></Toaster>
        <RouterProvider router={routes} > </RouterProvider>
    </div>
  );
};

export default App;

