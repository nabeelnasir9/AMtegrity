import {Grid, TextField, InputLabel, Typography} from '@mui/material';
import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, {useFormControl} from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import {FcInfo} from 'react-icons/fc';
import {Link} from 'react-router-dom';

function ConverterBar(props) {

  return (
    <Grid container sx={{pl: '4rem', pr: '4rem', mb: '12rem', alignItems: 'center',justifyContent:'center'}}>
      <Grid item xs={4}>
        <TextField
          FormHelperTextProps={{
            sx: {
              position: 'absolute',
              bottom: '-44%',
            },
          }}
          helperText={'Please do not include Overhead and Profit'}
          fullWidth
          label="Enter Estimated Grand Total"
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
            '& legend ': {width: '160px'},
          }}
        />
      </Grid>
      {/* <Grid item xs={.5}>
        {' '}
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSI+IDxkZWZzPiA8ZmlsdGVyIGlkPSJFbGxpcHNlXzE2MiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPiA8ZmVPZmZzZXQgZHk9IjMiIGlucHV0PSJTb3VyY2VBbHBoYSIvPiA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiByZXN1bHQ9ImJsdXIiLz4gPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMC4wNzgiLz4gPGZlQ29tcG9zaXRlIG9wZXJhdG9yPSJpbiIgaW4yPSJibHVyIi8+IDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIvPiA8L2ZpbHRlcj4gPC9kZWZzPiA8ZyBpZD0iR3JvdXBfNTAxMiIgZGF0YS1uYW1lPSJHcm91cCA1MDEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEyMiAtNjkxNCkiPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAxMTIyLCA2OTE0KSIgZmlsdGVyPSJ1cmwoI0VsbGlwc2VfMTYyKSI+IDxjaXJjbGUgaWQ9IkVsbGlwc2VfMTYyLTIiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNjIiIGN4PSIxMy41IiBjeT0iMTMuNSIgcj0iMTMuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOSA2KSIgZmlsbD0iI2ZmZiIvPiA8L2c+IDx0ZXh0IGlkPSJfIiBkYXRhLW5hbWU9Ij0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMzkgNjk0MSkiIGZpbGw9IiMzYWMyODAiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtZmFtaWx5PSJHaWxyb3ktU2VtaWJvbGQsIEdpbHJveSIgZm9udC13ZWlnaHQ9IjYwMCI+PHRzcGFuIHg9IjAiIHk9IjAiPj08L3RzcGFuPjwvdGV4dD4gPC9nPiA8L3N2Zz4g" />
      </Grid>
      <Grid item xs={4} sx={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'inherit',pt:'1rem',pb:'1rem',pl:'1rem',pr:'1rem',background:'white',borderRadius:'12px',boxShadow: '0px 0px 16px rgb(0 0 0 / 6%)'}}>
        <Typography sx={{fontSize:'12px'}}>Estimated AMtegrity cost:</Typography>
        <Typography><span>$</span>0</Typography>
      </Grid>
      <Grid item xs={.5}><FcInfo style={{fontSize:'30px',marginLeft:'5px'}}/></Grid>
      <Grid item xs={12} sx={{mt:'4rem'}} ><Typography sx={{fontSize:'16px',textAlign:'center'}}>The calculator fees are based on the Free Plan. For Enterprise Plan fees please<Link to="/SignIn"> <span style={{Color:'#4267B2'}}>Contact Us</span></Link></Typography></Grid> */}

    </Grid> 
  );
}

export default ConverterBar;
