import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrease, Increase } from '../Redux/Actions'

export const CounterRedux = () => {
    const count=useSelector((state)=>state.counter.count)
    console.log(count,"count")
    const dispatch=useDispatch()
   const IncreaseVAl=()=>{
          dispatch(Increase())
   }
   const DecreaseVal=()=>{
          dispatch(Decrease())
   }

  return (
    <div>CounterRedux
        <p>{count}</p>
        <button onClick={IncreaseVAl}>Add</button>
        <button onClick={DecreaseVal}>sub</button>
    </div>
  )
}
