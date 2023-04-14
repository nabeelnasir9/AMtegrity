/* eslint-disable */ 
import {Backdrop, Button, CircularProgress, Grid, TextareaAutosize, TextField, Typography} from '@mui/material';
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AnimmatedConfirmer from '../components/AnimmatedConfirmer';

function ContactForm(props) {
const [Name, setName] = useState('');
const [Email, setEmail] = useState('')
const [Phonenumber, setPhonenumber] = useState('')
const [message, setmessage] = useState('')
const [loader,setloader]=useState(false)
const [loader2,setloader2]=useState(false)

const submitHandler=async ()=>{
  console.log('red')
  setloader(true);
  const response =await fetch('https://backened-m-integrity-271pwlwa5-jasim-n.vercel.app/api/message',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({Name,Email,message,Phonenumber})
  });
  const data1 = response.json();
  if(response.status==200){
    setloader(false)
    setloader2(true)
    setName('')
    setEmail('')
    setmessage('')
    setPhonenumber('')
    setTimeout(() => {
      setloader2(false)
    }, 700);
  }
  console.log(Name,Email,message,Phonenumber,data1,response)
 }



 const {
  control,register,
  handleSubmit,reset,
  formState: { errors },
} = useForm();
const phoneRegex = /^\+?\d{10,14}(x\d+)?$/;
const validatePhoneNumberRegex = /^[0-9]*$/;

  return (
    <form onSubmit={handleSubmit(submitHandler)} style={{width:'100%'}}>
      <Backdrop  container={() => document.querySelector('.brs')}
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={loader}
  
>
  <CircularProgress color="inherit" />
</Backdrop>
    <Grid className='brs' container id='contactus'  sx={{pl: '4rem', pr: '4rem', pb: '6rem', justifyContent: 'space-between',position:'relative'}}>
     {loader2 &&  <Grid item xs={12} sx={{position:'absolute',zIndex:'9',transform:' translateX(42%)',
    top: '10rem'}}>
      <AnimmatedConfirmer/>
     </Grid>}
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
          {...register('name', { 
            required: 'Name is required', 
            minLength: { value: 2, message: 'Name should be at least 2 characters' },
            maxLength: { value: 50, message: 'Name should not exceed 50 characters' },
            pattern: { 
              value: /^[A-Za-z\s]+$/, 
              message: 'Name should contain only letters and spaces'
            }
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
          type={'text'}
        value={Name}
        onChange={(e)=>{setName(e.target.value)}}
          InputLabelProps={{
            sx: {
            
              '&.Mui-focused': {
                color: '#4267B2',
              },
            },
          }}
          sx={{
            mb: '1rem',
            '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
              {borderColor: '#4267B2 !important', borderRadius: '10px'},
            // '& legend ': {width: '160px'},
          }}
          label="Name"
        />
        <TextField
          fullWidth
          type={'email'}
          value={Email}
          onChange={(e)=>{setEmail(e.target.value)}}
          InputLabelProps={{
            sx: {
            
              '&.Mui-focused': {
                color: '#4267B2',
              },
            },
          }}
          sx={{
            mb: '1rem',
            '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
              {borderColor: '#4267B2 !important', borderRadius: '10px'},
            // '& legend ': {width: '160px'},
          }}
          label="Email"
        />
             <TextField
        label="Phone Number"
        type="tel"
        {...register('phoneNumber', {
          required: 'Phone number is required',
          pattern: {
            value: /^\+?\d{10,14}(x\d+)?$/,
            message: 'Please enter a valid phone number'
          }
        })}
        value={Phonenumber}
        onChange={(e)=>{
          e.target.value.length<11 ?
          (validatePhoneNumberRegex.test(e.target.value))?
          setPhonenumber(e.target.value):'':''
        
        }}
        InputLabelProps={{
          sx: {
          
            '&.Mui-focused': {
              color: '#4267B2',
            },
          },
        }}
        sx={{
          mb: '1rem',
          '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
            {borderColor: '#4267B2 !important', borderRadius: '10px'},
          '& legend ': {width: '90px'},
        }}
        
        error={!!errors.phoneNumber}
        helperText={errors.phoneNumber?.message}
        fullWidth
      />
    
      </Grid>
      <Grid item xs={5.75}>
        <TextField
          multiline
          minRows={7.27}
          {...register('msg', { 
            required: 'Name is required', 
            minLength: { value: 2, message: 'Name should be at least 2 characters' },
           
          })}
          error={!!errors.msg}
          helperText={errors.msg?.message}
          fullWidth
          type={'text'}
          value={message}
          onChange={(e)=>{setmessage(e.target.value)}}
          InputLabelProps={{
            sx: {
            
              '&.Mui-focused': {
                color: '#4267B2',
              },
            },
          }}
       
          sx={{
           
            '& .css-19dufz4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline':
            {borderColor: '#4267B2 !important', borderRadius: '10px'},
            width: '100%',
            borderRadius: '10px',
          }}
          label="Message"
        />
      </Grid>
      <Grid item><Button type='submit' >send</Button></Grid>
    </Grid>
    </form>
  );
}

export default ContactForm;
