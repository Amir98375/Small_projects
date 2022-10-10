import { Checkbox } from '@mui/material'
import React from 'react'
import './Signin.css'
import {AiOutlineUnlock} from 'react-icons/ai'

export const SignIn = () => {
  return (
    <>
    <div className='container'>
    <div className='logo'>
    <AiOutlineUnlock className='logoitem'/>
    </div>
    <form action="">
        <input className='inputTag' type="text" 
        placeholder='enter user name'
      /><br/>
        <input className='inputTag' type="password"
        placeholder='enter your passsword' 
        /><br/>
        
     <div className='checkbox'><input type={"checkbox"}/> Remeber me</div>
     <br />
        <button className='inputButton'>Login</button>
    </form>
    <div className='belowlinks'>
        <p>forgot password</p>
        <p>dont have an account login</p>
       </div>
       <p>copyright reserve 2020</p>
    </div>
  
    </>
  )
}
