import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
// icon
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const MsgCard = ({clickFunc,deleteFunc, msg, time}) => {
    const date = new Date(time);
  return (
    <>
    <Card sx={{ width:"200px", height:"200px", margin:"20px 20px", cursor:"pointer",position:"relative"}} onClick={clickFunc}>
        <CardHeader sx={{padding:"16px 16px 0px 16px"}} subheader={date.toDateString()}/>
        <CardHeader sx={{padding:"0px 16px 10px 16px"}} subheader={date.toLocaleTimeString()}/>
        <FaUser size={50} style={{paddingLeft:"16px"}}/>
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{msg}</Typography>      
        </CardContent>
        <Tooltip title="delete" sx={{position:"absolute",right:"16px", bottom:"8px"}} onClick={deleteFunc}>
            <IconButton>
                <MdDelete/>
            </IconButton>
        </Tooltip>
    </Card>   
    </>
  )
}

export default MsgCard