import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import phone from '../../public/phone.png'
const MsgContainer = ({title,subtitle}) => {
  return (
    <>
    <Box sx={{height:"200px", display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center", backgroundColor:"#B3FBA9", margin:"40px", padding:"0px 20px" }}>
        <Box component="div">
            <Typography component="h3" variant="h3" sx={{fontSize: {xs:"1rem",sm:"2rem", md:"2.5rem", lg:"3rem"}}}>{title}</Typography>
            <Typography component="h5" variant="h5" sx={{fontSize: {sm:"0.9rem", md:"1rem", lg:"1.5rem"}}}>{subtitle}</Typography> 
        </Box>
        <Box component="img" src={phone} alt={phone} sx={{ width: {sm:"60px", md:"80px", lg:"100px"}, height:{sm:"60px", md:"80px", lg:"100px"}}}></Box>
    </Box>
    </>
  )
}

export default MsgContainer