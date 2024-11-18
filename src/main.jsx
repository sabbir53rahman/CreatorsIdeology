import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Layout/Main';
import Home from './components/Home/Home'
import Study from './components/Study/Study'
import Contact from './components/Contact/Contact'
import Creator from './components/Creator/Creator';
import About from './components/About/About';
import './fonts/fonts.css';
import Ekster from './components/Ekster/Ekster';
import Fum from './components/Fum/Fum';
import Rskoso from './components/Rskoso/Rskoso';
import Scribe from './components/Scribe/Scribe';
import Growth from './components/Growth/Growth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/study',
        element: <Study/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      },
      {
        path: '/Creator',
        element: <Creator/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/ekster',
        element: <Ekster/>
      },
      {
        path: '/fum',
        element: <Fum/>
      },
      {
        path: '/koso',
        element: <Rskoso/>
      },
      {
        path: '/scribe',
        element: <Scribe/>
      },
      {
        path: '/growth',
        element: <Growth/>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
