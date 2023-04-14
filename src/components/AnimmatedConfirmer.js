import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import tick from '../images/tickpic.svg'

function AnimmatedConfirmer(props) {
    return (
        <Grid
        container alignItems={'center'} justifyContent={'center'}>
            <Paper sx={{minHeight:'25vh',height:'320px',maxHeight:'85vh',width:'50vw',borderRadius:'25px',pb:'10rem'}} elevation={5}><Box sx={{width:'100%',height:'100%'} }>
{/* <Typography sx={{fontSize:'28px',textAlign:'center',mt:'2rem'}}>Submitting......</Typography>
<Grid display={'flex'} justifyContent={'center'} sx={{mt:'2rem'}} >

<img src='https://i.gifer.com/ZZ5H.gif' width={'200px'} height={'150px'} style={{margin:'auto'}}></img>


</Grid> */}

<Typography sx={{fontSize:'28px',textAlign:'center',mt:'2rem',position:'relative',zIndex:99}}>Submitted</Typography>
<Grid display={'flex'} justifyContent={'center'} sx={{mt:'1rem',position:'relative'}} >

<img src={tick} width={'250px'} height={'200px'} style={{margin:'auto',marginBottom:'1rem'}}></img>

</Grid>

                </Box></Paper>
        </Grid>
    );
}

export default AnimmatedConfirmer;