import React, { useState } from "react";

import {Menu,Typography,MenuItem} from '@mui/material';
import NestedMenuItem from "material-ui-nested-menu-item";
import { Stack } from "@mui/system";

export const NestedMenu = () => {
  const [menuPosition, setMenuPosition] = useState(null);
//   const [reports,setReports] = useState(report)
//   console.log("props",reports)

  const handleRightClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX
    });
  };

  const handleItemClick = (event) => {
    setMenuPosition(null);
  };

  return (
    <div onClick={handleRightClick} >
      <p>as</p>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
       <Stack> <MenuItem onClick={handleItemClick}>Button 1</MenuItem>
       <MenuItem onClick={handleItemClick}>Button 2</MenuItem></Stack>
       
        <NestedMenuItem
          label="Button 3"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
          <Stack>
          <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
          </Stack>
          <NestedMenuItem
            label="Sub-Button 3"
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}
          >
        <Stack>
        <MenuItem onClick={handleItemClick}>Sub-Sub-Button 1</MenuItem>
            <MenuItem onClick={handleItemClick}>Sub-Sub-Button 2</MenuItem>
        </Stack>
          </NestedMenuItem>
        </NestedMenuItem>
    <Stack>    <MenuItem onClick={handleItemClick}>Button 4</MenuItem></Stack>
        <NestedMenuItem
          label="Button 5"
          parentMenuOpen={!!menuPosition}
          onClick={handleItemClick}
        >
        <Stack>
        <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
          <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
        </Stack>
        </NestedMenuItem>
      </Menu>
    </div>
  );
};

export default NestedMenu;