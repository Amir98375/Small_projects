import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {AiOutlineCaretRight} from 'react-icons/ai'
import "./materialcom.css"

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(-1),
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
    
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 6,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(12),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
    
        <AiOutlineCaretRight
        marginTop="8px"
        // margin="auto"
        // marginRight="100px"
           id="demo-customized-button"
           aria-controls={open ? 'demo-customized-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           variant="contained"
           disableElevation
           onClick={handleClick}
         
           color={"white"}
          //  style={{marginRight:"100px"}}
         />
    
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
      >
        <MenuItem onClick={handleClose} disableRipple>
         
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        
          Duplicate
        </MenuItem>
      
        <MenuItem onClick={handleClose} disableRipple>
        
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
