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
// Send LoginForm
export const sendLogin = async (jsondata) =>{
  try{
    const response = await fetch('http://ec2-3-220-251-57.compute-1.amazonaws.com/auth/login',{
      method: "POST",
      body: JSON.stringify(jsondata),
      headers: {
        "Content-type": "application/json",
      },
    })
    if(!response.ok){
      const errorDetails = await response.json();
      return errorDetails.validationError; 
    }
  }
  catch(err){
    console.log(`Failed to connect to the: ${err}`)
  }
}
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
      <Route path='/' element={<NavigationBar/>}>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Route>
    ), { basename: '/Saraha' }
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
