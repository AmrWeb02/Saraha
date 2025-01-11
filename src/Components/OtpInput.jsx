import React, {useState, useRef} from 'react'
import { TextField, Box, Typography } from '@mui/material'
import { styleObj } from '../Components/LoginForm.jsx'
import './OtpInput.css'
const OtpInput = ({data,setData}) => {
  const inputRefs = useRef([]);
  console.log(inputRefs);
    let inputFields = Array(4).fill("");
    const handleInput = (e, index) =>{
        // console.log(e);
        if (/^[0-9]$/.test(e.target.value)){
          let newOTP = [...data.OTP]; // Array of 4 elements ["","","",""]
          newOTP[index] = e.target.value; // Replace the old value with the new value
          console.log(newOTP);
          setData( (prevVal) => {return {...prevVal, OTP: newOTP}}); // Only modify the OTP array
          if(e.target.value.length > 0 && index < inputRefs.current.length - 1){
            inputRefs.current[index+1].focus();
          }
        }

    }
    const handleKey = (e,index) =>{
      // console.log(e);
      const newOTP = [...data.OTP];
      newOTP[index] = "";
      setData((prevVal) => {return {...prevVal, OTP:newOTP}});
      if( (e.key === "Backspace") && (index > 0) && (e.target.value==="")){
        inputRefs.current[index-1].focus();
      }
    }
    const pasteHandler = (e,index) =>{
      let number = e.clipboardData.getData('text').slice(0,inputRefs.current.length);
      if(/^[0-9]+$/.test(number)){
        const newOTP = [...data.OTP];
        if(index===0){
          console.log("paste");
          for(let i=0; i<number.length; i++){
            newOTP[i] = number[i];
          }
          setData( (prevVal) => {return {...prevVal, OTP: newOTP}}); // Only modify the OTP array
          inputRefs.current[inputRefs.current.length-1].focus();
        }      
      }
    }
  return (
    <Box component="div" sx={{display:"flex", justifyContent:"space-evenly", width:"250px" }}>
        { inputFields.map((el,index) => {return (
            <input type="text" autoFocus={index===0} maxLength="1" className="otp-input"
            ref={ (e)=>{inputRefs.current[index] = e}} key={index} value={data.OTP[index]}
            onChange={(e)=>{handleInput(e,index)}} onKeyDown={(e)=>{handleKey(e,index)}} onPaste={(e)=>{pasteHandler(e,index)}}/>
            )} )
        }

    </Box>
  )
}

export default OtpInput