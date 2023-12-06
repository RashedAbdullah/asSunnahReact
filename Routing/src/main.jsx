import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import RoutingPage from './Routs/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={RoutingPage}></RouterProvider>
  </React.StrictMode>
)
