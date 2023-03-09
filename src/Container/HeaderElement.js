import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

function HeaderElement(props) {
    return (
        <Grid><Link href='#todos' sx={{ textDecoration: 'none', color: '#4a4848', }}><Typography sx={{fontSize:'14px'}}>{props.txt}</Typography></Link></Grid>
    );
}

export default HeaderElement;