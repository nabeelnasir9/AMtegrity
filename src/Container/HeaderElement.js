import { Grid, Link, Typography } from '@mui/material';
import React from 'react';
import '../Styles/Header.css';
function HeaderElement(props) {
    return (
        <Grid><Link href={props.txt.link} sx={{ textDecoration: 'none', color: '#4a4848', }}><Typography className='Header__btn'  sx={{fontSize:{xs:'8.7px',lg:'12.5px',lgr:'9.5px'},fontWeight:'600'}}>{props.txt.name}</Typography></Link></Grid>
    );
}

export default HeaderElement;