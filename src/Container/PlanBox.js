import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function PlanBox(props) {
    return (
        <Grid item xs={4} sx={{ mb: '6rem' }} >
            <Grid sx={{ background:props.headingcolor, borderRadius: '8px' }}>
                <Typography sx={{ color: 'white', fontSize: '28px', pt: '1rem', pb: '1rem', pl: '1.5rem' }}>{props.heading}</Typography>
            </Grid>
            <Grid sx={{ height: "360px", backgroundColor: '#f2f6f7', display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
                <Grid>
                    <Grid><Typography sx={{ textAlign: 'center', fontSize: '45px', color: '#0a5169', fontWeight: '600', mt: '1.5rem', mb: '1.5rem' ,filter:props.blur?'blur(9px)':''}}>{props.value}</Typography></Grid>
                    <Grid>
                        { props.list.map((s,n)=>(
                        <Grid key={n} sx={{ display: 'flex',width:'65%',margin:'auto' , alignItems: 'center', gap: '10px' }}>
                            <AiOutlineCheckCircle style={{ color: '#41c484' }} />
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
        <Button sx={{backgroundColor:'#3ac280',color:'white',mt:'-4rem',fontFamily:'Raleways',fontSize:'14px',textTransform:'none',pl:'2rem',pr:'2rem',borderRadius:'1rem',textAlign:'center',':hover':{backgroundColor:'#3ac280',color:'black'}}}>Contact us</Button>
      </Grid>}
            </Grid>

            <Grid><Typography sx={{ textAlign: 'center', color: '#0a5169', fontSize: '12px', backgroundColor: '#e9eff2', pt: '1rem', pb: '1rem', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>{props.ftr}</Typography></Grid>
        </Grid>
    );
}

export default PlanBox;