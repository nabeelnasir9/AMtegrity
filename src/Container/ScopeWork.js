import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ScopeworkElement from './ScopeworkElement';

function ScopeWork(props) {
    return (
        <Grid container >
            <Grid item xs={12}>
                <Typography sx={{fontSize:'45px',textAlign:'center'}}>How mpartialScope <br/>Works?</Typography>
            </Grid>
            <Grid item xs={12} sx={{pl:'4rem',pr:'4rem'}}>
                <Grid container>
                    <ScopeworkElement txt={'Perform pre-mitigation and post-mitigation scans with a Geospatial Platforms Pro Series camera.'}  nmbr={1}/>
                    <ScopeworkElement txt={'Submit the Geospatial Platforms scans via the mpartial portal and then go back to what you do great.'}  nmbr={2}/>
                    <ScopeworkElement txt={'Receive a well-formatted, fully documented estimate. Xactimate: PDF, ESX & Geospatial Platforms TruePlan SKX / Symbility: PDF augmented by mpartialSketch.'}  nmbr={3}/>
                    <Grid item  xs={12} sx={{textAlign:'center'}}>
        <Button sx={{backgroundColor:'#3ac280',color:'white',fontFamily:'Raleways',fontSize:'14px',textTransform:'none',pl:'2rem',pr:'2rem',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'#3ac280',color:'black'}}}>Get Started </Button>
      </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ScopeWork;