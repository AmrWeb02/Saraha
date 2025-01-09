import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Card, CardMedia, CardContent, CardActions, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import success from '../assets/SuccessMark.png'
import '../Components/NavMenu.css'
const EmailConfirm = () => {
  const location = useLocation();
  const indexStart = location.pathname.lastIndexOf('/');
  const token = location.pathname.substring(indexStart+1);
  console.log(location.pathname);
  const SendConfirmationToken = async (token) =>{
    const response = await fetch('http://ec2-3-220-251-57.compute-1.amazonaws.com/auth/confirm-email',{
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
        "Authorization" : token,
      },
    })
  }
  setTimeout(() => {
    SendConfirmationToken(token);
    console.log("Token is sent");
  }, 500);
  return (
    <>
     <Box component="div" sx={{backgroundColor:"primary.main", width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center",}}>
      <Card sx={{position:"relative",backgroundColor:"primary.light", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", padding:"40px 0", width: {xs:"300px",sm:"600px", md:"800px"} }}>
       <CardMedia sx={{ width: {xs:"180px", md:"300px"}, height: {xs:"180px", md:"300px"} }} image={success} title="Check mark"/>
       <CardContent>
        <Typography component="h5" variant="h5" align="center" sx={{fontWeight:"bolder",}}>Email Confirmed</Typography>
        <Typography component="p" align="center">Congratulations!</Typography>
        <Typography component="p" align="center">You can now login to your account.</Typography>

       </CardContent>
       <CardActions>
        <NavLink to='/' className='emailBtn' style={{marginBottom:"25px"}}>Login</NavLink>
       </CardActions>
       <Box component="div" sx={{backgroundColor:"primary.accent"}} style={{width:"100%", height:"50px", position:"absolute",bottom:"0px"}}></Box>
     </Card>
     </Box>
    </>
  )
}

export default EmailConfirm