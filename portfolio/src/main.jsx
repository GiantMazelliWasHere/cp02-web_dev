import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import Projetos from './pages/Projetos.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,

    children: [
      {path: '/', element: <Home/>},
      {path: 'contato', element: <Contato/>},
      {path: 'projetos', element: <Projetos/>},
      {path: '*', element: <PageNotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
