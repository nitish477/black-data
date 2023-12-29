import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './view/Home/Home';
import Login from './view/Login/Login';
import Detail from './view/Details/Detail';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/detail',
    element:<Detail/>
  }
])
root.render(
   <RouterProvider router={router} />
);
