import React from 'react'
import './ChatSection.css'
import DarkMode from '../DarkMode/DarkMode'
import { IoIosSend } from "react-icons/io";

function ChatSection() {
  return (
    <div className='chatsection'>
      <div className="topsection">

        <div className="headings">
          <span>HELLO ABHAY</span>
          <span>I am your Assistance</span>
          <span>How can i help you..?</span>
        </div>
      </div>
      <div className="buttomsection">
      <input type="text" placeholder='Enter a prompt'/>
      <button id='sendbtn'><IoIosSend /></button>
      <DarkMode/>
      </div>
    </div>
  )
}

export default ChatSection