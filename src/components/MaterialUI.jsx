import React, { useState } from 'react'
import Button  from '@mui/material/Button'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert'
import { margin } from '@mui/system';
import PersistentDrawerLeft from './PersistentDrawer';

export const MaterialUI = () => {
    const [alignment, setAlignment] = useState("");
    const [alignstate,setalign]=useState()
    const handleAlign=()=>{
               setalign((alignment)=>setalign(alignment))
    }
  return (
 <>
    <div>
        <Button variant="text" >Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<br />
<div>
<Button
sx={{color:"white"
,backgroundColor:"black"}}>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="/">Link</Button>

</div><br />
<Typography variant='div' sx={{
    color:"grey",
    backgroundColor:"blue"

}}>this is h6 heading</Typography>
<br />
<br />
<Alert severity="success" color='info' sx={{alignItems: 'center'
}}
>This is a success alert — check it out!</Alert>
    
<div >
      <Typography>
        <h1>Typography - A Material-UI component</h1>
        <h2>Best website to learn Computer Science.</h2>
        <h3 id="h3" align={alignment}>
          GeeksforGeeks
        </h3>
      </Typography>
      <input placeholder='type to align' type="text" onChange={(e)=>setAlignment(e.target.value)} />
      <button style={{visibility:"hidden"}} onClick={()=>handleAlign()}>Press</button>
    </div>
    </div>
    <div>
        <PersistentDrawerLeft/>
    </div>
 </>
  )
}
