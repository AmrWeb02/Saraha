import React, {useState} from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import '../Components/NavMenu.css';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import logo from '../assets/logomsg.png'
export const MainLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () =>{
    setDrawerOpen( prev => !prev);
  }
  return (
    <>
    <Grid container direction="row" >
        <Grid size={{xs:12}} sx={{backgroundColor:"primary.dark"}}>
        <AppBar position="static" sx={{height:{xs:"73px", md:"98px"}}}>
          <Toolbar sx={{justifyContent:"space-between"}}>
            <Box component="img" src={logo} alt="logo" sx={{width:{xs:"90px",md:"120px"}, height:{xs:"73px", md:"98px"}}}/>
            {/* <Typography variant="h6" sx={{ flexGrow: 1,}}>
              Saraha
            </Typography> */}
            {/* Desktop Navigation */}
            <Box sx={{ width:"500px", height:"100%", display: { xs: "none", md: "block" } }}>
              <Box component="nav" sx={{height:"100%", display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
              <NavLink to='/profile' className="glassStyle">Profile</NavLink>
              <NavLink to='/home' className="glassStyle">Home</NavLink>
              <NavLink to='/' onClick={()=>{window.localStorage.removeItem("token")}} className="glassStyle">Sign out</NavLink>
            </Box>
            </Box>
            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              edge="start"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <FiMenu/>
            </IconButton>
          </Toolbar>
        </AppBar>
        </Grid>
        <Grid size={{xs:2}} sx={{height:{xs:"calc(100vh - 73px)", md:"calc(100vh - 98px)"}, background:"linear-gradient(to bottom, #A6C88B, #516244)", display:{xs:"none",md:"block"}, }}>
        <Box component="div" sx={{display:"flex",flexDirection:"Column", height:"100%", padding:"20px"}}>
          <NavLink to='/profile' className="glassStyle" style={{borderRadius:"0",width:"100%", marginBottom:"25px"}}>Profile</NavLink>
          <NavLink to='/home' className="glassStyle" style={{borderRadius:"0",width:"100%"}}>Security</NavLink>
          <NavLink to='/' onClick={()=>{window.localStorage.removeItem("token")}} className="glassStyle" style={{borderRadius:"0",width:"100%", marginTop:"auto"}}>Sign out</NavLink>
        </Box>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            variant="temporary" // Temporary for mobile, use 'permanent' for always visible sidebar
            sx={{
              display: { xs: "block", md: "none" }, // Show on mobile only
              "& .MuiDrawer-paper": {
                width: "250px",
                height: "100%",
                background: "linear-gradient(to bottom, #A6C88B, #516244)",
                position:"absolute",
                top:"74px",
                rowGap:"50px",
              },
            }}
          >
            <nav style={{display:"flex", flexDirection:"column",marginTop:"25px"}}>
            <NavLink to='/profile' className="glassStyle" style={{borderRadius:"0",width:"100%", marginBottom:"25px"}}>Profile</NavLink>
            <NavLink to='/home' className="glassStyle" style={{borderRadius:"0",width:"100%", marginBottom:"25px"}}>Home</NavLink>
            <NavLink to='/login' onClick={()=>{window.localStorage.removeItem("token")}} className="glassStyle" style={{borderRadius:"0",width:"100%", marginBottom:"25px"}}>Sign out</NavLink>
            </nav>

          </Drawer>
        </Grid>
        <Grid size={{xs:13, md:10}} sx={{backgroundColor:"primary.light"}}>
            <Outlet/>    
        </Grid>
    </Grid>
    </>

  )
}
