import React, { useEffect, useRef, useState } from 'react'

export const StopWatch = () => {
    const [isActive,setisActive]=useState(false)
    const[sec,setsec]=useState(0)
    const[mili,setmili]=useState(0)
    const [hour,setHour]=useState(0)

    //state for timer
    const[num,setNum]=useState(100)
    const [pause,setPause]=useState(false)
    let myInterval=useRef()

    const DecreaseNum=()=>setNum((num)=>num-1)

    useEffect(()=>{
        myInterval.current=setInterval(DecreaseNum,1000)
        return(()=>{
            clearInterval(myInterval.current)
        })
    },[])

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
    if(sec>59){
        setHour(hour+1)
        setsec(0)
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
const handleClick=()=>{
    if(!pause){
        clearInterval(myInterval.current)
    }else{
     setInterval(DecreaseNum,1000)
    }
    setPause((prev)=>!prev)
}
    
  return (
  <>
    <div>StopWatch using useRef and useState</div>
    <h2>by using usestate</h2>
    <p>{hour}:{sec}:{mili}</p>
    <button onClick={handleStart}>{isActive?"stop":"start"}</button>
    {isActive?<button onClick={handlereset}>reset</button>:""}
    <div>
    <h3>Timer using useRef</h3>   
    <p>{num}</p> 
    <button
    onClick={handleClick}>{pause?"run":"stop"}</button> 
    </div>
  </>

  )
}
