import { useState } from 'react'

import './App.css'

import {NavLink, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'
// Pages
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import EmailConfirm from './Pages/EmailConfirm'
import ForgotPassword from './Pages/ForgotPassword'
// Layout
import NavigationBar from './Layout/GirdLayout'
// Send Login AND signUp data
export const sendData = async (url,jsondata) =>{
  try{
    const response = await fetch(url,{
      method: "POST",
      body: JSON.stringify(jsondata),
      headers: {
        "Content-type": "application/json",
      },
    })
    if(!response.ok){
      const errorDetails = await response.json();
      console.log(errorDetails);
      if(errorDetails.message !== 'validation error'){
        return [errorDetails];
      }
      else{
        return errorDetails.validatoinError;
      }
    }
    else{
      const errorDetails = await response.json();
      console.log('successMessage' in errorDetails);
      return errorDetails;
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
  },
  components:{
    MuiStepLabel:{
      styleOverrides:{
        label:{
          "&.Mui-active":{
            fontWeight:"bold",
            color:"green",
          },
          "&.Mui-completed":{
            color:"green",
          },
        }
      },
    },
    MuiStepIcon:{
      styleOverrides:{
        root:{
          fontSize:"2rem",
          "&.Mui-active":{
          },
          "&.Mui-completed":{
            color:"green",
          },
        }
      },
    },
  }
})
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<NavigationBar/>}>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Route>
      <Route path='/email-confirmation/confirmEmail/*' element={<EmailConfirm/>}/>   
      <Route path='/forgot-password' element={<ForgotPassword/>}/>   
      </>

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
