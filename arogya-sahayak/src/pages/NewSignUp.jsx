import React, { useState } from 'react'
import { app } from '../firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { Button, Link } from '@mui/material';
import Profile from "./Profile"
import { Navigate, useNavigate } from 'react-router-dom';

const NewSignUp = () => {
  const [open, setopen] = useState(false);
  const [msg, setmsg] = useState("")
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const navigate = useNavigate();


  const loginPatient = async () => {
    console.log("clicked")
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: {...providerData[0],role:"patient"},
      });
      console.log({...providerData[0],role:"patient"})
      localStorage.setItem("user", JSON.stringify({...providerData[0],role:"patient"}));
      setopen(true);
      setmsg("Patient Successfuly Signed in");
      navigate("/profile")
    }
    
  };
  // const loginDoctor = async () => {
  //   try{
  //     if (!user) {
  //       const {
  //         user: { refreshToken, providerData },
  //       } = await signInWithPopup(firebaseAuth, provider);
  //       dispatch({
  //         type: actionType.SET_USER,
  //         user: providerData[0],
  //       });
  //       console.log({...providerData[0],role:"doctor"})
  //       localStorage.setItem("user", JSON.stringify({...providerData[0],role:"doctor"}));
  //       setopen(true);
  //       setmsg("Doctor Successfuly Signed in")
  //     }
  //   }catch(e){
  //     console.log(e)
  //   }
    
  // };


  const hello = ()=>{
    console.log("jello")
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setopen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        x
      </IconButton>
    </>
  );
  return (  
  <div className='mb-20'>
  <p className=' text-center font-bold text-4xl mt-12 mb-10'> Your Journey to Better Health Starts Here: Get Started</p>
    <div className=' flex items-center justify-center gap-6 mt-16'>
    <button className=' mt-10 border h-12 w-64 rounded-lg shadow-sm bg-blue-900 text-white ' onClick={loginPatient}>Patient</button>
      {/* <button className='border h-12 w-64 rounded-lg shadow-sm bg-blue-900 text-white ' >Doctor</button>  */}
       </div>
      {user?(<h1>{user.uid}</h1>):(<h1 className='-mt-24 text-center text-xl font-semibold'>Sign In to get your Arogya Number</h1>)}
      <Snackbar 
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={msg}
        action={action}
      />
  
    </div>
  )
}

export default NewSignUp