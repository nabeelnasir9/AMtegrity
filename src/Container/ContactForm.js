/* eslint-disable */ 
import {Button, Grid, TextareaAutosize, TextField, Typography} from '@mui/material';
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ContactForm(props) {
const [Name, setName] = useState('');
const [Email, setEmail] = useState('')
const [Phonenumber, setPhonenumber] = useState('')
const [message, setmessage] = useState('')
 const submitHandler=async ()=>{
  console.log('red')
  
  const response =await fetch('http://localhost:1337/api/message',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({Name,Email,message,Phonenumber})
  });
  const data1 = response.json();
  if(response.status==200){
    setName('')
    setEmail('')
    setmessage('')
    setPhonenumber('')
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
    <form onSubmit={handleSubmit(submitHandler)}>
    <Grid container id='contactus'  sx={{pl: '4rem', pr: '4rem', pb: '6rem', justifyContent: 'space-between'}}>
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
