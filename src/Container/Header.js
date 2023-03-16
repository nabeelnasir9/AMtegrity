import { Button, Grid, Link } from '@mui/material';
import React from 'react';
import HeaderElement from './HeaderElement';
const datalist=[{name:'AMintBed',link:'/#mpartialMbed'},{name:'AMintConvert',link:'/#AMintConvert'},{name:'AMintScope',link:'/#AMintScope'},{name:'Services',link:'/#'},{name:'About',link:'/aboutus'},{name:'Contact Us',link:'/#contactus'}]
function Header(props) {
    return (
       <Grid container  sx={{alignItems:'center',pl:'4rem',pr:'4rem',pt:'.5rem',pb:'.5rem',background:'white',boxShadow:' 0 0 6px rgb(0 0 0 / 30%)',position:'fixed',zIndex:"999"}}>
        <Grid item xs={2} sx={{cursor:'pointer', fontSize:"27px", color:"#4267B2",pl:"4rem"}}>

          <Link href='/' sx={{textDecoration:'none'}}>AMintegrity</Link> 
        </Grid>
        <Grid item xs={2.5}></Grid>
        <Grid item xs={7.5} sx={{display:'flex',alignItems:"center",gap:'7px',cursor:'pointer',justifyContent:'center', color:'#4267B2',pr:"1rem"}}>
            {datalist.map((s,n)=><HeaderElement sx={{color:'#4267B2' }} key={n} txt={s}/> )}
            <Button href='/Signin' sx={{backgroundColor:'#4267B2',color:'white',fontFamily:'Raleways',fontSize:'13px',pl:'1.35rem',pr:'1.35rem',textTransform:'none',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'#3ac280',color:'white' }}}>Sign In </Button>
        </Grid>
       </Grid>
    );
}

export default Header;
