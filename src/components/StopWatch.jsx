import React, { useEffect, useState } from 'react'

export const StopWatch = () => {
    const [isActive,setisActive]=useState(false)
    const[sec,setsec]=useState(0)
    const[mili,setmili]=useState(0)

    useEffect(()=>{
        let myInterval=null
        if(isActive){
            myInterval=setInterval(() => {
                setmili((mili)=>mili+1)
            }, 10);
        }else clearInterval(myInterval)

        return(()=>{
            clearInterval(myInterval)
        })
    },[isActive])
    if(mili>59){
        setsec(sec+1)
        setmili(0)
    }
    const handleStart=()=>{
       if(!isActive){
        setisActive(true)
       }else {
        setisActive(false)
       }
    }
    const handlereset=()=>{
        if(isActive){
            setisActive(false)
            setmili(0)
            setsec(0)
        }
    }
  return (
  <>
    <div>StopWatch using useRef and useState</div>
    <h2>by using usestate</h2>
    <p>{sec}:{mili}</p>
    <button onClick={handleStart}>{isActive?"stop":"start"}</button>
    {isActive?<button onClick={handlereset}>reset</button>:""}
  </>

  )
}
