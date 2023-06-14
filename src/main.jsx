import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main.jsx';
import Home from './page/Home/Home/Home.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import SignUp from './page/SignUp/SignUp.jsx';
import Login from './page/Login/Login.jsx';
import SingleSpecific from './page/SingleSpecific/SingleSpecific.jsx';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Error from './page/Error/Error.jsx';
import Blog from './page/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'blog',
        element: <Blog></Blog>

      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'chef/:id',
        element: <PrivateRoute><SingleSpecific></SingleSpecific></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-server-alpha.vercel.app/chef/${params.id}`)
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
      <ToastContainer />
  </React.StrictMode>,
)
