// CSS imports
import './App.css'
// React-router-dom imports
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom'
// Material UI imports
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'
// Pages
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import EmailConfirm from './Pages/EmailConfirm'
import ForgotPassword from './Pages/ForgotPassword'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import TargetUser from './Pages/TargetUser'
import NotFound from './Pages/NotFound'
// Layout
import NavigationBar from './Layout/GirdLayout'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { MainLayout } from './Layout/MainLayout'
import PasswordChange from './Pages/PasswordChange'
// Loaders
export const profileLoader = async () =>{
  try{
    const response = await fetch('https://free.saraha.site/user/userProfile',{
      method: "GET",
      headers:{
          "Authorization" : "Barrer " + window.localStorage.getItem("token"),
      }
  });
    if(response.ok){
      const ResponseData = await response.json();
      // console.log(ResponseData.data.user);
      return ResponseData.data;
    }
    else{
      return undefined;
    }
  }
  catch(err){
    console.log("test",err);
  }
}
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
      <Route element={<ProtectedRoute/>}>
      {/* Any route here is protected */}
        <Route element={<MainLayout/>} >
          <Route path="/profile" loader={profileLoader} element={<Profile/>}/>
          <Route path="/profile-password" element={<PasswordChange/>}/>
          <Route path="/Home" loader={profileLoader} element={<Home/>}/>
        </Route>
      </Route>
      <Route path="/:userName/:id" element={<TargetUser/>}/>
      <Route path="*" element={<NotFound/>}/>

      </>

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
