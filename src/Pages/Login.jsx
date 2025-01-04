import React from 'react'
// Image
import phonemsg from '../../public/phonemsg.png'
// Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
const Login = () => {
  return (
    <>
    <Grid container direction="row" sx={{height:"100vh",backgroundColor:"grey",'@media (max-width:599px)': { height: 'auto' },}}>
        
        <Grid size={{xs:12, sm:6}} sx={{height:"100%",backgroundColor:"green", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Box sx={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
                <Box component="img" src={phonemsg} alt="people texting" sx={{width: { xs: '200px', sm:'300px', md:'414px'}, }}></Box>
                <Box component="div">
                    <button>Login</button>
                    <button>SignUp</button>
                </Box>
            </Box>
        </Grid>
        
        <Grid size={{xs:12,sm:6}} sx={{height:"100%",backgroundColor:"darkgreen"}}>
            <Box sx={{display:"flex", justifyContent:"center"}}>Right</Box>
        </Grid>
    </Grid>
    </>
  )
}

export default Login