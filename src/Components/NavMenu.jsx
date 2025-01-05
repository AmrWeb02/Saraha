import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavMenu.css'

import Box from '@mui/material/Box'
import { useState } from 'react'
const NavMenu = () => {
    const [indicatorPos, setIndicatorPos] = useState(0);

    const moveHandler = (pos) => {
        setIndicatorPos(pos);
    }
  return (
    <>
    <Box component="div" sx={{backgroundColor:"primary.extra"}} style={{width:"210px", height:"50px", borderRadius:"20px", display:"flex", justifyContent:"space-between",alignItems:"center", position:'relative'}}>
        <div className="indicator" style={{left:`${indicatorPos}px`}}></div>
        <NavLink to='/' onClick={()=>{moveHandler(0)}}>Login</NavLink>
        <NavLink to='/signup' onClick={()=>{moveHandler(105)}}>SignUp</NavLink>  
    </Box>
    </>
  )
}

export default NavMenu