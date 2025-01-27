import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

// Styles
import { styleObj } from './LoginForm'
// Components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SubmitBtn from './SubmitBtn.jsx'
// Methods
import { sendData } from '../App.jsx';
const SignUpForm = () => {
    const [data, setData] = useState({userName:"",email:"",password:"", phone:"", confirmationPassword:""});
    const [ErrorData, setErrorData] = useState({userName:false, email:false, phone:false, password:false, confirmationPassword:false});
    const [ErrorNames, setErrorNames] = useState({userName:"", email:"", phone:"", password:"", confirmationPassword:""});
    let responseErrors; // Array of objects, each object contains error message

    const dataEntryHandler = (e) =>{
      setData({...data, [e.target.name]:e.target.value});
    }
    const toastMaker = (responseErrors) =>{
      console.log("tempArr,", responseErrors);
      console.log(typeof responseErrors);
      try{
        if('successMessage' in responseErrors){
          toast.success(responseErrors.successMessage);
        }
        else{
          for(let err of responseErrors ){
            console.log(err);
            toast.error(err.message);
            console.log(err.message);
          }
        }

      }
    catch(err){
      console.log(" Failed to reach server, failed to retrieve response errors");
    }

  }
    const formValidator = async (e) =>{
      e.preventDefault();
      if( (data.email.trim() !=="") && (data.password !=="") && (data.confirmationPassword !=="") && (data.userName !=="") && (data.phone !=="") ){
        if(data.password==data.confirmationPassword){
          console.log("Sign up data is sent to server");
          responseErrors= await sendData('https://saraha-app-eight.vercel.app/auth/signup',data);
          toastMaker(responseErrors);
          console.log(responseErrors);
        }
        else{
          setErrorData((prevErrorData)=> {return {...prevErrorData, confirmationPassword:true}});
          setErrorNames((prevErrorNames) => {return {...prevErrorNames, confirmationPassword:"Password mismatch!"}})
        }
      }
      if(data.userName.trim()===""){
        setErrorData((prevErrorData)=> {return {...prevErrorData, userName:true}});
        setErrorNames((prevErrorNames) => {return {...prevErrorNames, userName:"Empty Field"}})
        console.log('username problem');
        console.log(ErrorData);
      }
      if(data.email.trim()===""){
        setErrorData((prevErrorData)=> {return {...prevErrorData, email:true}});
        setErrorNames((prevErrorNames) => {return {...prevErrorNames, email:"Empty Field"}})
        console.log('email problem');
        console.log(ErrorData);
      }
      if(data.phone.trim()===""){
        setErrorData((prevErrorData)=> {return {...prevErrorData, phone:true}});
        setErrorNames((prevErrorNames) => {return {...prevErrorNames, phone:"Empty Field"}})
        console.log("phone problem");
      }
      if(data.password.trim()===""){
        setErrorData((prevErrorData)=> {return {...prevErrorData, password:true}});
        setErrorNames((prevErrorNames) => {return {...prevErrorNames, password:"Empty Field"}})
        console.log("password problem");
      }
      if(data.confirmationPassword.trim()===""){
        setErrorData((prevErrorData)=> {return {...prevErrorData, confirmationPassword:true}});
        setErrorNames((prevErrorNames) => {return {...prevErrorNames, confirmationPassword:"Empty Field"}})
        console.log("Confirmation password problem");
      }
    }
    const errorReset = (e) =>{
      setErrorData((prevErrorData)=> {return {...prevErrorData, [e.target.name]:false}});
      setErrorNames((prevErrorNames) => {return {...prevErrorNames, [e.target.name]:""}})
    }
  return (
    <Box component="form" style={{display:"flex", flexDirection:"column",alignItems:"center",}}>
    <TextField label="Username" variant="outlined" type="text"
                sx={styleObj}
                style={{marginBottom:"15px", width:"300px"}}
                name="userName"
                value={data.userName}
                onChange={dataEntryHandler}
                onBlur={errorReset}
                error={ErrorData.userName}
                helperText={ErrorNames.userName}
                />
    <TextField label="Email" variant='outlined' type="email"
               sx={styleObj}
               style={{marginBottom:"15px", width:"300px"}}
               name="email"
               value={data.email}
               onChange={dataEntryHandler}
               onBlur={errorReset}
               error={ErrorData.email}
               helperText={ErrorNames.email}
    />
    <TextField label="Phone" variant="outlined" type="number"
                sx={styleObj}
                style={{marginBottom:"15px", width:"300px"}}
                name="phone"
                value={data.phone}
                onChange={dataEntryHandler}
                onBlur={errorReset}
                error={ErrorData.phone}
                helperText={ErrorNames.phone}
                />
    <TextField label="Password" variant='outlined'
               type="password"
               sx={styleObj}
               style={{marginBottom:"15px", width:"300px"}}
               name="password"
               value={data.password}
               onChange={dataEntryHandler}
               onBlur={errorReset}
               error={ErrorData.password}
               helperText={ErrorNames.password}
    />
        <TextField label="Password Confirmation" variant='outlined'
               type="password"
               sx={styleObj}
               style={{marginBottom:"15px", width:"300px"}}
               name="confirmationPassword"
               value={data.passwordConfirmation}
               onChange={dataEntryHandler}
               onBlur={errorReset}
               error={ErrorData.confirmationPassword}
               helperText={ErrorNames.confirmationPassword}
    />
    <SubmitBtn label="SignUp" formValidator={formValidator}/>
    <ToastContainer position="bottom-right" theme="light" style={{width:"70%"}}/> 
  </Box>  )
}

export default SignUpForm