import React from 'react'
import MsgContainer from '../Components/MsgContainer'
import LoginForm from '../Components/LoginForm'
const Login = () => {
  return (
    <>
    <MsgContainer title="Welcome back" subtitle="Enter your details below"/>
    <LoginForm/>
    </>
  )
}

export default Login