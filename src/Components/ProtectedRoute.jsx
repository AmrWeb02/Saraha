import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
export const ProtectedRoute = () => {
    const token = window.localStorage.getItem("token");
    if(token){
        // Token exist, validate it's expiry
        let isValid = tokenVerify();
        if(isValid){
            return <Outlet/>
        }
        else{
            return <Navigate to='/'/>
        }
    }
    else{
        // Token doesn't exist, return to homepage
        return <Navigate to='/'/>
    }
    // return token? <Outlet/> : <Navigate to="/"/> 
}

export const tokenVerify = async () =>{
  try{
    const response = await fetch('http://ec2-3-220-251-57.compute-1.amazonaws.com/user/userProfile',{
      method: "GET",
      headers:{
          "Authorization" : "Barrer " + window.localStorage.getItem("token"),
      }
  });
    if(response.ok){
      console.log("token is ok");
      return true
    }
    else{
      console.log("token expired");
      return false;
    }
  }
  catch(err){
    console.log("test",err);
  }
//   console.log("Response status:", response.status);
// console.log("Response data:", await response.json());
}