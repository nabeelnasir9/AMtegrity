import { Grid, Typography } from '@mui/material';
import React from 'react';

function Exampledeliverable(props) {
    return (
       <Grid container sx={{pl:'4rem',pr:'4rem',justifyContent:'space-between',mb:'2rem'}}>
        <Grid item xs={12} sx={{mt:'3rem',mb:'3rem'}}>
            <Typography sx={{fontWeight:'700',fontSize:'40px',textAlign:'center',color:"#4267B2"}}>Example Deliverables</Typography>
        </Grid>
        <Grid item xs={12} sx={{mt:'2rem',mb:'3rem'}}>
            <Typography sx={{fontWeight:'500',fontSize:'24px',textAlign:'center'}}>Pre-Mitigation Scan + Post-Mitigation Scan = Matterport PDF + AMintSketch</Typography>
        </Grid>
<Grid item xs={1}></Grid>
        <Grid item xs={4.75} >
            <Grid>
            <iframe width="100%" height="480" src="https://my.matterport.com/show/?m=DhqzGgT7M1E" frameBorder="0" loading="lazy" allowFullScreen="" allow="vr"></iframe>

            </Grid>
        </Grid>
        <Grid item xs={4.75}>
            <Grid>
            <iframe width="100%" height="480" src="https://my.matterport.com/show/?m=DhqzGgT7M1E" frameBorder="0" loading="lazy" allowFullScreen="" allow="vr"></iframe>

            </Grid>
        </Grid>
        <Grid item xs={1}></Grid>

       </Grid>
    );
}

export default Exampledeliverable;