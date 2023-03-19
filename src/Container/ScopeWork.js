import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ScopeworkElement from './ScopeworkElement';
import {Link} from 'react-router-dom';

function ScopeWork(props) {
    return (
        <Grid container >
            <Grid item xs={12}>
                <Typography sx={{fontSize:'45px',textAlign:'center', pt:"3rem",color:'#4267B2', fontWeight:"700"}}>How AMEstimate <br/>Works?</Typography>
            </Grid>
            <Grid item xs={12} sx={{pl:'4rem',pr:'4rem', pt:"7rem"}}>
                <Grid container >
                    <ScopeworkElement txt={'Perform detailed scans with special matterport powered cameras and devices to make a detailed scan.'}   nmbr={1} sx={{color:'#4267B2'}}/>
                    <ScopeworkElement txt={'Make a sketch from that scan on Xactiamte including all the necessary details.'}  nmbr={2} sx={{color:'#4267B2'}}/>
                    <ScopeworkElement txt={'Receive a well-formatted. Perform detailed line items and make a full estimate of a space,'}  nmbr={3} sx={{color:'#4267B2'}}/>
                    <Grid item  xs={12} sx={{pt:"6rem", pb:"6rem", textAlign:'center'}}>
       <Link to="/SignIn" style={{textDecoration:'none'}}> <Button sx={{ backgroundColor:'#4267B2',color:'white',fontFamily:'Raleway',fontSize:'14px',textTransform:'none',pl:'2rem',pr:'2rem',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'white',color:'#4267B2', border:'2px solid #4267B2'}}}>Get Started </Button></Link>
      </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ScopeWork;