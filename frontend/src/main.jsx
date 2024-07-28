import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import IndivState from './components/IndivState/IndivState.jsx'
import Party from './components/Parties/Parties.jsx'


let router=createBrowserRouter(createRoutesFromElements(
  <>
     <Route path='/' element={<App/>}>
    <Route path='/Official' element={<Home/>}/>
    <Route path='/State/:state' element={<IndivState/>}/>
    <Route path='/votes/:state/:district' element={<Party/>}/>
  </Route>


  </>

))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
