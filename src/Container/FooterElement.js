import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

function FooterElement(props) {
    return (
        <Grid><Link sx={{ textDecoration: 'none', color: 'white'}}><Typography sx={{fontWeight:"600",mb:'2rem',fontSize: '15px',':hover':{fontWeight:"700",textDecoration:"underline",cursor:'pointer'} }}>{props.txt}</Typography></Link></Grid>
    );
}

export default FooterElement;