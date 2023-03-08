import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

function Feebtn(props) {
    const [clicked,setcliked]=useState(true);
    return (
        <>
        <Grid container sx={{border:'1px solid #3ac280',borderRadius:'22px',mt:'1rem'}}>
            <Grid item xs={6}>
            <Button onClick={()=>setcliked(true) } sx={{backgroundColor:clicked?'#3ac280':'transparent',pt:'1rem',pb:'1rem',color:clicked?'white':'grey',fontFamily:'Raleways',fontSize:'14px',textTransform:'none',pl:'2rem',pr:'2rem',borderRadius:'20px',textAlign:'center',width:'100%',':hover':{backgroundColor:clicked?'#3ac280':'transparent',color:'black'}}}>Xactimate</Button>
            </Grid><Grid item xs={6}>

            <Button onClick={()=>setcliked(false) }  sx={{backgroundColor:!clicked?'#3ac280':'transparent',pt:'1rem',pb:'1rem',color:!clicked?'white':'grey',fontFamily:'Raleways',fontSize:'14px',textTransform:'none',pl:'2rem',pr:'2rem',borderRadius:'20px',textAlign:'center',width:'100%',':hover':{backgroundColor:!clicked?'#3ac280':'transparent',color:'black'}}}>Symbility</Button>
            </Grid>
           
        </Grid>
        <Grid container>
             <Grid item xs={12} sx={{textAlign:'center'}}>
               {clicked && <Typography sx={{fontSize:'45px',width:'60%',margin:'auto',fontWeight:'500'}}>mpartialScope Fee Structure - Xactimate</Typography>}
               {!clicked && <Typography sx={{fontSize:'45px',width:'60%',margin:'auto',fontWeight:'500'}}>mpartialScope Fee Structure - Symbility</Typography>}

            </Grid>
            <Grid item xs={12}>
                <Typography sx={{textAlign:'center'}}>The mpartial fee structure is based on a percentage of the total RCV of the estimate (pre Overhead and Profit).<br/>
Drag the slider around based on what you think it will cost to repair the property.<br/>
Move forward based on the estimated fee structure below.</Typography>
            </Grid>
        </Grid></>
    );
}

export default Feebtn;