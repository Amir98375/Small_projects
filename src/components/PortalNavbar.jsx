import React, { useState } from 'react'
import './PortalNavbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import MenuListComposition from './MaterialCom'
import CustomizedMenus from './FlyOut'
import HomeIcon from '@mui/icons-material/Home';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import HttpsIcon from '@mui/icons-material/Https';
import ArticleIcon from '@mui/icons-material/Article';
import CachedIcon from '@mui/icons-material/Cached';
import NestedMenu from './DropDown'
export const PortalNavbar = () => {
    // const [showAcc,setshowAcc]=useState(false)
    const [showRep,setshowRep]=useState(false)
    const [showTest,setshowTest]=useState(false)
    const [showUsersMenu,setshowUsersMenu]=useState(false)

    const handlereports=()=>{
             setshowRep(true)
             setshowTest(false)
             setshowUsersMenu(false)
    }
    const handleMenuUsers=()=>{
      setshowRep(false)
      setshowTest(false)
      setshowUsersMenu(true)
    }
    const handleTest=()=>{
      setshowRep(false)
      setshowTest(true)
      setshowUsersMenu(false)
    }
  return (
   <>

   <div className='navbar-main'>
    <div className='navbar-sec1'>
        <div className='drop-down-reports' id='drop-down-reports1'>
          <span>FinMobiConnect</span>
        </div>
        <div className='drop-down-account'
    //    onClick={() => { setshowAcc(true); setshowRep(false);}}
       >
        <MenuListComposition/>
        </div>
     
        <div className='drop-down-reports'
       
       onClick={handleMenuUsers}>
        <NestedMenu name={"Users menu"}/></div>

          <div className='drop-down-reports'
       onClick={handleTest}>
         <NestedMenu name={"Test"}/>
       </div>

<div className='drop-down-reports'
       onClick={handlereports}></div>
       <NestedMenu name={"Menu reports"}/>
    </div>
    
    <div className='navbar-sec2'>
       
        <div className='items'><HttpsIcon sx={{backgroundColor:'white', color:'black'}}/></div>
        <div className='items'><CachedIcon sx={{backgroundColor:'white', color:'black'}}/></div>
   
        <div className='items'><ArrowCircleLeftIcon sx={{backgroundColor:'skyblue'}}/></div>
        <div className='items'><ArrowCircleRightIcon  sx={{backgroundColor:'skyblue'}}/></div>
        <div className='items'><ArticleIcon sx={{backgroundColor:'white', color:'black'}}/></div>
        <div className='items'><HomeIcon sx={{backgroundColor:'green'}}/></div>
     
        <div className='items'><span style={{color:"green", fontWeight:"bolder"}}>logout</span></div>
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
{/* {
    showRep?<div
    onMouseLeave={()=>setshowRep(false)}
     className='dropdown-menu-reports'>
        <div className='list-items'>account management 
        <CustomizedMenus className='Account management'/>
        </div>
<div className='list-items'>account status
<CustomizedMenus className='Account management'/>
</div>
<div className='list-items'>account active  status
<CustomizedMenus className='Account-management'/>
</div>
<div className='list-items'> account details
<CustomizedMenus className='Account management'/>
 </div>
<div className='list-items'>account holder details
<CustomizedMenus className='Account management'/>
</div>
<div className='list-items'>account active inactive
<CustomizedMenus className='Account-management'/>
</div>
    </div>:""
} */}
</div>
   </>
  )
}
