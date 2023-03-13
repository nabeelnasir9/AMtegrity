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
        <Grid item xs={12} sx={{height:'1px',background:'#00000080'}}></Grid>
      <Grid item xs={12} sx={{display:'flex',justifyContent:'center',mt:'-1rem'}}>
        <Avatar  sx={{ width: 110, height: 110,background:'red' }} src="data:image/png;base64,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" />
      </Grid>
      <Grid item xs={12} sx={{ mb: '2rem'}}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '45px',
            fontWeight: '600',
            width: '70%',
            margin: 'auto',
          }}>
          Hello! I'm Joe. I'll get you signed up in seconds. Ready to go?
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
              <MdLock style={{color: '#6d9e6d'}} />
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{textAlign: 'center',mt:'1.5rem'}}>
            <Button
              sx={{
                backgroundColor: '#3ac280',
                color: 'white',
                fontFamily: 'Raleways',
                fontSize: '13px',
                pl: '1.35rem',
                pt:'.7rem',pb:'.7rem',
                pr: '1.35rem',
                minWidth:'30%',
                borderRadius: '1rem',
                textAlign: 'center',
                ':hover': {backgroundColor: '#3ac280', color: 'white'},
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
