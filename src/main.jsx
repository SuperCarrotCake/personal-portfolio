import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import DashBoard from './pages/DashBoard.jsx';

const router = createBrowserRouter([{
  path: '/personal-portfolio/',
  element: <HomePage/>
},{
  path: '/personal-portfolio/dashboard/',
  element: <DashBoard/>
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
