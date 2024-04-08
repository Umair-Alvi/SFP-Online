import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Insights from './pages/Insights.jsx'
import Home from './pages/Home.jsx'
import Login from './component/login/Login.jsx'
import Forget from './forget/Forget.jsx'
import ROA from './pages/ROA.jsx'
import FullList from './component/ROA_APP/fullList/FullList.jsx'
import Export from './component/ROA_APP/export/Export.jsx'
import Import from './component/ROA_APP/import/Import.jsx'
import Profile from './pages/Profile.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        
        
        {
            path: "/apps/insights/advisor",
            element: <Insights />,
        },
        
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forget-password",
          element: <Forget />,
        },

        {
          path: "/apps/roa",
          element: <ROA />,
         },

         {
          path: "/apps/roa/list",
          element: <FullList />,
      },
      {
        path: "/apps/roa/export",
        element: <Export />,
      },

    {
      path: "/apps/roa/import",
      element: <Import />,
    },

    {
      path: "/apps/profile",
      element: <Profile />,
     },
        
        
    ],
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
 
  </React.StrictMode>,
)
