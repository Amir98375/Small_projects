import { useState } from "react"

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
    console.log(inpVal)
    return(
        <>
       <input value={inpVal}
       onChange={(e)=>setVal(e.target.value)}
        placeholder="type something here "/>
        <button onClick={handleAdd}>Add </button>
        

           <div>
          {
               data?.map((el)=>{
                return(
                    <div>
                        <p>{el}</p>
                        <button onClick={()=>handledelete(el)}>delete</button>
                    </div>
                )
            })
          }

           </div>
        
        </>
    )
}