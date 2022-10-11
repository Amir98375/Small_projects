import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrease, DecreaseValue, Increase, IncreaseValue, Resetvalue } from '../Redux/Actions'

export const CounterRedux = () => {
    const count=useSelector((state)=>state.counter.count)
    console.log(count,"count")
    const dispatch=useDispatch()
//    const IncreaseVAl=()=>{
//           dispatch(Increase())
//    }
//    const DecreaseVal=()=>{
//           dispatch(Decrease())
//    }

  return (
    <div>CounterRedux
        <p>{count}</p>
        <button onClick={()=>dispatch(IncreaseValue())}>Add</button>
        <button onClick={()=>dispatch(DecreaseValue())}>sub</button>
        <button onClick={()=>dispatch(Resetvalue())}>Reset</button>
    </div>
  )
}
