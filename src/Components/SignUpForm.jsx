import React from 'react'
// Styles
import { styleObj } from './LoginForm'
// Components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SubmitBtn from './SubmitBtn.jsx'
const SignUpForm = () => {
  return (
    <Box component="form" autoComplete='false' style={{display:"flex", flexDirection:"column",alignItems:"center",}}>
    <TextField label="Username" variant="outlined" type="text"
                required
                sx={styleObj}
                style={{marginBottom:"15px", width:"300px"}}/>
    <TextField label="Email" variant='outlined'
               required
               sx={styleObj}
               style={{marginBottom:"15px", width:"300px"}}
    />
    <TextField label="Phone" variant="outlined" type="number"
                required
                sx={styleObj}
                style={{marginBottom:"15px", width:"300px"}}/>
    <TextField label="Password" variant='outlined'
               required
               type="password"
               sx={styleObj}
               style={{marginBottom:"15px", width:"300px"}}
    />
    <SubmitBtn label="SignUp"/>
  </Box>  )
}

export default SignUpForm