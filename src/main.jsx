import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router=createBrowserRouter([
  {
    path :'/',
    element: <div>Hello from react Router!!</div>
  },
  {
    path :'/about',
    element: <div>I am From About Page</div>
  },
  {
    path :'/contact',
    element: <div>I am From Contact Page</div>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </React.StrictMode>,
)
