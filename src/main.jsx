import React from 'react'
import ReactDOM from 'react-dom/client'
 import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Header/Home';
import About from './Component/About/About';
import Contact from './Component/Contact';
import Users from './Component/Users';
const router=createBrowserRouter([
  {
    path :'/',
    element: <Home/>,
    children : [
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/Users',
        element:<Users></Users>
      }
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </React.StrictMode>,
)
