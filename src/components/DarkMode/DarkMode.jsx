import React, { useEffect, useState } from 'react'
import { IoSunny } from "react-icons/io5";
import './DarkMode.css'
function DarkMode() {
  const[mode,setMode] = useState('darkmode')
  function toggle() {
    if(mode == 'darkmode') {
        setMode("lightmode")
    }else{
        setMode('darkmode')
    } 
  }
  useEffect(()=>{
      document.body.className =mode;
  },[mode])
  return (
    
        <button className='darkmodebtn' onClick={()=>{
            toggle();
            console.log(mode)
        }}><IoSunny /></button>
    
  )
}

export default DarkMode