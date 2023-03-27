import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import {Link} from 'react-router-dom';

function PlanBox(props) {
    return (
        <Grid item xs={12} lg={4} sx={{ mb: '6rem' ,pl:{xs:'10rem',lg:0 },pr:{xs:'10rem',lg:0 }}} >
            <Grid sx={{ background:props.headingcolor, borderRadius: '8px' }}>
                <Typography sx={{ color: 'white', fontSize: '28px', pt: '1rem', pb: '1rem', pl: '1.5rem' }}>{props.heading}</Typography>
            </Grid>
            <Grid sx={{ height: "360px", backgroundColor: '#f2f6f7', display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
                <Grid>
                    <Grid><Typography sx={{ textAlign: 'center', fontSize: '45px', color: '#0a5169', fontWeight: '600', mt: '1.5rem', mb: '1.5rem' ,filter:props.blur?'blur(9px)':''}}>{props.value}</Typography></Grid>
                    <Grid>
                        { props.list.map((s,n)=>(
                        <Grid key={n} sx={{ display: 'flex',width:'65%',margin:'auto' , alignItems: 'center', gap: '10px' }}>
                            <AiOutlineCheckCircle style={{ color: '#4267B2' }} />
                            <Typography sx={{ textAlign: 'center', color: '#0a5169',fontSize:'14px' }}>
                                {s}</Typography>
                        </Grid>))
}
                    </Grid>
                </Grid>
              { props.free&& <Grid>
                    <Typography sx={{ textAlign: 'center', color: '#0a5169', fontSize: '28px',mt:'-4rem' }}>
                        Free
                    </Typography>

                </Grid>}
{
         !props.free &&       <Grid sx={{textAlign:'center'}}>
            <Link to="/SignIn" style={{textDecoration:'none'}}>
        <Button sx={{backgroundColor:'#4267B2',color:'white',mt:'-4rem',fontFamily:'Raleway',fontSize:'14px',textTransform:'none',pl:'2rem',pr:'2rem',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'white',color:'#4267B2', border: '2px solid #4267B2',}}}>Sign In</Button>
        </Link>
      </Grid>}
            </Grid>

            <Grid><Typography sx={{ textAlign: 'center', color: '#0a5169', fontSize: '12px', backgroundColor: '#e9eff2', pt: '1rem', pb: '1rem', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>{props.ftr}</Typography></Grid>
        </Grid>
    );
}

export default PlanBox;