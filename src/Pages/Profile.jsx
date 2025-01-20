import React, {useState, useRef} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { Typography } from '@mui/material';
// Icons
import { FaEdit } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
// Loader
import { useLoaderData } from 'react-router-dom';
const Profile = () => {
  const userData = useLoaderData();
  const [userObject, setUserObject] = useState(userData);
  const [payLoad, setPayLoad] = useState({userName:userObject.userName,phone:userObject.phone,gender:userObject.gender})
  const [isDisabled, setIsDisabled] = useState(true);
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  console.log(input1);
  console.log(userData);
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
          <Box componenet="div">
            <Box componenet="div" sx={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <h1>{userObject.userName}</h1>
              <FaUser size={100}/>
              {/* <SlUserFemale size={100} /> */}
            </Box>
            <div style={{display:"flex", flexDirection:"column",width:"fit-content",height:"265px",justifyContent:"space-between"}}>
              <div style={{display:"flex", alignItems:"center"}}>
              <TextField sx={{'& .MuiInput-root': {backgroundColor: 'primary.extra',padding:"10px"}}} variant="standard" label="Full Name"
              name="userName" value={payLoad.userName} onChange={(e)=>handleInput(e)} disabled inputRef={input1}/>
              <FaEdit style={{marginLeft:"15px", cursor:"pointer"}} size={25} onClick={()=>{HandleEdit(input1)}}/>
              </div>

              <div style={{display:"flex", alignItems:"center"}}>
              <TextField sx={{ '& .MuiInput-root': {backgroundColor: 'primary.extra',padding:"10px"}}} variant="standard" label="Phone"
              name="phone" value={payLoad.phone} onChange={handleInput} disabled inputRef={input3}/>
              <FaEdit style={{marginLeft:"15px", cursor:"pointer"}} size={25} onClick={()=>{HandleEdit(input3)}}/>
              </div>

              <div style={{display:"flex", alignItems:"center"}}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select sx={{ '& .MuiInput-root': {backgroundColor: 'primary.extra',padding:"10px"}}} variant="standard" label="Gender"
                  name="gender" value={payLoad.gender} disabled={isDisabled} inputRef={input4} onChange={handleInput}>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
                <FaEdit style={{marginLeft:"15px", cursor:"pointer"}} size={25} onClick={()=>{HandleEdit(input4)}}/>
              </div>
            </div>
              {/* <h4>{userObject.updatedAt}</h4>
              <h4>{userObject.createdAt}</h4> */}
            </Box>
          </Box>
        </Box>}
    </>
  )
}

export default Profile

