import { Button, Grid } from '@mui/material';
import React from 'react';
import HeaderElement from './HeaderElement';
const datalist=['AMintBed','AMintConvert','AMintScope','Services','About','Contact Us']
function Header(props) {
    return (
       <Grid container sx={{alignItems:'center',pl:'4rem',pr:'4rem',pt:'.5rem',pb:'.5rem',background:'white',boxShadow:' 0 0 6px rgb(0 0 0 / 30%)',position:'fixed',zIndex:"999"}}>
        <Grid item xs={2} sx={{cursor:'pointer', fontSize:"27px", color:"#4267B2",pl:"4rem"}}>

           AMintegrity
        </Grid>
        <Grid item xs={3.8}></Grid>
        <Grid item xs={6.2} sx={{display:'flex',alignItems:"center",gap:'10px',cursor:'pointer',justifyContent:'space-between', color:'#4267B2',pr:"1rem"}}>
            {datalist.map((s,n)=><HeaderElement sx={{color:'#4267B2' }} key={n} txt={s}/> )}
            <Button sx={{backgroundColor:'#4267B2',color:'white',fontFamily:'Raleways',fontSize:'13px',pl:'1.35rem',pr:'1.35rem',textTransform:'none',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'#3ac280',color:'white' }}}>Sign In </Button>
        </Grid>
       </Grid>
    );
}

export default Header;