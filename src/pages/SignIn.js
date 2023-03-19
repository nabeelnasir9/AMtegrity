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

function SignIn(props) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <Grid
      container
      sx={{width: '-webkit-fill-available', mt: '4rem', justifyContent: 'center',minHeight:'92vh',alignContent:'center'}}>
      <Grid item xs={12} sx={{mt:'-2rem',mb:'3rem'}}>
        <Typography sx={{textAlign: 'center', fontSize: '45px', fontWeight: '600'}}>
          Sign In with your AMntegrity account.
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Grid container>
          <Grid item xs={12} sx={{position: 'relative'}}>
            <FormControl
              sx={{
                '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
                  {borderColor: '#4267B2 !important', borderRadius: '10px'},
                '& .Mui-focused': {color: '#4267B2 !important'},
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
                Email
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
              <MdLock style={{color: '#4267B2'}} />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{position: 'relative'}}>
            <FormControl
              sx={{
                '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
                  {borderColor: '#4267B2 !important', borderRadius: '10px'},
                '& .Mui-focused': {color: '#4267B2 !important'},
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
                Password
              </InputLabel>
              <OutlinedInput
                sx={{pl: '2.5rem'}}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(prev => !prev)}
                      //   onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
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
              <MdLock style={{color: '#4267B2'}} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Link
            href='/forgotpassword'
              sx={{
                textDecoration: 'none',
                ':hover': {textDecoration: 'underline', color: 'green', cursor: 'pointer'},
              }}>
              <Typography sx={{fontSize: '14px', color: '#4267B2', textAlign: 'right'}}>
                Forgot Password?
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Button
              sx={{
                backgroundColor: '#4267B2',
                color: 'white',
                fontFamily: 'Raleway',
                fontSize: '13px',
                pl: '1.35rem',
                pr: '1.35rem',
                borderRadius: '1rem',
                textAlign: 'center',
                ':hover': {backgroundColor: 'white', color: '#4267B2', border:'2px solid #4267B2', borderRadius: '1rem'},
              }}>
              Sign In{' '}
            </Button>
          </Grid>

          <Grid item xs={12}  sx={{mt:'1rem'}}>
            <Grid container sx={{alignItems:"center"}}>
<Grid item xs={4} sx={{height:'1px',background:'#00000080'}}></Grid>
<Grid item xs={4} sx={{background:'white'}}><Typography sx={{fontSize:'14px',color:'#4267B2',textAlign:'center'}}>New to AMntegrity?</Typography></Grid>
<Grid item xs={4} sx={{height:'1px',background:'#00000080'}}></Grid>

            </Grid>
          </Grid>
          <Grid item xs={12} sx={{textAlign: 'center',mt:'2rem'}}>
            <Button
              href="/signup"
              sx={{
                backgroundColor: 'transparent',
                color: '#4267B2',
                fontFamily: 'Raleway',
                fontSize: '18px',
                pl: '.5rem',
                pr: '.5rem',
                fontWeight:'400',
                border:'1px solid #4267B2',
                borderRadius: '25px',
                pt:'.5rem',pb:'.5rem',
                textAlign: 'center',
                minWidth:'44%',
                ':hover': {backgroundColor: '#4267B2', color: 'white'},
              }}>
            Create Account{' '}
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}

export default SignIn;
