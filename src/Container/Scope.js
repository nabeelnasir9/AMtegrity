import {Button, Grid, Typography} from '@mui/material';
import React from 'react';
import ReactCompareImage from 'react-compare-image';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';
import '../Styles/Scopes.css';
import {Link} from 'react-router-dom';
import Post from '../images/PostMitigation.jpg';
import Pre from '../images/Premitigation.jpg';
// import { useHistory } from 'react-router-dom';


const Scope = () => {
  
  return (
    <Grid id='AMEstimate' container sx={{mt: '2rem', pl: '6rem', pr: '6rem', pb: '7rem',scrollPaddingTop: '200px'}}>
      <Grid item xs={12} sx={{textAlign: 'center', mb: '5rem'}}>
        <Typography sx={{fontSize: '45px', fontWeight: '700', color: '#4267B2'}}>
          AMEstimate
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <Typography sx={{fontSize: '40px', fontWeight: '600', pl: '2rem', pr: '5rem'}}>
          GROUND-TRUTH DATA <span className="AMEstimate___color">EVERYONE TRUSTS</span>
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <Typography sx={{pr: '2rem', textAlign: 'justify', fontFamily: 'Raleway'}}>
          " Xactimate Estimation Services provide accurate and reliable cost estimating solutions for contractors, adjusters, and estimators. Our team of experts uses the latest Xactimate software and technology to create detailed estimates that meet your specific project needs. We offer a wide range of services, from cost estimating and sketching to project management and consulting, to help you streamline your workflow and increase profitability. With our fast turnaround times and competitive pricing, you can trust that your estimates will be delivered on time and within budget. Let us help you take your business to the next level with Xactimate Estimation Services. "
        </Typography>
      </Grid>
      <Grid
        item
        width={'100%'}
        xs={12}
        sx={{
          pt: '5rem',
          display: 'flex',
          justifyContent: 'center',
          '& img-comparison-slider  .first': {
            display: 'none !important',
          },
        }}>
        <img-comparison-slider className="reds">
          <img
            slot="first"
            // src="http://AMntegrity.io/static/c27a817eb41739daaac543d5c27a7956.webp"
            src={Pre}
            width={'100%'}
          />
          <img
            slot="second"
            // src="http://AMntegrity.io/static/5c127b76ce5c14278b5f7708f6ad440a.webp"
            src={Post}
            width={'100%'}
          />

          <div
            slot="handle"
            style={{
              width: '150px',
              height: '50px',
              borderRadius: '4rem',
              background: '#4267b2',
              display:'flex',
              alignItems:"center",
              justifyContent:'center',
              cursor:'pointer'

            }}>
            <div style={{position:'absolute',left:'60%'}}>
            <FiArrowRight style={{fontSize:'34px',color:'white'}}/>

            </div>
            <div style={{position:'absolute',right:'60%'}}>
            <FiArrowLeft style={{fontSize:'34px',color:'white'}} ></FiArrowLeft>

            </div>
          </div>
          {/* <img    slot="handle"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAoCAMAAAD61DXgAAAAclBMVEVHcEw5woA5wX85woA1woI6woA4woA5woA5woA1xIM2yZI5woA5xoE5woA5woA4woA4woA5woA5wX84x4M5wYA5wYE6woD///+d4cDz/Pi16NBfzZhGxYja9OiE2bBSyZCQ3bh31ajC7Nhr0aCp5MjO8OClpPfmAAAAFnRSTlMAh/GsGtiO95oUBMEn5MVmV9B4DZE3vEThUAAAAW5JREFUWMPFmNlygzAMRW32sBOIzBogbf//F0ugmQaQZ5piK/cRxj7IcyUkM7bSKXXMzAB1MjLTSU9MKotnoEcZt3Ci44I+uY5FTFyomyP2PdAvz19ZJwYKxU+R+jRIgOA3Ug+o5D2QCdAp+bGsS8h0LeKTvau4I0NS5BIoHua1Orr50DVSG9nYi1LUR5lNVaFQW3K09XGkHBqysy6kFHpmpjakDGqyQB8SoO2qcV8AWbR9dBNXdZnRdmLcm2hbhD7EVi9lzbBb/rVrV9i2+ekrcStXeinsfr22rMTnnmn/1eL/EuYNG/GQQihqxwDLlaZTBMUzwERrwuQ2Bd5tazEAWhNC0ASV7hFKavy0oD3ILCVImzFW4F85Ho2zl3iCU7cmAO7cb3JSJp/7odwgRBr50vilhMz00eBy4pOdFRAhzecZKSJBRvmbZ0GSoSXZz/ahp3W290L8RqHQRTUcS351cnFiO1JJdiM75pc15BsOgm5iVOJSvwAAAABJRU5ErkJggg==" /> */}
        </img-comparison-slider>
      </Grid>
      <Grid item xs={12} sx={{textAlign: 'center', pt: '3rem'}}>
       <Link to="/SignIn" style={{textDecoration:'none'}}>
        <Button
        
          sx={{
            backgroundColor: '#4267B2',
            color: 'white',
            fontFamily: 'Raleway',
            fontSize: '14px',
            textTransform: 'none',
            pl: '2rem',
            pr: '2rem', 
            borderRadius: '1rem',
            textAlign: 'center',
            textDecoration:'none',
            ':hover': {backgroundColor: '#3ac280', color: 'white', textDecoration: 'none'},
          }}>
      Sign In Now
        </Button>
        </Link>
        
      </Grid>
    </Grid>
  );
};

export default Scope;
