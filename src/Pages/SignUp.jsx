import React from 'react'
import MsgContainer from '../Components/MsgContainer'
import SignUpForm from '../Components/SignUpForm'
import Box from '@mui/material/Box'

const SignUp = () => {
  return (
    <>
    <Box component="div" sx={{backgroundColor:"primary.light", margin:"20px", paddingBottom:"35px"}}>
      <MsgContainer title="Sign Up to Saraha!" subtitle="Start sending messages anonymously"/>
      <SignUpForm/>
    </Box>
    </>

  )
}

export default SignUp