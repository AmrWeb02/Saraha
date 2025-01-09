import React from 'react'
import { useLocation } from 'react-router-dom'

const EmailConfirm = () => {
  const location = useLocation();
  const indexStart = location.pathname.lastIndexOf('/');
  const token = location.pathname.substring(indexStart+1);
  console.log(location.pathname);
  const SendConfirmationToken = async (token) =>{
    const response = await fetch('http://ec2-3-220-251-57.compute-1.amazonaws.com/auth/confirm-email',{
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
        "Authorization" : token,
      },
    })
  }
  setTimeout(() => {
    SendConfirmationToken(token);
    console.log("Token is sent");
  }, 500);
  return (
    <div>EmailConfirm</div>
  )
}

export default EmailConfirm