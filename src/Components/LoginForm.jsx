import React from 'react'
// Components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SubmitBtn from './SubmitBtn.jsx'
export const styleObj = {
  backgroundColor:"primary.inputColor",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "gray", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.dark", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "green", // Border color when focused
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray", // Default label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "green", // Label color when focused
                    },
}
const LoginForm = () => {

  return (
    <>
      <Box component="form" autoComplete='false' style={{display:"flex", flexDirection:"column",alignItems:"center",}}>
        <TextField label="Email" variant='outlined'
                   required
                   sx={styleObj}
                   style={{marginBottom:"15px", width:"300px"}}
        />
        <TextField label="Password" variant='outlined'
                   required
                   type="password"
                   sx={styleObj}
                   style={{marginBottom:"15px", width:"300px"}}
        />
        <SubmitBtn label="Login"/>
      </Box>
    </>
  )
}

export default LoginForm