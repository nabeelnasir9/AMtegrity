import { Grid, Typography } from '@mui/material';
import React from 'react';

function ScopeworkElement(props) {
    return (
        <Grid item  xs={4}>
            <Grid container sx={{alignItems:'flex-start'}} > 
                <Grid item xs={3}>
                    <Typography sx={{fontSize:'167px',fontWeight:'600',color:'#4267B2',minHeight:'143px',lineHeight:'.5'}}>{props.nmbr}</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography sx={{fontSize:'16px',mt:'1.5rem',pl:'.8rem'}}>{props.txt}</Typography>
                </Grid>

            </Grid>

        </Grid>
    );
}

export default ScopeworkElement;