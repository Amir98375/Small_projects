import React, { useState } from 'react'
import './PortalNavbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import MenuListComposition from './MaterialCom'
export const PortalNavbar = () => {
    // const [showAcc,setshowAcc]=useState(false)
    const [showRep,setshowRep]=useState(false)
  return (
   <>
   <h3>Portal navbar</h3>
   <div className='navbar-main'>
    <div className='navbar-sec1'>
        <div className='image-class'>
            <img
            className='image-class' src="https://media-exp1.licdn.com/dms/image/C4D0BAQGB9k6sQMCs0Q/company-logo_200_200/0/1612510821067?e=2147483647&v=beta&t=Y4GsrIbGVTmj0LzNQCS0ShIa4dtPiMb41rQV2mH6SBU" alt="" />
        </div>
        <div className='drop-down-account'
    //    onClick={() => { setshowAcc(true); setshowRep(false);}}
       >
        <MenuListComposition/>
        </div>
        <div className='drop-down-reports'
       onClick={() =>  setshowRep(true)}>Account Reports</div>
    </div>
    <div className='navbar-sec2'>
        <div className='items'>
            <input type="text"  className='searchbar'
            placeholder='search here'/>
        </div>
        <div className='items'>setting</div>
        <div className='items'>user2</div>
        <div className='items'>user3</div>
     <div className='hamburge'>   <GiHamburgerMenu className='hamburge'></GiHamburgerMenu></div>
    </div>
    
   </div>
<div className='main'>
{/* {showAcc?   <div 
onMouseLeave={()=>setshowAcc(false)}
className='dropdown-menu-account'>
<div className='list-items'>account management</div>
<div className='list-items'>account status</div>
<div className='list-items'>account active inactive status</div>
<div className='list-items'> account details </div>
<div className='list-items'>account holder details</div>
<div className='list-items'>account active inactive status</div>
</div>:""} */}
{
    showRep?<div
    onMouseLeave={()=>setshowRep(false)}
     className='dropdown-menu-reports'>
        <div className='list-items'>account management</div>
<div className='list-items'>account status</div>
<div className='list-items'>account active inactive status</div>
<div className='list-items'> account details </div>
<div className='list-items'>account holder details</div>
<div className='list-items'>account active inactive status</div>
    </div>:""
}
</div>
   </>
  )
}
