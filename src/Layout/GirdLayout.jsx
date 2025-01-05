import React from 'react'
// Image
import phonemsg from '../../public/phonemsg.png'
// Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import NavMenu from '../Components/NavMenu'
import { Outlet } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <Grid container direction="row" sx={{height:"100vh",backgroundColor:"grey",'@media (max-width:599px)': { height: 'auto' },}}>
        
        <Grid size={{xs:12, sm:4}} sx={{backgroundColor:"primary.dark", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Box sx={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center", marginBottom:"40px"}}>
                <Box component="img" src={phonemsg} alt="people texting" sx={{width: { xs: '200px', sm:'210px', md:'380px'}, }}></Box>
                <NavMenu/>
            </Box>
        </Grid>
        
        <Grid size={{xs:12,sm:8}} sx={{minHeight:"600px",backgroundColor:"primary.main",}}>
            <Outlet/>
        </Grid>

    </Grid>
    </>
  )
}

export default Login