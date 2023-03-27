import { Grid, Typography } from '@mui/material';
import React from 'react';

function ScopeworkElement(props) {
    return (
        <Grid item  xs={4}>
            <Grid container sx={{alignItems:'flex-start'}} > 
                <Grid item xs={3}>
                    <Typography sx={{fontSize:{lg:'167px',xs:'99px'},fontWeight:'600',color:'#4267B2',minHeight:'143px',lineHeight:'.5'}}>{props.nmbr}</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography sx={{fontSize:{lg:'16px',xs:'12px'},mt:{lg:'1.5rem',xs:'.5rem'},pl:'.8rem',pr:{xs:'.5rem',lg:0}}}>{props.txt}</Typography>
                </Grid>

            </Grid>

        </Grid>
    );
}

export default ScopeworkElement;