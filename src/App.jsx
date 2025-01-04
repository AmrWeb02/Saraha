import { useState } from 'react'

import './App.css'

import {NavLink, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

// Pages
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
