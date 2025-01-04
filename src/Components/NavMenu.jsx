import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavMenu.css'

import Box from '@mui/material/Box'

const NavMenu = () => {
  return (
    <>
    <Box component="div" style={{backgroundColor:'azure', width:"258px", height:"50px", borderRadius:"20px", display:"flex", justifyContent:"space-between",alignItems:"center"}}>
        <NavLink to='/'>Login</NavLink>
        <NavLink to='/signup'>SignUp</NavLink>  
    </Box>
    </>
  )
}

export default NavMenu