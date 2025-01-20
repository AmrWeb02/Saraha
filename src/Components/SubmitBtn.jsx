import React from 'react'
import Box from '@mui/material/Box';
import '../Components/SubmitBtn.css'
export const BtnStyles = {
  height: "50px",
  borderRadius: "20px",
  color: "white",
  fontWeight: "bold",
  backgroundColor: "primary.dark",
  border: "none",
  width: "300px",
  transition: "all 0.5s ease",
  cursor: "pointer",
  '&:hover':{
      backgroundColor:"#528a4b",
  }
}
const SubmitBtn = ({label, isValid, formValidator, classProp}) => {

  return (
    <>
    <Box component="input" type="submit" className={classProp} value={label} sx={BtnStyles} onClick={formValidator}/>
    </>

  )
}

export default SubmitBtn