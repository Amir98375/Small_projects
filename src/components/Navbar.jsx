import React from 'react'
import { useNavigate } from 'react-router'
import './Navbar.css'
export const Navbar = () => {
  const navigate=useNavigate()
  return (
   <>
    <div className='Nav-container'>
        <div onClick={()=>(navigate('/'))} >Todo</div>
        <div onClick={()=>(navigate('/counter'))}>Counter</div>
        <div onClick={()=>(navigate('/countRed'))}>CounterRedux</div>
        <div>TodoRedux</div>
        <div onClick={()=>(navigate('/signin'))}>SignIn</div>
        <div onClick={()=>(navigate('/stack'))}>BlunderStack</div>
        <div onClick={()=>(navigate('/d&d'))}>Drag & drop</div>
        <div onClick={()=>(navigate('/copy'))}>copytext</div>
        <div onClick={()=>(navigate('/stopwatch'))}>stopwatch</div>
      
    </div></>
  )
}
