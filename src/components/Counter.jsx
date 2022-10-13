import React, { useState } from 'react'

export const Counter = () => {
    const [counter,setCounter]=useState(0)
    const AddCount=()=>{
        setCounter(counter+1)
    }
    const Decrease=()=>{
        if(counter>0){
            setCounter(counter-1)
        }
    }
    const Reset=()=>{
        setCounter(0)
    }
  return (
    <div>
        <h3>counter using hooks</h3>
        <p>counter:{counter}</p>
<button onClick={AddCount}>Add</button>
<button onClick={Decrease}>Sub</button>
<button onClick={Reset}>Reset</button>
    </div>
  )
}
