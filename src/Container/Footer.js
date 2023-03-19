import { Grid, Link, Typography } from '@mui/material';
import React from 'react';
import FooterElement from './FooterElement';

import { AiOutlineInstagram } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';

import { FiFacebook, FiMail } from 'react-icons/fi';
import { useLocation } from 'react-router';
import {ImLocation} from 'react-icons/im';
import {BsTelephone, BsTelephoneFill} from 'react-icons/bs';
import {HiMail} from 'react-icons/hi';
import '../Styles/Footer.css';
// import {Link} from 'react-router-dom';


function Footer(props) {
  const location = useLocation();
  console.log(location.pathname=='/Signin',location.pathname)

    return (
        <>
       { (location.pathname!='/forgotpassword' && location.pathname!='/signup') && <Grid container sx={{ backgroundColor: '#4267B2', padding: '20px 0', zIndex:'99' }}>
            <Grid item xs={12} sx={{pl:'4rem',pr:'4rem'}}>
                <Grid container sx={{ backgroundColor: '#4267B2', padding: '20px 0' }}>
                    <Grid item xs={3} sx={{fontSize:"30px", color:"white", fontFamily:"Raleway", fontWeight:"700"}}>
                        AMntegrity
                    </Grid>
                    <Grid item xs={3.5}>
                   <FooterElement txt='About Us'/>
                    <FooterElement txt='Partners'/>
                      
                        <FooterElement txt='Media Kit'/>
                    </Grid>
                    <Grid item xs={3.5} sx={{fontWeight:"600"}}>
                    <FooterElement  txt='Pricing' style={{fontWeight:'600'}}/>
                    <FooterElement  txt='Terms and Conditions'/>
                    </Grid>
                    <Grid item xs={2} sx={{display:'flex',alignItems:'flex-start'}}>
                        <div className='Footer__container__1'>
                            <div className='Footer__Elements__1'>
                                <div className='Footer__icons__1'>
                                <ImLocation/>

                                </div>
                                <div className='Footer__Text__1'>2710 Hunter Mill Road, Oakton, VA 22124</div>
                                </div>
                                <div className='Footer__Elements__1'>
                                <div className='Footer__icons__1'>
                                <BsTelephoneFill/>

                                </div>
                                <div className='Footer__Text__1'>571-520-9119</div>
                                </div>
                                <div className='Footer__Elements__1'>
                                <div className='Footer__icons__1'>
                                <HiMail/>

                                </div>
                                <div className='Footer__Text__1'>info@amtegrity.com</div>
                                </div>
                            
                        </div>
                    
                    </Grid>
                   
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{borderTop:'1px solid white'}}>
                <Grid container sx={{justifyContent:'space-between',pl:'4rem',pr:'4rem',pt:'1rem'}}>
                    <Grid item ><Typography sx={{fontsize:'14px',color:'white'}}>2023 © AMntegrity. All rights reserved.| Developed by CODSEED.</Typography></Grid>
                    <Grid item sx={{gap:'15px',display:"flex"}} >

                        <Link sx={{ textDecoration: 'none', color: 'white',fontSize:'14px' }}><FiFacebook fontSize={'16px'}/></Link>
                    <Link sx={{ textDecoration: 'none', color: 'white',fontSize:'14px' }}><AiOutlineInstagram fontSize={'16px'}/></Link>
                    <Link sx={{ textDecoration: 'none', color: 'white',fontSize:'14px' }}><ImLinkedin fontSize={'16px'}/></Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>}</>
    );
}

export default Footer;