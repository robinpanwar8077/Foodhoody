import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Menu from './components/Menu';
import { Provider } from 'react-redux';
import { store } from './store'
import{ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import CartBag from './components/CartBag';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/signup",
    element:<SignUp/>
  },
  {
    path: "/home",
    element:<Home/>
  },
  {
    path: "/menu",
    element:<Menu/>
  },
  {
    path: "/cart",
    element:<CartBag/>
  },
 
]);
const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer/>
    <RouterProvider router={router} />
    </Provider>
  )
}

export default App
