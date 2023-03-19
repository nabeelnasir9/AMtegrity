import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

function Feebtn(props) {
    const [clicked,setcliked]=useState(true);
    return (
        <>
        <Grid container sx={{border:'1px solid #4267B2',borderRadius:'22px',mt:'1rem', alignItems:"center", ml:"5rem", mr:"5rem", }}>
            <Grid item xs={6}>
            <Button onClick={()=>setcliked(true) } sx={{backgroundColor:clicked?'#4267B2':'transparent',pt:'1rem',pb:'1rem',color:clicked?'white':'grey',fontFamily:'Raleway',fontSize:'21px',textTransform:'none',pl:'6rem',pr:'6rem',borderRadius:'20px',textAlign:'center', fontWeight:"700",width:'100%',':hover':{backgroundColor:clicked?'#3ac280':'transparent',color:'white'}}}>Xactimate</Button>
            </Grid><Grid item xs={6}>

            <Button onClick={()=>setcliked(false) }  sx={{backgroundColor:!clicked?'#4267B2':'transparent',pt:'1rem',pb:'1rem',color:!clicked?'white':'grey',fontFamily:'Raleway',fontSize:'21px',textTransform:'none',pl:'6rem',pr:'6rem',borderRadius:'20px',textAlign:'center', fontWeight:"700",width:'100%',':hover':{backgroundColor:!clicked?'#3ac280':'transparent',color:'white'}}}>Matterport</Button>
            </Grid>
           
        </Grid>
        <Grid container>
             <Grid item xs={12} sx={{textAlign:'center', pt:"6rem"}}>
               {clicked && <Typography sx={{fontSize:'37px',width:'60%',margin:'auto',fontWeight:'600', color:"#4267B2", pb:"2rem"}}>AMEstimate Fee Structure - Xactimate</Typography>}
               {!clicked && <Typography sx={{fontSize:'37px',width:'60%',margin:'auto',fontWeight:'600', color:"#4267B2", pb:"2rem"}}>AMEstimate Fee Structure - Matterport</Typography>}

            </Grid>
            <Grid item xs={12}>
                <Typography sx={{textAlign:'center', pb:"6rem", fontWeight:"500"}}>The AMntegrity fee structure is based on a percentage of the total RCV of the estimate (pre Overhead and Profit).<br/>
Drag the slider around based on what you think it will cost to repair the property.<br/>
Move forward based on the estimated fee structure below.</Typography>
            </Grid>
        </Grid></>
    );
}

export default Feebtn;