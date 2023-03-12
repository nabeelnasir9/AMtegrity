import { FilledInput, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import {CgMail} from 'react-icons/cg'

function SignIn(props) {
    const [showPassword,setShowPassword]=useState(true)
    return (
       <Grid container sx={{width:'-webkit-fill-available',mt:'4rem'}}>
        <Grid item xs={12}>
            <Typography>Sign In with your mpartial account.</Typography>
        </Grid>
        <Grid item xs={5} sx={{position:'relative'}}>
       
        <FormControl sx={{  '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
            {borderColor: 'green !important', borderRadius: '10px'},'& .Mui-focused':{color:'green'},
             m: 1,'& .MuiOutlinedInput-notchedOutline legend ':{ml:'2rem',backgroundColor:'red',color:'red'}  }} fullWidth variant="outlined">
          <InputLabel sx={{pl:'2.5rem'}} htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput sx={{pl:'2.5rem'}}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>setShowPassword(prev=> !prev)}
                //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        {/* <MdVisibilityOff /> */}

        </FormControl>
        <Grid item sx={{padding:'.5rem',backgroundColor:'rgba(10,81,105,.2)',borderRadius:"8px",display:'flex',width:'max-content',position:'absolute',top:'20px',left:'20px'}}><MdLock style={{color:'#6d9e6d'}} /></Grid>

        </Grid>
       </Grid>
    );
}

export default SignIn;