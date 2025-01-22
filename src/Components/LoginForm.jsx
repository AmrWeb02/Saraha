import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// Components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SubmitBtn from './SubmitBtn.jsx'
// Methods
import { sendData } from '../App.jsx';
export const styleObj = {
  backgroundColor:"primary.inputColor",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "gray", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.dark", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "green", // Border color when focused
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "gray", // Default label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "green", // Label color when focused
                    },
}
const LoginForm = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({email:"",password:""});
  const [ErrorData, setErrorData] = useState({email:false, password:false,});
  const [ErrorNames, setErrorNames] = useState({username:"", email:"", phone:"", password:"", confirmationPassword:""});
  let responseErrors; // Array of objects, each object contains error message
  const dataEntryHandler = (e) =>{
    setData({...data, [e.target.name]:e.target.value});
    // setErrorData((prevErrorData)=> {return {...prevErrorData, [e.target.name]:false}}); Running this on every keystroke to reset errors is not the best way to do it.

    // if(ErrorData.email==true || ErrorData.password==true){ Can be computationally expensive when form has many fields
    //   setErrorData((prevErrorData)=> {return {...prevErrorData, [e.target.name]:false}});
    // }
  }
  const toastMaker = (responseErrors) =>{
    console.log("tempArr,", responseErrors);
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
    if( (data.email !=="") && (data.password !=="") ){
      console.log("Login data is sent to server");
      responseErrors= await sendData('http://ec2-3-220-251-57.compute-1.amazonaws.com/auth/login',data);
      toastMaker(responseErrors);
      console.log(responseErrors);
      window.localStorage.setItem("token", responseErrors.data.token);
      console.log(window.localStorage);
      navigate("/home");
    }
    if(data.email.trim()===""){
      setErrorData((prevErrorData)=> {return {...prevErrorData, email:true}});
      setErrorNames((prevErrorNames) => {return {...prevErrorNames, email:"Empty Field"}})
      console.log('email problem');
      console.log(ErrorData);
    }
    if(data.password.trim()===""){
      setErrorData((prevErrorData)=> {return {...prevErrorData, password:true}});
      setErrorNames((prevErrorNames) => {return {...prevErrorNames, password:"Empty Field"}})
      console.log("password problem");
    }
  }
  const errorReset = (e) =>{
    setErrorData((prevErrorData)=> {return {...prevErrorData, [e.target.name]:false}});
    setErrorNames((prevErrorData)=> {return {...prevErrorData, [e.target.name]:false}});
  }
  return (
    <>
      <Box component="form" style={{display:"flex", flexDirection:"column",alignItems:"center",}}>
        <TextField label="Email" variant='outlined'
                   type="email"
                   sx={styleObj}
                   style={{marginBottom:"15px", width:"300px"}}
                   name='email'
                   value={data.email}
                   onChange={dataEntryHandler}
                   onBlur={errorReset}
                   error={ErrorData.email}
                   helperText={ErrorNames.email}
        />
        <TextField label="Password" variant='outlined'
                   type="password"
                   sx={styleObj}
                   style={{marginBottom:"15px", width:"300px"}}
                   name='password'
                   value={data.password}
                   onChange={dataEntryHandler}
                   onBlur={errorReset}
                   error={ErrorData.password}
                   helperText={ErrorNames.password}
        />
        <SubmitBtn label="Login" formValidator={formValidator}/>
        <ToastContainer position="bottom-right" theme="light" style={{width:"70%"}}/>
      </Box>
    </>
  )
}

export default LoginForm