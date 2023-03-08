import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

function FooterElement(props) {
    return (
        <Grid><Link sx={{ textDecoration: 'none', color: 'white', fontSize: '14px',':hover':{textDecoration:'underline'} }}><Typography sx={{mb:'2rem'}}>{props.txt}</Typography></Link></Grid>
    );
}

export default FooterElement;