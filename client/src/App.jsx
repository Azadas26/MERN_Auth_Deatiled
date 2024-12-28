import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import FirstPage from './pages/FirstPage'
import EmailVerification from './pages/EmailVerification'
import ResetPassword from './pages/ResetPassword'

const App = () => {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      children:[
        {
          path:"/",
          element:<FirstPage/>
        },
        {
          path:"/email-verify",
          element:<EmailVerification/>
        },
        {
          path:"/reset-password",
          element:<ResetPassword/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>,
    }
  ])

  return  <RouterProvider router={appRouter}/>
}

export default App