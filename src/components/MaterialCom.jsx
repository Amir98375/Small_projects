import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Select } from '@mui/material';
import { OptionGroupUnstyled } from '@mui/base';
import { useState } from 'react';
import CustomizedMenus from './FlyOut';
import "./materialcom.css";

export default function MenuListComposition() {
  const [buttonState,setbuttonState]=useState(false)
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef()

const handleStateChange=()=>{
       setbuttonState(true)
}

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row"  >
   
      <div  >
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
       sx={{
        color:"white",
        fontSize:"10px",
        paddingTop:"10px"
       }}
        >
          Masters menu
        </Button>
        <Popper
     
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
            sx={{
              backgroundColor:"black",
              color:"white",
             
            }}
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'right bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    // onKeyDown={handleListKeyDown}
                  >
                   
                    <MenuItem onClick={handleStateChange}  >
                      <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <div className="" style={{fontSize:"10px"}}>
                    account active inactive status
                    </div>
                    <div className="">
                    {buttonState?<CustomizedMenus/>:""}
                    </div>
                    </div>
                    
                  </MenuItem>
                 
                  
                    <MenuItem>
                    <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <div className="" style={{fontSize:"10px"}}>
                    account holder details
                    </div>
                    <div className="">
                    {buttonState?<CustomizedMenus/>:""}
                    </div>
                    </div>
                    </MenuItem>
                    <MenuItem >
                    
                    <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <div className="" style={{fontSize:"10px"}}>
                    account management
                    </div>
                    <div className="">
                    {buttonState?<CustomizedMenus/>:""}
                    </div>
                    </div>
                  
                    </MenuItem>
                     <MenuItem >
                     <div className="" style={{display: "flex", alignItems: "spaceBetween"}}>
                     <div style={{fontSize:"10px"}}>
                     account active inactive status
                     </div>
                     <div className="">
                     {buttonState?<CustomizedMenus/>:""}
                     </div>
                     </div>
                     </MenuItem>
                    <MenuItem >
                     <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <div className="" style={{fontSize:"10px"}}>
                    account holder details
                    </div>
                    <div className="">
                    {buttonState?<CustomizedMenus/>:""}
                    </div>
                    </div>
                     </MenuItem>
                    <MenuItem >

                     <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <div className="" style={{fontSize:"10px"}}>
                    account management
                    </div>
                    <div className="" >
                    {buttonState?<CustomizedMenus/>:""}
                    </div>
                    </div>
                 </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
