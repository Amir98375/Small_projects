import React, { useRef, useState } from 'react'

export const Copy = () => {
    const [copySuccess,setCopySucc]=useState('')
    const TextAreaRef=useRef(null)
    const copytoClipBoard=(e)=>{
     TextAreaRef.current.select()
     document.execCommand('copy')
     e.target.focus()
     setCopySucc('copied!')
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
        value='Some text to copy click on copy to copy in clipboard and this will be copied'
      ></textarea>
    </form>
  </div>
  )
}
