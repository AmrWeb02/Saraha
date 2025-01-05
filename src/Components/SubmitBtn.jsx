import React from 'react'
import Box from '@mui/material/Box';

const SubmitBtn = ({label, isValid, formValidator}) => {
    const BtnStyles = {
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
  return (
    <>
    <Box component="input" type="submit" value={label} sx={BtnStyles} onClick={formValidator}/>
    </>

  )
}

export default SubmitBtn