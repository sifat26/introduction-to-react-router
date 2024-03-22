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
import Userdetail from './Component/Userdetail.jsx';
import Posts from './Component/Posts.jsx';
import Post from './Component/Post.jsx';
import Postdetail from './Component/Postdetail.jsx';
import ErrorPage from './Component/ErrorPage.jsx';
const router=createBrowserRouter([
  {
    path :'/',
    element: <Home/>,
    errorElement:<ErrorPage></ErrorPage>,
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
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/User/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Userdetail></Userdetail>
      },
      {
        path:'/Posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>

      },
      {
        path:'/Post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<Postdetail></Postdetail>
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
