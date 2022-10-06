import { useState } from "react"
import './Todo.css'

export const TodoApp=()=>{
    const [inpVal,setVal]=useState('')
    const [data,setData]=useState([])
    //add function
    const handleAdd=()=>{
        if(inpVal!==""){
            setData([...data,inpVal])
            setVal('')
            console.log(data)
        }
        
    }
    //delete function
    const handledelete=(el)=>{
         const filteredData=data.filter((items)=>items!=el)
         setData(filteredData)
    }
    
    return(
        <>
     <div>
     <input className="inputvalue" value={inpVal}
       onChange={(e)=>setVal(e.target.value)}
        placeholder="type something here "/>
        <button className="addbutton" onClick={handleAdd}>Add </button>
        

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
        
     </div>
        </>
    )
}