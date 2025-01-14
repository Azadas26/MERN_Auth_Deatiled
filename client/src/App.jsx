import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import FirstPage from './pages/FirstPage'
import EmailVerification from './pages/EmailVerification'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';

const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <FirstPage />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/email-verify",
      element: <EmailVerification />
    },
    {
      path: "/reset-password",
      element: <ResetPassword />
    }
  ])

  return <div>
    <ToastContainer />
    <RouterProvider router={appRouter} />
  </div>
}

export default App