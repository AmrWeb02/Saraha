import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import { updateFields } from './Profile';
import { BtnStyles } from '../Components/SubmitBtn';
const PasswordChange = () => {
    const [payLoad, setPayLoad] = useState({oldPassword:"",password:"",confirmationPassword:""});
    const handleInput = (event) =>{
        setPayLoad( prevObj => {return {...prevObj, [event.target.name]:event.target.value}})
      }
  return (
    <>
    <Box component="div" sx={{display:"flex", justifyContent:"center",height:"100%",padding:"25px"}}>
        <Box component="div" sx={{backgroundColor:"white", borderRadius:"20px",padding:"20px", width:"95%",}}>
            <Box componenet="div" sx={{display:"flex", flexDirection:"column"}}>
                <TextField label="Current password" variant='standard'
                           type="password"
                           name='oldPassword'
                           value={payLoad.oldPassword}
                           onChange={(e)=>handleInput(e)}
                        //    onChange={dataEntryHandler}
                        //    onBlur={errorReset}
                        //    error={ErrorData.password}
                        //    helperText={ErrorNames.password}
                />
                <TextField label="New password" variant='standard'
                           type="password"
                           name='password'
                           value={payLoad.password}
                           onChange={(e)=>handleInput(e)}

                />
                <TextField label="Confirm new password" variant='standard'
                           type="password"
                           name='confirmationPassword'
                           value={payLoad.confirmationPassword}
                           onChange={(e)=>handleInput(e)}
                />
                <Box component="input" type="submit" value="Update" sx={{...BtnStyles,margin:"20px auto", display:'flex', width:'200px'}}
                onClick={()=>{updateFields("https://saraha-app-eight.vercel.app/user/update-password",payLoad)}}/>
            </Box>
        </Box>
    </Box>
    <ToastContainer position="bottom-right" theme="light" style={{width:"70%"}}/>

    </>
  )
}

export default PasswordChange