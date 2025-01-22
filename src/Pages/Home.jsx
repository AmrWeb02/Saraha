import React,{useState} from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import { Box } from '@mui/material'
// Icon
import { FaLink } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
const Home = () => {
    const userData = useLoaderData();
    const messages = userData.messages;
    console.log(messages);
    // const id = userData._id;
    // console.log(id);
    // const getUserName = async () =>{
    //     try{
    //         const response = await fetch(`http://ec2-3-220-251-57.compute-1.amazonaws.com/user/${id}/profile`,{
    //             method: "GET"
    //         })
    //         if(response.ok){
    //             const dat = await response.json();
    //             window.localStorage.setItem("userName",dat.data.user.userName);
    //             // console.log(dat.data.user);
    //         }
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    // getUserName();
  return (
    <>
    <Box component="div" sx={{display:"flex", justifyContent:"center",height:"100%",}}>
        <Box component="div" sx={{backgroundColor:"white",padding:"20px", width:"20%",}}>

        </Box>
        <Box component="div" sx={{backgroundColor:"gray",padding:"20px", width:"80%",}}>

</Box>
      </Box>
    <ToastContainer position="bottom-right" theme="light" style={{width:"70%"}}/>
    </>
  )
}

export default Home

