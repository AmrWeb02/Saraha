import React from 'react'
import { Box, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import SubmitBtn from './SubmitBtn'
import { FaChevronLeft } from "react-icons/fa6";

const ResetGuide = ({imglogo, title, subtitle, label, children}) => {
  return (
    <>
    <CardMedia sx={{ width: {xs:"150px", md:"220px"}, height: {xs:"150px", md:"220px"} }} image={imglogo} title="Check mark"/>
    <CardContent>
     <Typography component="h5" variant="h5" align="center" sx={{fontWeight:"bolder",}}>{title}</Typography>
     <Typography component="p" align="center">{subtitle}</Typography>
     </CardContent>
     {children}
    <CardActions sx={{display:"flex", flexDirection:"column",}}>
    <SubmitBtn label={label} classProp="extraMargin"/>
        <NavLink to="/" className="bigWidth"> <FaChevronLeft style={{verticalAlign:"text-bottom"}}/> Back to login</NavLink>
    </CardActions>   
    </>

    )
}

export default ResetGuide