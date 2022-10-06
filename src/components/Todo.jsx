import { useState } from "react"
import './Todo.css'

export const TodoApp=()=>{
    const [inpVal,setVal]=useState('')
    const [data,setData]=useState([])
    //add function
    // const handleAdd=()=>{
    //     if(inpVal!==""){
    //         setData([...data,inpVal])
    //         setVal('')
    //         console.log(data)
    //     }
        
    // }
    //for on key enter data
    const onKeyEnter=(event)=>{
        if(event.key=='Enter'){
            if(inpVal!==""){
                setData([...data,inpVal])
                setVal('')
                console.log(data)
            }
        }

    }
    //delete function
    const handledelete=(el)=>{
         const filteredData=data.filter((items)=>items!=el)
         setData(filteredData)
    }
    
    return(
        <>
     <div className="inputtag">
     <input className="inputvalue" value={inpVal}
       onChange={(e)=>setVal(e.target.value)}
      onKeyDown={onKeyEnter}
        placeholder="type something here "/>
      
        </div>
        

           <div>
          {
               data?.map((el)=>{
                return(
                    <div className="listmain">
                        <p className="list">{el}</p>
                        <button className="buttondelete" onClick={()=>handledelete(el)}>delete</button>
                    </div>
                )
            })
          }

           </div>
        
    
        </>
    )
}