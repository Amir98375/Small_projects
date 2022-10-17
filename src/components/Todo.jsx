import { useEffect, useState } from "react"
import './Todo.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import axios from "axios";
import Pagination from '@mui/material/Pagination';

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
    const handleOpen = (e,ind) => {
      setOpen(true) ;
      setEdit(ind)
    }
    const handleClose = () => setOpen(false);
    const [inpVal,setVal]=useState('')
    const [data,setData]=useState([])
    const [update,setUpdate]=useState("")
    const [edit, setEdit]=useState(null)
    //add function
    const [page, setPage] = useState(1);                
    const [fetchdata,setfetchData]=useState([])
    const [total,setTotal]=useState(0)
    const [count,setCount]=useState(0)
const handlePage=(page)=>{
 
  console.log(page,"page")
  setPage(page)
}
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
   
const handleEdit=(e,el)=>{
  // console.log(data)
  // debugger
 data.forEach((items,ind)=>{
  if(ind==edit && update!==""){
    // console.log("edit index",ind,"update",update)
    data[ind]=update
    handleClose()
  }
 })

}
 
    //delete function
    const handledelete=(el)=>{
      // debugger
        console.log(el,"indexdelete ")
         const filteredData=data.filter((items)=>items!=el)
         setData(filteredData)
    }

    // for fetch data
    const FetchData=(page)=>{
    
      axios.get(`https://apnastore123.herokuapp.com/products`,{
        params:{
         _page:page,
         _limit:10
        }
      })
      .then((res)=>{
        setfetchData(res.data)
        setTotal(res.data.length)
      })
    }
    useEffect(()=>{
          FetchData(page)
    },[page])
    console.log(fetchdata,"fetched",'total=>',total)
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
                    <div style={{display:"flex"}}
                  
                     className="listmain" key={ind}>
                        <p className="list">{el}</p>
                        <button className="buttondelete" 
                        onClick={()=>handledelete(el,ind)}>delete</button>
    
     <div className="modal"
     >
      <Button onClick={(e)=>handleOpen(e,ind)}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <Input placeholder='update here' width="100%" value={update}
           onChange={(e)=>setUpdate(e.target.value)}
           

           />
           <Button
           onClick={(e,ind)=>handleEdit(e,ind)}>Add</Button>
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
        <div>


          <h3>items to be displayed here for pagination</h3>
          <div>
            {fetchdata?.map((el,ind)=>{
              return(
                <div>
                  {el.title}
                </div>
              )
            })}
              <div style={{margin:"auto" ,border:"1px solid grey" ,paddingLeft:"40%"
}}>
              <Pagination 
            
            count={total}
            onChange={(event, value) => handlePage(value)}
             />
              </div>
          </div>
        </div>
    
        </>
    )
}