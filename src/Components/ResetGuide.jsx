import React, {useState} from 'react'
import { Box, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import SubmitBtn from './SubmitBtn'
import { FaChevronLeft } from "react-icons/fa6";

const ResetGuide = ({data, setData, step, setStep, imglogo, title, subtitle, label, children}) => {
  const ResetHandler = () => {
    if(step === 0){
      console.log("This is the first step in the reset process");
      sendEmail(data.email,setStep,setData);
      // children.props we can see object representation of the children passed to ResetGuide. Value can be accessed using children.props.value
      console.log(children.props);
    }
    else if(step === 1){
      console.log("this is the second step");
      let arrOTP = data.OTP;
      console.log(arrOTP);
      let otpFormat = (arrOTP.join("")).toString();
      console.log(otpFormat);
      console.log(typeof otpFormat);
      console.log("Token is: ",data.token);
      sendOTP(otpFormat, setStep, data.token)
    }
    else if(step === 2){
      console.log("this is the third step");
    }
    else{
      console.log("strange");
    }
  }
  return (
    <>
    <CardMedia sx={{ width: {xs:"140px", md:"160px"}, height: {xs:"140px", md:"160px"} }} image={imglogo} title="Check mark"/>
    <CardContent>
     <Typography component="h5" variant="h5" align="center" sx={{fontWeight:"bolder",}}>{title}</Typography>
     <Typography component="p" align="center">{subtitle}</Typography>
     </CardContent>
     {children}
    <CardActions sx={{display:"flex", flexDirection:"column",}}>
    <SubmitBtn label={label} classProp="extraMargin" formValidator={ResetHandler}/>
        <NavLink to="/" className="bigWidth"> <FaChevronLeft style={{verticalAlign:"text-bottom"}}/> Back to login</NavLink>
    </CardActions>   
    </>

    )
}
    // Step No. 1
    const sendEmail = async (data, setStep,setData) =>{
      try{
          const response = await fetch('http://ec2-3-220-251-57.compute-1.amazonaws.com/auth/forget-password1',{
              method: "POST",
              body: JSON.stringify({email:data}),
              headers : {
                  "Content-type":"application/json",
              }
            })
            if(response.ok){
              console.log("Email action authorized");
              const mytoken = await response.json();
              console.log(mytoken);
              console.log(mytoken.data.emailToken);
              console.log(mytoken.data.emailToken.toString());
              setData((oldObj) => {return {...oldObj, token:mytoken.data.emailToken}})
              // setToken(mytoken.data.emailToken);
              setStep((val)=>{return val+1});
            }
            else{
              console.log("Failed attempt")
            }
      }
      catch(err){
          console.log(err);
      }
    }
    const sendOTP = async (data, setStep,token) =>{
      console.log("Request payload:", { OTP: data });
      console.log("Request headers:", { authorization: token.toString() });
      try{
        const response = await fetch('http://ec2-3-220-251-57.compute-1.amazonaws.com/auth/forget-password2',{
          method: "POST",
          headers: {
            "authorization" : token.toString(),
          },
          body: JSON.stringify({OTP:data}),
        })

        if(response.ok){
          Console.log("Correct OTP, action authorized");
          setStep( (val) => val+1);
        }
        else{
          console.log("failed attempt");

        }
      }
      catch(err){
        console.log(err)
      }
    }
export default ResetGuide