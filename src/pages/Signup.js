import {
  Avatar,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React from 'react';
import {MdLock} from 'react-icons/md';
import Qaiser from '../images/Avatar.jpeg';

function Signup(props) {
  return (
    <Grid
      container
      sx={{
        width: '-webkit-fill-available',
       pt:'6rem',
        justifyContent: 'center',
        // minHeight: '100vh',mt:"-.5rem",
        //alignContent: 'center',
      }}>
        {/* <Grid item xs={12} sx={{height:'1px',background:'#00000080'}}></Grid> */}
      <Grid item xs={12} sx={{display:'flex',justifyContent:'center',mt:'-1rem'}}>
        <Avatar  sx={{ width: 120, height: 140,background:'red', }} src={Qaiser} />
      </Grid>
      <Grid item xs={12} sx={{ mb: '2rem'}}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: '600',
            width: '70%',
            margin: 'auto',
          }}>
          Hello! I'm Qaiser. I'll get you signed up in seconds. Ready to go?
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

          <Grid item xs={12} sx={{textAlign: 'center',mt:'1.5rem'}}>
            <Button
              sx={{
                backgroundColor: '#4267B2',
                color: 'white',
                fontFamily: 'Raleway',
                fontSize: '13px',
                pl: '1.35rem',
                pt:'.7rem',pb:'.7rem',
                pr: '1.35rem',
                minWidth:'30%',
                borderRadius: '1rem',
                textAlign: 'center',
                ':hover': {backgroundColor: 'white', color: '#4267B2', border:'3px solid #4267B2', fontWeight:'500',borderRadius: '1rem'},
              }}>
              Lets Do This {' '}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Signup;
