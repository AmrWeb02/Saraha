import { useState } from 'react'

import './App.css'

import {NavLink, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'
// Pages
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
// Component
import NavigationBar from './Layout/GirdLayout'

const theme = createTheme({
  palette:{
    primary:{
      main:"#D4E7C5",
      light:"#E1F0DA",
      dark:"#A6C88B",
      accent:"#B3FBA9",
      extra:"#BFD8AF",
      white:"#ffffff",
      inputColor:"#F6F9F4",
    },
    secondary:{
      main:"#A2AE6A",

    }
  }
})
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<NavigationBar/>}>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Route>
    )
  )
  return (
    <>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
    </>
  )
}

export default App
