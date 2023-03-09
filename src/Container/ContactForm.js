import { Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import React from 'react';

function ContactForm(props) {
    return (
      <Grid container sx={{pl:'4rem',pr:'4rem',pb:"6rem",justifyContent:'space-between'}}>
          <Grid item xs={12} sx={{mt:'3rem',mb:'3rem',}}>
            <Typography sx={{pt:"4rem",fontWeight:'700',fontSize:'40px',textAlign:'center', color:"#4267B2"}}>Contact Us</Typography>
        </Grid>
        <Grid item xs={5.75}>
          <TextField fullWidth  type={'email'} sx={{borderRadius:'10px',mb:'1rem',' & .MuiInputBase-root':{borderRadius:'10px'},'& .MuiOutlinedInput-root ,& .Mui-focused, & .MuiOutlinedInput-notchedOutline':{border:'1px solid rgba(10,81,105,.5) !important'}}} label="Name"/>
          <TextField fullWidth  type={'email'} sx={{borderRadius:'10px',mb:'1rem',' & .MuiInputBase-root':{borderRadius:'10px'},'& .MuiOutlinedInput-root':{border:'1px solid rgba(10,81,105,.5)'}}} label="Email"/>
          <TextField fullWidth  type={'email'}  sx={{borderRadius:'10px',' & .MuiInputBase-root':{borderRadius:'10px'},'& .MuiOutlinedInput-root':{border:'1px solid rgba(10,81,105,.5)'}}} label="Phone Number"/>

        </Grid>
        <Grid item xs={5.75}>
          <TextField multiline minRows={7.27}  sx={{'& .MuiOutlinedInput-root ,& .Mui-focused, & .MuiOutlinedInput-notchedOutline':{border:'1px solid rgba(10,81,105,.5) !important'},width:'100%',borderRadius:'10px',' & .MuiInputBase-root':{borderRadius:'10px', }}}  type={'email'} label="Message"/>
          {/* <TextareaAutosize style={{height:'100%',resize: 'none',width:"100%"}} label="YourName" placeholder="Enter your text here" /> */}

        </Grid>

      </Grid>
    );
}

export default ContactForm;