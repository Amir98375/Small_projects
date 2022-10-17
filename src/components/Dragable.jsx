import React, { useRef, useState } from 'react'

import axios from 'axios';
export const Dragable = () => {
  const [list,setlist]=useState(['item1','itme2','item3','item4'])
  const dragItem=useRef()
  const dragOverItem = useRef();
  const dragStart = (e, position) => {
    dragItem.current = position;
  
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
   
  }
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setlist(copyListItems);
  };
 
  return (
    <>
    {
    list&&
    list.map((item, index) => (
      <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
        key={index}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e)=>dragEnter(e,index)}
        onDragEnd={drop}
        draggable>
          {item}
      </div>
      ))}
   <div>
    <h2>animations</h2>
   </div>
    </>
  )
}
