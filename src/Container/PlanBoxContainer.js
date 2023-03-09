import { Grid } from '@mui/material';
import React from 'react';
import PlanBox from './PlanBox';

function PlanBoxContainer(props) {
    return (
        <Grid container id='todos' sx={{justifyContent:'space-between'}}>
            <Grid item xs={1}></Grid>
            <PlanBox heading={'Free Plan'} headingcolor={'#4267B2'} free={true} value='2.81%' list={['Access to the mpartialConvert engine',"Minimum $495 initial deposit"]} ftr={'Best suited for clients that order mpartial sporadically.'}/>
            <PlanBox heading={'Enterprise Plan'}  headingcolor={'#0a5169'} value='2.80%' blur={true} list={['Access to the mpartialConvert engine',"Discounted fee schedule",'Unlimited collaborators','Dedicated account manager','Prioritized turnaround time','TruePlan','Cancel Anytime']} ftr={'Best suited for clients that order mpartial on a weekly basis.'}/>
            <Grid item xs={1}></Grid>

        </Grid>
    );
}

export default PlanBoxContainer;