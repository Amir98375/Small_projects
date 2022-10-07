import { useState } from "react"
import './Todo.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const TodoApp=()=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [inpVal,setVal]=useState('')
    const [data,setData]=useState([])
    const [update,setUpdate]=useState("")
    //add function
    
    //for on key enter data
    const onKeyEnter=(event)=>{
        if(event.key=='Enter'){
            if(inpVal!==""){
                setData([...data,inpVal])
                setVal('')
                // console.log(data)
            }
        }

    }
    //function for delete 
    // console.log(update)
    const handleEdit=(event,id)=>{
    handleUpdate(event,id)

    }
    //function to perform update opertations
    const handleUpdate=(event,el)=>{
         console.log(data.indexOf(el),"index")
   
            debugger
            console.log(update,'update')
        if(event.key ==="Enter")
          {
          console.log("before")
            console.log(data.indexOf(el),"newindex")
            console.log(data,"array")
          
            data.forEach((items,ind)=>{
             console.log(ind,'ind')
             })
        }
       

    }

 
    //delete function
    const handledelete=(el)=>{
      debugger
        console.log(el,"indexdelete ")
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
               data?.map((el,ind)=>{
                return(
                    <div className="listmain">
                        <p className="list">{el}</p>
                        <button className="buttondelete" onClick={()=>handledelete(el,ind)}>delete</button>
    
     <div onClick={()=>handleUpdate(ind,el)}
     onKeyDown={handleEdit}
     >
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <Input placeholder='update here' width="100%" value={update}
           onChange={(e)=>setUpdate(e.target.value)}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
          </Typography>
        </Box>
      </Modal>
    </div>
                    </div>
                )
            })
          }
         
           </div>
        
    
        </>
    )
}