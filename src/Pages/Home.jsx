import React,{useState} from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
// Componenets
import MsgCard from '../Components/MsgCard';
// Icon
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawOpen, setdrawOpen] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState();
  const userData = useLoaderData();
  const [messages, setMessages] = useState(userData.messages);
  // const messages = userData.messages;
  // console.log(messages);
  const handleClose = () =>{
    setdrawOpen(false);
  }
  const handleCardClick = (msg) =>{
    setdrawOpen(true);
    setSelectedMsg(msg);
  }
  const deleteMsg = async (e,id) =>{
    e.stopPropagation();
    try{
      const response = await fetch(`https://saraha-app-eight.vercel.app/message/delete/${id}`,{
        method: "DELETE",
      })
      if(response.ok){
        toast.success("Message deleted successfully");
        // setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== id));
        setMessages( (prevMessages) => {return prevMessages.filter((msg)=>{return msg._id !==id}) });
      }
      else{
        toast.error("Couldn't delete message");
      }
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
        <Box component="div" sx={{backgroundColor:"primary.light",height:"100%",width:"100%",}}>
          <Box component="div" sx={{height:"100%",overflowY:"scroll",backgroundColor:"primary.main", width:{xs:"100%", sm:"40%", lg:"20%"}}}>
            {messages.slice().reverse().map((message,index)=>{return <MsgCard key={message._id} clickFunc={()=>{handleCardClick(message)}} deleteFunc={(e)=>{deleteMsg(e,message._id)}} msg={message.message} time={message.createdAt}/>})}
          </Box>
            <Drawer open={drawOpen} onClose={handleClose} anchor={isMobile? "bottom":"right"} PaperProps={{
              sx:{
                width:{xs:"100%",sm:"60%",lg:"80%"},
                backgroundColor:"primary.light",
                height: isMobile? "90%":"100%",
              }
            }}>
              {!isMobile && <FaArrowLeftLong onClick={handleClose} size={40} style={{cursor:"pointer",margin:"25px 25px"}} />}
              {isMobile && <IoMdClose onClick={handleClose} size={40} style={{cursor:"pointer",margin:"25px"}}/>}
              <Box component="div" sx={{padding:"25px"}}>
                {selectedMsg && <Typography variant='h3' >{selectedMsg.message}</Typography>}
              </Box>
            </Drawer>
        </Box>
        <ToastContainer position="bottom-right" theme="light" style={ isMobile ? {width:"70%", left:"50%", transform:"translateX(-50%)"}:{width:"70%"}}/>
    </>
  )
}

export default Home

