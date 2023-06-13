import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
import { ToastContainer, toast } from 'react-toastify';
import PrivateRoute from './Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

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
        path: '/chef/:id',
        element: <PrivateRoute><SingleSpecific></SingleSpecific></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthProvider>
    
        <RouterProvider router={router} />
      
    </AuthProvider>
  </React.StrictMode>,
)
