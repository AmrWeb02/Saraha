import React from 'react'

const Profile = () => {
    userProfileFetch();
  return (
    <div>Main</div>
  )
}

export default Profile
const userProfileFetch = async () =>{
    const response = await fetch('http://ec2-3-220-251-57.compute-1.amazonaws.com/user/userProfile',{
        method: "GET",
        headers:{
            "Authorization" : "Barrer " + window.localStorage.getItem("token"),
        }
    })
}