import {Grid, TextareaAutosize, TextField, Typography} from '@mui/material';
import React from 'react';

function ContactForm(props) {
  return (
    <Grid container id='contactus' sx={{pl: '4rem', pr: '4rem', pb: '6rem', justifyContent: 'space-between'}}>
      <Grid item xs={12} sx={{mt: '3rem', mb: '3rem'}}>
        <Typography
          sx={{
            pt: '4rem',
            fontWeight: '700',
            fontSize: '40px',
            textAlign: 'center',
            color: '#4267B2',
          }}>
          Contact Us
        </Typography>
      </Grid>
      <Grid item xs={5.75}>
        <TextField
          fullWidth
          type={'email'}
        
          InputLabelProps={{
            sx: {
            
              '&.Mui-focused': {
                color: 'green',
              },
            },
          }}
          sx={{
            mb: '1rem',
            '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
              {borderColor: 'green !important', borderRadius: '10px'},
            // '& legend ': {width: '160px'},
          }}
          label="Name"
        />
        <TextField
          fullWidth
          type={'email'}
          InputLabelProps={{
            sx: {
            
              '&.Mui-focused': {
                color: 'green',
              },
            },
          }}
          sx={{
            mb: '1rem',
            '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
              {borderColor: 'green !important', borderRadius: '10px'},
            // '& legend ': {width: '160px'},
          }}
          label="Email"
        />
        <TextField
          fullWidth
          type={'email'}
          InputLabelProps={{
            sx: {
            
              '&.Mui-focused': {
                color: 'green',
              },
            },
          }}
          sx={{
            mb: '1rem',
            '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
              {borderColor: 'green !important', borderRadius: '10px'},
            '& legend ': {width: '90px'},
          }}
          label="Phone Number"
        />
      </Grid>
      <Grid item xs={5.75}>
        <TextField
          multiline
          minRows={7.27}
          InputLabelProps={{
            sx: {
            
              '&.Mui-focused': {
                color: 'green',
              },
            },
          }}
       
          sx={{
           
            '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
            {borderColor: 'green !important', borderRadius: '10px'},
            width: '100%',
            borderRadius: '10px',
          }}
          type={'email'}
          label="Message"
        />
      </Grid>
    </Grid>
  );
}

export default ContactForm;
