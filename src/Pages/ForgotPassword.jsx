import React, {useState} from 'react'
// Components
import { Box, Card, TextField } from '@mui/material'
import ResetGuide from '../Components/ResetGuide.jsx'
import OtpInput from '../Components/OtpInput.jsx'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// Images
import forgot from '../assets/forgot.png'
import lock from '../assets/lock.png'
import mail from '../assets/mail.png'
// Styles
import { styleObj } from '../Components/LoginForm.jsx'
const ForgotPassword = () => {
    const [stepNumber, setStepNumber] = useState(0);
    const [resetData, SetResetData] = useState({
        email:"",
        OTP: Array(4).fill(""),
        password:"",
        confirmedPass:"",
    });
    const steps = ['Request', 'OTP', 'New Password'];
    const InputHandler = (e) =>{
        SetResetData((prevObj) => {return {...prevObj, [e.target.name]:[e.target.value]}});
    }
    return (
    <>

    <Box component="div" sx={{backgroundColor:"primary.main", width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center",}}>

    <Card sx={{position:"relative",backgroundColor:"primary.light", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", padding:"40px 0", width: {xs:"300px",sm:"600px", md:"800px"} }}>
    <Stepper activeStep={stepNumber} sx={{width:"100%",}}>
            {steps.map((label) => {return (
                <Step key={label}>
                    <StepLabel>
                        {label}
                    </StepLabel>
                </Step>)})}
        </Stepper>
        {stepNumber===0 && <ResetGuide imglogo ={forgot} title="Forgot Password" subtitle="We'll send you reset instructions through email" label="Reset">
            <TextField label="Enter your email" type='email' sx={{...styleObj, width:"300px"}} name="email" value={resetData.email} onChange={(e)=>{InputHandler(e)}}/>
        </ResetGuide>}
        {stepNumber===1 && <ResetGuide imglogo ={mail} title="Password Reset" subtitle="Put the code we sent to your email" label="Continue">
            <OtpInput data={resetData} setData = {SetResetData}/>
        </ResetGuide>}
        {stepNumber===2 && <ResetGuide imglogo ={lock} title="Set new password" label="Reset Password">
            <TextField label="Password" type="password" name="password" value={resetData.password} onChange={(e)=>{InputHandler(e)}} sx={{...styleObj, width:"300px",marginBottom:"20px",}}/>
            <TextField label="Confirmed Password" type="password" name="confirmedPass" value={resetData.confirmedPass} onChange={(e)=>{InputHandler(e)}} sx={{...styleObj, width:"300px"}}/>
        </ResetGuide>}
       <Box component="div" sx={{backgroundColor:"primary.accent"}} style={{width:"100%", height:"50px", position:"absolute",bottom:"0px",}}></Box>
     </Card>
    </Box>  
    </>
  )
}

export default ForgotPassword