import { Grid, Slider, styled, Typography } from '@mui/material';
import React from 'react';

function Sliderbar(props) {
    const IOSSlider = styled(Slider)(({ theme }) => ({
        color: theme.palette.mode === 'dark' ? '#4267B2' : '#4267B2',
        height: 13,
        padding: '15px 0',
        '& .MuiSlider-thumb': {
          height: 34,
          width: 34,
          backgroundColor: '#fff',
          border: '5px solid #617db7',
          boxShadow: iOSBoxShadow,
          '&:focus, &:hover, &.Mui-active': {
            boxShadow:
              '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              boxShadow: iOSBoxShadow,
            },
          },
        },
        '& .MuiSlider-valueLabel': {
          fontSize: 12,
          fontWeight: 'normal',
          top: -6,
          backgroundColor: '#617db7',
          paddingBottom:'1rem',
          paddingTop:'1rem',
          marginTop:'-1rem',
          borderRadius:'10px',

          //clipPath:"polygon(0.2% 0%, 53.3% 0%, 99.9% 0%, 99.9% 86.78%, 56.34% 87%, 50.62% 98.41%, 44.77% 86.99%, 0.2% 86.94%)",
          color: theme.palette.text.primary,
          
       " & .MuiSlider-valueLabelCircle::after" :{
          borderLeft: '8px solid rgba(0,0,0,0)',
          borderRight:"8px solid rgba(0,0,0,0)",
          borderTop: "8px solid #617db7",
          left: '50%',
          bottom: '-7.5px',
          transform: 'translate3d(-50%, 0, 0)',
          content: '" "',
          position: 'absolute',
          width: 0,
          height: 0,
      },
          '&:before': {
            display: 'none',
          },
          '& *': {
            background: 'transparent',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          },
         
        },
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-rail': {
          opacity: 0.5,
          backgroundColor: '#617db7',
        },
        '& .MuiSlider-markLabel':{
            position: "absolute",
    display: 'flex',
   
    textAlign: 'center',
    width: '2px',
    background: 'rgb(211, 211, 211)',
    height: '20px',
    top:'40px',
    lineHeight: '60px',
    color:' #4267B2',
    // fontFamily:'inherit',
    fontSize: '16px',
    justifyContent: 'center',
        },
        '& .MuiSlider-mark': {
          backgroundColor: '#bfbfbf',
          height: 0,
          width: 0,
          '&.MuiSlider-markActive': {
            opacity: 1,
            backgroundColor: 'currentColor',
          },
        },
      }));
    const marks = [
        {
          value: 0,
          label: '0$',
        },
        {
          value: 20,
          label: '20$',
        },
        {
          value: 37,
          label: '37$',
        },
        {
          value: 100,
          label: '100$',
        },
      ];
      function valuetext(value) {
        return <Typography sx={{textAlign:'center',color:'White !important',fontWeight:'500'}}>${value}<br/><Typography sx={{fontWeight:'400',color:'white !important'}}>Estimate Grand Total</Typography></Typography>;
      }     
      const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
 
    return (
    <Grid container sx={{pl:'4rem',pr:'4rem'}}>
        <Grid item xs={12}>
        <IOSSlider
        aria-label="ios slider"
        defaultValue={60}
        marks={marks}
        valueLabelFormat={valuetext}
        valueLabelDisplay="on"
      />
        {/* <Slider
  aria-label="Always visible"
  defaultValue={80}
  getAriaValueText={valuetext}
  step={10}
  marks={marks}
  valueLabelDisplay="on"
/> */}
        </Grid>
    </Grid>
    );
}

export default Sliderbar;