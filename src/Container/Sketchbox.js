import { Grid, Typography } from '@mui/material';
import React from 'react';

function Sketchbox(props) {
    return (
       <Grid container sx={{pl:'4rem',pr:'4rem',justifyContent:'space-between'}}>
        <Grid item xs={12} sx={{mt:'3rem',mb:'3rem'}}>
            <Typography sx={{fontWeight:'600',fontSize:'32px',textAlign:'center',color:"#4267B2", pb:"4rem"}}>AMintSketch for Matterport</Typography>
        </Grid>

        <Grid item xs={3.8} sx={{padding:'1rem',backgroundColor:'white',borderRadius:'8px'}}>
            <img src='http://mpartial.io/static/4e5518b2d4664f7c87fa88697c161584.png' width={'100%'}/>
        </Grid>
        <Grid item xs={3.8} sx={{padding:'1rem',backgroundColor:'white',borderRadius:'8px'}}>
            <img src='http://mpartial.io/static/8949d28f1cd1cd71ef0b3b4a1c40288a.png' width={'100%'}/>
        </Grid>
        <Grid item xs={3.8} sx={{padding:'1rem',backgroundColor:'white',borderRadius:'8px'}}>
            <img src='http://mpartial.io/static/a6f2debf1657548ab014b2c63fdcbd5b.png' width={'100%'}/>
        </Grid>

       </Grid>
    );
}

export default Sketchbox;