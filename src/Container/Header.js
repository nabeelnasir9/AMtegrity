import { Button, Grid, Link } from '@mui/material';
import React from 'react';
import HeaderElement from './HeaderElement';
import { PopupButton } from 'react-calendly';
import '../Styles/HeaderButton.css';
const datalist=[{name:'AMSketch',link:'/#AMntegrityMbed'},{name:'AMXactimate',link:'/#AMXactimate'},{name:'AMEstimate',link:'/#AMEstimate'},{name:'Services',link:'/Services'},{name:'About',link:'/aboutus'},{name:'Contact Us',link:'/#contactus'}]
function Header(props) {
    return (
       <Grid container  sx={{alignItems:'center',pl:{xs:'0',lg:'4rem'},pr:{xs:'0',lg:'4rem'},pt:'.5rem',pb:'.5rem',background:{xs:'white'},boxShadow:' 0 0 6px rgb(0 0 0 / 30%)',position:'fixed',zIndex:"999"}}>
        <Grid item xs={2} sx={{cursor:'pointer', fontSize:{xs:'20px',lg:"27px"}, color:"#4267B2",pl:{xs:'2rem',lg:"4rem"}}}>

          <Link href='/' sx={{textDecoration:'none', color:'#4267B2'}}>AMntegrity</Link> 
        </Grid>
        <Grid item  xs={0.3} lg={1.5}></Grid>
        <Grid item md={8.5} sm={9.5} xs={10} sx={{display:'flex',alignItems:"center",gap:'7px',cursor:'pointer',justifyContent:{lg:'end',xs:'flex-end'}, color:'#4267B2',pr:"1rem"}}>
            {datalist.map((s,n)=><HeaderElement sx={{color:'#4267B2' }} key={n} txt={s}/> )}
            <Button href='/Signin' sx={{backgroundColor:'#4267B2',color:'white',fontFamily:'Raleway',fontSize:{xs:'9px',lgr:'10px',lg:'11px'},pl:'1rem',pr:'1rem',textTransform:'none',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'white',color:'#4267B2',border:'2px solid #4267B2',borderRadius:'1rem',fontWeight:'600' ,padding:'6px 16px'}}}>Sign In </Button>
            {/* <PopupButton href= sx={{backgroundColor:'#4267B2',color:'white',fontFamily:'Raleway',fontSize:'12px',pl:'1rem',pr:'1rem',textTransform:'none',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'#white',color:'#4267B2',border:'2px solid #4267B2',borderRadius:'1rem' }}}>Book a Call </PopupButton> */}
            <PopupButton
            className='PopupButton__1'
       url='https://calendly.com/nasirnabeel36/30min?back=1&month=2023-03'
      //  sx={{backgroundColor:'#4267B2',color:'white',fontFamily:'Raleway',fontSize:'12px',pl:'1rem',pr:'1rem',textTransform:'none',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'#white',color:'#4267B2',border:'2px solid #4267B2',borderRadius:'1rem' }}}
       rootElement={document.getElementById("root")}
       text="Book a Call"
     />

        </Grid>
       </Grid>
       
    );
}

export default Header;
