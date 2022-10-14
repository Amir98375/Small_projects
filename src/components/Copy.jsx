import React, { useRef, useState } from 'react'

export const Copy = () => {
     const refrence=useRef('initialvalue')
      const countRef=useRef(0)          
      const [counter,setCounter]=useState(0)  
      

    const [copySuccess,setCopySucc]=useState('')
    const TextAreaRef=useRef(null)
    const copytoClipBoard=(e)=>{
     TextAreaRef.current.select()
     document.execCommand('copy')
     e.target.focus()
     setCopySucc('copied!')
    }

    const refrenceHandler=()=>{
        console.log(refrence.current,"hello refrence")
       const value=refrence.current
       refrence.current="changed value"
    }
    const handleIncrease=()=>{
             countRef.current++
             setCounter(countRef.current)
           
    }
    const handleDecrease=()=>{
            if(countRef.current>0) {
              countRef.current--
              setCounter(countRef.current)
            }
            
    }
  return (
    <div>
    {
     /* Logical shortcut for only displaying the 
        button if the copy command exists */
     document.queryCommandSupported('copy') &&
      <div>
        <button onClick={copytoClipBoard}
        style={{backgroundColor:"lightgreen" ,marginLeft:"10px" ,border:"none", borderRadius:"5px"}}>Copy</button> 
       {copySuccess}
      </div>
    }
    <form>
      <textarea
        ref={TextAreaRef}
        value='Some text to copy click on copy to copy in
         clipboard and this will be copied'
      ></textarea>
    </form>
    <h3>Useref implementation below</h3>
    <div>
        
        <p>{refrence.current}</p>
        <button onClick={refrenceHandler}>click me</button>
    </div>
    <h3>counter using useRef</h3>
    <p>{counter}</p>
    <button onClick={handleIncrease}>increase</button>
    <button onClick={handleDecrease}>decrease</button>
     
  </div>
  )
}
