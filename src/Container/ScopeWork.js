import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ScopeworkElement from './ScopeworkElement';

function ScopeWork(props) {
    return (
        <Grid container >
            <Grid item xs={12}>
                <Typography sx={{fontSize:'45px',textAlign:'center', pt:"3rem",color:'#4267B2', fontWeight:"700"}}>How AMintScope <br/>Works?</Typography>
            </Grid>
            <Grid item xs={12} sx={{pl:'4rem',pr:'4rem', pt:"7rem"}}>
                <Grid container >
                    <ScopeworkElement txt={'Perform pre-mitigation and post-mitigation scans with a Geospatial Platforms Pro Series camera.'}   nmbr={1} sx={{color:'#4267B2'}}/>
                    <ScopeworkElement txt={'Submit the Geospatial Platforms scans via the mpartial portal and then go back to what you do great.'}  nmbr={2} sx={{color:'#4267B2'}}/>
                    <ScopeworkElement txt={'Receive a well-formatted, fully documented estimate. Xactimate: PDF, ESX & Geospatial Platforms TruePlan SKX / Symbility.'}  nmbr={3} sx={{color:'#4267B2'}}/>
                    <Grid item  xs={12} sx={{pt:"6rem", pb:"6rem", textAlign:'center'}}>
        <Button sx={{ backgroundColor:'#4267B2',color:'white',fontFamily:'Raleways',fontSize:'14px',textTransform:'none',pl:'2rem',pr:'2rem',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'#3ac280',color:'white'}}}>Get Started </Button>
      </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ScopeWork;