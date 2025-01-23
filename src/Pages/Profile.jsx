import React, {useState, useRef} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import { ToastContainer, toast } from 'react-toastify';
// Icons
import { FaEdit } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
// Loader
import { useLoaderData } from 'react-router-dom';
// Styles
import { BtnStyles } from '../Components/SubmitBtn';
export const updateFields = async (url,payLoad) =>{
  try{
    const response = await fetch(url, {
      method:"PATCH",
      headers:{
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-type": "application/json",
      },
      body: JSON.stringify(payLoad),
    })
    if(response.ok){
      console.log("Update success");
      toast.success("Update Success");
    }
    else{
      console.log("Update failed");
      toast.error("Update Failed");
    }
  }
  catch(err){
    console.log(err)
  }
}
const Profile = () => {
  const userData = useLoaderData();
  console.log(userData.user);
  const [userObject, setUserObject] = useState(userData.user);
  const [payLoad, setPayLoad] = useState({userName:userObject.userName,phone:userObject.phone,gender:userObject.gender})
  const [isDisabled, setIsDisabled] = useState(true);
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  console.log(userData);
  console.log(userData.messages.length);
  const handleCopy = async () =>{
    try{
      const promise = await navigator.clipboard.writeText(`http://localhost:5173/Saraha/${userData.user.userName}/${userData.user._id}`);
      toast.info("Link copied to clipboard");
    }
    catch(err){
      toast.error("Failed to copy link");
    }
  }
  const HandleEdit = (inp) =>{
    console.log(inp.current);
      inp.current.disabled = !inp.current.disabled;
      inp.current.focus();
      if(inp.current.node){
        setIsDisabled(prev =>!prev);
      }
  }
  const handleInput = (event) =>{
    setPayLoad( prevObj => {return {...prevObj, [event.target.name]:event.target.value}})
    console.log(event.target);
  }
  return (
    <>
      { !userObject && <Typography variant='h4' color="error" sx={{alignSelf:"center"}}>Error fetching data from the server</Typography>}
      { userObject && <Box component="div" sx={{display:"flex", justifyContent:"center",height:"100%",padding:"25px"}}>
        <Box component="div" sx={{backgroundColor:"white", borderRadius:"20px",padding:"20px", width:"95%",}}>
          {/* Data container */}
          <Box componenet="div" sx={{position:"relative"}}>
            <Box componenet="div" sx={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <h1>{userObject.userName}</h1>
              { userObject.gender=="male" &&<FaUser size={70}/>}
              { userObject.gender=="female" &&<SlUserFemale size={70}/>}
            </Box>
            <Tooltip title="copy" placement='right'>
              <IconButton sx={{borderRadius:0, padding:"20px 0", fontSize:{xs:"0.95rem",sm:"1.1rem"}}} onClick={handleCopy}>
                <p>{`http://localhost:5173/Saraha/${userObject.userName}/${userObject._id}`}</p>
                <FaLink style={{marginLeft:"5px"}}/>
              </IconButton>
            </Tooltip>
            <div style={{display:"flex", flexDirection:"column",width:"fit-content",height:"265px",justifyContent:"space-between"}}>
              <div style={{display:"flex", alignItems:"center"}}>
                <TextField sx={{'& .MuiInput-root': {backgroundColor: 'primary.extra',padding:"10px"}}} variant="standard" label="Full Name"
                name="userName" value={payLoad.userName} onChange={(e)=>handleInput(e)} disabled inputRef={input1}/>
                <Tooltip title="Edit">
                  <IconButton sx={{marginLeft:"15px", cursor:"pointer"}}  onClick={()=>{HandleEdit(input1)}}>
                    <FaEdit size={25}/>
                  </IconButton>
                </Tooltip>
              </div>

              <div style={{display:"flex", alignItems:"center"}}>
                <TextField sx={{ '& .MuiInput-root': {backgroundColor: 'primary.extra',padding:"10px"}}} variant="standard" label="Phone"
                name="phone" value={payLoad.phone} onChange={handleInput} disabled inputRef={input2}/>
                <Tooltip title="Edit">
                  <IconButton sx={{marginLeft:"15px", cursor:"pointer"}} onClick={()=>{HandleEdit(input2)}}>
                   <FaEdit size={25} />
                  </IconButton>
               </Tooltip>
              </div>

              <div style={{display:"flex", alignItems:"center",}}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select sx={{ '& .MuiInput-root': {backgroundColor: 'primary.extra',padding:"10px"}}} variant="standard" label="Gender"
                    name="gender" value={payLoad.gender} disabled={isDisabled} inputRef={input3} onChange={handleInput}>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
                <Tooltip title="Edit">
                  <IconButton sx={{marginLeft:"15px", cursor:"pointer"}} onClick={()=>{HandleEdit(input3)}}>
                    <FaEdit size={25} />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <br/>
            <Divider component="div"/>
            <br />
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
              <Chip label={`Created At ${userObject.createdAt}`} sx={{marginBottom:"20px"}}/>
              <Chip label={`Updated At ${userObject.updatedAt}`}/>
            </div>

            <Box component="input" type="submit" value="Update" sx={{...BtnStyles,margin:"20px auto", display:'flex', width:'200px'}}
            onClick={()=>{updateFields("http://ec2-3-220-251-57.compute-1.amazonaws.com/user/update-profile",payLoad)}}/>
            </Box>
          </Box>
          <ToastContainer position="bottom-right" theme="light" style={{width:"70%"}}/>
        </Box>}
    </>
  )
}

export default Profile

