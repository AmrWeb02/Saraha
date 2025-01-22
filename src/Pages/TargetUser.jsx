import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { BtnStyles } from '../Components/SubmitBtn';
// Icons
import { FaUser } from "react-icons/fa";
import PuffLoader from "react-spinners/PuffLoader";
// Images
import Phone from '../assets/phone.png'
const TargetUser = () => {
    const {userName, id} = useParams();
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("");
    const handleMessage = (e) =>{
        setMessage((prev=> prev=e.target.value));
    }
    const sendMessage = async () =>{
        setStatus("");
        setIsLoading(true);
        try{
            const response = await fetch('http://ec2-3-220-251-57.compute-1.amazonaws.com/message',{
                method: "POST",
                headers:{
                    "Content-type": "application/json",
                  },
                body: JSON.stringify({message:message, recipientId:id})
        })
            if(response.ok){
                console.log("message sent");
                setStatus((prev)=>prev="Message is sent");
                setIsLoading(false);
            }
            else{
                console.log("failed to deliver message");
                setStatus((prev)=>prev="Failed to send message!");
                setIsLoading(false);
            }
        }
        catch(err){
            console.log(err);
            setStatus((prev)=>prev="Unknown failure");
            setIsLoading(false);
        }

    }
  return (
    <>
    <Box component="div"
    sx={{backgroundColor: "primary.light"}}
    style={{display: "flex",justifyContent: "center",alignItems: "center",height: "100vh",}}>
        <Box component="div"
        style={{position: "relative",backgroundImage: `url(${Phone})`,backgroundRepeat: "no-repeat",backgroundSize: "cover",backgroundPosition: "center",}}
        sx={{width:"400px", height:{xs:"700px",sm:"800px"}}}>
      <PuffLoader
        color="green"
        loading={isLoading}
        size={150}
        style={{position:"absolute",left:"32%",top:"56%"}}
      />
     <Typography variant="h5" sx={{position:"absolute",left:"50%", transform:"translateX(-50%)", top:"56%"}}>{status}</Typography>
        {/* Input elements inside the phone frame */}
            {<FaUser style={{position:"absolute",left:"41%",top:"20%"}} size={70}/>}
            <h1 style={{position:"absolute",left:"34%",top:"15%"}}>{userName}</h1>
            <TextField label="Your Message" multiline value={message} rows={4}
                    onChange={handleMessage}
                    sx={{position:"absolute", top:"35%", left:{xs:"25%",sm:"15%"},width:{xs:"50%",sm:"70%"},}}/>
            <Box component="input" type="submit" value="Send" onClick={sendMessage}
            sx={{...BtnStyles, position:"absolute", width:{xs:"62%",sm:"70%"},left:{xs:"19%",sm:"15%",},top:{xs:"82%",sm:"82%"}}}/>
        </Box>
    </Box>

    </>
  )
}

export default TargetUser