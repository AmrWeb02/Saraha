import React from 'react'
import MsgContainer from '../Components/MsgContainer'
import Box from '@mui/material/Box'
import LoginForm from '../Components/LoginForm'
const Login = () => {
  return (
    <>
    <Box component="div" sx={{backgroundColor:"primary.light", margin:"20px", paddingBottom:"35px"}}>
      <MsgContainer title="Welcome back" subtitle="Enter your details below"/>
      <LoginForm/>
    </Box>
    </>
  )
}

export default Login