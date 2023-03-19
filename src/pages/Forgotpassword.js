import {
  Button,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import React, {useState} from 'react';
import {MdLock, MdVisibility, MdVisibilityOff} from 'react-icons/md';
import {CgMail} from 'react-icons/cg';

function Forgotpassword(props) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <Grid
      container
      sx={{width: '-webkit-fill-available', mt: '4rem', justifyContent: 'center',minHeight:'92vh',alignContent:'center'}}>
      <Grid item xs={12} sx={{mt:'-2rem',mb:'3rem'}}>
        <Typography sx={{textAlign: 'center', fontSize: '45px', fontWeight: '600'}}>
        Forgot Password?
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Grid container>
          <Grid item xs={12} sx={{position: 'relative'}}>
            <FormControl
              sx={{
                '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
                  {borderColor: 'green !important', borderRadius: '10px'},
                '& .Mui-focused': {color: 'green !important'},
                m: 1,
                '& .MuiOutlinedInput-notchedOutline legend ': {
                  ml: '2rem',
                  backgroundColor: 'red',
                  color: 'red',
                },
              }}
              fullWidth
              variant="outlined">
              <InputLabel sx={{pl: '2.5rem'}} htmlFor="outlined-adornment-password">
                Enter Your Email
              </InputLabel>
              <OutlinedInput sx={{pl: '2.5rem'}} type={'text'} label="Email" />
              {/* <MdVisibilityOff /> */}
            </FormControl>
            <Grid
              item
              sx={{
                padding: '.5rem',
                backgroundColor: 'rgba(10,81,105,.2)',
                borderRadius: '8px',
                display: 'flex',
                width: 'max-content',
                position: 'absolute',
                top: '20px',
                left: '20px',
              }}>
              <MdLock style={{color: '#6d9e6d'}} />
            </Grid>
          </Grid>
       
        

          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Button
              href="/Signin"
              sx={{
                backgroundColor: '#3ac280',
                color: 'white',
                fontFamily: 'Raleway',
                fontSize: '13px',
                pl: '1.35rem',
                pr: '1.35rem',
                borderRadius: '1rem',
                textAlign: 'center',
                ':hover': {backgroundColor: '#3ac280', color: 'white'},
              }}>
              Submit
            </Button>
          </Grid>

          <Grid item xs={12}  sx={{mt:'1rem'}}>
            <Grid container sx={{alignItems:"center"}}>
<Grid item xs={4} sx={{height:'1px',background:'#00000080'}}></Grid>
<Grid item xs={4} sx={{background:'white'}}><Typography sx={{fontSize:'14px',color:'#00000080',textAlign:'center'}}>New to AMntegrity?</Typography></Grid>
<Grid item xs={4} sx={{height:'1px',background:'#00000080'}}></Grid>

            </Grid>
          </Grid>
          <Grid item xs={12} sx={{textAlign: 'center',mt:'2rem'}}>
            <Button
              href="/Signin"
              sx={{
                backgroundColor: 'transparent',
                color: '#3ac280',
                fontFamily: 'Raleway',
                fontSize: '18px',
                pl: '.5rem',
                pr: '.5rem',
                fontWeight:'400',
                border:'1px solid #3ac280',
                borderRadius: '25px',
                pt:'.5rem',pb:'.5rem',
                textAlign: 'center',
                minWidth:'44%',
                ':hover': {backgroundColor: 'transparent', color: '#3ac280'},
              }}>
            Create Account{' '}
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}

export default Forgotpassword;
